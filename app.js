const $ = s => document.querySelector(s);
const grid=$("#catalogGrid"), title=$("#sectionTitle"), eyebrow=$("#sectionEyebrow"), crumbs=$("#breadcrumbs");
let currentView="home", currentGroup=null, query="";
$("#year").textContent=new Date().getFullYear();

function slug(s){return s.toLocaleLowerCase("fr").normalize("NFD").replace(/[\u0300-\u036f]/g,"")}
const NATIONAL_FLAG_CODES={
 "Allemagne":"de","France":"fr","Angleterre":"gb-eng","Italie":"it","Portugal":"pt","Pays-Bas":"nl","Espagne":"es","Belgique":"be","Irlande":"ie","Pologne":"pl","Écosse":"gb-sct","Danemark":"dk","Finlande":"fi","Pays de Galles":"gb-wls","Serbie":"rs","Grèce":"gr","Norvège":"no","Croatie":"hr",
 "Maroc":"ma","Algérie":"dz","Tunisie":"tn","Sénégal":"sn","Côte d’Ivoire":"ci","Cameroun":"cm","Nigeria":"ng","Égypte":"eg","Ghana":"gh","Afrique du Sud":"za","Cap-Vert":"cv",
 "Argentine":"ar","Brésil":"br","Uruguay":"uy","Colombie":"co","Mexique":"mx","États-Unis":"us","Canada":"ca","Chili":"cl","Équateur":"ec","Paraguay":"py","Pérou":"pe","Bolivie":"bo","Costa Rica":"cr","Venezuela":"ve","Panama":"pa","Jamaïque":"jm","Haïti":"ht",
 "Japon":"jp","Corée du Sud":"kr","Palestine":"ps","Arabie saoudite":"sa","Qatar":"qa","Émirats arabes unis":"ae","Jordanie":"jo","Australie":"au"
};
function nationalFlagMarkup(name,compact=false){
 const code=NATIONAL_FLAG_CODES[name];
 if(!code)return "";
 const width=compact?40:80,height=compact?27:53;
 return '<img src="https://flagcdn.com/w'+width+'/'+code+'.png" alt="Drapeau '+name+'" width="'+width+'" height="'+height+'" loading="lazy" style="display:inline-block;width:'+width+'px;height:'+height+'px;object-fit:cover;border-radius:3px;vertical-align:middle">';
}
function allNational(){return NATIONAL_REGIONS.flatMap(r=>r.items.map(([name,flag])=>({name,flag,group:r.name,kind:"national"})))}
function allLifestyle(){return LIFESTYLE.flatMap(c=>[{name:c.name,emoji:c.emoji,desc:c.desc,kind:"lifestyle"},...c.items.map(name=>({name,flag:c.emoji,group:c.name,kind:"lifestyle"}))])}
function allClubs(){return CLUB_LEAGUES.flatMap(l=>l.items.map(name=>({name,flag:"⚽",group:l.name,kind:"clubs"})))}
function sideGroup(label,items,kind){
 const box=document.createElement("div");box.className="side-group";
 const h=document.createElement("h3");h.textContent=label;box.append(h);
 items.forEach(item=>{const b=document.createElement("button");b.className="side-item";const visual=kind==="national"?nationalFlagMarkup(item.name,true):(item.flag||item.emoji||"✦");b.innerHTML=`<span class="side-flag">${visual}</span><span>${item.name}</span>`;b.onclick=()=>openGroup(kind,item.name);box.append(b)});
 return box;
}
function renderSidebar(){
 const el=$("#sideCategories");el.innerHTML="";
 el.append(sideGroup("Équipes nationales",allNational(),"national"));
 el.append(sideGroup("Clubs et championnats",allClubs(),"clubs"));
 el.append(sideGroup("Autres sports et articles",OTHER_SPORTS.map(x=>({...x,flag:x.emoji})),"sports"));
 el.append(sideGroup("Chaussures",SHOE_BRANDS.map(x=>({...x,flag:x.emoji})),"shoes"));
 el.append(sideGroup("Lifestyle & Accessoires",LIFESTYLE.map(x=>({...x,flag:x.emoji})),"lifestyle"));
}
function card(item,kind){
 const div=document.createElement("article");div.className="category-card";div.tabIndex=0;div.setAttribute("role","button");
 div.dataset.jhKind=kind;div.dataset.jhName=item.name;
 const emoji=item.flag||item.emoji||"⚽";
 const visualKey=kind==="sports"?slug(item.name):kind==="shoes"?"shoes":kind==="national"?"national":kind==="clubs"?"clubs":slug(item.name);
 const visual=kind==="national"?nationalFlagMarkup(item.name,false):emoji;
 div.innerHTML=`<div class="category-art art-${visualKey}"><span class="emoji">${visual}</span></div><div class="category-info"><h3>${item.name}</h3><p>${item.desc||item.group||"Découvrir les modèles"}</p></div>`;
 div.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();div.click()}};
 return div;
}
function isReadyForCatalog(p){
 // Une fiche n'est publiable que si photo et tailles proviennent de la même référence Vivi Jersey.
 const sourceOk = (typeof p.sourceUrl === "string" && /^https?:\/\/([a-z0-9-]+\.)?vivi-jersey\.com\//i.test(p.sourceUrl)) || (typeof p.assetSource === "string" && p.assetSource.startsWith("Vivi Jersey archive filename"));
 const imageOk = typeof p.image === "string" && (/^https?:\/\//i.test(p.image) || /^assets\/equipes-nationales\//.test(p.image));
 const sizesOk = Array.isArray(p.sizes) && p.sizes.length > 0 && p.sizes.every(s => typeof s === "string" && s.trim());
 return p.supplier === "Vivi Jersey" && p.supplierVerified === true && sourceOk && imageOk && sizesOk && typeof p.name === "string" && p.name.trim().length > 0;
}
function productCard(p){
 const div=document.createElement("article");div.className="product-card";div.tabIndex=0;div.setAttribute("role","button");div.setAttribute("aria-label","Choisir "+p.name);
 const visual=p.image?`<img src="${p.image}" alt="${p.name}" style="max-width:100%;max-height:190px;object-fit:contain">`:`<div class="shirt"><span>${p.number||"10"}</span></div>`;
 div.innerHTML=`<div class="product-art">${visual}</div><div class="product-info"><h3>${p.name}</h3><p>${p.description||"Modèle présenté dans le catalogue"}</p><div class="sizes">${(p.sizes||[]).map(s=>`<span class="size">${s}</span>`).join("")}</div><small class="jh-open-hint">Cliquer pour choisir les options</small></div>`;
 div._jhProduct=p;
  div.dataset.jhProductCard="true";
 div.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();div.click()}};
 return div;
}
function setHeading(e,t,b){eyebrow.textContent=e;title.textContent=t;crumbs.textContent=b;$("#resultCount").textContent=""}
function renderHome(){
 currentView="home";currentGroup=null;setHeading("BIENVENUE","Nos catégories","Accueil");
 grid.innerHTML="";grid.hidden=false;$("#emptyState").hidden=true;
 const home=[
  {name:"Équipes nationales",flag:"🌍",desc:"Sélections du monde entier",kind:"national"},
  {name:"Clubs de football",flag:"⚽",desc:"Championnats et clubs",kind:"clubs"},
  ...OTHER_SPORTS.map(x=>({...x,kind:"sports"})),
  {name:"Chaussures",flag:"👟",desc:"Toutes les marques du catalogue",kind:"shoes"},
  {name:"Lifestyle & Accessoires",flag:"🎧",desc:"Audio, LEGO, lunettes, casquettes",kind:"lifestyle"}
 ];
 home.forEach(x=>{const c=card(x,x.kind);c.dataset.jhView=x.kind;grid.append(c)});
}
function openView(view){
 if(view==="home"){renderHome();return}
 currentView=view;currentGroup=null;grid.innerHTML="";grid.hidden=false;$("#emptyState").hidden=true;
 if(view==="national"){
  setHeading("SÉLECTIONS DU MONDE","Équipes nationales","Accueil / Équipes nationales");
  NATIONAL_REGIONS.forEach(r=>{const h=document.createElement("div");h.className="region-heading";h.style.cssText="grid-column:1/-1;color:#f4bd22;font-weight:800;letter-spacing:1px;padding:12px 0 0";h.textContent=r.name;grid.append(h);r.items.forEach(([name,flag])=>grid.append(card({name,flag,group:r.name},"national")))});
 }else if(view==="clubs"){
  setHeading("FOOTBALL","Clubs et championnats","Accueil / Équipe de club");
  CLUB_LEAGUES.forEach(l=>{const h=document.createElement("div");h.style.cssText="grid-column:1/-1;color:#f4bd22;font-weight:800;letter-spacing:1px;padding:12px 0 0";h.textContent=l.name;grid.append(h);l.items.forEach(name=>grid.append(card({name,flag:"⚽",group:l.name},"clubs")))});
 }else if(view==="sports"){
  setHeading("TOUS LES SPORTS","Autres catégories","Accueil / Autres sports");
  OTHER_SPORTS.forEach(x=>grid.append(card(x,"sports")));
 }else if(view==="shoes"){
  setHeading("SNEAKERS & CHAUSSURES","Toutes les marques","Accueil / Chaussures");
  SHOE_BRANDS.forEach(x=>grid.append(card(x,"shoes")));
 }else if(view==="lifestyle"){
  setHeading("LIFESTYLE & ACCESSOIRES","Lifestyle & Accessoires","Accueil / Lifestyle & Accessoires");
  LIFESTYLE.forEach(c=>{const h=document.createElement("div");h.style.cssText="grid-column:1/-1;color:#f4bd22;font-weight:800;letter-spacing:1px;padding:12px 0 0";h.textContent=c.name;grid.append(h);c.items.forEach(name=>grid.append(card({name,flag:c.emoji,group:c.name},"lifestyle")))});
 }
}
function openGroup(kind,name){
 currentView=kind;currentGroup=name;
 if(kind==="lifestyle"){
  const cat=LIFESTYLE.find(c=>c.name===name);
  if(cat){
   setHeading("LIFESTYLE & ACCESSOIRES",name,`Accueil / Lifestyle & Accessoires / ${name}`);
   grid.innerHTML="";grid.hidden=false;$("#emptyState").hidden=true;
   cat.items.forEach(n=>grid.append(card({name:n,flag:cat.emoji,group:cat.name},"lifestyle")));
   $("#resultCount").textContent=`${cat.items.length} rubrique(s)`;
   return;
  }
 }
 if(kind==="clubs" && typeof CLUB_TEAM_GROUPS!=="undefined" && Object.prototype.hasOwnProperty.call(CLUB_TEAM_GROUPS,name)){
  setHeading("CLUBS & CHAMPIONNATS",name,"Accueil / Clubs / "+name);
  grid.innerHTML="";grid.hidden=false;$("#emptyState").hidden=true;
  const teams=CLUB_TEAM_GROUPS[name];
  teams.forEach(team=>grid.append(card({name:team,flag:"⚽",group:name},"clubs")));
  if(!teams.length){$("#emptyState").hidden=false;grid.hidden=true;$("#emptyState h3").textContent="Clubs à vérifier";$("#emptyState p").textContent="Les clubs de cette compétition seront ajoutés après vérification de leurs fiches Vivi Jersey.";}
  $("#resultCount").textContent=teams.length?teams.length+" clubs référencés":"";
  return;
 }
 if(kind==="sports" && typeof SPORT_TEAM_GROUPS!=="undefined" && SPORT_TEAM_GROUPS[name]){
  setHeading("ÉQUIPES & FRANCHISES",name,"Accueil / Autres sports / "+name);
  grid.innerHTML="";grid.hidden=false;$("#emptyState").hidden=true;
  SPORT_TEAM_GROUPS[name].forEach(team=>grid.append(card({name:team,flag:name==="NBA"?"🏀":name==="NFL"?"🏈":name==="MLB"?"⚾":name==="NHL"?"🏒":"🏉",group:name},"sports")));
  $("#resultCount").textContent=SPORT_TEAM_GROUPS[name].length+" équipes référencées";
  return;
 }
 if(["national","clubs","sports"].includes(kind)){
  const matches=PRODUCTS.filter(isReadyForCatalog).filter(p=>p.category===kind&&p.group===name);
  setHeading(kind==="national"?"ÉQUIPE NATIONALE":kind==="clubs"?"ÉQUIPE DE CLUB":"AUTRES SPORTS",name,`Accueil / ${name}`);
  grid.innerHTML="";grid.hidden=false;$("#emptyState").hidden=true;
   matches.forEach(p=>grid.append(productCard(p)));
  if(!matches.length){
   $("#emptyState").hidden=false;grid.hidden=true;
   $("#emptyState h3").textContent="Articles en préparation";
   $("#emptyState p").textContent="Les photos et tailles seront affichées dès que la fiche exacte aura été vérifiée sur Vivi Jersey.";
  }
  $("#resultCount").textContent=matches.length?`${matches.length} modèle(s)`:"";
  return;
 }
 const matches=PRODUCTS.filter(isReadyForCatalog).filter(p=>p.category===kind&&p.group===name);
 setHeading(kind==="national"?"ÉQUIPE NATIONALE":kind==="clubs"?"ÉQUIPE DE CLUB":kind==="shoes"?"MARQUE DE CHAUSSURES":kind==="lifestyle"?"LIFESTYLE & ACCESSOIRES":"CATÉGORIE",name,`Accueil / ${name}`);
 grid.innerHTML="";
 matches.forEach(p=>grid.append(productCard(p)));
 if(!matches.length){
  if(kind==="shoes"){
   $("#emptyState").hidden=false;grid.hidden=true;
   $("#emptyState h3").textContent="Catalogue en préparation";
   $("#emptyState p").textContent="Les modèles, photos et pointures seront ajoutés après vérification.";
  }else{
   $("#emptyState").hidden=false;grid.hidden=true;
   $("#emptyState h3").textContent="Catalogue en préparation";
   $("#emptyState p").textContent="Les modèles de cette catégorie seront ajoutés après vérification des photos et des tailles.";
  }
 }else{$("#emptyState").hidden=true;grid.hidden=false}
 $("#resultCount").textContent=matches.length?`${matches.length} modèle(s)`:"";
}
function applySearch(){
 query=slug($("#searchInput").value.trim());
 if(!query){currentView==="home"?renderHome():openView(currentView);return}
 const entries=[...allNational(),...allClubs(),...OTHER_SPORTS.map(x=>({...x,kind:"sports"})),...SHOE_BRANDS.map(x=>({...x,kind:"shoes"})),...allLifestyle()].filter(x=>slug(x.name).includes(query));
 const prods=PRODUCTS.filter(isReadyForCatalog).filter(p=>slug(p.name+" "+p.group).includes(query));
 setHeading("RECHERCHE",`Résultats pour « ${$("#searchInput").value} »`,"Accueil / Recherche");
 grid.innerHTML="";grid.hidden=false;$("#emptyState").hidden=true;
 entries.forEach(x=>grid.append(card(x,x.kind)));prods.forEach(p=>grid.append(productCard(p)));
 if(!entries.length&&!prods.length){$("#emptyState").hidden=false;grid.hidden=true}
}
renderHome();
document.querySelectorAll("[data-view]").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".nav-link").forEach(x=>x.classList.remove("active"));b.classList.add("active");openView(b.dataset.view)}));
$("#searchInput").addEventListener("input",applySearch);
$("#sortSelect").addEventListener("change",()=>{const cards=[...grid.children];cards.sort((a,b)=>$("#sortSelect").value==="az"?a.textContent.localeCompare(b.textContent,"fr"):b.textContent.localeCompare(a.textContent,"fr"));cards.forEach(c=>grid.append(c))});
$("#mobileMenu").onclick=()=>$(".main-nav").classList.toggle("open");


