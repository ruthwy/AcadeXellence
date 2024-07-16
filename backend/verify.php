<?php
include('db.php');

if(isset($_GET['token'])) {
    $token = $_GET['token'];

    // Select user with the corresponding token
    $query = "SELECT * FROM signup WHERE token='$token' LIMIT 1";
    $res = mysqli_query($conn, $query);

    if(mysqli_num_rows($res) > 0) {
        $user = mysqli_fetch_assoc($res);

        // Update the verified column for the user
        $update_query = "UPDATE signup SET verified=1 WHERE token='$token'";
        if(mysqli_query($conn, $update_query)) {
            echo "Your email has been verified! You can now log in.";
        } else {
            echo "Something went wrong. Please try again later.";
        }
    } else {
        echo "Invalid token.";
    }
} else {
    echo "No token provided.";
}
?>
