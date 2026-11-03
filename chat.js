(() => {
  const cfg = window.JERSEYHUB_SUPABASE;
  // Affiche le bouton même si la configuration distante tarde à charger.

  const style = document.createElement("style");
  style.textContent = `
    .jh-chat-launch{position:fixed;right:22px;bottom:22px;z-index:80;border:0;border-radius:999px;background:#f4bd22;color:#111;padding:15px 19px;font-weight:800;box-shadow:0 8px 30px #0009;cursor:pointer}
    .jh-chat{position:fixed;right:22px;bottom:86px;z-index:81;width:min(360px,calc(100vw - 28px));height:470px;max-height:calc(100vh - 120px);display:none;flex-direction:column;background:#111;border:1px solid #80621d;border-radius:15px;box-shadow:0 16px 55px #000b;overflow:hidden;color:#f6f4ef;font:14px Inter,Arial,sans-serif}
    .jh-chat.open{display:flex}.jh-chat-head{padding:15px;background:#1c180e;border-bottom:1px solid #493817;display:flex;justify-content:space-between;align-items:center}.jh-chat-head strong{color:#f4bd22}.jh-chat-close{background:none;border:0;color:#fff;font-size:23px;cursor:pointer}
    .jh-chat-messages{padding:14px;overflow:auto;flex:1;display:flex;flex-direction:column;gap:10px}.jh-chat-msg{max-width:88%;padding:10px 12px;border-radius:12px;line-height:1.45;white-space:pre-wrap;overflow-wrap:anywhere}.jh-chat-msg.bot{background:#242424;align-self:flex-start}.jh-chat-msg.user{background:#f4bd22;color:#111;align-self:flex-end}
    .jh-chat-form{padding:12px;border-top:1px solid #333;display:flex;gap:8px}.jh-chat-form input{min-width:0;flex:1;background:#080808;border:1px solid #555;border-radius:8px;padding:11px;color:#fff}.jh-chat-form button{background:#f4bd22;color:#111;border:0;border-radius:8px;padding:0 14px;font-weight:800;cursor:pointer}.jh-chat-form button:disabled{opacity:.5}
    .jh-chat-hint{font-size:11px;color:#aaa;padding:0 14px 10px}.jh-chat-status{color:#f4bd22;font-weight:800}
    @media(max-width:480px){.jh-chat{right:14px;bottom:78px}.jh-chat-launch{right:14px;bottom:14px}}
  `;
  document.head.append(style);

  const launch = document.createElement("button");
  launch.className = "jh-chat-launch";
  launch.type = "button";
  launch.textContent = "💬 Besoin d’aide ?";
  launch.setAttribute("aria-label", "Ouvrir le chat JerseyHub");
  const panel = document.createElement("section");
  panel.className = "jh-chat";
  panel.setAttribute("aria-label", "Assistant JerseyHub");
  panel.innerHTML = '<div class="jh-chat-head"><strong>Assistant JerseyHub</strong><button class="jh-chat-close" type="button" aria-label="Fermer">×</button></div><div class="jh-chat-messages" aria-live="polite"></div><div class="jh-chat-hint">Pour le suivi, seules votre adresse e-mail et votre référence de commande sont utilisées.</div><form class="jh-chat-form"><input maxlength="254" autocomplete="off" aria-label="Votre message" placeholder="Écrivez votre message…" required><button type="submit">Envoyer</button></form>';
  document.body.append(launch, panel);

  const messages = panel.querySelector(".jh-chat-messages");
  const form = panel.querySelector("form");
  const input = form.querySelector("input");
  const send = form.querySelector("button");
  let step = "start";
  let orderId = "";
  let email = "";

  function add(text, who = "bot") {
    const bubble = document.createElement("div");
    bubble.className = "jh-chat-msg " + who;
    bubble.textContent = text;
    messages.append(bubble);
    messages.scrollTop = messages.scrollHeight;
  }
  function welcome() {
    add("Bonjour ! Je suis l’assistant JerseyHub. Je peux vous aider à suivre votre commande. Que souhaitez-vous savoir ?");
    step = "start";
  }
  launch.onclick = () => { panel.classList.toggle("open"); if (!messages.children.length) welcome(); if (panel.classList.contains("open")) input.focus(); };
  panel.querySelector(".jh-chat-close").onclick = () => panel.classList.remove("open");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const value = input.value.trim();
    if (!value || send.disabled) return;
    add(value, "user");
    input.value = "";

    if (step === "start") {
      const normalized = value.toLowerCase();
      if (/(commande|colis|suivi|statut|où en est)/.test(normalized)) {
        step = "order";
        add("Bien sûr ! Indiquez votre numéro de commande, par exemple : JH-2026-000123. Vous le trouverez dans « Mon compte », sous « Mes demandes ».");
      } else {
        add("Pour le moment, je peux uniquement vous aider à vérifier le statut d’une commande. Écrivez par exemple : « Où en est ma commande ? »");
      }
      return;
    }

    if (step === "order") {
      orderId = value;
      step = "email";
      add("Merci. Quelle adresse e-mail avez-vous utilisée pour créer votre compte JerseyHub ?");
      return;
    }

    if (step === "email") {
      email = value;
      send.disabled = true;
      send.textContent = "…";
      try {
        if (!cfg?.url || !cfg?.anonKey) throw new Error("Le service de suivi est momentanément indisponible. Réessayez plus tard.");
        const response = await fetch(cfg.url + "/functions/v1/jerseyhub-order-status", {
          method: "POST",
          headers: { "Content-Type": "application/json", "apikey": cfg.anonKey },
          body: JSON.stringify({ orderId, email }),
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || "Vérification impossible.");
        const replies = {
          "En attente": "Votre commande est en attente de traitement.",
          "En transit": "Bonne nouvelle ! Votre commande est en cours d’acheminement.",
          "Reçu": "Votre commande est arrivée.",
          "Terminé": "Votre commande est indiquée comme terminée.",
          "Pas de stock": "Un article de votre commande est actuellement indisponible. L’équipe JerseyHub pourra vous renseigner."
        };
        if (Array.isArray(result.items) && result.items.length) {
          add("Voici le suivi de chaque article :");
          result.items.forEach((item) => {
            const name = [item.category, item.team_brand, item.model].filter(Boolean).join(" — ");
            const statusText = replies[item.status] || ("Statut : " + item.status);
            add((name || "Article") + " (" + (item.size || "taille non précisée") + ", quantité " + item.quantity + ") : " + statusText);
          });
        } else {
          add(replies[result.status] || "Le statut de votre commande est : " + result.status);
        }
        add("Puis-je vous aider pour autre chose ?");
      } catch (error) {
        add(error.message || "Je n’ai pas pu vérifier ces informations. Réessayez avec votre référence et votre adresse e-mail.");
      } finally {
        step = "start";
        orderId = "";
        email = "";
        send.disabled = false;
        send.textContent = "Envoyer";
      }
    }
  });
})();