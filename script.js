if(window.top!==window.self){try{window.top.location=window.self.location}catch(e){document.documentElement.hidden=true}}
const slides=[
 {n:"01",tag:"PESSOAS",title:["Escuta que entende","o ","contexto."]},
 {n:"02",tag:"ESTRATÉGIA",title:["Dados que indicam","o ","próximo passo."]},
 {n:"03",tag:"APRENDIZAGEM",title:["Comunicação que","cria ","possibilidades."]}
];
const SUB="Três formações. Uma trajetória conectada por comunicação, desenvolvimento humano e resultados.";
let current=0,interval;
const hero=document.getElementById("heroCopy"),slideButtons=[...document.querySelectorAll("[data-slide]")];
const el=(tag,text,cls)=>{const e=document.createElement(tag);if(text)e.textContent=text;if(cls)e.className=cls;return e};
function showSlide(index){current=index;const s=slides[index];
 const eyebrow=el("p",null,"eyebrow");eyebrow.append(el("span",s.n),el("b",s.tag));
 const h1=el("h1");h1.append(s.title[0],document.createElement("br"),s.title[1],el("em",s.title[2]));
 hero.replaceChildren(eyebrow,h1,el("p",SUB,"hero-sub"));
 hero.style.animation="none";requestAnimationFrame(()=>{hero.style.animation="reveal .9s var(--ease)"});
 slideButtons.forEach((b,i)=>b.classList.toggle("active",i===index))}
function restart(){clearInterval(interval);if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;interval=setInterval(()=>showSlide((current+1)%slides.length),5600)}
slideButtons.forEach((b,i)=>b.addEventListener("click",()=>{showSlide(i);restart()}));restart();
document.addEventListener("visibilitychange",()=>document.hidden?clearInterval(interval):restart());

document.querySelectorAll("[data-go]").forEach(button=>button.addEventListener("click",()=>{document.getElementById(button.dataset.go)?.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})}));

const toggle=document.getElementById("themeToggle");
function setTheme(theme){document.documentElement.dataset.theme=theme;try{localStorage.setItem("rahn-theme",theme)}catch(e){}toggle.querySelector("span").textContent=theme==="light"?"Escuro":"Claro";toggle.setAttribute("aria-label",`Ativar modo ${theme==="light"?"escuro":"claro"}`)}
let saved=null;try{saved=localStorage.getItem("rahn-theme")}catch(e){}
setTheme((saved==="light"||saved==="dark"?saved:null)||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"));
toggle.addEventListener("click",()=>setTheme(document.documentElement.dataset.theme==="light"?"dark":"light"));

const sections=["home","about","social","cs","education","trajectory","contact"];
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;document.querySelectorAll(".capsule button[data-go]").forEach(b=>b.classList.toggle("active",b.dataset.go===entry.target.id))}),{rootMargin:"-35% 0px -55%"});
sections.forEach(id=>observer.observe(document.getElementById(id)));

const tl=[...document.querySelectorAll(".timeline article")];
if("IntersectionObserver" in window&&!matchMedia("(prefers-reduced-motion: reduce)").matches){tl.forEach(a=>a.classList.add("will-reveal"));const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.2});tl.forEach((a,i)=>{a.style.transitionDelay=i*80+"ms";io.observe(a)})}
