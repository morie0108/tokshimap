let swiper = new Swiper(".swiper-container", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  slidesPerView: 1,
  breakpoints: {
    // 960px以上の場合
    960: {
      slidesPerView: 2,
    },
    // 1200px以上の場合
    1200: {
      slidesPerView: 4,
    },
  },
});
