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
              <div class="image">
                <img src="${card.images[0]}" class="" alt="...">
              </div>
              <div class="card-body">
                <h5 class="card-title">${card.title}</h5>
                <a href="#" class="btn btn-primary">Dettaglio prodotto</a>
              </div>
          </div>
      </div>`

    container.innerHTML += cards;
  });

}