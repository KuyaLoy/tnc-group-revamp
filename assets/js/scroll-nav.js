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
