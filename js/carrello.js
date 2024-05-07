let container = document.querySelector(".oggettiCarrello");
let arrayCarrello = JSON.parse(localStorage.getItem("Carrello"));
let listaPrezzi = document.querySelector(".listaPrezzi");
let prezzoTotale = document.querySelector(".prezzoTotale2");

function stampaCarrello(){
    let somma = 0;
    arrayCarrello.forEach(idProdotto=>{
        fetch(`https://dummyjson.com/products/${idProdotto}`)
        .then(response => {
          return response.json()
        })
        .then(data => {
            let oggettoCarrello = `<div class="row prodottoCarrello">
            <div class="col-lg-3 ">
                <div class="divImmagine">
                    <img src="${data.thumbnail}" class="immagineCarrello"/>
                </div>
            </div>
            <div class="col-lg-4 px-3">
                <h1>${data.title}</h1>
                <p>Quantità: ${data.stock}</p>
                <p>Prezzo: ${data.price}€ </p>
                <button data-id="${data.id} class="bg-danger btnDelete">Rimuovi</button>
                </div>
                </div>`
                container.innerHTML+= oggettoCarrello;
                
                
                let li = `<li>${data.title} - ${data.price}</li>`
                listaPrezzi.innerHTML+= li;
                somma += data.price;
                console.log(somma);
                prezzoTotale.innerHTML= somma;
                console.log(prezzoTotale);


                let btnDelete = document.querySelector(".btnDelete");
                btnDelete.addEventListener("click", function(){
                    console.log("ciao");
                });
            
            })
        })
    }
    
    stampaCarrello();
    
    
