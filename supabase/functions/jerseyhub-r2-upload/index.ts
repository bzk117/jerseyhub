import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.0";
import { PutObjectCommand, S3Client } from "npm:@aws-sdk/client-s3@3.750.0";

const allowedOrigins = new Set(["https://bzk117.github.io"]);
const cors = (origin: string | null) => ({
  "Access-Control-Allow-Origin": origin && allowedOrigins.has(origin) ? origin : "https://bzk117.github.io",
  "Access-Control-Allow-Headers": "authorization, apikey, x-client-info, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Vary": "Origin",
});
const json = (body: unknown, status = 200, origin: string | null = null) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors(origin), "Content-Type": "application/json" } });

function imageType(bytes: Uint8Array): { mime: string; extension: string } | null {
  if (bytes.length >= 8 && bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47 && bytes[4] === 0x0d && bytes[5] === 0x0a && bytes[6] === 0x1a && bytes[7] === 0x0a) return { mime: "image/png", extension: "png" };
  if (bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return { mime: "image/jpeg", extension: "jpg" };
  if (bytes.length >= 12 && new TextDecoder().decode(bytes.slice(0, 4)) === "RIFF" && new TextDecoder().decode(bytes.slice(8, 12)) === "WEBP") return { mime: "image/webp", extension: "webp" };
  return null;
}

Deno.serve(async (req) => {
  const origin = req.headers.get("origin");
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors(origin) });
  if (req.method !== "POST") return json({ error: "Méthode non autorisée." }, 405, origin);
  if (origin && !allowedOrigins.has(origin)) return json({ error: "Origine non autorisée." }, 403, origin);
  try {
    const authHeader = req.headers.get("authorization") || "";
    const token = authHeader.toLowerCase().startsWith("bearer ") ? authHeader.slice(7).trim() : "";
    if (!token) return json({ error: "Connexion administrateur requise." }, 401, origin);
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    const endpoint = Deno.env.get("R2_ENDPOINT");
    const accessKeyId = Deno.env.get("R2_ACCESS_KEY_ID");
    const secretAccessKey = Deno.env.get("R2_SECRET_ACCESS_KEY");
    const bucket = Deno.env.get("R2_BUCKET");
    const publicBaseUrl = Deno.env.get("R2_PUBLIC_BASE_URL");
    if (!supabaseUrl || !serviceKey || !endpoint || !accessKeyId || !secretAccessKey || !bucket || !publicBaseUrl) {
      console.error("JerseyHub R2 upload: configuration serveur incomplète.");
      return json({ error: "Le stockage d’images n’est pas encore configuré." }, 503, origin);
    }
    const auth = createClient(supabaseUrl, serviceKey, { auth: { autoRefreshToken: false, persistSession: false } });
    const { data, error } = await auth.auth.getUser(token);
    if (error || !data.user) return json({ error: "Session invalide. Reconnectez-vous." }, 401, origin);
    if (data.user.app_metadata?.role !== "admin") return json({ error: "Accès réservé à l’administrateur." }, 403, origin);
    const form = await req.formData();
    const file = form.get("file");
    if (!(file instanceof File)) return json({ error: "Aucun fichier image reçu." }, 400, origin);
    if (file.size < 1 || file.size > 10 * 1024 * 1024) return json({ error: "L’image doit peser au maximum 10 Mo." }, 413, origin);
    const bytes = new Uint8Array(await file.arrayBuffer());
    const detected = imageType(bytes);
    if (!detected) return json({ error: "Format refusé. Utilisez une image JPG, PNG ou WebP." }, 415, origin);
    const key = "jerseyhub/" + new Date().getUTCFullYear() + "/" + crypto.randomUUID() + "." + detected.extension;
    const client = new S3Client({ region: "auto", endpoint, credentials: { accessKeyId, secretAccessKey } });
    await client.send(new PutObjectCommand({ Bucket: bucket, Key: key, Body: bytes, ContentType: detected.mime, CacheControl: "public, max-age=31536000, immutable" }));
    let base = publicBaseUrl;
    while (base.endsWith("/")) base = base.slice(0, -1);
    return json({ ok: true, key, url: base + "/" + key }, 200, origin);
  } catch (error) {
    console.error("JerseyHub R2 upload failed:", error);
    return json({ error: "Échec de l’envoi de l’image. Réessayez." }, 500, origin);
  }
});