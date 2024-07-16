<?php
    include("db.php");

    if(isset($_POST['email'])) {
        $email = $_POST['email'];

        // Fetch user role using a simple SQL query
        $query = "SELECT role FROM users WHERE email='$email'";
        $result = mysqli_query($conn, $query);
        $row = mysqli_fetch_assoc($result);

        if($row) {
            echo $row['role'];
        } else {
            echo 'Email not found';
        }
    } else {
        echo 'Email is required';
    }
?>
