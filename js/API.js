let container = document.querySelector(".swiper-wrapper.ultimiarrivi");
<<<<<<< HEAD
let prodotti = document.querySelector("#containerProdotti");
=======
>>>>>>> f50f64b8b0bca8995717e14b2969127655650004
const URLAPI = "https://dummyjson.com/products";
let arraySmarthphone = [];

fetch(URLAPI)
  .then(data => {
    return data.json();
  })
  .then(data => {
<<<<<<< HEAD

    
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
    // console.log(quotes.products);
  })

  let filtroTutti = document.getElementById("filtroTutto");

  fetch(URLAPI)
  .then(data => {
    return data.json();
  })
  .then(data => {
     elencoProdotti(data.products); 
    
  })
  

=======
    console.log(data);
    let ottoElementi = data.slice(0, 8)
    ultimiArriviCard(ottoElementi);
    // console.log(quotes.products);
  })

>>>>>>> f50f64b8b0bca8995717e14b2969127655650004



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
<<<<<<< HEAD
              <a href="#" class="btn btn-primary">Dettaglio prodotto</a>
=======
              <a href="#" class="btn btn-primary">Go somewhere</a>
>>>>>>> f50f64b8b0bca8995717e14b2969127655650004
            </div>
        </div>
    </div>`

    container.innerHTML += cards;
<<<<<<< HEAD

=======
>>>>>>> f50f64b8b0bca8995717e14b2969127655650004
  });

}

function elencoProdotti(prodotto){ 
  prodotto.forEach(elemento=>{
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
    prodotti.innerHTML+=elementos;
    

  });
}

function filtroCategoria(categoria){
  fetch(`https://dummyjson.com/products/category/${categoria}`)
.then(response=>{
  return response.json()
})
.then(data=>{
  prodotti.innerHTML = "";
  elencoProdotti(data.products)
})
}

let bottoniFiltro = document.querySelectorAll(".filtro");


bottoniFiltro.forEach(bottone => {
  bottone.addEventListener("click", function(){
    let prendiAttributo= this.getAttribute("data-filtro");  
    filtroCategoria(prendiAttributo);
  
    })
});

function dettaglioProdotto(id){
  fetch(`https://dummyjson.com/products/${id}`)
  .then(response=>{
    return response.json()
  })
  .then(data=>{
    console.log(data.products);
  })
}
let dettaglio = document.getElementsByClassName("dettaglio");
console.log(dettaglio);

Array.from(dettaglio).forEach(pallone => {
  console.log("ciao2");
 pallone.addEventListener("click", function(){
    console.log("ciao");
    let idProdotto = this.getAttribute("data-id");
    console.log(idProdotto);
    dettaglioProdotto(idProdotto);
  })
}) 

let counter = 0;




