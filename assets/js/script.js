AOS.init({ disable: "mobile" });

const swiper = new Swiper(".sample-slider", {
  loop: true,
  slidesPerView: 1.6,
  spaceBetween: 15,
  navigation: {
    nextEl: ".next-next",
    prevEl: ".prev-prev",
  },
  //autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 4,
    },
    1921: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
  },
});

$(function () {
  $("#vidBox").VideoPopUp({
    backgroundColor: "#17212a",
    opener: "video1",
    maxweight: "640",
    idvideo: "v1",
  });
});
