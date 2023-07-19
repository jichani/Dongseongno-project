
const colors = ['#f54747', '#00AB24', '#D35F85'];
const root = document.documentElement;

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  effect: 'fade', // 페이드 효과 사용
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}`;
    }
  }
});

swiper.on('slideChange', function () {
  const realIndex = swiper.realIndex;
  const color = colors[realIndex];
  root.style.setProperty('--swiper-theme-color', color);
});