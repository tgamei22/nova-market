const products=[
{id:1,n:'Pulse Buds Pro',cat:'Tecnologia',price:49.90,old:79.90,icon:'🎧',badge:'TOP',desc:'Auriculares sem fios com cancelamento de ruído.'},
{id:2,n:'Halo Desk Lamp',cat:'Casa',price:34.90,old:54.90,icon:'💡',badge:'NOVO',desc:'Luz ambiente minimalista com controlo tátil.'},
{id:3,n:'Aero Bottle 750',cat:'Lifestyle',price:24.90,old:34.90,icon:'🥤',badge:'FAVORITO',desc:'Garrafa térmica leve para todos os dias.'},
{id:4,n:'Orbit Mag Stand',cat:'Tecnologia',price:29.90,old:44.90,icon:'📱',badge:'TOP',desc:'Suporte magnético elegante para secretária.'},
{id:5,n:'Cloud Mini Backpack',cat:'Acessórios',price:39.90,old:59.90,icon:'🎒',badge:'NOVO',desc:'Mochila compacta para trabalho e viagens.'},
{id:6,n:'Aura Sleep Mask',cat:'Lifestyle',price:19.90,old:29.90,icon:'😴',badge:'',desc:'Máscara macia para uma rotina de descanso.'},
{id:7,n:'Stone Aroma Diffuser',cat:'Casa',price:42.90,old:64.90,icon:'🪨',badge:'TOP',desc:'Difusor silencioso com acabamento mineral.'},
{id:8,n:'Snap Cable Kit',cat:'Tecnologia',price:16.90,old:24.90,icon:'🔌',badge:'',desc:'Kit de cabos compactos para a secretária.'}
];
let cart=JSON.parse(localStorage.getItem('novaCart')||'[]'), filtered=products;
const euro=n=>n.toLocaleString('pt-PT',{style:'currency',currency:'EUR'});
function render(list=filtered){const el=document.getElementById('products');document.getElementById('resultInfo').textContent=`${list.length} produtos`;
el.innerHTML=list.map(p=>`<article class="card"><div class="pic">${p.badge?`<span class="badge">${p.badge}</span>`:''}<button class="heart" onclick="toast('Adicionado aos favoritos')">♡</button>${p.icon}</div><div class="info"><span class="cat">${p.cat}</span><h3>${p.n}</h3><p class="muted">${p.desc}</p><div class="price"><strong>${euro(p.price)}</strong><span class="old">${euro(p.old)}</span></div><button class="add" onclick="add(${p.id})">Adicionar ao carrinho</button></div></article>`).join('')}
function add(id){const x=cart.find(i=>i.id===id);x?x.qty++:cart.push({id,qty:1});save();toast('Produto adicionado ao carrinho');}
function save(){localStorage.setItem('novaCart',JSON.stringify(cart));document.getElementById('count').textContent=cart.reduce((a,b)=>a+b.qty,0);renderCart()}
function renderCart(){const el=document.getElementById('cartItems');let total=0;if(!cart.length){el.innerHTML='<p class="muted">O carrinho está vazio. Descobre os nossos favoritos.</p>';document.getElementById('total').textContent=euro(0);return}el.innerHTML=cart.map(i=>{let p=products.find(x=>x.id===i.id);total+=p.price*i.qty;return `<div class="cartRow"><div class="thumb">${p.icon}</div><div><b>${p.n}</b><div class="muted">${euro(p.price)} · <span class="qty"><button onclick="change(${p.id},-1)">−</button> ${i.qty} <button onclick="change(${p.id},1)">+</button></span></div></div><button class="close" style="width:26px;height:26px;font-size:17px" onclick="removeItem(${p.id})">×</button></div>`}).join('');document.getElementById('total').textContent=euro(total)}
function change(id,d){let x=cart.find(i=>i.id===id);x.qty+=d;if(x.qty<1)cart=cart.filter(i=>i.id!==id);save()}function removeItem(id){cart=cart.filter(i=>i.id!==id);save()}
function openCart(){renderCart();document.getElementById('overlay').classList.add('show')}function closeCart(){document.getElementById('overlay').classList.remove('show')}
function checkout(){if(!cart.length)return toast('Adiciona primeiro um produto');toast('Checkout de demonstração — pagamento não configurado');}
function toast(s){const t=document.getElementById('toast');t.textContent=s;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200)}
function doSearch(){const q=document.getElementById('search').value.toLowerCase();filtered=products.filter(p=>(p.n+p.cat+p.desc).toLowerCase().includes(q));render(filtered)}
document.getElementById('search').addEventListener('keydown',e=>{if(e.key==='Enter')doSearch()});
document.querySelectorAll('#chips button').forEach(b=>b.onclick=()=>{document.querySelectorAll('#chips button').forEach(x=>x.classList.remove('active'));b.classList.add('active');const c=b.dataset.cat;filtered=c==='Todos'?products:products.filter(p=>p.cat===c);render(filtered)});
render();save();
