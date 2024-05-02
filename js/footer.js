let elFooter = document.querySelectorAll(".footer");

function stampaFooter() {
    elFooter.forEach(footer=>{
        footer.innerHTML+= `<div class="row">
        <div class="col-3">
          <h5>Azamon</h5>
          <p>Siamo un e-commerce in crescita</p>
          <ul class="d-flex list-unstyled ps-0 gap-3 fs-3">
            <li><i class="bi bi-instagram"></i></li>
            <li><i class="bi bi-facebook"></i></li>
            <li><i class="bi bi-youtube"></i></li>
            <li><i class="bi bi-snapchat"></i></li>
        </ul>
        </div>

        <div class="col-3">
          <h5>Il nostro negozio</h5>
          <p>Tutti i prodotti</p>
          <p>Telefoni</p>
          <p>Laptop</p>
          <p>Home Decorations</p>
        </div>
        
        <div class="col-3">
          <h5>Aiuto</h5>
          <p>Guida sul nostro sito</p>
          <p>Policy sulla</p>
          <p>Policy sul rimborso</p>
        </div>

        <div class="col-3">
          <h5>Su di noi</h5>
          <p>Recensione</p>
          <p>Contattaci</p>
        </div>

      </div>`;
    })
}

document.addEventListener("DOMContentLoaded", stampaFooter);