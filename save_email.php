<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["email"])) {
    $email = $_POST["email"];
    $filename = "emails.csv";

    // Check if the email already exists in the CSV file
    if (file_exists($filename) && in_array($email, file($filename, FILE_IGNORE_NEW_LINES))) {
        http_response_code(400);
        echo "Email already exists";
    } else {
        // Append the email to the CSV file
        file_put_contents($filename, $email . PHP_EOL, FILE_APPEND);

        // You can add additional logic or response if needed
        echo "Email saved successfully!";
    }
} else {
    // Invalid request
    http_response_code(400);
    echo "Invalid request";
}
?>
