const ham = document.getElementById("ham")
const close = document.getElementById("close")
const nav = document.getElementById("nav")
const header = document.getElementById("header")


ham.onclick = ()=>{
    nav.style.display = "flex";
    header.style.boxShadow = "none"
}

close.onclick = ()=>{
    nav.style.display = "none"
    header.style.boxShadow = "0px 1px 15px 5px #141D22"
}
window.onscroll = ()=>{
    if (scrollY > 120) {
        header.style.position = "fixed"
    }else {
        header.style.position = "static"
    }
}
window.onresize = ()=>{
    if (window.innerWidth > 450) {
        nav.style.display = "flex" 
    }else {
        nav.style.display = "none"
    }
    
}