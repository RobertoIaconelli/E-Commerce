let swiperMain = document.querySelector(".swiper-wrapper.rb");

let colori = ["rosso", "chiaro", "verde", "verdino", "grigio"];

for (let i = 0; i < colori.length; i++) {
  let slide = `<div class="swiper-slide">
  <div class="background ${colori[i]}">
    <div class="container-mdf">

      <img src="imgs/home/banner${i + 1}.jpg" alt="home" class=" homedeco">
    </div>
  </div>
</div>`;

  swiperMain.innerHTML += slide;
}