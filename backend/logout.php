<?php
  session_start();  // Start the session
  session_destroy(); // Destroy all session variables
  echo "success";   // Return a response
?>
