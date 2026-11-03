const $ = s => document.querySelector(s);
const grid=$("#catalogGrid"), title=$("#sectionTitle"), eyebrow=$("#sectionEyebrow"), crumbs=$("#breadcrumbs");
let currentView="home", currentGroup=null, query="";
$("#year").textContent=new Date().getFullYear();

function slug(s){return s.toLocaleLowerCase("fr").normalize("NFD").replace(/[\u0300-\u036f]/g,"")}
function allNational(){return NATIONAL_REGIONS.flatMap(r=>r.items.map(([name,flag])=>({name,flag,group:r.name,kind:"national"})))}
function allLifestyle(){return LIFESTYLE.flatMap(c=>[{name:c.name,emoji:c.emoji,desc:c.desc,kind:"lifestyle"},...c.items.map(name=>({name,flag:c.emoji,group:c.name,kind:"lifestyle"}))])}
function allClubs(){return CLUB_LEAGUES.flatMap(l=>l.items.map(name=>({name,flag:"⚽",group:l.name,kind:"clubs"})))}
function sideGroup(label,items,kind){
 const box=document.createElement("div");box.className="side-group";
 const h=document.createElement("h3");h.textContent=label;box.append(h);
 items.forEach(item=>{const b=document.createElement("button");b.className="side-item";b.innerHTML=`<span class="side-flag">${item.flag||item.emoji||"✦"}</span><span>${item.name}</span>`;b.onclick=()=>openGroup(kind,item.name);box.append(b)});
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
 const div=document.createElement("article");div.className="category-card";div.tabIndex=0;
 const emoji=item.flag||item.emoji||"⚽";
 div.innerHTML=`<div class="category-art"><span class="emoji">${emoji}</span></div><div class="category-info"><h3>${item.name}</h3><p>${item.desc||item.group||"Découvrir les modèles"}</p></div>`;
 div.onclick=()=>openGroup(kind,item.name);
 return div;
}
function productCard(p){
 const div=document.createElement("article");div.className="product-card";
 const visual=p.image?`<img src="${p.image}" alt="${p.name}" style="max-width:100%;max-height:190px;object-fit:contain">`:`<div class="shirt"><span>${p.number||"10"}</span></div>`;
 div.innerHTML=`<div class="product-art">${visual}</div><div class="product-info"><h3>${p.name}</h3><p>${p.description||"Modèle présenté dans le catalogue"}</p><div class="sizes">${(p.sizes||[]).map(s=>`<span class="size">${s}</span>`).join("")}</div>${p.source?``:""}</div>`;
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
 home.forEach(x=>{const c=card(x,x.kind);c.onclick=()=>openView(x.kind);grid.append(c)});
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
 const matches=PRODUCTS.filter(p=>p.category===kind&&p.group===name);
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
 const prods=PRODUCTS.filter(p=>slug(p.name+" "+p.group).includes(query));
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
