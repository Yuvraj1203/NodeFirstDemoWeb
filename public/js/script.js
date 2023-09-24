const hamBug = document.getElementById("hamBug");
const menu = document.getElementById("menuMob");
const anc = document.querySelectorAll(".ancMenu");

hamBug.addEventListener("click",()=>{
    hamBug.classList.toggle("active");
    menu.classList.toggle("active");
})

anc.forEach((ancs)=>{
    ancs.addEventListener("click",()=>{
        hamBug.classList.remove("active");
        menu.classList.remove("active");
    })
})