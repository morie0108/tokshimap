let swiper = new Swiper(".swiper-container", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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
