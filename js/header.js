let elHeader = document.querySelectorAll(".header");

function navBar() {
  elHeader.forEach(header => {
    header.innerHTML += `    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
          <div class="titolo">
            <a class="navbar-brand" href="./index.html">Azamon</a>
          </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link k " aria-current="page" href="./index.html">Homepage</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link k" href="./prodotti.html" role="button">
                   Elenco prodotti
                  </a>
              </li>
          </ul>
      </div>
      <ul class="nav-item checkout">
        <li class="nav-item">
            <a class="nav-link k" href="./carrello.html"><i class="bi bi-bag-check"></i></a>
        </li>
      </ul>
          </div>
        </nav>
   </div>`;
  })
}

document.addEventListener("DOMContentLoaded", navBar);



//<li><button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="bi bi-bag-check"></i></button></li>