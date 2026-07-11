document.addEventListener("DOMContentLoaded", () => {

const pages = document.querySelectorAll(".page");

let currentPage = 0;

function showPage(index){

pages.forEach((page,i)=>{

page.style.display = i===index ? "block" : "none";

});

window.scrollTo({
top:0,
behavior:"smooth"
});

}

showPage(currentPage);

document.querySelectorAll("[data-next]").forEach(button=>{

button.addEventListener("click",()=>{

if(currentPage < pages.length-1){

currentPage++;

showPage(currentPage);

}

});

});

document.querySelectorAll("[data-prev]").forEach(button=>{

button.addEventListener("click",()=>{

if(currentPage>0){

currentPage--;

showPage(currentPage);

}

});

});

});
const weddingDate = new Date("2026-12-12T17:00:00");

function updateCountdown() {

const now = new Date();

const diff = weddingDate - now;

if(diff <= 0){
return;
}

const days = Math.floor(diff / (1000 * 60 * 60 * 24));

const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

const minutes = Math.floor((diff / (1000 * 60)) % 60);

const seconds = Math.floor((diff / 1000) % 60);

document.getElementById("days").textContent = String(days).padStart(3,"0");

document.getElementById("hours").textContent = String(hours).padStart(2,"0");

document.getElementById("minutes").textContent = String(minutes).padStart(2,"0");

document.getElementById("seconds").textContent = String(seconds).padStart(2,"0");

}

updateCountdown();

setInterval(updateCountdown,1000);