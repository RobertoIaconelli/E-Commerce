let elHeader = document.querySelectorAll(".header");

function navBar(){
    elHeader.forEach(header=>{
      header.innerHTML+=`    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
          <div class="titolo">
            <a class="navbar-brand" href="#">Azamon</a>
          </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="../index.html">Homepage</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link" href="./pages/prodotti.html" role="button">
                   Elenco prodotti
                  </a>
                  <li class="nav-item">
                    <a class="nav-link" href="./pages/dettagliProdotto.html">Dettaglio prodotto</a>
                  </li>
                <li class="nav-item">
                  <a class="nav-link" href="./pages/carrello.html">Carrello</a>
                </li>
              </li>
          </ul>
      </div>
      <ul class="nav-item checkout">
        <li><a class="nav-link" href="#">Checkout</a></li>
      </ul>
          </div>
        </nav>
   </div>`;
    })
}

document.addEventListener("DOMContentLoaded" , navBar);