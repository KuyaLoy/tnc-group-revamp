AOS.init({ disable: "mobile" });

var navMain = $(".navbar-collapse");

navMain.on("click", "a", null, function () {
  navMain.collapse("hide");
});

document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll(".navbar-nav a");
  const sectionOffsets = {
    "#Home": 100,
    "#Solutions": -500,
    "#About-Us": -350,
    "#Services": -400,
    "#Portfolio": -400,
    "#Contact-Us": 300,
  };

  window.addEventListener("scroll", function () {
    let fromTop = window.scrollY;

    navbarLinks.forEach((link) => {
      let section = document.querySelector(link.hash);

      if (
        section.offsetTop - sectionOffsets[link.hash] <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        navbarLinks.forEach((navLink) => {
          navLink.parentElement.classList.remove("active");
        });
        link.parentElement.classList.add("active");
      } else {
        link.parentElement.classList.remove("active");
      }
    });
  });
});

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
  $("#vidBox2").VideoPopUp({
    backgroundColor: "#17212a",
    opener: "video1",
    maxweight: "640",
    idvideo: "v1",
  });
});
