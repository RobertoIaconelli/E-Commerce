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
          <img src="${elemento.thumbnail}" class="" alt="...">
          </div>
          <div class="card-body">
          <h5 class="card-title">${elemento.title}</h5>
          <div class="d-flex justify-content-between">
                  <p class="h6">€${elemento.price.toFixed(2)}</p>
                  <div class="d-flex h6 box-voto">
                    <p class=""><span class="stellePiene"></span><span class="stelleVuote"></span></p>
                    <p class="voto">${elemento.rating.toFixed(1)}</p>
                  </div>
          </div>
                <div class="d-flex justify-content-between gap-4 ">
                  <a data-id="${elemento.id}" href="dettagliProdotto.html" class="btn btn-primary dettaglio w-90">Dettaglio prodotto</a>
                  <button data-id="${elemento.id}" class="btn btn-dark btnCarrello"><i class="bi bi-cart3"></i></button>
                </div>
          </div>
          </div>`
    prodotti.innerHTML += elementos;

    let voto = Math.ceil(elemento.rating);
    let currentCard = prodotti.lastElementChild
    console.log(voto);

    let stellePiene = currentCard.querySelector(".stellePiene");
    let stelleVuote = currentCard.querySelector(".stelleVuote");

    for (i = 0; i < voto; i++) {
      let stella = `<i class="fa-solid fa-star"></i>`;
      stellePiene.innerHTML += stella;
    }

    for (i = 0; i < (5 - voto); i++) {
      let stella = `<i class="fa-regular fa-star"></i>`;
      stelleVuote.innerHTML += stella;
    }

  });
  dettaglioProdotto();
  aggiungiAlCarrello();
}


function dettaglioProdotto() {
  let dettagliProdotto = document.querySelectorAll(".dettaglio");
  console.log(dettagliProdotto);
  dettagliProdotto.forEach(prodotto => {
    prodotto.addEventListener("click", function () {
      let elemento = this.getAttribute("data-id");
      console.log(elemento, "idProdotto");
      localStorage.setItem("idProdotto", elemento);



    })
  })
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


// AGGIUNTA CARRELLO
let arrCarrello = [];
function aggiungiAlCarrello() {
  let carrelli = document.querySelectorAll(".btnCarrello");
  console.log(carrelli)
  carrelli.forEach(carrello => {

    carrello.addEventListener("click", function () {
      console.log("Cliccato");

      let idCarrello = this.getAttribute("data-id");
      let letturaLocalStorage = JSON.parse(localStorage.getItem("Carrello"));
      if (letturaLocalStorage != null) {
        arrCarrello = letturaLocalStorage
      }
      arrCarrello.push(idCarrello);
      console.log(arrCarrello);
      localStorage.setItem("Carrello", JSON.stringify(arrCarrello));
    })
  });
}

