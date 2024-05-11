let email = document.getElementById("email");
let orderId = document.getElementById("order_id");
let erroreOrdine = document.querySelector(".erroreOrdine");
let circleCollections = document.querySelectorAll(".circle");
let iconaCollections = document.querySelectorAll(".icona");
let numeroOrdine = document.querySelector(".numeroOrdine");
let statoOrdine = document.querySelector(".statoOrdine");
let progresso = document.querySelector(".progresso");
let outputOrdine = document.querySelector(".outputOrdine");

console.log(circleCollections)
console.log(iconaCollections)


let traccia = document.querySelector(".traccia");

const regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


function validazione() {
  erroreOrdine.innerHTML = "";
  let emailValue = email.value;
  let order = orderId.value;

  if ((!regexEmail.test(emailValue)) && order.length < 15) {
    erroreOrdine.innerHTML = `<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Email e Numero ordine sono errati`;
  } else if (order.length < 15) {
    erroreOrdine.innerHTML = `<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Numero ordine errato`;
  } else if (!regexEmail.test(emailValue)) {
    erroreOrdine.innerHTML = `<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Email non valida`;
  } else {
    outputOrdine.classList.remove("d-none");
    numeroOrdine.innerHTML = order;
    switch (counter) {
      case counter = 0:
        statoOrdine.innerHTML = "Ordine Effettuato";
        progresso.innerHTML = ` <div class="progress mb-3" role="progressbar" aria-label="Success example" aria-valuenow="25"
        aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar yellow " style="width: 25%">25%</div>
      </div>`;
        circleCollections[0].classList.add("yellow");
        iconaCollections[0].classList.add("yellow");
        statoOrdine.classList.add("statoOrdine");
        break;
      case counter = 1:
        statoOrdine.innerHTML = "Ordine Spedito";
        progresso.innerHTML = ` <div class="progress mb-3" role="progressbar" aria-label="Success example" aria-valuenow="50"
        aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar bg-warning " style="width: 50%">50%</div>
      </div>`;
      circleCollections[1].classList.add("orangee");
      
      statoOrdine.classList.add("statoOrdineSpedito");
        break;
      case counter = 2:
        statoOrdine.innerHTML = "Ordine In Consegna";
        progresso.innerHTML = ` <div class="progress mb-3" role="progressbar" aria-label="Success example" aria-valuenow="75"
        aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar bg-info " style="width: 75%">75%</div>
      </div>`;
      circleCollections[2].classList.add("azzurrino");
      iconaCollections[2].classList.add("azzurrino");
      statoOrdine.classList.add("statoOrdineConsegna");
        break;
      case counter = 3:
        statoOrdine.innerHTML = "Ordine Consegnato";
        progresso.innerHTML = ` <div class="progress mb-3" role="progressbar" aria-label="Success example" aria-valuenow="100"
        aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar bg-success " style="width: 100%">100%</div>
      </div>`;
      statoOrdine.classList.add("statoOrdineConsegnato");
      circleCollections[3].classList.add("verde");
        break;
    }
    colora();

  }
}

traccia.addEventListener("click", validazione);


let counter = Math.floor(Math.random() * 4);
console.log(counter)

function colora() {
  circleCollections[counter].classList.add("check");
  iconaCollections[counter].classList.add("check");
  erroreOrdine.innerHTML = "";
}




