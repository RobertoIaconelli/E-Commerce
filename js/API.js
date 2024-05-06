
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








