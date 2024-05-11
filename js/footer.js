let elFooter = document.querySelectorAll(".footer");

function stampaFooter() {
  elFooter.forEach(footer => {
    footer.innerHTML += `
    <!-- TOP -->
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <!-- COL 1 -->
          <div class="col-3">
            <div class="footer-top-item">
              <div class="d-flex align-items-center gap-3">
                <div class="left">
                  <span class="truck"><i class="bi bi-truck"></i></span>
                </div>
                <div class="right">
                  <div class="title">Spedizione rapida</div>
                  <p>in 24/48 ore dall'ordine</p>
                </div>
              </div>
            </div>
          </div>
          <!-- COL 2 -->
          <div class="col-3">
            <div class="footer-top-item">
              <div class="d-flex align-items-center gap-3">
                <div class="left">
                  <span><i class="bi bi-shield-check"></i></span>
                </div>
                <div class="right">
                  <div class="title">Spedizione rapida</div>
                  <p>in 24/48 ore dall'ordine</p>
                </div>
              </div>
            </div>
          </div>
          <!-- COL 3 -->
          <div class="col-3">
            <div class="footer-top-item">
              <div class="d-flex align-items-center gap-3">
                <div class="left">
                  <span><i class="bi bi-arrow-clockwise"></i></span>
                </div>
                <div class="right">
                  <div class="title">Spedizione rapida</div>
                  <p>in 24/48 ore dall'ordine</p>
                </div>
              </div>
            </div>
          </div>
          <!-- COL 4 -->
          <div class="col-3">
            <div class="footer-top-item">
              <div class="d-flex align-items-center gap-3">
                <div class="left">
                  <span><i class="bi bi-chat-dots"></i></span>
                </div>
                <div class="right">
                  <div class="title">Spedizione rapida</div>
                  <p>in 24/48 ore dall'ordine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CENTER -->
    <div class="container-md py-4">
        <div class="row">
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

      </div>
    </div>
    
    <!-- BOTTOM -->
    <div class="footer-bottom">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center ">
          <div class="left">
            <p>
              AZAMON SHOP – PROPRIETÀ DI ROBERTO IACONELLI S.P.A. P.I. IT01191437122 - COD. FISCALE E REG. IMPRESE
              06225590129 <br> REA PN 18752 CAPITALE SOCIALE 150.000,00€ I.V. IC ROBERTO IACONELLI SPA 2024 © ALL RIGHTS
              RESERVED
            </p>
          </div>
          <div class="right">
            <img src="imgs/footer/payments-footer.webp" alt="">
          </div>
        </div>
      </div>
    </div>
    `;
  })
}

document.addEventListener("DOMContentLoaded", stampaFooter);