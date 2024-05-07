let container = document.querySelector(".swiper-wrapper.ultimiarrivi");

// DATA
const URLAPI = "https://dummyjson.com/products";

// FETCH + SLIDER(ULTIMI ARRIVI)
fetch(URLAPI)
  .then(data => {
    return data.json();
  })
  .then(data => {


    let ottoElementi = data.products.slice(0, 8);
    ultimiArriviCard(ottoElementi);
    var swiper = new Swiper(".cards", {
      slidesPerView: 4,
      grid: {
        rows: 1,
      },
      loop: true,
      spaceBetween: 30,
      autoplay: {
        delay: 1000,
        enabled: true,
      },

    });
  })


function ultimiArriviCard(ultimiArr) {
  ultimiArr.forEach(card => {
    let cards =
      `<div class="swiper-slide">
          <div class="card">
              <div class="image position-relative">
                <img src="${card.thumbnail}" class="" alt="...">
                <p class="position-absolute new">New</p>
              </div>
              <div class="card-body">
                <h5 class="card-title">${card.title}</h5>
                <div class="d-flex justify-content-between">
                  <p class="h6">€${card.price.toFixed(2)}</p>
                  <div class="d-flex h6 box-voto">
                    <p class=""><span class="stellePiene"></span><span class="stelleVuote"></span></p>
                    <p class="voto">${card.rating.toFixed(1)}</p>
                  </div>
                </div>
                <div class="d-flex justify-content-between gap-4 ">
                <a data-id="${card.id}" href="dettagliProdotto.html" class="btn btn-primary dettaglio w-90">Dettaglio prodotto</a>
                <button data-id="${card.id}" class="btn btn-dark btnCarrello"><i class="bi bi-cart3"></i></button>
                </div>
              </div>
          </div>
      </div>`

    container.innerHTML += cards;

    let voto = Math.ceil(card.rating);
    let currentCard = container.lastElementChild
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

