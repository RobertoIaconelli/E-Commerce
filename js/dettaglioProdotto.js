let storage = localStorage.getItem("idProdotto");
// let prova = JSON.parse("idProdotto");
fetch(`https://dummyjson.com/products/${storage}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    stampaDettaglio(data);
    var swiper = new Swiper(".swiperDettaglio", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });
  });

let container = document.querySelector(".container-rb");
function stampaDettaglio(prodotto) {
  let card = ` <div class="row justify-content-center">
    <div class="col-lg-4">
    <div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper mySwiper2">
    <div class="swiper-wrapper imgTop">
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    </div>
    <div thumbsSlider="" class="swiper swiperDettaglio">
    <div class="swiper-wrapper">
    <div class="swiper-slide">
    <img src="${prodotto.images[0]}" />
    </div>
    <div class="swiper-slide">
    <img src="" />
    </div>
    <div class="swiper-slide">
    <img src="" />
    </div>
    <div class="swiper-slide">
    <img src="" />
    </div>
    <div class="swiper-slide">
    <img src="" />
    </div>
    <div class="swiper-slide">
    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
    </div>
    <div class="swiper-slide">
    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
    </div>
    <div class="swiper-slide">
    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
    </div>
    <div class="swiper-slide">
    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
    </div>
    <div class="swiper-slide">
    <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
    </div>
    </div>
    </div>
    </div>
    <div class="col-lg-5">
    <div class="prodottoDesc">
    <h1 class="titolo2">${prodotto.title}</h1>
    <p class="h4">Nome Brand: <span class="text-primary">${prodotto.brand}</span></p>
    <p class="descrizione">${prodotto.description}</p>
    <i class="fa-solid fa-star"></i>
    <p class="quantita">Quantità: <span class="text-success">${prodotto.stock}</span></p>
    <p class="h1">Prezzo: <span class="text-primary">${prodotto.price}€</span></p>
    <button>Aggiungi al carrello</button>
    </div>
    </div>
    </div>`;

  let imgtop = document.getElementsByClassName(".imgTop");
  console.log(imgtop);
  prodotto.images.forEach((immagine) => {
    let cardImmagini = `<div class="swiper-slide">
            <img src="${immagine}"/></div>`;
    imgtop.innerHTML += cardImmagini;
  });
  container.innerHTML = card;
}