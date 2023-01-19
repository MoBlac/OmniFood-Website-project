let op = document.querySelector(".open");
let cl = document.querySelector(".close");
let menuList = document.querySelector(".menuList")

op.addEventListener("click", (e)=>{
    op.style.display = 'none';
    cl.style.display = 'block';
    menuList.style.opacity = '1';
    menuList.style.transform = 'translateX(0)';
})

cl.addEventListener("click", (e)=>{
    cl.style.display = 'none';
    op.style.display = 'block';
    menuList.style.opacity = '0';
    menuList.style.transform = 'translateX(-100%)';
})