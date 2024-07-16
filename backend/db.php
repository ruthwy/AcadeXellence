<?php
$servername = "localhost";  // Usually, it is 'localhost'. Check with your hosting provider.
$username = "axs2459_acduser3";
$password = "Axs2459acduser3@123";
$dbname = "axs2459_acadexellence";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
?>
