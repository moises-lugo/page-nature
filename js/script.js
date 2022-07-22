const btn = document.querySelector(".button");
const active = document.querySelector("#menu-active");
const line1 = document.querySelector(".linea-1")
const line2 = document.querySelector(".linea-2")
const line3 = document.querySelector(".linea-3")
btn.addEventListener("click",()=>{
    line1.classList.toggle("linea-1-active");
    line2.classList.toggle("linea-2-active");
    line3.classList.toggle("linea-3-active");
    active.classList.toggle("menu-on");
});

