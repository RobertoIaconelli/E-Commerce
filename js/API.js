let container = document.querySelector(".swiper-wrapper.ultimiarrivi");
const URLAPI = "https://dummyjson.com/products/category/";

fetch(URLAPI)
.then(data=>{
    return data.json();
})
.then(quotes =>{
    console.log(quotes);
     ultimiArriviCard(quotes.products);
    // console.log(quotes.products);
})



function ultimiArriviCard(ultimiArr){
    ultimiArr.forEach(card=> {
       let cards = 
       `<div class="swiper-slide">
       <div class="card">
         <img src="${card.images[0]}" class="card-img-top" alt="...">
         <div class="card-body">
           <h5 class="card-title">${card.title}</h5>
           <p class="card-text">${this.description}</p>
           <a href="#" class="btn btn-primary">Go somewhere</a>
         </div>
       </div>
     </div> `

     container.innerHTML+=cards;
    });

}

