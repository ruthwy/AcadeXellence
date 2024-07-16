<?php
    include("db.php");

    if(isset($_POST['email'])) {
        $email = $_POST['email'];

        // Check if email exists
        $stmt = $conn->prepare("SELECT * FROM users WHERE email=?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if($result->num_rows == 1) {
            echo 'success';
        } else {
            echo 'Email not found';
        }
    } else {
        echo 'Email is required';
    }
?>
