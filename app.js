// CONFIGURE THIS before launch: WhatsApp number in international format, digits only.
const WHATSAPP_NUMBER = "91XXXXXXXXXX";
// These are DEMO listings. Replace with accurate products/services you are permitted to sell.
const products = [
{id:"EFR-001",name:"Featured Gaming Listing",cat:"accounts",tag:"FEATURED",price:1499,symbol:"EFR",desc:"Demo listing — replace with your real product details."},
{id:"EFR-002",name:"Budget Gaming Listing",cat:"accounts",tag:"BUDGET PICK",price:499,symbol:"XP",desc:"Sample listing. Confirm all details and availability in chat."},
{id:"EFR-003",name:"Premium Gaming Listing",cat:"accounts",tag:"PREMIUM",price:2499,symbol:"★",desc:"Demo item — update the details before publishing."},
{id:"EFR-004",name:"Coins / Top-up Enquiry",cat:"coins",tag:"ASK US",price:299,symbol:"◈",desc:"Example only. List only products/services you are authorised to sell."},
{id:"EFR-005",name:"Community Offer",cat:"other",tag:"COMMUNITY",price:999,symbol:"✦",desc:"Replace with an accurate, permitted product or service."},
{id:"EFR-006",name:"Latest Stock Request",cat:"other",tag:"NEW DROP",price:1999,symbol:"NEW",desc:"Sample card showing how the mobile listing grid works."}
];
let category="all";
const $=s=>document.querySelector(s);
const phone=()=>WHATSAPP_NUMBER.replace(/\D/g,"");
function wa(message){const n=phone();return `https://wa.me/${n && n!=="91XXXXXXXXXX"?n:""}?text=${encodeURIComponent(message)}`;}
function bindLinks(){document.querySelectorAll("[data-message]").forEach(a=>a.href=wa(a.dataset.message));}
function rupees(n){return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(n);}
function safe(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function render(){
 const q=$("#search").value.trim().toLowerCase(), max=$("#budget").value==="all"?Infinity:Number($("#budget").value);
 const list=products.filter(p=>(category==="all"||p.cat===category)&&p.price<=max&&`${p.name} ${p.desc} ${p.id} ${p.cat}`.toLowerCase().includes(q));
 $("#products").innerHTML=list.map(p=>`<article class="product"><div class="visual"><span class="tag">${safe(p.tag)}</span><span class="pid">${safe(p.id)}</span><div class="symbol">${safe(p.symbol)}</div></div><div class="pinfo"><div class="category">${safe(p.cat.toUpperCase())}</div><h3>${safe(p.name)}</h3><p>${safe(p.desc)}</p><div class="bottom"><div class="price">${rupees(p.price)} <small>INR</small></div><button class="enquire" data-id="${safe(p.id)}">ENQUIRE ON WHATSAPP ↗</button></div></div></article>`).join("");
 $("#count").textContent=list.length;$("#empty").hidden=list.length>0;$("#products").hidden=list.length===0;
 document.querySelectorAll(".enquire").forEach(b=>b.addEventListener("click",()=>{const p=products.find(x=>x.id===b.dataset.id);window.open(wa(`Hi EFREGION! I'd like to enquire about ${p.name} (${p.id}). Listed price: ${rupees(p.price)}. Please confirm availability and final details.`),"_blank","noopener,noreferrer");}));
}
document.querySelectorAll("[data-cat]").forEach(b=>b.addEventListener("click",()=>{category=b.dataset.cat;document.querySelectorAll("[data-cat]").forEach(x=>x.classList.toggle("active",x===b));render();}));
$("#search").addEventListener("input",render);$("#budget").addEventListener("change",render);$("#year").textContent=new Date().getFullYear();bindLinks();render();
if("serviceWorker"in navigator&&location.protocol.startsWith("http"))addEventListener("load",()=>navigator.serviceWorker.register("./service-worker.js").catch(()=>{}));