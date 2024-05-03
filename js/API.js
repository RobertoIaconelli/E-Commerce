
let prodotti = document.querySelector("#containerProdotti");
const URLAPI = "https://dummyjson.com/products";





function dettaglioProdotto(id) {
  fetch(`https://dummyjson.com/products/${id}`)
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data.products);
    })
}
let dettaglio = document.getElementsByClassName("dettaglio");
console.log(dettaglio);

Array.from(dettaglio).forEach(pallone => {
  console.log("ciao2");
  pallone.addEventListener("click", function () {
    console.log("ciao");
    let idProdotto = this.getAttribute("data-id");
    console.log(idProdotto);
    dettaglioProdotto(idProdotto);
  })
})






