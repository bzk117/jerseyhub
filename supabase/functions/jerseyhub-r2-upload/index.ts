import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.0";
import { PutObjectCommand, S3Client } from "npm:@aws-sdk/client-s3@3.750.0";

const allowedOrigins = new Set(["https://bzk117.github.io"]);
const cors = (origin: string | null) => ({
  "Access-Control-Allow-Origin":
    origin && allowedOrigins.has(origin) ? origin : "https://bzk117.github.io",
  "Access-Control-Allow-Headers": "authorization, apikey, x-client-info, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Vary": "Origin",
});
const json = (body: unknown, status = 200, origin: string | null = null) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...cors(origin), "Content-Type": "application/json" },
  });

function imageType(bytes: Uint8Array): string | null {
  if (
    bytes.length >= 8 &&
    bytes[0] === 137 && bytes[1] === 80 && bytes[2] === 78 && bytes[3] === 71
  ) return "image/png";
  if (bytes.length >= 3 && bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255) {
    return "image/jpeg";
  }
  if (
    bytes.length >= 12 &&
    new TextDecoder().decode(bytes.slice(0, 4)) === "RIFF" &&
    new TextDecoder().decode(bytes.slice(8, 12)) === "WEBP"
  ) return "image/webp";
  return null;
}

function validPath(path: unknown): path is string {
  return typeof path === "string" &&
    path.startsWith("assets/equipes-nationales/") &&
    !path.includes("..") &&
    !path.includes("\\") &&
    !path.startsWith("/") &&
    !/[?#]/.test(path) &&
    /\.(jpe?g|png|webp)$/i.test(path);
}

Deno.serve(async (req) => {
  const origin = req.headers.get("origin");
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors(origin) });
  if (req.method !== "POST") return json({ error: "Méthode non autorisée." }, 405, origin);
  if (origin && !allowedOrigins.has(origin)) {
    return json({ error: "Origine non autorisée." }, 403, origin);
  }

  try {
    const authorization = req.headers.get("authorization") || "";
    const token = authorization.toLowerCase().startsWith("bearer ")
      ? authorization.slice(7).trim()
      : "";
    if (!token) return json({ error: "Connexion administrateur requise." }, 401, origin);

    const supabaseUrl = Deno.env.get("SUPABASE_URL")?.trim();
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")?.trim();
    const endpoint = Deno.env.get("R2_ENDPOINT")?.trim();
    const accessKeyId = Deno.env.get("R2_ACCESS_KEY_ID")?.trim();
    const secretAccessKey = Deno.env.get("R2_SECRET_ACCESS_KEY")?.trim();
    const bucket = Deno.env.get("R2_BUCKET")?.trim();
    const publicBaseUrl = Deno.env.get("R2_PUBLIC_BASE_URL")?.trim();

    if (
      !supabaseUrl || !serviceKey || !endpoint || !accessKeyId ||
      !secretAccessKey || !bucket || !publicBaseUrl
    ) {
      return json({ error: "Le stockage d’images n’est pas encore configuré." }, 503, origin);
    }

    const auth = createClient(supabaseUrl, serviceKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });
    const { data, error } = await auth.auth.getUser(token);
    if (error || !data.user) {
      return json({ error: "Session invalide. Reconnectez-vous." }, 401, origin);
    }
    if (data.user.app_metadata?.role !== "admin") {
      return json({ error: "Accès réservé à l’administrateur." }, 403, origin);
    }

    const s3 = new S3Client({
      region: "auto",
      endpoint,
      credentials: { accessKeyId, secretAccessKey },
    });

    const isJson = (req.headers.get("content-type") || "").includes("application/json");
    const body = isJson ? await req.json().catch(() => null) : null;

    if (body?.action === "migrate") {
      const paths = body.paths;
      if (
        !Array.isArray(paths) || paths.length < 1 || paths.length > 5 ||
        !paths.every(validPath)
      ) {
        return json({
          error: "Lot invalide : 1 à 5 chemins d’images nationaux autorisés.",
        }, 400, origin);
      }

      const results = [];
      for (const path of paths) {
        let stage = "téléchargement depuis GitHub";
        try {
          const rawUrl = "https://raw.githubusercontent.com/bzk117/jerseyhub/main/" +
            path.split("/").map(encodeURIComponent).join("/");
          const response = await fetch(rawUrl, {
            headers: { "Accept": "image/*,*/*;q=0.8" },
            signal: AbortSignal.timeout(25000),
          });
          if (!response.ok) throw new Error("GitHub a répondu " + response.status);

          const contentLength = Number(response.headers.get("content-length") || 0);
          if (contentLength > 10 * 1024 * 1024) {
            throw new Error("Fichier supérieur à 10 Mo");
          }

          const bytes = new Uint8Array(await response.arrayBuffer());
          if (!bytes.length || bytes.length > 10 * 1024 * 1024) {
            throw new Error("Taille de fichier invalide");
          }
          const mime = imageType(bytes);
          if (!mime) throw new Error("Format image non reconnu");

          stage = "envoi vers Cloudflare R2";
          await s3.send(new PutObjectCommand({
            Bucket: bucket,
            Key: path,
            Body: bytes,
            ContentType: mime,
            CacheControl: "public, max-age=31536000, immutable",
          }));
          results.push({ path, ok: true, bytes: bytes.length });
        } catch (error) {
          results.push({
            path,
            ok: false,
            error: stage + " : " + (error instanceof Error ? error.message : "Échec du transfert"),
          });
        }
      }
      return json({ ok: results.every((item) => item.ok), results }, 200, origin);
    }

    const form = await req.formData();
    const file = form.get("file");
    if (!(file instanceof File)) {
      return json({ error: "Aucun fichier image reçu." }, 400, origin);
    }
    if (file.size < 1 || file.size > 10 * 1024 * 1024) {
      return json({ error: "L’image doit peser au maximum 10 Mo." }, 413, origin);
    }

    const bytes = new Uint8Array(await file.arrayBuffer());
    const mime = imageType(bytes);
    if (!mime) {
      return json({ error: "Format refusé. Utilisez une image JPG, PNG ou WebP." }, 415, origin);
    }

    const extension = mime === "image/png" ? "png" : mime === "image/jpeg" ? "jpg" : "webp";
    const key = "jerseyhub/" + new Date().getUTCFullYear() + "/" +
      crypto.randomUUID() + "." + extension;
    await s3.send(new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: bytes,
      ContentType: mime,
      CacheControl: "public, max-age=31536000, immutable",
    }));

    let base = publicBaseUrl;
    while (base.endsWith("/")) base = base.slice(0, -1);
    return json({ ok: true, key, url: base + "/" + key }, 200, origin);
  } catch (error) {
    console.error("JerseyHub R2 upload failed:", error);
    return json({ error: "Échec de l’envoi de l’image. Réessayez." }, 500, origin);
  }
});
