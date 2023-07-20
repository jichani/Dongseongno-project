var swiper = new Swiper(".second-swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  // loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  mousewheel: false,
  keyboard: true,

});

