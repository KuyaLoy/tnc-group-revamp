$(document).ready(function () {
  var accordionItems = $("ul.custom-accordion li");

  accordionItems.click(function () {
    var currentItem = $(this);

    if (!currentItem.hasClass("active")) {
      accordionItems.removeClass("active").find("p").slideUp();
      currentItem.addClass("active").find("p").slideDown();
    }
  });

  accordionItems.first().trigger("click");
});
