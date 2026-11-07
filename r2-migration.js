(()=> {
  const cfg=window.JERSEYHUB_SUPABASE;
  if(!cfg||!window.supabase)return;
  const db=window.supabase.createClient(cfg.url,cfg.anonKey);
  const key="jerseyhub-r2-national-migration-v1";
  const panel=document.createElement("section");
  panel.className="admin-panel";
  panel.id="r2MigrationPanel";
  panel.innerHTML='<h2>Migration des images nationales vers Cloudflare R2</h2><p class="admin-meta">Transfert automatique par lots de 5 images maximum, avec une pause de 2 secondes entre les lots. La migration reprend toute seule jusqu’à la fin. Les chemins et noms d’origine sont conservés. GitHub et les liens du catalogue ne sont pas modifiés.</p><div class="admin-row"><button type="button" id="r2Scan">Analyser les images GitHub</button><button type="button" class="primary" id="r2Start" disabled>Démarrer / reprendre</button><button type="button" id="r2Pause" disabled>Mettre en pause</button></div><p id="r2Progress" class="admin-status">En attente de l’analyse.</p><div id="r2Details" class="admin-meta"></div>';
  const dashboard=document.getElementById("dashboard");
  if(dashboard)dashboard.insertBefore(panel,dashboard.firstChild);
  const $=id=>document.getElementById(id);
  let paths=[],paused=true,running=false,failures=[];
  const saved=()=>{try{return JSON.parse(localStorage.getItem(key)||"{}")}catch{return {}}};
  const doneSet=()=>new Set(saved().done||[]);
  const persist=set=>localStorage.setItem(key,JSON.stringify({done:[...set],updated:new Date().toISOString()}));
  const delay=ms=>new Promise(resolve=>setTimeout(resolve,ms));
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
    if(error||!data.session?.access_token){$("r2Progress").textContent="Reconnectez-vous à l’administration.";return}
    if(data.session.user?.app_metadata?.role!=="admin"){$("r2Progress").textContent="Compte administrateur non autorisé.";return}
    paused=false;running=true;failures=[];$("r2Start").disabled=true;$("r2Pause").disabled=false;
    const attempts=new Map();
    let done=doneSet();
    try{
      while(!paused){
        const remaining=paths.filter(p=>!done.has(p)&&(attempts.get(p)||0)<3);
        if(!remaining.length)break;
        const batch=remaining.slice(0,5);
        $("r2Progress").textContent="Transfert automatique : "+done.size+" / "+paths.length+" · prochain lot de "+batch.length+" images…";
        let result=null;
        try{
          const fresh=await db.auth.getSession();
          if(fresh.error||!fresh.data.session?.access_token)throw new Error("Session expirée. Reconnectez-vous pour reprendre.");
          const response=await fetch(cfg.url+"/functions/v1/jerseyhub-r2-upload",{
            method:"POST",
            headers:{"Content-Type":"application/json","apikey":cfg.anonKey,"Authorization":"Bearer "+fresh.data.session.access_token},
            body:JSON.stringify({action:"migrate",paths:batch})
          });
          result=await response.json().catch(()=>({error:"Réponse serveur illisible"}));
          if(!response.ok){
            if([400,401,403,503].includes(response.status))throw new Error(result.error||"Erreur serveur "+response.status);
            throw new Error(result.error||"Erreur serveur "+response.status);
          }
        }catch(e){
          if(/Session expirée|Connexion administrateur|Accès réservé|configuration/i.test(e.message))throw e;
          for(const path of batch){attempts.set(path,(attempts.get(path)||0)+1);failures.push(path+": "+e.message);}
          $("r2Details").textContent="Incident temporaire : nouvelle tentative automatique. Échecs récents : "+failures.slice(-3).map(x=>x.split(": ").slice(1).join(": ")).join(" · ");
        }
        if(result){
          const returned=new Map((result.results||[]).map(item=>[item.path,item]));
          for(const path of batch){
            const item=returned.get(path);
            if(item?.ok){done.add(path);attempts.delete(path);}
            else{attempts.set(path,(attempts.get(path)||0)+1);failures.push(path+": "+(item?.error||"Aucun résultat reçu"));}
          }
          persist(done);display();
        }
        if(!paused){
          $("r2Progress").textContent="Lot terminé. Pause de 2 secondes… "+done.size+" / "+paths.length;
          await delay(2000);
        }
      }
      const remainingCount=paths.filter(p=>!done.has(p)).length;
      if(!remainingCount)$("r2Progress").textContent="Migration terminée : "+done.size+" / "+paths.length+" images transférées.";
      else if(paused)$("r2Progress").textContent="Migration mise en pause : "+done.size+" / "+paths.length+" images transférées.";
      else $("r2Progress").textContent="Lots terminés : "+done.size+" / "+paths.length+". "+remainingCount+" image(s) restent à retenter.";
      if(failures.length){
        const unresolved=paths.filter(p=>!done.has(p));
        $("r2Details").textContent=unresolved.length+" image(s) ont échoué après 3 tentatives maximum. Vous pouvez reprendre pour retenter uniquement celles-ci. Derniers détails : "+failures.slice(-5).join(" · ");
      }else if(!remainingCount)$("r2Details").textContent="Toutes les images ont été transférées. Les noms et chemins d’origine ont été conservés.";
    }catch(e){$("r2Progress").textContent="Arrêt sur erreur : "+e.message+" · Vous pourrez reprendre."}
    finally{running=false;$("r2Start").disabled=!paths.length||doneSet().size===paths.length;$("r2Pause").disabled=true;}
  }
  $("r2Scan").addEventListener("click",scan);
  $("r2Start").addEventListener("click",start);
  $("r2Pause").addEventListener("click",()=>{paused=true;$("r2Pause").disabled=true;$("r2Progress").textContent="Mise en pause après le lot en cours…"});
  db.auth.onAuthStateChange(event=>{if(running&&event==="SIGNED_OUT")paused=true;});
})();