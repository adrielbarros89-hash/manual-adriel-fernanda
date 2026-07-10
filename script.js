// ==============================
// ABRIR MANUAL
// ==============================

const botao = document.getElementById("abrir");
const manual = document.getElementById("manual");

manual.style.display = "none";

botao.addEventListener("click", () => {

    manual.style.display = "block";

    manual.scrollIntoView({
        behavior: "smooth"
    });

    botao.innerHTML = "Manual Aberto";

    botao.disabled = true;

});

// ==============================
// CONTADOR REGRESSIVO
// ==============================

const contador = document.getElementById("contador");

const destino = new Date("December 12, 2026 00:00:00").getTime();

function atualizarContador(){

    const agora = new Date().getTime();

    const distancia = destino - agora;

    if(distancia <= 0){

        contador.innerHTML = "Chegou o grande dia! ❤️";

        return;

    }

    const dias = Math.floor(distancia / (1000*60*60*24));

    const horas = Math.floor((distancia % (1000*60*60*24))/(1000*60*60));

    const minutos = Math.floor((distancia % (1000*60*60))/(1000*60));

    const segundos = Math.floor((distancia % (1000*60))/1000);

    contador.innerHTML =

    dias + " dias<br>" +

    horas + " horas<br>" +

    minutos + " minutos<br>" +

    segundos + " segundos";

}

setInterval(atualizarContador,1000);

atualizarContador();

// ==============================
// ANIMAÇÃO DAS PÁGINAS
// ==============================

const paginas = document.querySelectorAll(".page");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0px)";

        }

    });

});

paginas.forEach(pagina=>{

    pagina.style.opacity="0";

    pagina.style.transform="translateY(80px)";

    pagina.style.transition="1s";

    observer.observe(pagina);

});
