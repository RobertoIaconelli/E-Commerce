let container = document.querySelector(".oggettiCarrello");
let arrayCarrello = JSON.parse(localStorage.getItem("Carrello"));
let listaPrezzi = document.querySelector(".listaPrezzi");
let prezzoTotale = document.querySelector(".prezzoTotale2");
let numberProducts = document.querySelector(".totalProducts");
let noProducts = document.querySelector("noProducts");

console.log(arrayCarrello)
//DUMMY JSON
// function stampaCarrello() {
//     let somma = 0;

//     arrayCarrello.forEach((idProdotto) => {
//         fetch(`https://dummyjson.com/products/${idProdotto}`)
//             .then((response) => {
//                 return response.json();
//             })
//             .then((data) => {
//                 let oggettoCarrello = `
//             <div class="row prodottoCarrello">
//             <div class="col-lg-3 ">
//             <div class="divImmagine">
//             <img src="${data.thumbnail}" class="immagineCarrello"/>
//             </div>
//             </div>
//             <div class="col-lg-4 px-3">
//             <h1>${data.title}</h1>
//             <p>Quantità: ${data.stock}</p>
//             <p>Descrizione: ${data.description}</p>
//             <p>Prezzo: ${data.price}€ </p>
//             <button data-id="${data.id}"  class="bg-danger btnDelete">Rimuovi</button>
//             </div>
//             </div>`;
//                 container.innerHTML += oggettoCarrello;

//                 let li = `<li>${data.title} - ${data.price}€</li>`;
//                 listaPrezzi.innerHTML += li;
//                 somma += data.price;


//                 if (somma == 0) {

//                     prezzoTotale.innerHTML = 0;
//                 } else {
//                     prezzoTotale.innerHTML = somma;
//                 }


//                 eliminaProdotto();
//             });
//     });


//     numberProducts.innerHTML = arrayCarrello.length;

// }

function stampaCarrello() {
    let somma = 0;

    arrayCarrello.forEach((idProdotto) => {
        fetch(`http://localhost:8080/api/prodotti/prodotto/${idProdotto}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let oggettoCarrello = `
            <div class="row prodottoCarrello">
            <div class="col-lg-3 ">
            <div class="divImmagine">
            <img src="${data.thumbnail}" class="immagineCarrello"/>
            </div>
            </div>
            <div class="col-lg-4 px-3">
            <h1>${data.titolo}</h1>
            <p>Quantità: ${data.disponibilita}</p>
            <p>Descrizione: ${data.descrizione}</p>
            <p>Prezzo: ${data.prezzo}€ </p>
            <button data-id="${data.id}"  class="bg-danger btnDelete">Rimuovi</button>
            </div>
            </div>`;
                container.innerHTML += oggettoCarrello;

                let li = `<li>${data.titolo} - ${data.prezzo}€</li>`;
                listaPrezzi.innerHTML += li;
                somma += data.prezzo;


                if (somma == 0) {

                    prezzoTotale.innerHTML = 0;
                } else {
                    prezzoTotale.innerHTML = somma.toFixed(2);
                }
                eliminaProdotto();
            });
    });


    numberProducts.innerHTML = arrayCarrello.length;

}





function eliminaProdotto() {
    let btnDelete = document.querySelectorAll(".btnDelete");
    btnDelete.forEach((btn) => {
        btn.addEventListener("click", function () {
            let bottoneId = this.getAttribute("data-id");
            console.log(bottoneId, "id prodotto da eliminare");

            let indiceProdotto = arrayCarrello.indexOf(bottoneId);
            console.log(indiceProdotto);

            arrayCarrello.splice(indiceProdotto, 1);


            // FIX
            // arrayCarrello = arrayCarrello.filter(
            //     (idProdotto) => idProdotto !== bottoneId
            // );
            // console.log(arrayCarrello, "array dopo eliminazione")

            console.log(arrayCarrello);

            localStorage.setItem("Carrello", JSON.stringify(arrayCarrello));
            let cardProdotto = this.closest('.prodottoCarrello');
            cardProdotto.remove();

            numberProducts.innerHTML = arrayCarrello.length;

            aggiornamentoPrezzo();

        });

    });
}


// DUMMY JSON
// function aggiornamentoPrezzo() {
//     let somma = 0;
//     prezzoTotale.innerHTML = "";
//     listaPrezzi.innerHTML = "";
//     arrayCarrello.forEach(idProdotto => {
//         fetch(`https://dummyjson.com/products/${idProdotto}`)
//             .then((response) => {
//                 return response.json();
//             })
//             .then(data => {
//                 somma += data.price;
//                 prezzoTotale.innerHTML = somma;

//                 let li = `<li>${data.title} - ${data.price}</li>`;
//                 listaPrezzi.innerHTML += li;
//             })

//     })
//     if (arrayCarrello.length == 0) {
//         prezzoTotale.innerHTML = 0;
//     }
// }

function aggiornamentoPrezzo() {
    let somma = 0;
    prezzoTotale.innerHTML = "";
    listaPrezzi.innerHTML = "";
    arrayCarrello.forEach(idProdotto => {
        fetch(`http://localhost:8080/api/prodotti/prodotto/${idProdotto}`)
            .then((response) => {
                return response.json();
            })
            .then(data => {
                somma += data.prezzo;
                prezzoTotale.innerHTML = somma.toFixed(2);

                let li = `<li>${data.titolo} - ${data.prezzo}</li>`;
                listaPrezzi.innerHTML += li;
            })

    })
    if (arrayCarrello.length == 0) {
        prezzoTotale.innerHTML = 0;
    }
}



stampaCarrello();