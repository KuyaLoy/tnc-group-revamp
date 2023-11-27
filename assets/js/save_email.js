document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("submitBtn")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default form submission behavior

      // Validate email using a regular expression
      var emailInput = document.getElementById("email");
      var emailValue = emailInput.value.trim();

      // Regular expression for a simple email validation
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (emailRegex.test(emailValue)) {
        // Valid email, proceed with saving
        saveEmail(emailValue);
      } else {
        alert("Please enter a valid email address.");
        // Clear the input field after an invalid email
        emailInput.value = "";
      }
    });

  function saveEmail(email) {
    // Use Fetch API for asynchronous request
    fetch("save_email.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "email=" + encodeURIComponent(email),
    })
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else if (response.status === 400) {
          return response.text().then((errorMessage) => {
            // Display a user-friendly alert for validation failure
            alert(errorMessage);
            document.getElementById("email").value = "";
            throw new Error("Validation error");
          });
        } else {
          // Ignore other errors
          return Promise.reject("Unexpected error");
        }
      })
      .then((responseText) => {
        // Display the response from the server (if needed)
        alert("Success: " + responseText);

        // Clear the input field after successful submission
        document.getElementById("email").value = "";
      })
      .catch((error) => {
        if (error.message !== "Validation error") {
          // Log other errors to the console if needed
          console.error("Error:", error);
        }
      });
  }
});
