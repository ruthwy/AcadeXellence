<?php
    session_start();

    if(isset($_POST['email']) && isset($_POST['code'])) {
        $email = $_POST['email'];
        $code = $_POST['code'];

        // Check if the OTP matches the session OTP
        if(isset($_SESSION['otp']) && $code == $_SESSION['otp']) {
            echo 'success';
        } else {
            echo 'Invalid OTP';
        }
    } else {
        echo 'Email and OTP code are required';
    }
?>
