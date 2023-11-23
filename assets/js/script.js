AOS.init({ disable: "mobile" });

const swiper = new Swiper(".sample-slider", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 24,
  autoplay: {
    delay: 3000,
  },

  breakpoints: {
    1024: {
      slidesPerView: 5,
    },
  },
});
