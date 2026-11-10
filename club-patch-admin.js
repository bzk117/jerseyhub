/* Gestion des clubs et bibliothèque centrale de patchs JerseyHub.
   Les images sélectionnées sont référencées sans déplacer ni supprimer les originaux R2. */
(()=>{
 const $=id=>document.getElementById(id);
 const panel=$("clubPatchManager");if(!panel||!window.supabase||!window.JERSEYHUB_SUPABASE)return;
 const db=window.supabase.createClient(window.JERSEYHUB_SUPABASE.url,window.JERSEYHUB_SUPABASE.anonKey);
 const country=$("patchCountry"),club=$("patchClub"),gallery=$("patchSourceGallery"),library=$("patchLibraryList");
 const feedback=$("patchManagerFeedback"),season=$("patchSeason"),label=$("patchLabel"),category=$("patchCategory");
 let currentImages=[],selectedImages=new Set(),currentAssignments=[];
 const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
 const say=(message,bad=false)=>{feedback.textContent=message;feedback.style.color=bad?"#ff9b9b":"#e9bd54"};
 function directory(){
  const result=new Map();
  if(typeof CLUB_LEAGUES!=="undefined"&&typeof CLUB_TEAM_GROUPS!=="undefined"){
   CLUB_LEAGUES.forEach(row=>{
    const clubs=(row.items||[]).flatMap(league=>CLUB_TEAM_GROUPS[league]||[]);
    if(clubs.length)result.set(row.name,[...new Set([...(result.get(row.name)||[]),...clubs])].sort((a,b)=>a.localeCompare(b,"fr")));
   });
  }
  const products=typeof PRODUCTS!=="undefined"?PRODUCTS:(typeof CLUB_PRODUCTS!=="undefined"?CLUB_PRODUCTS:[]);
  (products||[]).filter(p=>p&&p.category==="clubs"&&p.group).forEach(p=>{
   const countryName=p.country||p.countryName||"";
   if(countryName)result.set(countryName,[...new Set([...(result.get(countryName)||[]),p.group])].sort((a,b)=>a.localeCompare(b,"fr")));
  });
  return result;
 }
 let clubDirectory=directory();
 function renderCountries(){
  country.innerHTML='<option value="">Choisir un pays…</option>'+[...clubDirectory.keys()].sort((a,b)=>a.localeCompare(b,"fr")).map(x=>'<option value="'+esc(x)+'">'+esc(x)+'</option>').join("");
  club.innerHTML='<option value="">Choisir un club…</option>';
 }
 function renderClubs(){
  const teams=clubDirectory.get(country.value)||[];
  club.innerHTML='<option value="">Choisir un club…</option>'+teams.map(x=>'<option value="'+esc(x)+'">'+esc(x)+'</option>').join("");
  gallery.innerHTML="";selectedImages.clear();currentImages=[];loadLibrary();
 }
 async function loadGallery(){
  gallery.innerHTML="";selectedImages.clear();currentImages=[];
  if(!country.value||!club.value){say("Choisis un pays puis un club.");return}
  say("Chargement des photos de "+club.value+"…");
  try{
   const {data,error}=await db.rpc("jerseyhub_club_gallery",{p_country:country.value,p_club:club.value});
   if(error)throw error;
   const byUrl=new Map();
   (data||[]).forEach(row=>{
    const images=Array.isArray(row.images)&&row.images.length?row.images:[row.image_url];
    images.filter(Boolean).forEach((url,index)=>{if(!byUrl.has(url))byUrl.set(url,{url,reference:String(row.product_ref||""),index})});
   });
   currentImages=[...byUrl.values()];
   if(!currentImages.length){gallery.textContent="Aucune photo trouvée dans la galerie de ce club.";say("Aucune image disponible pour "+club.value+".");return}
   currentImages.forEach((item,i)=>{
    const card=document.createElement("label");card.className="club-patch-image-card";
    const img=document.createElement("img");img.src=item.url;img.alt="Image du maillot "+club.value;img.loading="lazy";
    const checkbox=document.createElement("input");checkbox.type="checkbox";checkbox.value=String(i);checkbox.onchange=()=>{checkbox.checked?selectedImages.add(i):selectedImages.delete(i);say(selectedImages.size+" image(s) sélectionnée(s).")};
    const caption=document.createElement("span");caption.textContent="Réf. "+(item.reference||"—")+" · photo "+(item.index+1);
    card.append(img,checkbox,caption);gallery.append(card);
   });
   say(currentImages.length+" image(s) affichée(s). Sélectionne celles qui montrent le patch à enregistrer.");
  }catch(error){gallery.textContent="Galerie indisponible : "+(error.message||error);say("Impossible de charger la galerie du club.",true)}
 }
 async function loadLibrary(){
  if(!library)return;
  library.textContent="Chargement de la bibliothèque…";
  try{
   const {data,error}=await db.from("club_patch_library").select("id,label,category,image_url,created_at,club_patch_assignments(id,country,club_name,season)").order("created_at",{ascending:false}).limit(200);
   if(error)throw error;
   library.innerHTML="";
   if(!data?.length){library.textContent="Aucun patch enregistré pour le moment.";return}
   data.forEach(patch=>{
    const row=document.createElement("article");row.className="club-patch-library-card";
    const img=document.createElement("img");img.src=patch.image_url;img.alt=patch.label;img.loading="lazy";
    const info=document.createElement("div");info.className="club-patch-library-info";
    const title=document.createElement("strong");title.textContent=patch.label;info.append(title);
    const meta=document.createElement("small");meta.textContent=(patch.category||"autre")+" · "+(patch.club_patch_assignments||[]).length+" association(s)";info.append(meta);
    const associations=document.createElement("small");associations.textContent=(patch.club_patch_assignments||[]).map(a=>a.country+" / "+a.club_name+(a.season?" / "+a.season:"")).join(" · ")||"Non associé";info.append(associations);
    const actions=document.createElement("div");actions.className="club-patch-actions";
    (patch.club_patch_assignments||[]).filter(a=>a.country===country.value&&a.club_name===club.value).forEach(a=>{
     const unlink=document.createElement("button");unlink.type="button";unlink.textContent="Retirer de ce club";unlink.onclick=()=>removeAssignment(a.id);actions.append(unlink);
    });
    const remove=document.createElement("button");remove.type="button";remove.className="danger";remove.textContent="Supprimer le patch";remove.onclick=()=>deletePatch(patch);actions.append(remove);
    row.append(img,info,actions);library.append(row);
   });
  }catch(error){library.textContent="Bibliothèque indisponible : "+(error.message||error);say("La migration SQL de la bibliothèque doit être appliquée avant son utilisation.",true)}
 }
 async function integrate(){
  if(!country.value||!club.value){say("Sélectionne d'abord un pays et un club.",true);return}
  if(!selectedImages.size){say("Sélectionne au moins une image.",true);return}
  const patchLabel=label.value.trim();if(!patchLabel){say("Choisis le nom du patch à intégrer.",true);label.focus();return}
  const button=$("integratePatch");button.disabled=true;
  try{
   const {data:userData,error:userError}=await db.auth.getUser();if(userError||!userData?.user)throw userError||new Error("Session administrateur introuvable.");
   let added=0,reused=0;
   for(const index of selectedImages){
    const image=currentImages[index];if(!image)continue;
    const {data:existing,error:findError}=await db.from("club_patch_library").select("id").eq("image_url",image.url).ilike("label",patchLabel).limit(1).maybeSingle();
    if(findError)throw findError;
    let patchId=existing?.id;
    if(patchId)reused++;
    else{
     const {data:created,error:createError}=await db.from("club_patch_library").insert({label:patchLabel,category:category.value,image_url:image.url,source_image_url:image.url,created_by:userData.user.id}).select("id").single();
     if(createError)throw createError;patchId=created.id;added++;
    }
    const {data:association,error:associationReadError}=await db.from("club_patch_assignments").select("id").eq("patch_id",patchId).eq("country",country.value).eq("club_name",club.value).eq("season",season.value||"").limit(1).maybeSingle();
    if(associationReadError)throw associationReadError;
    if(!association){
     const {error:associationError}=await db.from("club_patch_assignments").insert({patch_id:patchId,country:country.value,club_name:club.value,season:season.value.trim()||null});
     if(associationError)throw associationError;
    }
   }
   selectedImages.clear();gallery.querySelectorAll('input[type="checkbox"]').forEach(input=>input.checked=false);
   say(added+" patch(s) ajouté(s), "+reused+" patch(s) déjà existant(s) réutilisé(s).");
   await loadLibrary();
  }catch(error){say("Intégration impossible : "+(error.message||error),true)}
  finally{button.disabled=false}
 }
 async function removeAssignment(id){
  if(!confirm("Retirer ce patch de ce club uniquement ? Le patch restera dans la bibliothèque."))return;
  const {error}=await db.from("club_patch_assignments").delete().eq("id",id);
  if(error){say("Association non supprimée : "+error.message,true);return}
  say("Association retirée. Le patch reste disponible dans la bibliothèque.");loadLibrary();
 }
 async function deletePatch(patch){
  if(!confirm("Supprimer définitivement « "+patch.label+" » de la bibliothèque ? Toutes ses associations aux clubs/saisons seront également retirées. L'image source ne sera pas supprimée."))return;
  const {error}=await db.from("club_patch_library").delete().eq("id",patch.id);
  if(error){say("Patch non supprimé : "+error.message,true);return}
  say("Patch supprimé de la bibliothèque. L'image d'origine est conservée.");loadLibrary();
 }
 country.onchange=renderClubs;club.onchange=loadGallery;
 $("loadPatchGallery").onclick=loadGallery;$("integratePatch").onclick=integrate;
 $("reloadPatchLibrary").onclick=loadLibrary;
 $("clubPatchDeleteHint").textContent="Pour supprimer un maillot du catalogue, utilise le bouton de suppression dans « Gestion des maillots des clubs » ci-dessus. Cette action conserve la fiche source et les commandes.";
 renderCountries();
 db.auth.onAuthStateChange((_event,session)=>{if(session?.user)loadLibrary()});
 db.auth.getSession().then(({data})=>{if(data.session?.user)loadLibrary()});
})();