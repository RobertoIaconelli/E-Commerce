var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop:true,
    autoplay : {
        delay : 600,
        enabled : true,
    },
    speed : 3000
  }); 

  var swiper = new Swiper(".cards", {
    slidesPerView: 4,
    grid: {
      rows: 1,
    },
    spaceBetween: 30,
    loop : true,
     autoplay : {
        delay : 1000 ,
        enabled : true,
     },
     
  });

