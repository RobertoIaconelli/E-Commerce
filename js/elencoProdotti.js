let prodotti = document.querySelector("#containerProdotti");
let filtroTutti = document.getElementById("filtroTutto");
let bottoniFiltro = document.querySelectorAll(".filtro");
let filtroAll = document.querySelector("#pills-home-tab.filter-all");


// DATA
const URLAPI = "https://dummyjson.com/products";


fetch(URLAPI)
  .then(data => {
    return data.json();
  })
  .then(data => {
    elencoProdotti(data.products);

  })


// STAMPO TUTTI I PRODOTTI
function elencoProdotti(prodotto) {
  prodotto.forEach(elemento => {
    let elementos =
      `<div class="card">
          <div class="image">
            <img src="${elemento.images[0]}" class="" alt="...">
          </div>
          <div class="card-body">
            <h5 class="card-title">${elemento.title}</h5>
            <a data-id="${elemento.id}" href="./dettagliProdotto.html" class="btn btn-primary dettaglio">Descrizione prodotto</a>
          </div>
      </div>`
    prodotti.innerHTML += elementos;


  });
}


// CHIAMATA PER CATEGORIA
function filtroCategoria(categoria) {
  if (categoria === "all") {
    prodotti.innerHTML = "";
    fetch(URLAPI)
      .then(data => {
        return data.json();
      })
      .then(data => {
        elencoProdotti(data.products);

      })
  } else {
    fetch(`https://dummyjson.com/products/category/${categoria}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        prodotti.innerHTML = "";
        elencoProdotti(data.products)
      })
  }
}

filtroAll.classList.add("active");
//CICLO BTN E PRENDO LA CATEGORIA
bottoniFiltro.forEach(bottone => {
  bottone.addEventListener("click", function () {

    bottoniFiltro.forEach(btn => {
      if (btn !== this) {
        btn.classList.remove("active");
      }
    });

    this.classList.add("active")

    let prendiAttributo = this.getAttribute("data-filtro");
    filtroCategoria(prendiAttributo);

  })
});