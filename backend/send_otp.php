<?php
    include("db.php");
    session_start();

    if(isset($_POST['email'])) {
        $email = $_POST['email'];

        // Generate a random OTP
        $otp = rand(1000, 9999);

        // Store the OTP in the session for later verification
        $_SESSION['otp'] = $otp;

        // Send email with OTP
        $to = $email;
        $subject = "Your OTP Code";
        $message = "Your OTP code is: $otp";
        $headers = "From: webmaster@example.com";

        if(mail($to, $subject, $message, $headers)) {
            echo 'success';
        } else {
            echo 'Failed to send email';
        }
    } else {
        echo 'Email is required';
    }
?>