// --- Panier JerseyHub : conservé pendant la navigation et la connexion ---
(()=>{
 const KEY="jerseyhub_cart_v1";
 const read=()=>{try{return JSON.parse(localStorage.getItem(KEY)||"[]")}catch{return []}};
 const write=items=>{localStorage.setItem(KEY,JSON.stringify(items));renderCart()};
 let cart=read(), activeProduct=null;
 const style=document.createElement("style");
 style.textContent=`
 .jh-cart-trigger{position:relative;border:1px solid #5a4a24;background:#171717;color:#f4bd22;border-radius:9px;padding:10px 13px;font-weight:800;cursor:pointer}
 .jh-cart-count{display:inline-grid;place-items:center;background:#f4bd22;color:#111;border-radius:50%;width:21px;height:21px;margin-left:6px;font-size:11px}
 .jh-overlay{position:fixed;inset:0;background:#000b;z-index:9998;display:none;align-items:center;justify-content:center;padding:16px}
 .jh-dialog{background:#111;color:#fff;border:1px solid #5b4b27;border-radius:14px;width:min(720px,100%);max-height:90vh;overflow:auto;padding:22px;box-shadow:0 20px 80px #000}
 .jh-dialog h2{margin:0 0 14px;color:#f4bd22}.jh-dialog label{display:block;margin:13px 0 6px;color:#ddd;font-size:13px}
 .jh-dialog select,.jh-dialog input{width:100%;padding:11px;background:#080808;border:1px solid #555;border-radius:7px;color:white}
 .jh-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:18px}.jh-actions button{padding:12px 16px;border:0;border-radius:8px;cursor:pointer;font-weight:800}
 .jh-primary{background:#f4bd22;color:#111}.jh-secondary{background:#292929;color:#fff;border:1px solid #555!important}
 .jh-cart-row{display:grid;grid-template-columns:1fr auto;gap:12px;padding:14px 0;border-bottom:1px solid #333}
 .jh-cart-row small{display:block;color:#bbb;margin-top:5px}.jh-remove{background:#3a1717;color:#ffbcbc;border:1px solid #733!important;border-radius:7px;padding:8px 10px;cursor:pointer}
 .jh-product-test-shirt{height:165px;width:125px;margin:8px auto 16px;background:linear-gradient(90deg,#eee,#fff 45%,#e7e7e7);clip-path:polygon(27% 0,42% 7%,58% 7%,73% 0,100% 20%,85% 43%,76% 35%,76% 100%,24% 100%,24% 35%,15% 43%,0 20%);filter:drop-shadow(0 6px 8px #000)}
 .product-card{cursor:pointer}
 @media(max-width:600px){.jh-dialog{padding:16px}.jh-cart-row{grid-template-columns:1fr}}
 `;
 document.head.append(style);
 const trigger=document.querySelector("#jh-cart-trigger");
 if(!trigger)throw new Error("Bouton panier absent du menu HTML.");
 const overlay=document.createElement("div");overlay.className="jh-overlay";overlay.innerHTML='<div class="jh-dialog" role="dialog" aria-modal="true"></div>';document.body.append(overlay);
 const dialog=overlay.firstElementChild;
 const open=(html)=>{dialog.innerHTML=html;overlay.style.display="flex"};
 const close=()=>overlay.style.display="none";
 overlay.addEventListener("click",e=>{if(e.target===overlay)close()});
 const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
 function renderCart(){
  cart=read();const count=cart.reduce((n,x)=>n+(Number(x.quantity)||1),0);
  trigger.querySelector(".jh-cart-count").textContent=count;
  trigger.setAttribute("aria-label",`Mon panier, ${count} article(s)`);
  if(overlay.style.display==="flex"&&dialog.dataset.mode==="cart")showCart();
 }
 function showCart(){
  cart=read();dialog.dataset.mode="cart";
  const rows=cart.map((x,i)=>'<div class="jh-cart-row"><div><b>'+esc(x.name)+'</b><small>Taille : '+esc(x.size)+' · Qté : '+esc(x.quantity)+'</small><small>Patch(s) : '+esc((x.patches||[]).join(", ")||"Aucun")+'</small><small>Personnalisation : '+esc(x.personalization||"Aucune")+(x.player?" — "+esc(x.player):"")+(x.customName?" — "+esc(x.customName):"")+(x.customNumber?" #"+esc(x.customNumber):"")+'</small></div><button class="jh-remove" data-remove="'+i+'" type="button">Supprimer</button></div>').join("");
  open('<h2>Mon panier ('+cart.length+')</h2>'+(rows||'<p>Votre panier est vide pour le moment.</p>')+'<div class="jh-actions"><button class="jh-secondary" id="jh-continue">Continuer mes achats</button><button class="jh-primary" id="jh-checkout" '+(!cart.length?'disabled':'')+'>Continuer vers Mon compte</button></div>');
  dialog.dataset.mode="cart";
  dialog.querySelector("#jh-continue").onclick=close;
  dialog.querySelector("#jh-checkout").onclick=()=>{location.href="compte.html?checkout=1"};
  dialog.querySelectorAll("[data-remove]").forEach(b=>b.onclick=()=>{const next=read();next.splice(Number(b.dataset.remove),1);write(next)});
 }
 trigger.onclick=showCart;
 function openProduct(p){
  activeProduct=p;dialog.dataset.mode="product";
  const sizes=(p.sizes||[]).flatMap(raw=>{
   const value=String(raw).trim().replace(/–/g,"-");
   const range=value.match(/^(S|M|L|XL)\s*-\s*(2XL|3XL|4XL)$/i);
   if(!range)return [value];
   const order=["S","M","L","XL","2XL","3XL","4XL"];
   return order.slice(order.indexOf(range[1].toUpperCase()),order.indexOf(range[2].toUpperCase())+1);
  }).filter((v,i,a)=>a.indexOf(v)===i);
  const sizeOptions=sizes.length?sizes.map(s=>'<option>'+esc(s)+'</option>').join(""):'<option value="À confirmer">À confirmer</option>';
  const patchOptions=Array.isArray(p.patches)?p.patches:[];
  const productVisual=p.image?'<img src="'+esc(p.image)+'" alt="'+esc(p.name)+'" style="display:block;max-width:100%;max-height:240px;object-fit:contain;margin:8px auto 16px">':'<div class="jh-product-test-shirt" aria-label="Visuel de démonstration"></div>';
  open('<h2>'+esc(p.name)+'</h2>'+productVisual+'<p style="color:#bbb">'+esc(p.description||"Choisissez les options de votre article.")+'</p><label for="jh-size">Taille *</label><select id="jh-size" required><option value="">Sélectionnez une taille</option>'+sizeOptions+'</select><label>Patchs</label><div style="border:1px solid #444;border-radius:8px;padding:10px"><label><input type="checkbox" id="jh-no-patch" checked> Aucun patch</label>'+patchOptions.map((v,i)=>'<label><input type="checkbox" class="jh-patch" value="'+esc(v)+'"> '+esc(v)+'</label>').join("")+'</div><label>Personnalisation</label><select id="jh-person"><option value="Aucune">Aucune personnalisation</option><option value="Nom et numéro du joueur">Choisir un joueur</option><option value="Nom et numéro personnalisés">Nom et numéro personnalisés</option></select><div id="jh-player-fields"></div><div class="jh-actions"><button class="jh-secondary" id="jh-cancel">Annuler</button><button class="jh-primary" id="jh-add">Ajouter à ma commande</button></div>');
  dialog.querySelector("#jh-cancel").onclick=close;
  const person=dialog.querySelector("#jh-person"),fields=dialog.querySelector("#jh-player-fields");
  person.onchange=()=>{fields.innerHTML=person.value==="Aucune"?"":'<label for="jh-name">'+(person.value==="Nom et numéro du joueur"?"Nom du joueur":"Nom personnalisé")+'</label><input id="jh-name" maxlength="40" placeholder="Nom"><label for="jh-number">Numéro</label><input id="jh-number" maxlength="3" placeholder="Numéro">'};
  dialog.querySelector("#jh-no-patch").onchange=e=>{dialog.querySelectorAll(".jh-patch").forEach(x=>{x.disabled=e.target.checked;if(e.target.checked)x.checked=false})};
  dialog.querySelectorAll(".jh-patch").forEach(x=>x.onchange=()=>{if(x.checked)dialog.querySelector("#jh-no-patch").checked=false;if(![...dialog.querySelectorAll(".jh-patch")].some(y=>y.checked))dialog.querySelector("#jh-no-patch").checked=true});
  dialog.querySelector("#jh-add").onclick=()=>{
   const size=dialog.querySelector("#jh-size").value;if(!size){alert("Veuillez choisir une taille.");return}
   const customName=dialog.querySelector("#jh-name")?.value.trim()||"",customNumber=dialog.querySelector("#jh-number")?.value.trim()||"";
   if(person.value!=="Aucune"&&(!customName||!customNumber)){alert("Complétez le nom et le numéro.");return}
   const patches=[...dialog.querySelectorAll(".jh-patch:checked")].map(x=>x.value);
   const next=read();next.push({id:Date.now().toString(36)+Math.random().toString(36).slice(2,7),name:p.name,category:p.category,team:p.group,model:p.name,size,quantity:1,patches,personalization:person.value,player:person.value==="Nom et numéro du joueur"?customName:"",customName:person.value==="Nom et numéro personnalisés"?customName:"",customNumber});
   write(next);close();showCart();
  };
 }
 window.JerseyHubOpenProduct=openProduct;
  // Gestion centralisée : le clic sur la photo, le texte ou la carte ouvre la même fiche.
  document.addEventListener("click",e=>{
   const card=e.target.closest(".product-card[data-jh-product-card]");
   if(!card)return;
   const product=card._jhProduct;
   if(!product)return;
   try{openProduct(product)}catch(error){console.error("JerseyHub — ouverture fiche produit :",error);alert("La fiche produit n’a pas pu s’ouvrir. Une erreur a été enregistrée dans la console.")}
  },true);
 // Navigation des catégories et des équipes par délégation : le clic fonctionne
 // même après le remplacement dynamique des cartes dans la grille.
 document.addEventListener("click",e=>{
  const category=e.target.closest(".category-card[data-jh-kind]");
  if(!category)return;
  if(category.dataset.jhView){openView(category.dataset.jhView);return}
  openGroup(category.dataset.jhKind,category.dataset.jhName);
 });
 renderCart();
})();
