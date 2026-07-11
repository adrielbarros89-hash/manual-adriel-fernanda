/* ======================================================
   MANUAL DOS PADRINHOS
   Adriel & Fernanda
====================================================== */

const loading = document.querySelector(".loading");

window.addEventListener("load", () => {

    setTimeout(() => {

        loading.style.opacity = "0";

        setTimeout(() => {

            loading.style.display = "none";

        },600);

    },1200);

});

/* ======================================================
   ABRIR MANUAL
====================================================== */

const openBook = document.getElementById("openBook");

const manual = document.getElementById("manual");

manual.style.display = "none";

openBook.addEventListener("click",()=>{

manual.style.display="block";

manual.scrollIntoView({

behavior:"smooth"

});

openBook.innerHTML="Manual Aberto";

openBook.disabled=true;

});

/* ======================================================
   CONTADOR
====================================================== */

const weddingDate = new Date("2026-12-12T16:30:00");

const days=document.getElementById("days");

const hours=document.getElementById("hours");

const minutes=document.getElementById("minutes");

const seconds=document.getElementById("seconds");

function updateCountdown(){

const now=new Date();

const diff=weddingDate-now;

if(diff<=0){

days.innerHTML="0";

hours.innerHTML="0";

minutes.innerHTML="0";

seconds.innerHTML="0";

return;

}

days.innerHTML=Math.floor(diff/(1000*60*60*24));

hours.innerHTML=Math.floor((diff%(1000*60*60*24))/(1000*60*60));

minutes.innerHTML=Math.floor((diff%(1000*60*60))/(1000*60));

seconds.innerHTML=Math.floor((diff%(1000*60))/1000);

}

updateCountdown();

setInterval(updateCountdown,1000);
/* ======================================================
   ANIMAÇÕES
====================================================== */

const sections=document.querySelectorAll(".page,.final-message");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

},{threshold:.15});

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(80px)";

section.style.transition="1s";

observer.observe(section);

});

/* ======================================================
   EFEITO BOTÃO
====================================================== */

const buttons=document.querySelectorAll("button,.map-button");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-3px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0px)";

});

});