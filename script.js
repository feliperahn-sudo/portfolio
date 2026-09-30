const slides=[
 {n:"01",tag:"PESSOAS",title:'Escuta que entende<br>o <em>contexto.</em>'},
 {n:"02",tag:"ESTRATÉGIA",title:'Dados que indicam<br>o <em>próximo passo.</em>'},
 {n:"03",tag:"APRENDIZAGEM",title:'Comunicação que<br>cria <em>possibilidades.</em>'}
];
let current=0,interval;
const hero=document.getElementById("heroCopy"),slideButtons=[...document.querySelectorAll("[data-slide]")];
function showSlide(index){current=index;const s=slides[index];hero.innerHTML=`<p class="eyebrow"><span>${s.n}</span><b>${s.tag}</b></p><h1>${s.title}</h1><p class="hero-sub">Três formações. Uma trajetória conectada por comunicação, desenvolvimento humano e resultados.</p>`; /* conteúdo estático e confiável: nunca inserir dados externos aqui */hero.style.animation="none";requestAnimationFrame(()=>{hero.style.animation="reveal .9s var(--ease)"});slideButtons.forEach((b,i)=>b.classList.toggle("active",i===index))}
function restart(){clearInterval(interval);if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;interval=setInterval(()=>showSlide((current+1)%slides.length),5600)}
slideButtons.forEach((b,i)=>b.addEventListener("click",()=>{showSlide(i);restart()}));restart();
document.addEventListener("visibilitychange",()=>document.hidden?clearInterval(interval):restart());

const nav=document.getElementById("sideNav"),menu=document.getElementById("mobileMenu");
document.querySelectorAll("[data-go]").forEach(button=>button.addEventListener("click",()=>{document.getElementById(button.dataset.go)?.scrollIntoView({behavior:"smooth"});nav.classList.remove("is-open");menu.textContent="☰"}));
menu.addEventListener("click",()=>{nav.classList.toggle("is-open");menu.textContent=nav.classList.contains("is-open")?"×":"☰"});

const toggle=document.getElementById("themeToggle");
function setTheme(theme){document.documentElement.dataset.theme=theme;try{localStorage.setItem("rahn-theme",theme)}catch(e){}toggle.querySelector("b").textContent=theme==="light"?"☾":"☀";toggle.querySelector("span").textContent=theme==="light"?"DARK":"LIGHT";toggle.setAttribute("aria-label",`Ativar modo ${theme==="light"?"escuro":"claro"}`)}
let saved=null;try{saved=localStorage.getItem("rahn-theme")}catch(e){}
setTheme((saved==="light"||saved==="dark"?saved:null)||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"));
toggle.addEventListener("click",()=>setTheme(document.documentElement.dataset.theme==="light"?"dark":"light"));

const sections=["home","about","social","cs","education","trajectory","contact"];
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;document.querySelectorAll(".side-nav nav button").forEach(b=>b.classList.toggle("active",b.dataset.go===entry.target.id));const index=document.querySelector(".nav-index");index.textContent=entry.target.id==="social"?"01":entry.target.id==="cs"?"02":entry.target.id==="education"?"03":"LF"}),{rootMargin:"-35% 0px -55%"});
sections.forEach(id=>observer.observe(document.getElementById(id)));
