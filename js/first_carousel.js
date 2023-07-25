var swiper = new Swiper(".first_swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  effect: 'fade', // 페이드 효과 사용
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});