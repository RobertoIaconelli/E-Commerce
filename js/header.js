let elHeader = document.querySelectorAll(".header");

function navBar() {
  elHeader.forEach(header => {
    header.innerHTML += `    <div class="container-fluid">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    <div class="titolo">
    <a class="navbar-brand" href="./index.html"><img src="imgs/logo.png" alt="azamon logo"></a>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
    <li class="nav-item">
    <a class="nav-link k " aria-current="page" href="./index.html">Homepage</a>
    </li>
    <li class="nav-item dropdown">
    <a class="nav-link k" href="./prodotti.html" role="button">
    Elenco prodotti
    </a>
    </li>
    <li class="nav-item">
    <a class="nav-link k " aria-current="page" href="./contattaci.html">Contattaci</a>
    </li>
    <li class="nav-item">
    <a class="nav-link k " aria-current="page" href="./tracciaPacco.html">Traccia il mio Pacco</a>
    </li>
    <li class="nav-item">
    <a class="nav-link k " aria-current="page" href="./gestionale.html">Gestionale</a>
    </li>
    </ul>
    </div>
    <ul class="nav-item checkout">
    <li class="nav-item">
    <a class="nav-link k" href="./carrello.html"><i class="bi bi-bag position-relative"><p class="cerchietto position-absolute"></p></i></a>
    
    </li>
    </ul>
    </div>
    </nav>
    </div>`;

  })
  aggiornamentoProdotti();
}

document.addEventListener("DOMContentLoaded", navBar);
let cerchietto = document.getElementsByClassName(".cerchietto");

function aggiornamentoProdotti() {
  let cerchietto = document.querySelector(".cerchietto");
  let arrayCarrello2 = JSON.parse(localStorage.getItem("Carrello"));
  cerchietto.innerHTML = arrayCarrello2.length;
}

setInterval(() => {
  aggiornamentoProdotti();
}, 300);



//<li><button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="bi bi-bag-check"></i></button></li>