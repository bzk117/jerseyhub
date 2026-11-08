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
function lifestyleCategories(){return LIFESTYLE.filter(c=>!/(lego|construction)/i.test(c.name))}
function allLifestyle(){return lifestyleCategories().flatMap(c=>[{name:c.name,emoji:c.emoji,desc:c.desc,kind:"lifestyle"},...c.items.map(name=>({name,flag:c.emoji,group:c.name,kind:"lifestyle"}))])}
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
 el.append(sideGroup("Lifestyle & Accessoires",lifestyleCategories().map(x=>({...x,flag:x.emoji})),"lifestyle"));
}
function card(item,kind){
 const div=document.createElement("article");div.className="category-card";div.tabIndex=0;div.setAttribute("role","button");
 div.dataset.jhKind=kind;div.dataset.jhName=item.name;
 const emoji=item.flag||item.emoji||"⚽";
 const visualKey=kind==="sports"?slug(item.name):kind==="shoes"?"shoes":kind==="national"?"national":kind==="clubs"?"clubs":slug(item.name);
 const categoryImages={national:"equipes-nationales",NBA:"nba",NFL:"football-americain",MLB:"baseball",NHL:"hockey",Rugby:"rugby","Autres articles":"autres-articles",shoes:"chaussures","Lifestyle & Accessoires":"lifestyle-accessoires"};
 const imageKey=kind==="national"?categoryImages.national:kind==="sports"?categoryImages[item.name]:kind==="shoes"?categoryImages.shoes:kind==="lifestyle"&&item.name==="Lifestyle & Accessoires"?categoryImages["Lifestyle & Accessoires"]:null;
 const visual=imageKey?`<img class="category-visual" src="assets/categories/${imageKey}.svg" alt="" loading="lazy">`:`<span class="emoji">${kind==="national"?nationalFlagMarkup(item.name,false):emoji}</span>`;
 div.innerHTML=`<div class="category-art art-${visualKey}">${visual}</div><div class="category-info"><h3>${item.name}</h3><p>${item.desc||item.group||"Découvrir les modèles"}</p></div>`;
 // Navigation attachée directement à chaque carte, sans délégation globale.
 div.addEventListener("click",()=>{
  if(div.dataset.jhView){openView(div.dataset.jhView);return}
  openGroup(kind,item.name);
 });
 div.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();div.click()}};
 return div;
}
function isReadyForCatalog(p){
 // Une fiche est publiable si sa source fournisseur est explicitement vérifiée.
 const viviSourceOk = p.supplier === "Vivi Jersey" && (
  (typeof p.sourceUrl === "string" && /^https?:\/\/([a-z0-9-]+\.)?vivi-jersey\.com\//i.test(p.sourceUrl)) ||
  (typeof p.supplierUrl === "string" && /^https?:\/\/([a-z0-9-]+\.)?vivi-jersey\.com\//i.test(p.supplierUrl)) ||
  (typeof p.assetSource === "string" && p.assetSource.startsWith("Vivi Jersey archive filename"))
 );
 const hklfpSourceOk = p.supplier === "HKLFP" && typeof p.supplierUrl === "string" &&
  /^https?:\/\/(www\.)?hklfp\.com\//i.test(p.supplierUrl);
 const imageOk = typeof p.image === "string" && (/^https?:\/\//i.test(p.image) || /^assets\/equipes-nationales\//.test(p.image));
 const sizesOk = Array.isArray(p.sizes) && p.sizes.length > 0 && p.sizes.every(s => typeof s === "string" && s.trim());
 return p.supplierVerified === true && (viviSourceOk || hklfpSourceOk) && imageOk && sizesOk && typeof p.name === "string" && p.name.trim().length > 0;
}
const CATALOG_PAGE_SIZE=18;
let catalogPage=1,catalogPageItems=[],catalogPagePrefix=[],catalogPageHistory=[];
function renderCatalogPage(page=1,rememberPage=false){
 const nextPage=Math.max(1,Math.min(page,Math.ceil(catalogPageItems.length/CATALOG_PAGE_SIZE)||1));
 if(rememberPage&&nextPage!==catalogPage)catalogPageHistory.push(catalogPage);
 catalogPage=nextPage;
 grid.innerHTML="";
 catalogPagePrefix.forEach(node=>grid.append(node));
 const start=(catalogPage-1)*CATALOG_PAGE_SIZE;
 catalogPageItems.slice(start,start+CATALOG_PAGE_SIZE).forEach(p=>grid.append(productCard(p)));
 const pager=$("#catalogPagination");
 if(!pager)return;
 pager.innerHTML="";
 const pages=Math.ceil(catalogPageItems.length/CATALOG_PAGE_SIZE);
 const pageControls=document.createElement("div");
 pageControls.className="catalog-pagination-pages";
 const makeButton=(label,target,disabled=false,active=false)=>{
  const b=document.createElement("button");b.type="button";b.className="catalog-page-button"+(active?" active":"");b.textContent=label;b.disabled=disabled;b.setAttribute("aria-label",typeof label==="number"?"Page "+label:label);
  b.onclick=()=>renderCatalogPage(target,true);return b;
 };
 if(pages>1){
  pageControls.append(makeButton("←",catalogPage-1,catalogPage===1));
  for(let n=1;n<=pages;n++)pageControls.append(makeButton(String(n),n,false,n===catalogPage));
  pageControls.append(makeButton("→",catalogPage+1,catalogPage===pages));
  pager.append(pageControls);
 }
 if(catalogPageItems.length){
  const back=document.createElement("button");
  back.type="button";
  back.className="jh-bottom-page-back";
  back.textContent="← Retour";
  back.setAttribute("aria-label","Retour à la page précédente");
  back.onclick=goBack;
  pager.append(back);
 }
 pager.setAttribute("aria-label","Pagination du catalogue");
}
function renderPagedProducts(items,prefixNodes=[]){
 catalogPageItems=items;catalogPagePrefix=prefixNodes;catalogPage=1;catalogPageHistory=[];renderCatalogPage(1);
}
function isOutOfStock(p){
 const status=String(p?.stockStatus||p?.stock_status||p?.availability||p?.stockAvailability||p?.status||'').trim().toLowerCase().replace(/[_-]+/g,' ');
 const unavailable=['pas de stock','rupture','rupture de stock','indisponible','out of stock','sold out','épuisé','epuise','non disponible','out of stock'];
 return p?.inStock===false||p?.in_stock===false||p?.available===false||p?.stock===false||p?.stock===0||p?.stockQuantity===0||p?.stock_quantity===0||unavailable.includes(status);
}
if(!document.getElementById('jh-stock-styles')){
 const stockStyle=document.createElement('style');stockStyle.id='jh-stock-styles';
 stockStyle.textContent='.jh-stock-badge{display:inline-flex;align-items:center;margin:7px 0;padding:6px 10px;border-radius:6px;background:#6d2020;color:#fff;font-size:11px;font-weight:900;letter-spacing:.7px}.jh-stock-warning{margin:12px 0;padding:12px;border:1px solid #a33;background:#351414;color:#ffbaba;border-radius:8px;font-weight:800}.jh-open-hint{display:block;margin-top:8px;color:#c9a84c}';
 document.head.appendChild(stockStyle);
}
function productCard(p){
 const div=document.createElement('article');div.className='product-card';div.setAttribute('aria-label',(isOutOfStock(p)?'Indisponible : ':'Choisir ')+p.name);
 const out=isOutOfStock(p);
 if(out){div.classList.add('is-out-of-stock');div.setAttribute('aria-disabled','true');}
 else{div.tabIndex=0;div.setAttribute('role','button');}
 const visual=p.image?'<img src="'+p.image+'" alt="'+p.name+'" style="max-width:100%;max-height:190px;object-fit:contain">':'<div class="shirt"><span>'+(p.number||'10')+'</span></div>';
 div.innerHTML='<div class="product-art">'+visual+'</div><div class="product-info"><h3>'+p.name+'</h3>'+(out?'<span class="jh-stock-badge">RUPTURE DE STOCK</span>':'')+'<p>'+(p.description||'Modèle présenté dans le catalogue')+'</p><div class="sizes">'+(p.sizes||[]).map(s=>'<span class="size">'+s+'</span>').join('')+'</div><small class="jh-open-hint">'+(out?'Article indisponible — sélection désactivée':'Cliquer pour voir les photos et les options')+'</small></div>';
 div._jhProduct=p;div.dataset.jhProductCard='true';
 if(!out)div.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();div.click()}};
 return div;
}
function setHeading(e,t,b){
 eyebrow.textContent=e;title.textContent=t;crumbs.textContent=b;$("#resultCount").textContent="";
 const pager=$("#catalogPagination");if(pager)pager.innerHTML="";
 const sectionHeading=document.querySelector(".section-heading");
 let back=sectionHeading.querySelector(".jh-page-back");
 if(!back){back=document.createElement("button");back.type="button";back.className="jh-page-back";back.innerHTML="← <span>Retour</span>";back.setAttribute("aria-label","Retour à la page précédente");sectionHeading.prepend(back);back.onclick=goBack;}
 back.hidden=currentView==="home";
}
let navigationHistory=[];
let restoringNavigation=false;
function rememberNavigation(){
 if(!restoringNavigation)navigationHistory.push({view:currentView,group:currentGroup,page:catalogPage});
}
function goBack(){
 if(catalogPageHistory.length){
  const previousPage=catalogPageHistory.pop();
  renderCatalogPage(previousPage);
  return;
 }
 const previous=navigationHistory.pop();
 if(!previous){renderHome();return}
 restoringNavigation=true;
 if(previous.group){
  openGroup(previous.view,previous.group);
  if(previous.page>1)renderCatalogPage(previous.page);
 }else if(previous.view==="home")renderHome();
 else openView(previous.view);
 restoringNavigation=false;
}
function renderHome(){
 catalogPageHistory=[];
 currentView="home";currentGroup=null;setHeading("BIENVENUE","Nos catégories","Accueil");
 grid.innerHTML="";grid.hidden=false;$("#emptyState").hidden=true;
 const home=[
  {name:"Équipes nationales",flag:"🌍",desc:"Sélections du monde entier",kind:"national"},
  {name:"Clubs de football",flag:"⚽",desc:"Championnats et clubs",kind:"clubs"},
  ...OTHER_SPORTS.map(x=>({...x,kind:"sports"})),
  {name:"Chaussures",flag:"👟",desc:"Toutes les marques du catalogue",kind:"shoes"},
  {name:"Lifestyle & Accessoires",flag:"🎧",desc:"Audio, lunettes, casquettes",kind:"lifestyle"}
 ];
 home.forEach(x=>{const c=card(x,x.kind);if(x.kind!=="sports")c.dataset.jhView=x.kind;grid.append(c)});
}
function openView(view){
 rememberNavigation();
 catalogPageHistory=[];
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
  lifestyleCategories().forEach(c=>{const h=document.createElement("div");h.style.cssText="grid-column:1/-1;color:#f4bd22;font-weight:800;letter-spacing:1px;padding:12px 0 0";h.textContent=c.name;grid.append(h);c.items.forEach(name=>grid.append(card({name,flag:c.emoji,group:c.name},"lifestyle")))});
 }
}
function openGroup(kind,name){
 rememberNavigation();
 catalogPageHistory=[];
 currentView=kind;currentGroup=name;
 if(kind==="lifestyle"){
  const cat=lifestyleCategories().find(c=>c.name===name);
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
   renderPagedProducts(matches);
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
 renderPagedProducts(matches);
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
 const prefixNodes=entries.map(x=>card(x,x.kind));renderPagedProducts(prods,prefixNodes);
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
 .jh-patch-selector{border:1px solid #343434;border-radius:14px;padding:14px;margin:12px 0 18px;background:#111}.jh-patch-intro{color:#aaa;font-size:13px;line-height:1.5;margin:0 0 12px}.jh-patch-slot{border:0;border-top:1px solid #393939;padding:12px 0;margin:10px 0}.jh-patch-slot legend{color:#f4bd22;font-weight:800;padding:0 5px}.jh-patch-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(112px,1fr));gap:9px}.jh-patch-choice{position:relative;display:flex!important;flex-direction:column;align-items:center;gap:7px;padding:9px!important;border:1px solid #383838;border-radius:11px;margin:0!important;min-height:126px;background:#181818;cursor:pointer;text-align:center}.jh-patch-choice:has(input:checked){border:2px solid #f4bd22;background:#28200d;padding:8px!important}.jh-patch-choice input{position:absolute;top:8px;right:8px;width:16px!important;height:16px;accent-color:#f4bd22}.jh-patch-choice span b{display:block;color:#fff;font-size:12px;line-height:1.3}.jh-patch-thumb{width:100%;height:76px;object-fit:contain;background:#202020;border-radius:7px;padding:5px}.jh-patch-none .jh-patch-thumb{display:grid;place-items:center;color:#aaa;font-size:27px}.jh-patch-empty{color:#aaa;font-size:12px;grid-column:1/-1}.jh-patch-choice span small,.jh-patch-choice strong,.jh-patch-total{display:none!important}@media(max-width:520px){.jh-patch-grid{grid-template-columns:repeat(3,minmax(0,1fr));gap:6px}.jh-patch-choice{min-height:112px;padding:6px!important}.jh-patch-thumb{height:65px}}
 .jh-product-test-shirt{height:165px;width:125px;margin:8px auto 16px;background:linear-gradient(90deg,#eee,#fff 45%,#e7e7e7);clip-path:polygon(27% 0,42% 7%,58% 7%,73% 0,100% 20%,85% 43%,76% 35%,76% 100%,24% 100%,24% 35%,15% 43%,0 20%);filter:drop-shadow(0 6px 8px #000)}
 .product-card{cursor:pointer}.jh-stock-badge{display:inline-block;margin:5px 0 8px;padding:5px 9px;border-radius:5px;background:#8f2020;color:#fff;font-size:11px;font-weight:900;letter-spacing:.5px}.jh-stock-warning{margin:10px 0;padding:11px;border:1px solid #a33;border-radius:8px;background:#351313;color:#ffd1d1;font-weight:800}.jh-options-block{border:1px solid #383838;border-radius:10px;padding:13px;margin:14px 0;background:#151515}.jh-options-block h3{margin:0 0 8px;color:#f4bd22;font-size:15px}.jh-option-summary{margin:6px 0;color:#ddd;font-size:13px;line-height:1.6}
 @media(max-width:600px){.jh-dialog{padding:16px}.jh-cart-row{grid-template-columns:1fr}}
 `;
 document.head.append(style);
 const trigger=document.querySelector("#jh-cart-trigger");
 if(!trigger)throw new Error("Bouton panier absent du menu HTML.");
 const overlay=document.createElement("div");overlay.className="jh-overlay";overlay.innerHTML='<div class="jh-dialog" role="dialog" aria-modal="true"></div>';document.body.append(overlay);
 const dialog=overlay.firstElementChild;
 const open=(html)=>{
  dialog.innerHTML=html;
  const closeButton=document.createElement("button");
  closeButton.type="button";closeButton.className="jh-dialog-close";closeButton.textContent="×";
  closeButton.setAttribute("aria-label","Fermer cette fenêtre");closeButton.title="Fermer";
  closeButton.onclick=close;dialog.prepend(closeButton);
  overlay.style.display="flex";
 };
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
  const rows=cart.map((x,i)=>'<div class="jh-cart-row"><div><b>'+esc(x.name)+'</b><small>'+esc([x.season,x.kitType,x.version].filter(Boolean).join(" · "))+(x.season||x.kitType||x.version?" · ":"")+'Taille : '+esc(x.size)+' · Qté : '+esc(x.quantity)+'</small><small>Patch(s) : '+esc((x.patches||[]).join(", ")||"Aucun")+'</small><small>Personnalisation : '+esc(x.personalization||"Aucune")+(x.player?" — "+esc(x.player):"")+(x.customName?" — "+esc(x.customName):"")+(x.customNumber?" #"+esc(x.customNumber):"")+'</small></div><button class="jh-remove" data-remove="'+i+'" type="button">Supprimer</button></div>').join("");
  open('<h2>Mon panier ('+cart.length+')</h2>'+(rows||'<p>Votre panier est vide pour le moment.</p>')+'<div class="jh-actions"><button class="jh-secondary" id="jh-continue">Continuer mes achats</button><button class="jh-primary" id="jh-checkout" '+(!cart.length?'disabled':'')+'>Continuer vers Mon compte</button></div>');
  dialog.dataset.mode="cart";
  dialog.querySelector("#jh-continue").onclick=close;
  dialog.querySelector("#jh-checkout").onclick=()=>{location.href="compte.html?checkout=1"};
  dialog.querySelectorAll("[data-remove]").forEach(b=>b.onclick=()=>{const next=read();next.splice(Number(b.dataset.remove),1);write(next)});
 }
 trigger.onclick=showCart;
 async function openProduct(p){
  activeProduct=p;dialog.dataset.mode="product";
  const sizes=(p.sizes||[]).flatMap(raw=>{
   const value=String(raw).trim().replace(/–/g,"-");
   const range=value.match(/^(S|M|L|XL)\s*-\s*(2XL|3XL|4XL)$/i);
   if(!range)return [value];
   const order=["S","M","L","XL","2XL","3XL","4XL"];
   return order.slice(order.indexOf(range[1].toUpperCase()),order.indexOf(range[2].toUpperCase())+1);
  }).filter((v,i,a)=>a.indexOf(v)===i);
  const sizeOptions=sizes.length?sizes.map(s=>'<option>'+esc(s)+'</option>').join(""):'<option value="À confirmer">À confirmer</option>';
  const legacyPatchOptions=Array.isArray(p.patches)?p.patches:[];
  const isNational=p.category==="national",isClub=p.category==="clubs";
  const personalizationAllowed=!isClub||p.personalizationAllowed===true||p.personalization?.allowed===true;
  let patchRecords=[];
  if((isNational||isClub)&&window.supabase&&window.JERSEYHUB_SUPABASE){try{const patchDb=window.supabase.createClient(window.JERSEYHUB_SUPABASE.url,window.JERSEYHUB_SUPABASE.anonKey);const {data,error}=await patchDb.from("patch_options").select("id,category,team_name,product_name,slot_number,label,image_url,extra_price_eur,sort_order").eq("category",isNational?"national":"clubs").eq("is_active",true).order("sort_order",{ascending:true});if(!error)patchRecords=data||[];}catch(error){console.warn("Options de patch indisponibles :",error)}}
  const productSpecific=patchRecords.filter(x=>x.product_name&&x.product_name===p.name);
  const teamSpecific=patchRecords.filter(x=>!x.product_name&&x.team_name&&x.team_name===p.group);
  const globalOptions=patchRecords.filter(x=>!x.product_name&&!x.team_name);
  const applicablePatches=productSpecific.length?productSpecific:(teamSpecific.length?teamSpecific:globalOptions);
  // Catalogue visuel de secours : les choix restent disponibles même si patch_options est vide.
  // Images originales et libellés relevés sur les options patch du fournisseur Vivi Jersey.
  // Les groupes correspondent aux cinq champs « Select Patch » de sa fiche produit Belgique 2025-26.
  const builtInPatchStyles=[
   {id:"vivi-wc-qualifiers",label:"2026 World Cup Qualifiers",slot_number:1,image_url:"https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2601/10/photo/3314131311.webp?x-oss-process=image%2Fformat%2Cwebp%2Fquality%2Cq_100%2Fresize%2Cm_lfit%2Ch_240%2Cw_240"},
   {id:"vivi-fifa-worldcup",label:"2026 FIFA World Cup",slot_number:1,image_url:"https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2601/10/photo/121342132131.webp?x-oss-process=image%2Fformat%2Cwebp%2Fquality%2Cq_100%2Fresize%2Cm_lfit%2Ch_240%2Cw_240"},
   {id:"vivi-worldcup-2026",label:"FIFA World Cup 2026",slot_number:1,image_url:"https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2606/04/photo/2636323A1726286F5CEDC8298BA68436.png?x-oss-process=image%2Fformat%2Cwebp%2Fquality%2Cq_100%2Fresize%2Cm_lfit%2Ch_240%2Cw_240"},
   {id:"vivi-uefa-foundation",label:"UEFA National + FOUNDATION",slot_number:1,image_url:"https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2610/09/photo/121321321313.webp?x-oss-process=image%2Fformat%2Cwebp%2Fquality%2Cq_100%2Fresize%2Cm_lfit%2Ch_240%2Cw_240"},
   {id:"vivi-football-unites",label:"FOOTBALL UNITES",slot_number:2,image_url:"https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2601/10/photo/3314131311.webp?x-oss-process=image%2Fformat%2Cwebp%2Fquality%2Cq_100%2Fresize%2Cm_lfit%2Ch_240%2Cw_240"},
   {id:"vivi-debut-fifa",label:"DEBUT FIFA",slot_number:2,image_url:"https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2607/03/photo/DEBUT.webp?x-oss-process=image%2Fformat%2Cwebp%2Fquality%2Cq_100%2Fresize%2Cm_lfit%2Ch_240%2Cw_240"},
   {id:"vivi-match-1",label:"Group Stage Match 1",slot_number:3,image_url:"https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2606/04/photo/GroupStageMatch1.webp?x-oss-process=image%2Fformat%2Cwebp%2Fquality%2Cq_100%2Fresize%2Cm_lfit%2Ch_240%2Cw_240"},
   {id:"vivi-match-2",label:"Group Stage Match 2",slot_number:3,image_url:"https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2606/04/photo/GroupStageMatch2.webp?x-oss-process=image%2Fformat%2Cwebp%2Fquality%2Cq_100%2Fresize%2Cm_lfit%2Ch_240%2Cw_240"},
   {id:"vivi-match-3",label:"Group Stage Match 3",slot_number:3,image_url:"https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2606/04/photo/GroupStageMatch3.webp?x-oss-process=image%2Fformat%2Cwebp%2Fquality%2Cq_100%2Fresize%2Cm_lfit%2Ch_240%2Cw_240"},
   {id:"vivi-r32",label:"R32",slot_number:3,image_url:"https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2606/04/photo/R32.webp?x-oss-process=image%2Fformat%2Cwebp%2Fquality%2Cq_100%2Fresize%2Cm_lfit%2Ch_240%2Cw_240"},
   {id:"vivi-r16",label:"R16",slot_number:3,image_url:"https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2606/04/photo/R16.webp?x-oss-process=image%2Fformat%2Cwebp%2Fquality%2Cq_100%2Fresize%2Cm_lfit%2Ch_240%2Cw_240"},
   {id:"vivi-qfs",label:"QFs",slot_number:3,image_url:"https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2606/04/photo/QFs.webp?x-oss-process=image%2Fformat%2Cwebp%2Fquality%2Cq_100%2Fresize%2Cm_lfit%2Ch_240%2Cw_240"},
   {id:"vivi-sfs",label:"SFs",slot_number:3,image_url:"https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2606/04/photo/SFs.webp?x-oss-process=image%2Fformat%2Cwebp%2Fquality%2Cq_100%2Fresize%2Cm_lfit%2Ch_240%2Cw_240"},
   {id:"vivi-final",label:"Final",slot_number:3,image_url:"https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2606/04/photo/Final.webp?x-oss-process=image%2Fformat%2Cwebp%2Fquality%2Cq_100%2Fresize%2Cm_lfit%2Ch_240%2Cw_240"},
   {id:"vivi-match-1000",label:"MATCH 1000",slot_number:4,image_url:"https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2607/02/photo/1000.png?x-oss-process=image%2Fformat%2Cwebp%2Fquality%2Cq_100%2Fresize%2Cm_lfit%2Ch_240%2Cw_240"},
   {id:"vivi-best-goalkeeper-2018",label:"2018 Best Goalkeeper",slot_number:4,image_url:"https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2607/02/photo/2018.webp?x-oss-process=image%2Fformat%2Cwebp%2Fquality%2Cq_100%2Fresize%2Cm_lfit%2Ch_240%2Cw_240"},
   {id:"vivi-golden-globe-2022",label:"2022 Golden Globe",slot_number:4,image_url:"https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2607/02/photo/2022-224731ea2d.webp?x-oss-process=image%2Fformat%2Cwebp%2Fquality%2Cq_100%2Fresize%2Cm_lfit%2Ch_240%2Cw_240"},
   {id:"vivi-golden-boot-2022",label:"2022 Golden Boot",slot_number:4,image_url:"https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2607/02/photo/2022.webp?x-oss-process=image%2Fformat%2Cwebp%2Fquality%2Cq_100%2Fresize%2Cm_lfit%2Ch_240%2Cw_240"},
   {id:"vivi-fifa-2026-white",label:"FIFA 2026 White",slot_number:5,image_url:"https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2607/03/photo/43545434565.webp?x-oss-process=image%2Fformat%2Cwebp%2Fquality%2Cq_100%2Fresize%2Cm_lfit%2Ch_240%2Cw_240"},
   {id:"vivi-fifa-2026-gold",label:"FIFA 2026 Gold",slot_number:5,image_url:"https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2607/03/photo/2026.webp?x-oss-process=image%2Fformat%2Cwebp%2Fquality%2Cq_100%2Fresize%2Cm_lfit%2Ch_240%2Cw_240"},
   {id:"vivi-debut-gold",label:"DEBUT Gold",slot_number:5,image_url:"https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2607/03/photo/DEBUT1.webp?x-oss-process=image%2Fformat%2Cwebp%2Fquality%2Cq_100%2Fresize%2Cm_lfit%2Ch_240%2Cw_240"},
   {id:"vivi-debut-white",label:"DEBUT White",slot_number:5,image_url:"https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD139/2607/03/photo/DEBUTwhite.webp?x-oss-process=image%2Fformat%2Cwebp%2Fquality%2Cq_100%2Fresize%2Cm_lfit%2Ch_240%2Cw_240"}
  ];
  const productPatchOptions=Array.isArray(p.patchOptions)?p.patchOptions:[];
  const displayPatches=applicablePatches.length?applicablePatches:(isNational?builtInPatchStyles:productPatchOptions);
  const patchSlotCount=isNational?5:(isClub?Math.max(1,Math.min(3,Number(p.patchSlots)||2)):0);
  if((isNational||isClub)&&!document.getElementById("jh-patch-visual-styles")){
   const style=document.createElement("style");style.id="jh-patch-visual-styles";style.textContent=".jh-patch-selector{margin:18px 0}.jh-patch-intro{color:#cbd5e1;font-size:14px}.jh-patch-slot{border:1px solid #465365;border-radius:12px;padding:12px;margin:12px 0}.jh-patch-slot legend{padding:0 7px;font-weight:700;color:#f2c66d}.jh-patch-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(112px,1fr));gap:10px}.jh-patch-choice{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;gap:7px;min-height:132px;padding:10px 7px;border:2px solid #465365;border-radius:10px;background:#17202d;color:#fff;text-align:center;cursor:pointer;transition:border-color .15s,background .15s,transform .15s}.jh-patch-choice:hover{border-color:#d8b45a;transform:translateY(-2px)}.jh-patch-choice:has(input:checked){border-color:#e5b94e;background:#293143;box-shadow:0 0 0 2px #e5b94e33}.jh-patch-choice input{position:absolute;top:8px;right:8px;accent-color:#e5b94e;width:17px;height:17px;cursor:pointer}.jh-patch-thumb{display:block;width:76px;height:76px;object-fit:contain;pointer-events:none}.jh-patch-choice b{font-size:12px;line-height:1.25}.jh-patch-none .jh-patch-thumb{display:grid;place-items:center;border:1px dashed #8995a5;border-radius:50%;font-size:32px;color:#d8b45a}.jh-patch-empty{color:#f2c66d;font-size:13px}.jh-patch-choice input:focus-visible{outline:2px solid #fff;outline-offset:3px}";
   document.head.appendChild(style);
  }
  const patchMarkup=(isNational||isClub)
   ? '<section class="jh-patch-selector"><p class="jh-patch-intro">'+(isNational?"Touchez une image pour sélectionner une option de patch.":"Choisissez uniquement les patchs confirmés pour ce modèle.")+'</p>'+Array.from({length:patchSlotCount},(_,index)=>index+1).map(slot=>{
      const options=displayPatches.filter(x=>Number(x.slot_number)===slot);
      const slotName=isNational?(slot===1?"Compétition / qualifications":slot===2?"FIFA / message":slot===3?"Match / phase du tournoi":slot===4?"Distinction / record":"Variantes FIFA / DEBUT"):(p.patchSlotLabels?.[slot-1]||("Emplacement "+slot));
      return '<fieldset class="jh-patch-slot"><legend>Patch '+slot+' — '+slotName+'</legend><div class="jh-patch-grid"><label class="jh-patch-choice jh-patch-none"><input type="radio" name="jh-patch-slot-'+slot+'" value="" checked><span class="jh-patch-thumb">＋</span><span><b>Aucun patch</b></span></label>'+
       options.map(x=>'<label class="jh-patch-choice"><input type="radio" name="jh-patch-slot-'+slot+'" value="'+esc(x.id)+'"><img class="jh-patch-thumb" src="'+esc(x.image_url)+'" alt="'+esc(x.label)+'"><span><b>'+esc(x.label)+'</b></span></label>').join("")+
       '</div></fieldset>';
     }).join("")+'</section>'
   : '<label>Patchs</label><div style="border:1px solid #444;border-radius:8px;padding:10px"><label><input type="checkbox" id="jh-no-patch" checked> Aucun patch</label>'+legacyPatchOptions.map((v,i)=>'<label><input type="checkbox" class="jh-patch" value="'+esc(v)+'"> '+esc(v)+'</label>').join("")+'</div>';
  const galleryImages=Array.isArray(p.images)&&p.images.length?p.images:(p.image?[p.image]:[]);
  let galleryIndex=0;
  const productVisual=galleryImages.length
   ? '<div class="jh-product-gallery"><div class="jh-gallery-main-wrap"><img id="jh-product-gallery-image" class="jh-gallery-main" src="'+esc(galleryImages[0])+'" alt="'+esc(p.name)+' - photo 1"><div id="jh-gallery-zoom" class="jh-gallery-zoom" aria-hidden="true"><span>Zoom</span></div><button type="button" class="jh-gallery-enlarge" id="jh-gallery-enlarge">Agrandir l’image</button></div><div class="jh-gallery-side"><div class="jh-gallery-thumbs">'+galleryImages.map((src,i)=>'<button type="button" class="jh-gallery-thumb'+(i===0?' active':'')+'" data-gallery-index="'+i+'" aria-label="Afficher la photo '+(i+1)+'"><img src="'+esc(src)+'" alt=""></button>').join('')+'</div><div class="jh-gallery-controls"><button type="button" class="jh-secondary" id="jh-gallery-prev" aria-label="Photo précédente">←</button><span id="jh-gallery-count">1 / '+galleryImages.length+'</span><button type="button" class="jh-secondary" id="jh-gallery-next" aria-label="Photo suivante">→</button></div></div><div class="jh-gallery-lightbox" id="jh-gallery-lightbox" hidden><button type="button" id="jh-gallery-lightbox-close" aria-label="Fermer">×</button><img id="jh-gallery-lightbox-image" src="'+esc(galleryImages[0])+'" alt="'+esc(p.name)+' agrandie"></div></div>'
   : '<div class="jh-product-test-shirt" aria-label="Visuel de démonstration"></div>';
  const outOfStock=isOutOfStock(p);
  const sizeSummary=sizes.length?'<p class="jh-option-summary"><b>Tailles proposées :</b> '+sizes.map(esc).join(' · ')+'</p>':'<p class="jh-option-summary">Taille à confirmer auprès du fournisseur.</p>';
  const stockNotice=outOfStock?'<p class="jh-stock-warning">PAS DE STOCK — Cet article ne peut pas être ajouté à la commande pour le moment.</p>':'';
  const personalizationOptions=personalizationAllowed?'<option value="Nom et numéro du joueur">Choisir un joueur</option><option value="Nom et numéro personnalisés">Personnalisation manuelle</option>':"";
  const personalizationNotice=isClub&&!personalizationAllowed?'<p class="jh-player-note">La personnalisation nom/numéro n’est pas encore confirmée pour ce modèle.</p>':"";
  const productMeta=[p.season,p.kitType,p.version].filter(Boolean).map(esc).join(" · ");
  open('<h2>'+esc(p.name)+'</h2>'+productVisual+(productMeta?'<p class="jh-option-summary">'+productMeta+'</p>':"")+'<p style="color:#bbb">'+esc(p.description||"Choisissez les options de votre article.")+'</p>'+stockNotice+'<section class="jh-options-block"><h3>1. Choisir la taille</h3>'+sizeSummary+'<label for="jh-size">Taille *</label><select id="jh-size" required><option value="">Sélectionnez une taille</option>'+sizeOptions+'</select></section><section class="jh-options-block"><h3>2. Choisir les patchs</h3>'+patchMarkup+'</section><section class="jh-options-block"><h3>3. Personnalisation</h3>'+personalizationNotice+'<label for="jh-person">Nom et numéro</label><select id="jh-person"><option value="Aucune">Aucune personnalisation</option>'+personalizationOptions+'</select><div id="jh-player-fields"></div></section><div class="jh-actions"><button class="jh-secondary" id="jh-cancel">Annuler</button><button class="jh-primary" id="jh-add">Ajouter à ma commande</button></div>');
  if(outOfStock){const add=dialog.querySelector('#jh-add');add.disabled=true;add.textContent='Indisponible'}
  if(galleryImages.length){
   const showGalleryImage=()=>{
    const img=dialog.querySelector("#jh-product-gallery-image"),zoom=dialog.querySelector("#jh-gallery-zoom"),lightbox=dialog.querySelector("#jh-gallery-lightbox-image");
    if(img){img.src=galleryImages[galleryIndex];img.alt=esc(p.name)+" - photo "+(galleryIndex+1);}
    if(zoom){zoom.style.backgroundImage="url("+JSON.stringify(galleryImages[galleryIndex])+")";zoom.style.backgroundPosition="50% 50%";}
    if(lightbox)lightbox.src=galleryImages[galleryIndex];
    dialog.querySelector("#jh-gallery-count").textContent=(galleryIndex+1)+" / "+galleryImages.length;
    dialog.querySelectorAll(".jh-gallery-thumb").forEach((button,index)=>button.classList.toggle("active",index===galleryIndex));
   };
   dialog.querySelectorAll(".jh-gallery-thumb").forEach(button=>button.onclick=()=>{galleryIndex=Number(button.dataset.galleryIndex)||0;showGalleryImage()});
   dialog.querySelector("#jh-gallery-prev").onclick=()=>{galleryIndex=(galleryIndex-1+galleryImages.length)%galleryImages.length;showGalleryImage()};
   dialog.querySelector("#jh-gallery-next").onclick=()=>{galleryIndex=(galleryIndex+1)%galleryImages.length;showGalleryImage()};
   const main=dialog.querySelector("#jh-product-gallery-image"),zoom=dialog.querySelector("#jh-gallery-zoom");
   if(main&&zoom){
    main.addEventListener("mousemove",event=>{const rect=main.getBoundingClientRect(),x=Math.max(0,Math.min(100,(event.clientX-rect.left)/rect.width*100)),y=Math.max(0,Math.min(100,(event.clientY-rect.top)/rect.height*100));zoom.style.backgroundPosition=x+"% "+y+"%";zoom.classList.add("visible")});
    main.addEventListener("mouseenter",()=>zoom.classList.add("visible"));
    main.addEventListener("mouseleave",()=>zoom.classList.remove("visible"));
   }
   const lightbox=dialog.querySelector("#jh-gallery-lightbox");
   const showLightbox=()=>{lightbox.hidden=false;dialog.querySelector("#jh-gallery-lightbox-image").src=galleryImages[galleryIndex]};
   dialog.querySelector("#jh-gallery-enlarge").onclick=showLightbox;
   main?.addEventListener("click",showLightbox);
   dialog.querySelector("#jh-gallery-lightbox-close").onclick=()=>{lightbox.hidden=true};
   lightbox.onclick=event=>{if(event.target===lightbox)lightbox.hidden=true};
  }
  if(p.sizePending){
   const sizeSelect=dialog.querySelector("#jh-size");
   sizeSelect.disabled=true;
   const addButton=dialog.querySelector("#jh-add");
   addButton.disabled=true;
   addButton.textContent="Tailles à confirmer";
   const note=document.createElement("p");
   note.textContent="Ce visuel est bien ajouté au catalogue, mais les tailles exactes doivent être vérifiées auprès du fournisseur. La commande n'est pas encore disponible.";
   note.style.cssText="color:#f4bd22;font-weight:700;margin:12px 0";
   dialog.querySelector(".jh-actions").before(note);
  }
  dialog.querySelector("#jh-cancel").onclick=close;
  if(!document.getElementById("jh-player-select-styles")){const style=document.createElement("style");style.id="jh-player-select-styles";style.textContent=".jh-player-note{color:#e7c879;font-size:13px;line-height:1.45;margin:10px 0}#jh-player-fields select,#jh-player-fields input{width:100%;box-sizing:border-box;margin:6px 0 12px;padding:11px;border:1px solid #596579;border-radius:8px;background:#111a26;color:#fff}";document.head.appendChild(style)}
  const person=dialog.querySelector("#jh-person"),fields=dialog.querySelector("#jh-player-fields");
  const normalizeRosterKey=value=>slug(String(value||"")).replace(/[^a-z0-9]/g,"");
  const rosterSource=[p.group,p.team,p.name].filter(Boolean).map(normalizeRosterKey);
  const rosterKey=isNational&&window.JH_NATIONAL_PLAYERS?Object.keys(window.JH_NATIONAL_PLAYERS).find(key=>{const normalizedKey=normalizeRosterKey(key);return normalizedKey&&rosterSource.some(value=>value===normalizedKey||value.includes(normalizedKey));}):null;
  const nationalRoster=rosterKey?window.JH_NATIONAL_PLAYERS[rosterKey]:null;
  const clubRoster=isClub&&Array.isArray(p.players)?p.players:[];
  const renderPersonalization=()=>{
   if(person.value==="Aucune"){fields.innerHTML="";return}
   if(person.value==="Nom et numéro du joueur"){
    if(!isNational&&!isClub){fields.innerHTML='<p class="jh-player-note">Saisissez le nom et le numéro manuellement.</p><label for="jh-name">Nom du joueur</label><input id="jh-name" maxlength="40" placeholder="Nom"><label for="jh-number">Numéro</label><input id="jh-number" maxlength="3" inputmode="numeric" placeholder="Numéro">';return}
    const options=isNational?(Array.isArray(nationalRoster)?nationalRoster:[]):clubRoster;
    fields.innerHTML='<p class="jh-player-note">'+(options.length?(isNational?"Effectif national disponible. Sélectionnez un joueur pour remplir automatiquement son nom et son numéro.":"Effectif du club vérifié. Sélectionnez un joueur pour remplir automatiquement son nom et son numéro."):"Aucun effectif vérifié pour cette fiche. Vous pouvez saisir le nom et le numéro manuellement.")+'</p>'+(options.length?'<label for="jh-player-select">Joueur</label><select id="jh-player-select"><option value="">Choisir un joueur</option>'+options.map((x,i)=>{const playerName=Array.isArray(x)?x[0]:x.name;const playerNumber=Array.isArray(x)?x[2]:x.number;return '<option value="'+i+'">'+esc(playerName)+' — #'+esc(playerNumber)+'</option>'}).join("")+'</select>':'')+'<label for="jh-name">Nom sur le maillot</label><input id="jh-name" maxlength="40" placeholder="Nom"><label for="jh-number">Numéro</label><input id="jh-number" maxlength="3" inputmode="numeric" placeholder="Numéro">';
    const select=fields.querySelector("#jh-player-select");
    if(select)select.onchange=()=>{if(select.value===""){fields.querySelector("#jh-name").value="";fields.querySelector("#jh-number").value="";return}const chosen=options[Number(select.value)];if(chosen){const playerName=Array.isArray(chosen)?chosen[0]:chosen.name;const shirtName=Array.isArray(chosen)?chosen[1]:chosen.shirt;const playerNumber=Array.isArray(chosen)?chosen[2]:chosen.number;fields.querySelector("#jh-name").value=shirtName||playerName||"";fields.querySelector("#jh-number").value=playerNumber??"";}};
    return;
   }
   fields.innerHTML='<label for="jh-name">Nom personnalisé</label><input id="jh-name" maxlength="40" placeholder="Nom"><label for="jh-number">Numéro</label><input id="jh-number" maxlength="3" inputmode="numeric" placeholder="Numéro">';
  };
  person.onchange=renderPersonalization;
  if(isNational||isClub){
  }else{
   dialog.querySelector("#jh-no-patch").onchange=e=>{dialog.querySelectorAll(".jh-patch").forEach(x=>{x.disabled=e.target.checked;if(e.target.checked)x.checked=false})};
   dialog.querySelectorAll(".jh-patch").forEach(x=>x.onchange=()=>{if(x.checked)dialog.querySelector("#jh-no-patch").checked=false;if(![...dialog.querySelectorAll(".jh-patch")].some(y=>y.checked))dialog.querySelector("#jh-no-patch").checked=true});
  }
  dialog.querySelector("#jh-add").onclick=()=>{
   const size=dialog.querySelector("#jh-size").value;if(!size){alert("Veuillez choisir une taille.");return}
   const customName=dialog.querySelector("#jh-name")?.value.trim()||"",customNumber=dialog.querySelector("#jh-number")?.value.trim()||"";
   if(person.value!=="Aucune"&&(!customName||!customNumber)){alert("Complétez le nom et le numéro.");return}
   const patchSelections=(isNational||isClub)?[...dialog.querySelectorAll(".jh-patch-slot")].map((fieldset,index)=>{
    const input=fieldset.querySelector("input:checked");if(!input||!input.value)return null;
    const record=displayPatches.find(x=>String(x.id)===String(input.value));return record?{slot:index+1,id:record.id,label:record.label,image_url:record.image_url,extra_price_eur:Number(record.extra_price_eur)||0}:null;
   }).filter(Boolean):[];
   const patches=(isNational||isClub)?patchSelections.map(x=>x.label):[...dialog.querySelectorAll(".jh-patch:checked")].map(x=>x.value);
   const patchTotalEur=0;
   const selectedPlayer=person.value==="Nom et numéro du joueur"?(clubRoster.find(x=>(Array.isArray(x)?x[0]:x.name)===customName)||null):null;
   const next=read();next.push({id:Date.now().toString(36)+Math.random().toString(36).slice(2,7),name:p.name,category:p.category,team:p.group,model:p.name,season:p.season||"",kitType:p.kitType||"",version:p.version||"",supplier:p.supplier||"",supplierUrl:p.supplierUrl||p.sourceUrl||"",image:p.image||null,images:Array.isArray(p.images)?p.images:[],size,quantity:1,patches,patchSelections,patchTotalEur,personalization:person.value,player:person.value==="Nom et numéro du joueur"?customName:"",customName:person.value==="Nom et numéro personnalisés"?customName:"",customNumber,playerNumber:selectedPlayer?(Array.isArray(selectedPlayer)?selectedPlayer[2]:selectedPlayer.number)||"":""});
   write(next);close();showCart();
  };
 }
 window.JerseyHubOpenProduct=openProduct;
  // Le clic sur une fiche équipement ouvre sa fenêtre de choix (taille, patchs, personnalisation).
  document.addEventListener("click",e=>{
   const card=e.target.closest(".product-card[data-jh-product-card]");
   if(!card)return;
   const product=card._jhProduct;
   if(!product||isOutOfStock(product))return;
   openProduct(product);
  });
 renderCart();
 if(new URLSearchParams(location.search).get('openCart')==='1')showCart();
})();
