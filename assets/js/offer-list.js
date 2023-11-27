$(document).ready(function () {
  // Number of items to show on mobile
  var itemsToShowOnMobile = 5;

  // Select the list items
  var offerItems = $(".offer-item");

  // Hide items beyond the initial count on larger screens
  offerItems.slice(itemsToShowOnMobile).hide();

  // Toggle button click event
  $("#toggleButton").on("click", function () {
    // Toggle visibility of additional items on mobile
    offerItems.slice(itemsToShowOnMobile).toggle();

    // Toggle button text
    var buttonText = $("#toggleButton p").text().includes("View More")
      ? "Show Less"
      : "View More";
    $("#toggleButton p").text(buttonText);
  });

  // Adjust behavior for small screens
  function updateView() {
    if ($(window).width() <= 768) {
      // If the screen width is less than or equal to 768 pixels, show/hide based on the mobile count
      offerItems.hide();
      offerItems.slice(0, itemsToShowOnMobile).show();
    } else {
      // If the screen width is greater than 768 pixels, show all items
      offerItems.show();
    }
  }

  // Initial view update
  updateView();

  // Update view on window resize
  $(window).resize(function () {
    updateView();
  });
});
