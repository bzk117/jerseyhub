(() => {
  const config = window.JERSEYHUB_SUPABASE;
  const counter = document.getElementById("jh-admin-visitor-counter");
  const number = document.getElementById("jh-admin-visitor-count");
  if (!config?.url || !config?.anonKey || !window.supabase || !counter || !number) return;

  const db = window.supabase.createClient(config.url, config.anonKey);
  const storageKey = "jerseyhub_visitor_id_v1";

  function visitorId() {
    try {
      let id = localStorage.getItem(storageKey);
      if (!id) {
        id = crypto.randomUUID();
        localStorage.setItem(storageKey, id);
      }
      return id;
    } catch {
      return crypto.randomUUID();
    }
  }

  async function init() {
    try {
      const id = visitorId();
      await fetch(config.url + "/functions/v1/track-visitor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": config.anonKey
        },
        body: JSON.stringify({ visitor_id: id }),
        keepalive: true
      });
    } catch (error) {
      console.warn("JerseyHub visitor tracking unavailable.", error);
    }

    try {
      const { data: { user } = {} } = await db.auth.getUser();
      if (!user || String(user.app_metadata?.role || "").toLowerCase() !== "admin") return;

      counter.hidden = false;
      number.textContent = "…";
      const { count, error } = await db
        .from("site_visitors")
        .select("visitor_id", { count: "exact", head: true });

      if (error) throw error;
      number.textContent = new Intl.NumberFormat("fr-BE").format(count || 0);
    } catch (error) {
      number.textContent = "Indisponible";
      console.warn("JerseyHub admin visitor count unavailable.", error);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
