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