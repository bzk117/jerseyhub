(()=> {
  const cfg=window.JERSEYHUB_SUPABASE;
  if(!cfg||!window.supabase)return;
  const db=window.supabase.createClient(cfg.url,cfg.anonKey);
  const key="jerseyhub-r2-national-migration-v1";
  const panel=document.createElement("section");
  panel.className="admin-panel";
  panel.id="r2MigrationPanel";
  panel.innerHTML='<h2>Migration des images nationales vers Cloudflare R2</h2><p class="admin-meta">Transfert sécurisé par lots de 5 images maximum. Les chemins et noms d’origine sont conservés. GitHub et les liens du catalogue ne sont pas modifiés.</p><div class="admin-row"><button type="button" id="r2Scan">Analyser les images GitHub</button><button type="button" class="primary" id="r2Start" disabled>Démarrer / reprendre</button><button type="button" id="r2Pause" disabled>Mettre en pause</button></div><p id="r2Progress" class="admin-status">En attente de l’analyse.</p><div id="r2Details" class="admin-meta"></div>';
  const dashboard=document.getElementById("dashboard");
  if(dashboard)dashboard.insertBefore(panel,dashboard.firstChild);
  const $=id=>document.getElementById(id);
  let paths=[],paused=true,running=false,session=null,failures=[];
  const saved=()=>{try{return JSON.parse(localStorage.getItem(key)||"{}")}catch{return {}}};
  const doneSet=()=>new Set(saved().done||[]);
  const persist=set=>localStorage.setItem(key,JSON.stringify({done:[...set],updated:new Date().toISOString()}));
  const display=()=>{const done=doneSet();$("r2Progress").textContent=paths.length?done.size+" / "+paths.length+" images transférées · "+(paths.length-done.size)+" restantes": "En attente de l’analyse.";};
  async function scan(){
    $("r2Scan").disabled=true;$("r2Progress").textContent="Lecture de l’inventaire GitHub…";
    try{
      const response=await fetch("https://api.github.com/repos/bzk117/jerseyhub/git/trees/main?recursive=1",{headers:{"Accept":"application/vnd.github+json"}});
      if(!response.ok)throw new Error("GitHub : "+response.status);
      const tree=await response.json();
      if(tree.truncated)throw new Error("Inventaire GitHub incomplet : arrêt par sécurité.");
      paths=(tree.tree||[]).filter(x=>x.type==="blob"&&x.path.startsWith("assets/equipes-nationales/")&&/\.(jpe?g|png|webp)$/i.test(x.path)).map(x=>x.path).sort();
      if(!paths.length)throw new Error("Aucune image nationale trouvée.");
      $("r2Start").disabled=false;
      display();
      $("r2Details").textContent=paths.length+" images trouvées. Dossiers conservés : Afrique, Amériques, Asie-Océanie et Europe.";
    }catch(e){$("r2Progress").textContent=e.message;$("r2Details").textContent="Réessayez plus tard."}
    finally{$("r2Scan").disabled=false}
  }
  async function start(){
    if(running||!paths.length)return;
    const {data,error}=await db.auth.getSession();
    session=data.session;
    if(error||!session?.access_token){$("r2Progress").textContent="Reconnectez-vous à l’administration.";return}
    if(session.user?.app_metadata?.role!=="admin"){$("r2Progress").textContent="Compte administrateur non autorisé.";return}
    paused=false;running=true;$("r2Start").disabled=true;$("r2Pause").disabled=false;
    let done=doneSet();
    try{
      while(!paused){
        const remaining=paths.filter(p=>!done.has(p));
        if(!remaining.length)break;
        const batch=remaining.slice(0,5);
        $("r2Progress").textContent="Transfert en cours : "+done.size+" / "+paths.length+"…";
        const response=await fetch(cfg.url+"/functions/v1/jerseyhub-r2-upload",{
          method:"POST",
          headers:{"Content-Type":"application/json","apikey":cfg.anonKey,"Authorization":"Bearer "+session.access_token},
          body:JSON.stringify({action:"migrate",paths:batch})
        });
        const result=await response.json().catch(()=>({error:"Réponse serveur illisible"}));
        if(!response.ok)throw new Error(result.error||"Erreur serveur "+response.status);
        for(const item of result.results||[]){if(item.ok)done.add(item.path);else failures.push(item.path+": "+item.error)}
        persist(done);display();
        if((result.results||[]).some(x=>!x.ok)){$("r2Details").textContent="Échecs à reprendre : "+failures.slice(-5).join(" · ");paused=true;break;}
      }
      if(done.size===paths.length)$("r2Progress").textContent="Migration terminée : "+done.size+" images transférées.";
      else $("r2Progress").textContent="Migration en pause : "+done.size+" / "+paths.length+" images transférées.";
    }catch(e){$("r2Progress").textContent="Arrêt sur erreur : "+e.message+" · Vous pourrez reprendre."}
    finally{running=false;$("r2Start").disabled=!paths.length;$("r2Pause").disabled=true;display()}
  }
  $("r2Scan").addEventListener("click",scan);
  $("r2Start").addEventListener("click",start);
  $("r2Pause").addEventListener("click",()=>{paused=true;$("r2Pause").disabled=true;$("r2Progress").textContent="Mise en pause après le lot en cours…"});
  db.auth.onAuthStateChange(()=>{if(running)paused=true});
})();