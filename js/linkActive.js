
function illuminazione(){
let urlPagina = window.location.pathname;
console.log(urlPagina);
let splittato = urlPagina.split("/").pop();
console.log(splittato);

let tutti = document.querySelectorAll(".nav-link.k");

tutti.forEach(element => {
    let link = element.getAttribute("href");
    let linkSplittato = link.split("/").pop();
    if(linkSplittato === splittato){
        element.classList.add("activemenu")
}
});
}

document.addEventListener("DOMContentLoaded", illuminazione);