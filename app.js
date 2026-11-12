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
function nationalFlagMarkup(name,compact=false,large=false){
 const code=NATIONAL_FLAG_CODES[name];
 if(!code)return "";
 if(large){
  return '<img class="category-visual national-country-flag" src="https://flagcdn.com/w640/'+code+'.png" alt="Drapeau '+name+'" width="640" height="427" loading="lazy" decoding="async" referrerpolicy="no-referrer">';
 }
 const width=compact?40:80,height=compact?27:53;
 return '<img src="https://flagcdn.com/w'+width+'/'+code+'.png" alt="Drapeau '+name+'" width="'+width+'" height="'+height+'" loading="lazy" decoding="async" referrerpolicy="no-referrer" style="display:inline-block;width:'+width+'px;height:'+height+'px;object-fit:contain;border-radius:3px;vertical-align:middle">';
}
function clubLeagueVisual(name,compact=false,heading=false){
 const logos={
  "Premier League":{src:"https://commons.wikimedia.org/wiki/Special:FilePath/Premier%20League.svg",alt:"Logo officiel Premier League"},
  "Bundesliga":{src:"https://www.footylogos.com/downloads/logo/bundesliga-germany-logo-footylogos.svg",alt:"Logo Bundesliga"},
  "Saudi Pro League":{src:"https://commons.wikimedia.org/wiki/Special:FilePath/Saudi%20Pro%20League%20Logo.svg",alt:"Logo officiel Saudi Pro League"},
  "Liga Profesional Argentina":{src:"https://commons.wikimedia.org/wiki/Special:FilePath/Liga%20Profesional%20de%20F%C3%BAtbol%20%28Argentina%29%20wordmark.svg",alt:"Logo Liga Profesional Argentina"},
  "Campeonato Brasileiro Série A":{src:"https://commons.wikimedia.org/wiki/Special:FilePath/Campeonato%20Brasileiro%20S%C3%A9rie%20A%20logo%20%282026%29.svg",alt:"Logo Campeonato Brasileiro Série A 2026"},
  "Scottish Premiership":{src:"https://cdn.prod.website-files.com/68f550992570ca0322737dc2/68f97f250403a59958d81476_scottish-premiership-footballlogos-org.svg",alt:"Logo Scottish Premiership"},
  "UAE Pro League":{src:"https://www.uaepl.ae/web/images/ADNOC_PL.png",alt:"Logo officiel UAE Pro League"},
  "LaLiga":{src:"https://assets.laliga.com/assets/logos/LALIGA_RGB_h_monocromatico_positivo/LALIGA_RGB_h_monocromatico_positivo.png",alt:"Logo officiel LaLiga"},
  "Ligue 1":{src:"https://commons.wikimedia.org/wiki/Special:FilePath/Ligue%201%20McDonald%27s%20logo.svg",alt:"Logo officiel Ligue 1"},
  "MLS":{src:"https://commons.wikimedia.org/wiki/Special:FilePath/Major_League_Soccer_logo.svg",alt:"Logo officiel Major League Soccer"},
  "LMS":{src:"https://commons.wikimedia.org/wiki/Special:FilePath/MLS_crest_logo_RGB.svg",alt:"Logo officiel Major League Soccer"},
  "Serie A":{src:"https://images.legaseriea.it/image/private/t_q_good/v1762881268/prd/assets/competitions/Serie%20A.png",alt:"Logo officiel Serie A"},
  "Eredivisie":{src:"https://commons.wikimedia.org/wiki/Special:FilePath/Eredivisie%20nieuw%20logo%202017-.svg",alt:"Logo officiel Eredivisie"},
  "Liga Portugal":{src:"https://commons.wikimedia.org/wiki/Special:FilePath/Liga%20Portugal%20Betclic%20logo.svg",alt:"Logo officiel Liga Portugal"},
  "Primera División de Chile":{src:"https://www.anfp.cl/wp-content/uploads/2026/01/NOTA-LDP-BALON-1-1024x629.png",alt:"Identité officielle Liga de Primera Chile 2026"},
  "Belgique":{src:"https://commons.wikimedia.org/wiki/Special:FilePath/Belgian%20Pro%20League%20logo%20%282020%2C%20boxed%29.svg",alt:"Logo officiel Pro League Belgique"}
 };
 const normalized=slug(String(name||"")).replace(/[^a-z0-9]+/g," ").trim();
 const aliases={"la liga":"LaLiga","laliga":"LaLiga","liga espagnole":"LaLiga","championnat espagnol":"LaLiga","uae pro league":"UAE Pro League","uae pro league":"UAE Pro League","adnoc pro league":"UAE Pro League","major league soccer":"MLS","major league soccer mls":"MLS","lms":"MLS","mls soccer":"MLS"};
 const logo=(window.JH_CLUB_LEAGUE_LOGOS&&window.JH_CLUB_LEAGUE_LOGOS[name])||logos[name]||logos[aliases[normalized]];
 if(!logo)return "";
 const src=logo.src,alt=logo.alt;
 if(heading)return `<img src="${src}" alt="${alt}" width="64" height="64" loading="eager" style="display:block;width:64px;height:64px;object-fit:contain;background:#fff;padding:3px;border-radius:8px;flex:0 0 64px">`;
 return compact?`<img src="${src}" alt="${alt}" width="22" height="22" loading="lazy" style="display:inline-block;width:22px;height:22px;object-fit:contain;background:#fff;padding:3px;border-radius:4px;vertical-align:middle;flex-shrink:0">`:`<img class="category-visual league-visual" src="${src}" alt="${alt}" loading="lazy" decoding="async" referrerpolicy="no-referrer">`
}
function allNational(){return NATIONAL_REGIONS.flatMap(r=>r.items.map(([name,flag])=>({name,flag,group:r.name,kind:"national"})))}
function lifestyleCategories(){return LIFESTYLE.filter(c=>!/(lego|construction)/i.test(c.name))}
function allLifestyle(){return lifestyleCategories().flatMap(c=>[{name:c.name,emoji:c.emoji,desc:c.desc,kind:"lifestyle"},...c.items.map(name=>({name,flag:c.emoji,group:c.name,kind:"lifestyle"}))])}
function allClubs(){return CLUB_LEAGUES.flatMap(l=>l.items.map(name=>({name,flag:"⚽",group:l.name,kind:"clubs"})))}
function sideGroup(label,items,kind){
 const box=document.createElement("div");box.className="side-group";
 const h=document.createElement("h3");h.textContent=label;box.append(h);
 items.forEach(item=>{const b=document.createElement("button");b.className="side-item";const visual=kind==="national"?nationalFlagMarkup(item.name,true):(kind==="clubs"?(clubLeagueVisual(item.name,true)||(item.flag||item.emoji||"✦")):(item.flag||item.emoji||"✦"));const sideLabel=kind==="sports"&&/^(football américain|football americain|nfl)$/i.test(item.name)?"NFL":item.name;b.innerHTML=`<span class="side-flag">${visual}</span><span>${sideLabel}</span>`;b.onclick=()=>openGroup(kind,item.name);box.append(b)});
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
 const displayName=kind==="sports"&&/^(football américain|football americain)$/i.test(item.name)?"NFL":item.name;
 const visualKey=kind==="sports"&&displayName==="NFL"?"nfl":kind==="sports"?slug(item.name):kind==="shoes"?"shoes":kind==="national"?"national":kind==="clubs"?"clubs":slug(item.name);
 const categoryImages={national:"equipes-nationales",clubs:"clubs",NBA:"nba",NFL:"football-americain","Football américain":"football-americain","Football Americain":"football-americain",MLB:"baseball",NHL:"hockey",Rugby:"rugby","Autres articles":"autres-articles",shoes:"chaussures","Lifestyle & Accessoires":"lifestyle-accessoires",lego:"lego"};
 const imageKey=kind==="national"?categoryImages.national:kind==="clubs"&&item.name==="Clubs de football"?categoryImages.clubs:kind==="sports"?(displayName==="NFL"?categoryImages.NFL:categoryImages[item.name]):kind==="shoes"?categoryImages.shoes:kind==="lifestyle"&&item.name==="Lifestyle & Accessoires"?categoryImages["Lifestyle & Accessoires"]:kind==="lego"?categoryImages.lego:null;
 const categoryPhotoMap={
  "equipes-nationales":"https://images.pexels.com/photos/28827841/pexels-photo-28827841/free-photo-of-illuminated-soccer-stadium-at-night.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "clubs":"https://images.pexels.com/photos/16651578/pexels-photo-16651578/free-photo-of-a-football-player-running-on-a-pitch-during-a-match.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "nba":"https://images.pexels.com/photos/32835088/pexels-photo-32835088/free-photo-of-outdoor-basketball-game-with-player-dribbling.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "football-americain":"https://images.pexels.com/photos/19912316/pexels-photo-19912316/free-photo-of-american-footballer-standing-with-ball.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "baseball":"https://images.pexels.com/photos/17723981/pexels-photo-17723981/free-photo-of-a-baseball-player-is-running-on-the-field.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "hockey":"https://images.pexels.com/photos/35643108/pexels-photo-35643108/free-photo-of-ice-hockey-players-on-rink-during-game.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "rugby":"https://images.pexels.com/photos/5116575/pexels-photo-5116575.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "autres-articles":"https://images.pexels.com/photos/13142769/pexels-photo-13142769.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "chaussures":"https://images.pexels.com/photos/7271269/pexels-photo-7271269.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "lifestyle-accessoires":"https://images.pexels.com/photos/29160881/pexels-photo-29160881/free-photo-of-trendy-urban-streetwear-look-with-headphones.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "lego":"https://images.pexels.com/photos/11015132/pexels-photo-11015132.jpeg?auto=compress&cs=tinysrgb&w=1600"
 };
 const nationalFlag=nationalFlagMarkup(item.name,false,true);
  const visual=kind==="national"?(nationalFlag||`<img class="category-visual" src="${categoryPhotoMap["equipes-nationales"]}" alt="Équipe nationale ${displayName}" loading="lazy" decoding="async" referrerpolicy="no-referrer">`):clubLeagueVisual(item.name,false)||(imageKey?`<img class="category-visual" src="${categoryPhotoMap[imageKey]||("assets/categories/"+imageKey+".svg")}" alt="" loading="lazy" decoding="async" referrerpolicy="no-referrer">`:`<span class="emoji">${emoji}</span>`);
 div.innerHTML=`<div class="category-art art-${visualKey}">${visual}</div><div class="category-info"><h3>${displayName}</h3><p>${item.desc||item.group||"Découvrir les modèles"}</p></div>`;
 // Navigation attachée directement à chaque carte, sans délégation globale.
 div.addEventListener("click",()=>{
  if(kind==="lego"){window.location.href="lego.html";return}
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
 const art=document.createElement('div');art.className='product-art';
 if(p.image){
  const img=document.createElement('img');img.className='product-card-image';img.src=p.image;img.alt=p.name||'Maillot';img.loading='lazy';img.decoding='async';art.append(img);
 }else{
  const shirt=document.createElement('div');shirt.className='shirt';const number=document.createElement('span');number.textContent=p.number||'10';shirt.append(number);art.append(shirt);
 }
 const info=document.createElement('div');info.className='product-info';
 const heading=document.createElement('h3');heading.textContent=p.name||'Maillot';info.append(heading);
 if(out){const badge=document.createElement('span');badge.className='jh-stock-badge';badge.textContent='RUPTURE DE STOCK';info.append(badge);}
 const meta=[p.season,p.kitType,p.version].filter(Boolean);
 if(meta.length){const line=document.createElement('p');line.className='product-meta';line.textContent=meta.join(' · ');info.append(line);}
 const description=document.createElement('p');description.textContent=p.description||'Modèle présenté dans le catalogue';info.append(description);
 const sizes=Array.isArray(p.sizes)?p.sizes.filter(s=>typeof s==='string'&&s.trim()):[];
 if(sizes.length){
  const label=document.createElement('small');label.className='product-size-label';label.textContent='Tailles indiquées';info.append(label);
  const sizeBox=document.createElement('div');sizeBox.className='sizes';sizes.forEach(value=>{const chip=document.createElement('span');chip.className='size';chip.textContent=value;sizeBox.append(chip)});info.append(sizeBox);
 }else{
  const pending=document.createElement('small');pending.className='product-size-pending';pending.textContent='Tailles à confirmer';info.append(pending);
 }
 const hint=document.createElement('small');hint.className='jh-open-hint';hint.textContent=out?'Article indisponible — sélection désactivée':'Cliquer pour voir les photos et les options';info.append(hint);
 div.append(art,info);div._jhProduct=p;div.dataset.jhProductCard='true';
 if(!out)div.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();div.click()}};
 return div;
}
function archiveProductCard(p){
 const div=document.createElement("article");
 div.className="product-card jh-r2-archive-card";
 div.setAttribute("aria-label","Aperçu photo uniquement du maillot "+p.reference);
 const art=document.createElement("div");art.className="product-art";
 const img=document.createElement("img");img.src=p.image;img.alt=p.name;img.loading="lazy";img.style.cssText="max-width:100%;max-height:190px;object-fit:contain";
 art.append(img);
 const info=document.createElement("div");info.className="product-info";
 const heading=document.createElement("h3");heading.textContent=p.name;
 const desc=document.createElement("p");desc.textContent="Photos archivées uniquement — tailles et fiche fournisseur non vérifiées";
 const hint=document.createElement("small");hint.className="jh-open-hint";hint.textContent="Achat indisponible tant que les tailles exactes ne sont pas vérifiées";
 info.append(heading,desc,hint);div.append(art,info);
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
function navigateBannerCategory(action){
 const sportAliases={
  nba:["NBA"],"football-americain":["Football américain","Football Americain","NFL"],nfl:["NFL","Football américain","Football Americain"],
  mlb:["MLB","Baseball"],nhl:["NHL","Hockey sur glace","Hockey"],rugby:["Rugby"]
 };
 if(action==="national"){openView("national");return}
 if(action==="clubs"){openView("clubs");return}
 if(action==="shoes"){openView("shoes");return}
 if(action==="lifestyle"){openView("lifestyle");return}
 if(action==="lego"){window.location.href="lego.html";return}
 const candidates=sportAliases[action]||[];
 const found=OTHER_SPORTS.find(item=>candidates.some(name=>slug(item.name)===slug(name)));
 openGroup("sports",found?found.name:candidates[0]||action);
}
function renderHome(){
 catalogPageHistory=[];
 currentView="home";currentGroup=null;setHeading("BIENVENUE","Nos catégories","Accueil");
 const banner=$("#jh-category-banner");
 const mobile=window.matchMedia("(max-width:760px)").matches;
 grid.innerHTML="";
 if(mobile){
  if(banner)banner.hidden=true;
  const mobileCategories=[
   {name:"Équipes nationales",kind:"national",view:"national",desc:"Les sélections du monde"},
   {name:"Clubs de football",kind:"clubs",view:"clubs",desc:"Clubs et championnats"},
   {name:"NBA",kind:"sports",desc:"Basketball"},
   {name:"NFL",kind:"sports",desc:"Football américain"},
   {name:"MLB",kind:"sports",desc:"Baseball"},
   {name:"NHL",kind:"sports",desc:"Hockey sur glace"},
   {name:"Rugby",kind:"sports",desc:"Clubs et sélections"},
   {name:"Chaussures",kind:"shoes",view:"shoes",desc:"Marques et modèles"},
   {name:"Lifestyle & Accessoires",kind:"lifestyle",view:"lifestyle",desc:"Accessoires et style"},
   {name:"LEGO",kind:"lego",desc:"Univers construction"}
  ];
  mobileCategories.forEach(item=>{
   const emoji=item.name==="NBA"?"🏀":item.name==="NFL"?"🏈":item.name==="MLB"?"⚾":item.name==="NHL"?"🏒":item.name==="Rugby"?"🏉":item.name==="LEGO"?"🧱":"⚽";
   const tile=card({name:item.name,desc:item.desc,flag:emoji},item.kind);
   if(item.view)tile.dataset.jhView=item.view;
   grid.append(tile);
  });
  grid.classList.add("jh-mobile-home-grid");
  grid.hidden=false;
 }else{
  if(banner)banner.hidden=false;
  grid.classList.remove("jh-mobile-home-grid");
  grid.hidden=true;
 }
 $("#emptyState").hidden=true;
 const pager=$("#catalogPagination");if(pager)pager.innerHTML="";
}
function openView(view){
 grid.classList.remove("jh-mobile-home-grid");
 const banner=$("#jh-category-banner");if(banner)banner.hidden=true;
 rememberNavigation();
 catalogPageHistory=[];
 if(view==="home"){renderHome();return}
 currentView=view;currentGroup=null;grid.innerHTML="";grid.hidden=false;$("#emptyState").hidden=true;
 if(view==="national"){
  setHeading("SÉLECTIONS DU MONDE","Équipes nationales","Accueil / Équipes nationales");
  NATIONAL_REGIONS.forEach(r=>{const h=document.createElement("div");h.className="region-heading";h.style.cssText="grid-column:1/-1;color:#f4bd22;font-weight:800;letter-spacing:1px;padding:12px 0 0";h.textContent=r.name;grid.append(h);r.items.forEach(([name,flag])=>grid.append(card({name,flag,group:r.name},"national")))});
 }else if(view==="clubs"){
  setHeading("FOOTBALL","Clubs et championnats","Accueil / Équipe de club");
  CLUB_LEAGUES.forEach(l=>{
   const h=document.createElement("div");
   h.style.cssText="grid-column:1/-1;display:flex;align-items:center;gap:12px;color:#f4bd22;font-weight:800;letter-spacing:1px;padding:12px 0 0;min-height:60px";
   const label=document.createElement("span");label.textContent=l.name;h.append(label);
   grid.append(h);
   l.items.forEach(name=>grid.append(card({name,flag:"⚽",group:l.name},"clubs")));
  });
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
function showConstructionState(heading="En construction",message="Cette rubrique sera disponible dès que son catalogue sera prêt."){
 const state=$("#emptyState");state.innerHTML="";
 const panel=document.createElement("div");panel.className="jh-construction-visual";panel.setAttribute("role","status");
 const icon=document.createElement("div");icon.className="jh-construction-icon";icon.textContent="🚧";
 const label=document.createElement("span");label.className="jh-construction-label";label.textContent="EN CONSTRUCTION";
 const title=document.createElement("h3");title.textContent=heading;
 const detail=document.createElement("p");detail.textContent=message;
 panel.append(icon,label,title,detail);state.append(panel);state.hidden=false;grid.hidden=true;
 if(!document.getElementById("jh-construction-styles")){const style=document.createElement("style");style.id="jh-construction-styles";style.textContent=".jh-construction-visual{width:min(100%,520px);margin:26px auto;padding:30px 22px;text-align:center;border:1px solid #665326;border-radius:16px;background:radial-gradient(ellipse at 50% 0%,#30250f 0,#15120c 52%,#0d0d0d 100%);box-shadow:0 14px 36px #0008}.jh-construction-icon{display:grid;place-items:center;width:86px;height:86px;margin:0 auto 14px;border:1px solid #d7ad45;border-radius:22px;background:linear-gradient(145deg,#382d16,#17130b);font-size:48px}.jh-construction-label{display:inline-block;padding:6px 12px;border:1px solid #d7ad45;border-radius:30px;color:#f4bd22;font-size:11px;font-weight:900;letter-spacing:1.6px}.jh-construction-visual h3{margin:14px 0 7px;color:#fff;font-size:22px}.jh-construction-visual p{max-width:390px;margin:0 auto;color:#c7c0ae;font-size:13px;line-height:1.6}";document.head.appendChild(style);}
}
async function openGroup(kind,name){
 const banner=$("#jh-category-banner");if(banner)banner.hidden=true;
 grid.hidden=false;
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
  if(!teams.length){showConstructionState("Clubs en construction","Les clubs de cette compétition seront ajoutés après vérification de leurs fiches fournisseur.");}
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
 if(kind==="clubs"){
  const leagueEntry=Object.entries(CLUB_TEAM_GROUPS||{}).find(([league,teams])=>Array.isArray(teams)&&teams.includes(name));
  if(leagueEntry){
   const league=leagueEntry[0];
   const countryEntry=CLUB_LEAGUES.find(item=>item.items.includes(league));
   const country=countryEntry?.name;
   const verified=PRODUCTS.filter(isReadyForCatalog).filter(p=>p.category==="clubs"&&p.group===name);
   // Ajouter les fiches clubs déjà vérifiées dans le catalogue source indépendant.
   // Les fiches existantes restent prioritaires et ne sont jamais remplacées.
   const sourceVerified=typeof CLUB_PRODUCTS!=="undefined"&&Array.isArray(CLUB_PRODUCTS)
    ? CLUB_PRODUCTS.filter(isReadyForCatalog).filter(p=>p.category==="clubs"&&(p.group||p.team)===name)
    : [];
   setHeading("ÉQUIPE DE CLUB",name,"Accueil / Clubs / "+league+" / "+name);
   grid.innerHTML="";grid.hidden=false;$("#emptyState").hidden=true;
   $("#resultCount").textContent="Chargement des maillots…";
   let archive=[];
   try{
    if(!country||!window.supabase||!window.JERSEYHUB_SUPABASE)throw new Error("Connexion au catalogue d’images indisponible");
    const client=window.supabase.createClient(window.JERSEYHUB_SUPABASE.url,window.JERSEYHUB_SUPABASE.anonKey);
    const {data,error}=await client.rpc("jerseyhub_club_gallery",{p_country:country,p_club:name});
    if(error)throw error;
    archive=(data||[]).map(row=>({r2Archive:true,reference:String(row.product_ref),name:"Maillot "+name+" — Réf. "+row.product_ref,category:"clubs",group:name,team:name,image:row.image_url,images:Array.isArray(row.images)?row.images:[row.image_url],sizes:[...(window.JH_CLUB_DEFAULT_SIZES||["S","M","L","XL","XXL","3XL","4XL"])],sizeAudience:"adult",description:"Modèle issu de la galerie du club. Grille de tailles commune reprise des fiches Standard, Anderlecht et Bruges. La disponibilité finale de la taille sera confirmée lors du traitement de la commande."}));
   }catch(error){console.warn("Galerie R2 indisponible pour "+name,error);}
   if(currentView!=="clubs"||currentGroup!==name)return;
   const seenClubProducts=new Set();
   const purchasable=[...verified,...sourceVerified].filter(product=>{
    const key=String(product.supplierUrl||product.sourceUrl||((product.group||product.team||"")+"|"+product.name)).trim().toLowerCase();
    if(seenClubProducts.has(key))return false;
    seenClubProducts.add(key);
    return true;
   });
   // Les images R2 sans fiche fournisseur/taille restent consultables, mais ne
   // doivent jamais ouvrir une fenêtre d'achat avec un sélecteur vide.
   const fallbackProduct = !purchasable.length && !archive.length ? [{name:"Maillot "+name,category:"clubs",group:name,team:name,sizes:[...(window.JH_CLUB_DEFAULT_SIZES||["S","M","L","XL","XXL","3XL","4XL"])],sizeAudience:"adult",description:"Fiche de commande simplifiée pour "+name+". Grille de tailles commune reprise des fiches Standard, Anderlecht et Bruges. La disponibilité finale de la taille sera confirmée lors du traitement de la commande."}] : [];
    const all=[...purchasable,...archive,...fallbackProduct];
   renderPagedProducts(all);
   if(!all.length){showConstructionState("Catalogue en construction","Les photos et les fiches de ce club seront affichées dès qu’elles seront prêtes.");}
    $("#resultCount").textContent=all.length?(all.length+" maillot(s) sélectionnable(s) · disponibilité confirmée lors du traitement"):"";
   return;
  }
 }
 if(["national","clubs","sports"].includes(kind)){
  const matches=PRODUCTS.filter(isReadyForCatalog).filter(p=>p.category===kind&&p.group===name);
  setHeading(kind==="national"?"ÉQUIPE NATIONALE":kind==="clubs"?"ÉQUIPE DE CLUB":"AUTRES SPORTS",name,`Accueil / ${name}`);
  grid.innerHTML="";grid.hidden=false;$("#emptyState").hidden=true;
   renderPagedProducts(matches);
  if(!matches.length){showConstructionState("Articles en construction","Les photos et les tailles seront affichées dès que les fiches auront été vérifiées.");}
  $("#resultCount").textContent=matches.length?`${matches.length} modèle(s)`:"";
  return;
 }
 const matches=PRODUCTS.filter(isReadyForCatalog).filter(p=>p.category===kind&&p.group===name);
 setHeading(kind==="national"?"ÉQUIPE NATIONALE":kind==="clubs"?"ÉQUIPE DE CLUB":kind==="shoes"?"MARQUE DE CHAUSSURES":kind==="lifestyle"?"LIFESTYLE & ACCESSOIRES":"CATÉGORIE",name,`Accueil / ${name}`);
 grid.innerHTML="";
 renderPagedProducts(matches);
 if(!matches.length){showConstructionState("Catalogue en construction",kind==="shoes"?"Les modèles, photos et pointures seront ajoutés après vérification.":"Les modèles de cette catégorie seront ajoutés après vérification des photos et des tailles.");}
  else{$("#emptyState").hidden=true;grid.hidden=false}
 $("#resultCount").textContent=matches.length?`${matches.length} modèle(s)`:"";
}
async function applySearch(){
 const banner=$("#jh-category-banner");if(banner)banner.hidden=true;
 query=slug($("#searchInput").value.trim());
 if(!query){currentView==="home"?renderHome():openView(currentView);return}
 const entries=[...allNational(),...allClubs(),...OTHER_SPORTS.map(x=>({...x,kind:"sports"})),...SHOE_BRANDS.map(x=>({...x,kind:"shoes"})),...allLifestyle()].filter(x=>slug(x.name).includes(query));
 const prods=PRODUCTS.filter(isReadyForCatalog).filter(p=>slug(p.name+" "+p.group).includes(query));
 setHeading("RECHERCHE",`Résultats pour « ${$("#searchInput").value} »`,"Accueil / Recherche");
 grid.innerHTML="";grid.hidden=false;$("#emptyState").hidden=true;
 const prefixNodes=entries.map(x=>card(x,x.kind));renderPagedProducts(prods,prefixNodes);
 if(!entries.length&&!prods.length){$("#emptyState").hidden=false;grid.hidden=true}
}
window.addEventListener("load",function(){
 if(!window.supabase||!window.JERSEYHUB_SUPABASE)return;
 const client=window.supabase.createClient(window.JERSEYHUB_SUPABASE.url,window.JERSEYHUB_SUPABASE.anonKey);
 client.from("club_league_logos").select("league_name,image_url").then(function(result){
  if(result.error){console.warn("Logo championnat non chargé",result.error);return;}
  window.JH_CLUB_LEAGUE_LOGOS={};
  (result.data||[]).forEach(function(row){window.JH_CLUB_LEAGUE_LOGOS[row.league_name]={src:row.image_url,alt:"Logo personnalisé "+row.league_name};});
  document.querySelectorAll('.category-card[data-jh-kind="clubs"][data-jh-name="MLS"] .category-art').forEach(function(el){el.innerHTML=clubLeagueVisual("MLS",false);});
  document.querySelectorAll(".side-item").forEach(function(button){var label=button.querySelector("span:last-child"),flag=button.querySelector(".side-flag");if(label&&label.textContent.trim()==="MLS"&&flag)flag.innerHTML=clubLeagueVisual("MLS",true);});
 });
});
renderHome();
document.querySelectorAll("[data-jh-banner-action]").forEach(button=>button.addEventListener("click",()=>navigateBannerCategory(button.dataset.jhBannerAction)));
document.querySelectorAll("[data-view]").forEach(b=>b.addEventListener("click",()=>{
 document.querySelectorAll(".nav-link").forEach(x=>x.classList.remove("active"));
 b.classList.add("active");
 const menu=$(".main-nav");
 if(menu)menu.classList.remove("open");
 const mobileMenu=$("#mobileMenu");
 if(mobileMenu){mobileMenu.setAttribute("aria-expanded","false");mobileMenu.setAttribute("aria-label","Ouvrir le menu");}
 openView(b.dataset.view);
 const heading=document.querySelector(".section-heading");
 if(heading&&window.matchMedia("(max-width:760px)").matches)heading.scrollIntoView({block:"start",behavior:"smooth"});
}));
$("#searchInput").addEventListener("input",applySearch);
$("#sortSelect").addEventListener("change",()=>{const cards=[...grid.children];cards.sort((a,b)=>$("#sortSelect").value==="az"?a.textContent.localeCompare(b.textContent,"fr"):b.textContent.localeCompare(a.textContent,"fr"));cards.forEach(c=>grid.append(c))});
$("#mobileMenu").onclick=()=>{const menu=$(".main-nav"),open=!menu.classList.contains("open");menu.classList.toggle("open",open);$("#mobileMenu").setAttribute("aria-expanded",String(open));$("#mobileMenu").setAttribute("aria-label",open?"Fermer le menu":"Ouvrir le menu");};


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
 .jh-size-picker{position:relative;width:100%;z-index:2}.jh-size-trigger{display:flex;align-items:center;justify-content:space-between;gap:12px;width:100%;min-height:48px;padding:12px;background:#080808;border:1px solid #777;border-radius:8px;color:#fff;text-align:left;font:inherit;cursor:pointer;touch-action:manipulation;-webkit-appearance:none;appearance:none}.jh-size-trigger:disabled{opacity:.55;cursor:not-allowed}.jh-size-options{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin-top:9px;padding:10px;border:1px solid #66552d;border-radius:9px;background:#191919}.jh-size-options[hidden]{display:none!important}.jh-size-option{min-height:44px;padding:10px;border:1px solid #555;border-radius:7px;background:#262626;color:#fff;font:inherit;font-weight:800;cursor:pointer;touch-action:manipulation}.jh-size-option:active{background:#6a511a;border-color:#f4bd22}
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
  const rows=cart.map((x,i)=>'<div class="jh-cart-row"><div><b>'+esc(x.name)+'</b><small>'+esc([x.season,x.kitType,x.version].filter(Boolean).join(" · "))+(x.season||x.kitType||x.version?" · ":"")+'Taille : '+(x.sizeAudience?(x.sizeAudience==="kids"?"Enfant ":"Adulte "):"")+esc(x.size)+' · Qté : '+esc(x.quantity)+'</small><small>Patch(s) : '+esc((x.patches||[]).join(", ")||"Aucun")+'</small><small>Personnalisation : '+esc(x.personalization||"Aucune")+(x.player?" — "+esc(x.player):"")+(x.customName?" — "+esc(x.customName):"")+(x.customNumber?" #"+esc(x.customNumber):"")+'</small></div><button class="jh-remove" data-remove="'+i+'" type="button">Supprimer</button></div>').join("");
  open('<h2>Mon panier ('+cart.length+')</h2>'+(rows||'<p>Votre panier est vide pour le moment.</p>')+'<div class="jh-actions"><button class="jh-secondary" id="jh-continue">Continuer mes achats</button><button class="jh-primary" id="jh-checkout" '+(!cart.length?'disabled':'')+'>Continuer vers Mon compte</button></div>');
  dialog.dataset.mode="cart";
  dialog.querySelector("#jh-continue").onclick=close;
  dialog.querySelector("#jh-checkout").onclick=()=>{location.href="compte.html?checkout=1"};
  dialog.querySelectorAll("[data-remove]").forEach(b=>b.onclick=()=>{const next=read();next.splice(Number(b.dataset.remove),1);write(next)});
 }
 trigger.onclick=showCart;
 async function openProduct(p){
  activeProduct=p;
  dialog.dataset.mode="product";
  const normalizeSizeList=values=>(values||[]).flatMap(raw=>{
   const value=String(raw).trim().replace(/–/g,"-");
   const range=value.match(/^(S|M|L|XL)\s*-\s*(2XL|3XL|4XL)$/i);
   if(!range)return [value];
   const order=["S","M","L","XL","2XL","3XL","4XL"];
   return order.slice(order.indexOf(range[1].toUpperCase()),order.indexOf(range[2].toUpperCase())+1);
  }).filter((v,i,a)=>a.indexOf(v)===i);
  // Pour les clubs, récupérer les tailles de la fiche catalogue source si la carte
  // a perdu son tableau sizes lors de son chargement. Correspondance stricte par URL
  // fournisseur, puis par nom + club ; aucune grille générique n'est inventée.
  const clubSourceProducts=typeof CLUB_PRODUCTS!=="undefined"&&Array.isArray(CLUB_PRODUCTS)?CLUB_PRODUCTS:[];
  const clubSource= p.category==="clubs" ? clubSourceProducts.find(item =>
    (p.supplierUrl && (item.supplierUrl===p.supplierUrl || item.sourceUrl===p.supplierUrl)) ||
    (p.sourceUrl && (item.supplierUrl===p.sourceUrl || item.sourceUrl===p.sourceUrl)) ||
    (item.name===p.name && (item.group||item.team)===(p.group||p.team))
  ) : null;
  const cleanSizes=values=>normalizeSizeList(values).filter(value=>value&&!/^(à confirmer|a confirmer|unknown|tbc)$/i.test(value));
  const adultSizes=cleanSizes(p.adultSizes);
  const kidsSizes=cleanSizes(p.kidsSizes);
  const hasSeparateAudiences=p.category!=="clubs"&&adultSizes.length>0&&kidsSizes.length>0;
  let selectedSizeAudience=p.category==="clubs"?"adult":(hasSeparateAudiences?"adult":((p.sizeAudience==="kids"||p.version==="kids")?"kids":"adult"));
  let sizes=cleanSizes(hasSeparateAudiences?adultSizes:(p.sizes||[]));
  if(p.category==="clubs"&&!sizes.length){
    const sourceSizes=cleanSizes(clubSource?.sizes);
    sizes=sourceSizes.length?sourceSizes:(selectedSizeAudience==="kids"?kidsSizes:adultSizes);
  }
  const isNational=p.category==="national",isClub=p.category==="clubs";
  const sizeOptions=sizes.length?sizes.map(s=>'<option>'+esc(s)+'</option>').join(""):'<option value="À confirmer">À confirmer</option>';
  const sizeAudienceMarkup=hasSeparateAudiences?'<label for="jh-size-audience">Catégorie de taille</label><select id="jh-size-audience"><option value="adult">Adulte</option><option value="kids">Enfant</option></select>':"";
  const clubSizeControl='<select id="jh-size" required '+(!sizes.length?'disabled':'')+'><option value="">Sélectionnez une taille</option>'+sizeOptions+'</select>';
  const personalizationAllowed=true;
  // Les patchs sont proposés uniquement sur les maillots des équipes nationales.
  // On privilégie les options configurées pour l'équipe/le modèle ; à défaut,
  // on rétablit la bibliothèque visuelle historique des patchs nationaux.
  let nationalPatchOptions=[];
  if(isNational&&window.supabase&&window.JERSEYHUB_SUPABASE){
   try{
    const patchClient=window.supabase.createClient(window.JERSEYHUB_SUPABASE.url,window.JERSEYHUB_SUPABASE.anonKey);
    const patchTeam=String(p.group||p.team||p.name||"").trim();
    const {data:patchRows,error:patchError}=await patchClient.from("patch_options")
     .select("id,team_name,product_name,slot_number,label,image_url,extra_price_eur,sort_order")
     .eq("category","national").eq("team_name",patchTeam).eq("is_active",true)
     .order("slot_number",{ascending:true}).order("sort_order",{ascending:true});
    if(!patchError&&Array.isArray(patchRows)){
     nationalPatchOptions=patchRows.filter(option=>!option.product_name||option.product_name===p.name);
    }
   }catch(error){console.warn("Chargement des patchs nationaux impossible.",error)}
  }
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
  if(isNational&&!nationalPatchOptions.length)nationalPatchOptions=builtInPatchStyles;
  const nationalPatchSlotNames={1:"Compétition / qualifications",2:"FIFA / message",3:"Match / phase du tournoi",4:"Distinction / record",5:"Variantes FIFA / DEBUT"};
  const patchSlotsMarkup=isNational&&nationalPatchOptions.length
   ?'<section class="jh-options-block jh-patch-selector"><h3>2. Patchs officiels</h3><p class="jh-patch-intro">Choisissez les patchs disponibles pour votre maillot. Chaque emplacement est facultatif.</p>'+[1,2,3,4,5].map(slot=>{
     const options=nationalPatchOptions.filter(option=>Number(option.slot_number)===slot);
     if(!options.length)return "";
     return '<fieldset class="jh-patch-slot"><legend>Patch '+slot+' — '+nationalPatchSlotNames[slot]+'</legend><div class="jh-patch-grid"><label class="jh-patch-choice jh-patch-none"><input type="radio" name="jh-patch-slot-'+slot+'" value="" checked><span class="jh-patch-thumb">＋</span><span><b>Aucun patch</b></span></label>'+options.map((option,index)=>'<label class="jh-patch-choice"><input type="radio" name="jh-patch-slot-'+slot+'" value="'+index+'"><img class="jh-patch-thumb" src="'+esc(option.image_url)+'" alt="'+esc(option.label)+'" loading="lazy"><span><b>'+esc(option.label)+'</b></span></label>').join("")+'</div></fieldset>';
    }).join("")+'</section>'
   :"";
  const galleryImages=Array.isArray(p.images)&&p.images.length?p.images:(p.image?[p.image]:[]);
  let galleryIndex=0;
  const productVisual=galleryImages.length
   ? '<div class="jh-product-gallery"><div class="jh-gallery-main-wrap"><img id="jh-product-gallery-image" class="jh-gallery-main" src="'+esc(galleryImages[0])+'" alt="'+esc(p.name)+' - photo 1"><div id="jh-gallery-zoom" class="jh-gallery-zoom" aria-hidden="true"><span>Zoom</span></div><button type="button" class="jh-gallery-enlarge" id="jh-gallery-enlarge">Agrandir l’image</button></div><div class="jh-gallery-side"><div class="jh-gallery-thumbs">'+galleryImages.map((src,i)=>'<button type="button" class="jh-gallery-thumb'+(i===0?' active':'')+'" data-gallery-index="'+i+'" aria-label="Afficher la photo '+(i+1)+'"><img src="'+esc(src)+'" alt=""></button>').join('')+'</div><div class="jh-gallery-controls"><button type="button" class="jh-secondary" id="jh-gallery-prev" aria-label="Photo précédente">←</button><span id="jh-gallery-count">1 / '+galleryImages.length+'</span><button type="button" class="jh-secondary" id="jh-gallery-next" aria-label="Photo suivante">→</button></div></div><div class="jh-gallery-lightbox" id="jh-gallery-lightbox" hidden><button type="button" id="jh-gallery-lightbox-close" aria-label="Fermer">×</button><img id="jh-gallery-lightbox-image" src="'+esc(galleryImages[0])+'" alt="'+esc(p.name)+' agrandie"></div></div>'
   : '<div class="jh-product-test-shirt" aria-label="Visuel de démonstration"></div>';
  const outOfStock=isOutOfStock(p);
  const sizeSummary=sizes.length?'<p class="jh-option-summary" id="jh-size-summary"><b>'+(selectedSizeAudience==="kids"?"Tailles enfants :":"Tailles adultes :")+'</b> '+sizes.map(esc).join(' · ')+'</p>':'<p class="jh-option-summary" id="jh-size-summary">Taille à confirmer auprès du fournisseur.</p>';
  const stockNotice=outOfStock?'<p class="jh-stock-warning">PAS DE STOCK — Cet article ne peut pas être ajouté à la commande pour le moment.</p>':'';
  const personalizationOptions=isClub?'<option value="Nom et numéro personnalisés">Personnaliser avec mon nom et mon numéro</option>':(personalizationAllowed?'<option value="Nom et numéro du joueur">Choisir un joueur</option><option value="Nom et numéro personnalisés">Personnalisation manuelle</option>':"");
  const personalizationNotice=isClub&&!personalizationAllowed?'<p class="jh-player-note">La personnalisation nom/numéro n’est pas encore confirmée pour ce modèle.</p>':"";
  const productMeta=[p.season,p.kitType,p.version].filter(Boolean).map(esc).join(" · ");
  open('<h2>'+esc(p.name)+'</h2>'+productVisual+(productMeta?'<p class="jh-option-summary">'+productMeta+'</p>':"")+'<p style="color:#bbb">'+esc(p.description||"Choisissez les options de votre article.")+'</p>'+stockNotice+'<section class="jh-options-block"><h3>1. Choisir la taille</h3>'+sizeAudienceMarkup+sizeSummary+'<label for="jh-size">Taille *</label>'+clubSizeControl+'</section>'+patchSlotsMarkup+'<section class="jh-options-block"><h3>3. Personnalisation</h3>'+personalizationNotice+'<label for="jh-person">Nom et numéro</label><select id="jh-person"><option value="Aucune">Aucune personnalisation</option>'+personalizationOptions+'</select><div id="jh-player-fields"></div></section><div class="jh-actions"><button class="jh-secondary" id="jh-cancel">Annuler</button><button class="jh-primary" id="jh-add">Ajouter à ma commande</button></div>');
  const sizeAudienceSelect=dialog.querySelector("#jh-size-audience");
  if(sizeAudienceSelect)sizeAudienceSelect.onchange=()=>{
   selectedSizeAudience=sizeAudienceSelect.value;
   sizes=selectedSizeAudience==="kids"?kidsSizes:adultSizes;
   const select=dialog.querySelector("#jh-size");
   select.innerHTML='<option value="">Sélectionnez une taille</option>'+sizes.map(s=>'<option>'+esc(s)+'</option>').join("");
   const summary=dialog.querySelector("#jh-size-summary");
   if(summary)summary.innerHTML='<b>'+(selectedSizeAudience==="kids"?"Tailles enfants :":"Tailles adultes :")+'</b> '+sizes.map(esc).join(" · ");
  };
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
  // Les tailles listées proviennent de la fiche produit vérifiée. Une audience non classée (adulte/enfant) ne doit pas bloquer leur sélection.
  if(!sizes.length){
   const sizeSelect=dialog.querySelector("#jh-size");
   if(sizeSelect)sizeSelect.disabled=true;
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
  // Les 48 effectifs présents dans national-players.js sont les listes officielles FIFA 2026.
  // Ne pas les proposer sur un maillot d'une autre saison : le flocage doit correspondre à l'époque du modèle.
  const fifaRosterYearCompatible=/(?:2026|26[-/ ]?27)/i.test(String(p.season||"")+" "+String(p.name||""));
  const rosterKey=isNational&&fifaRosterYearCompatible&&window.JH_NATIONAL_PLAYERS?Object.keys(window.JH_NATIONAL_PLAYERS).find(key=>{const normalizedKey=normalizeRosterKey(key);return normalizedKey&&rosterSource.some(value=>value===normalizedKey||value.includes(normalizedKey));}):null;
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
  dialog.querySelector("#jh-add").onclick=()=>{
   const size=dialog.querySelector("#jh-size")?.value||"";if(!size){alert("Veuillez choisir une taille.");return}if(!sizes.includes(size)){alert("Cette taille n’est pas disponible pour cette fiche.");return}
   const customName=dialog.querySelector("#jh-name")?.value.trim()||"",customNumber=dialog.querySelector("#jh-number")?.value.trim()||"";
   if(person.value!=="Aucune"&&(!customName||!customNumber)){alert("Complétez le nom et le numéro.");return}
   const patchSelections=isNational?[1,2,3,4,5].flatMap(slot=>{
    const chosen=dialog.querySelector('input[name="jh-patch-slot-'+slot+'"]:checked');
    if(!chosen||chosen.value==="")return [];
    const slotOptions=nationalPatchOptions.filter(row=>Number(row.slot_number)===slot);
    const selected=slotOptions[Number(chosen.value)];
    return selected?[{slot,label:selected.label,image_url:selected.image_url,extra_price_eur:Number(selected.extra_price_eur)||0}]:[];
   }):[];
   const patches=patchSelections.map(selection=>selection.label);
   const patchTotalEur=patchSelections.reduce((total,selection)=>total+(Number(selection.extra_price_eur)||0),0);
   const selectedPlayer=person.value==="Nom et numéro du joueur"?(clubRoster.find(x=>(Array.isArray(x)?x[0]:x.name)===customName)||null):null;
   const next=read();next.push({id:Date.now().toString(36)+Math.random().toString(36).slice(2,7),name:p.name,category:p.category,team:p.group,model:p.name,season:p.season||"",kitType:p.kitType||"",version:p.version||"",supplier:p.supplier||"",supplierUrl:p.supplierUrl||p.sourceUrl||"",image:p.image||null,images:Array.isArray(p.images)?p.images:[],size,sizeAudience:selectedSizeAudience,quantity:1,patches,patchSelections,patchTotalEur,personalization:person.value,player:person.value==="Nom et numéro du joueur"?customName:"",customName:person.value==="Nom et numéro personnalisés"?customName:"",customNumber,playerNumber:selectedPlayer?(Array.isArray(selectedPlayer)?selectedPlayer[2]:selectedPlayer.number)||"":""});
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
