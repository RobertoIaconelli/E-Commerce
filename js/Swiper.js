var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  autoplay: {
    delay: 600,
    enabled: true,
  },
  speed: 3000
});

<<<<<<< HEAD
// var swiper = new Swiper(".cards", {
//   slidesPerView: 4,
//   grid: {
//     rows: 1,
//   },
//   loop: true,
//   spaceBetween: 30,
//   autoplay: {
//     delay: 1000,
//     enabled: true,
//   },

// });
=======
var swiper = new Swiper(".cards", {
  slidesPerView: 4,
  grid: {
    rows: 1,
  },
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 1000,
    enabled: true,
  },

});
>>>>>>> f50f64b8b0bca8995717e14b2969127655650004


var swiper = new Swiper(".swiperDettaglio", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});




