let container = document.querySelector(".oggettiCarrello");
let arrayCarrello = JSON.parse(localStorage.getItem("Carrello"));
let listaPrezzi = document.querySelector(".listaPrezzi");
let prezzoTotale = document.querySelector(".prezzoTotale2");
let numberProducts = document.querySelector(".totalProducts");

function stampaCarrello() {
    let somma = 0;
    arrayCarrello.forEach((idProdotto) => {
        fetch(`https://dummyjson.com/products/${idProdotto}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let oggettoCarrello = `<div class="row prodottoCarrello">
            <div class="col-lg-3 ">
                <div class="divImmagine">
                    <img src="${data.thumbnail}" class="immagineCarrello"/>
                </div>
            </div>
            <div class="col-lg-4 px-3">
                <h1>${data.title}</h1>
                <p>Quantità: ${data.stock}</p>
                <p>Descrizione: ${data.description}</p>
                <p>Prezzo: ${data.price}€ </p>
                <button data-id="${data.id}"  class="bg-danger btnDelete">Rimuovi</button>
                </div>
                </div>`;
                container.innerHTML += oggettoCarrello;

                let li = `<li>${data.title} - ${data.price}€</li>`;
                listaPrezzi.innerHTML += li;
                somma += data.price;


                prezzoTotale.innerHTML = somma;


                eliminaProdotto();
            });
    });
    quantita.innerHTML = arrayCarrello.length;
});



}

function eliminaProdotto() {
    let btnDelete = document.querySelectorAll(".btnDelete");
    btnDelete.forEach((btn) => {
        btn.addEventListener("click", function () {
            let bottoneId = this.getAttribute("data-id");
            arrayCarrello = arrayCarrello.filter(
                (idProdotto) => idProdotto !== bottoneId
            );
            
            
            localStorage.setItem("Carrello", JSON.stringify(arrayCarrello));
            let cardProdotto = document.querySelector(".prodottoCarrello");
            cardProdotto.remove();
            quantita.innerHTML = arrayCarrello.length;
            aggiornamentoPrezzo();
            
            
            console.log(quantita);
            
        });

    });
}



function aggiornamentoPrezzo() {
    let somma = 0;
    prezzoTotale.innerHTML = "";
    listaPrezzi.innerHTML = "";
    arrayCarrello.forEach(idProdotto => {
        fetch(`https://dummyjson.com/products/${idProdotto}`)
            .then((response) => {
                return response.json();
            })
            .then(data => {
                somma += data.price;
                prezzoTotale.innerHTML = somma;
                let li = `<li>${data.title} - ${data.price}</li>`;
                listaPrezzi.innerHTML += li;
            })

    })
}

stampaCarrello();
