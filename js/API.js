let container = document.querySelector(".swiper-wrapper.ultimiarrivi");
const URLAPI = "https://dummyjson.com/products";
let arraySmarthphone = [];

fetch(URLAPI)
  .then(data => {
    return data.json();
  })
  .then(data => {
    console.log(data);
    let ottoElementi = data.slice(0, 8)
    ultimiArriviCard(ottoElementi);
    // console.log(quotes.products);
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
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>`

    container.innerHTML += cards;
  });

}

