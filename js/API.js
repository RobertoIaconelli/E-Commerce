const URLAPI = "https://dummyjson.com/products";

let urlPagina = window.location.pathname;
console.log(urlPagina);
let splittato = urlPagina.split("/").pop();
console.log(splittato);

let tutti = document.getElementsByClassName(".nav-link");
console.log(tutti);