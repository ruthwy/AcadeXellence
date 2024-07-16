<?php
    include("db.php");

    if(isset($_POST['email']) && isset($_POST['newPassword'])) {
        $email = $_POST['email'];
        $newPassword = $_POST['newPassword'];

        // Reset the password
        $stmt = $conn->prepare("UPDATE users SET password=? WHERE email=?");
        $stmt->bind_param("ss", $newPassword, $email);
        $stmt->execute();

        if($stmt->affected_rows == 1) {
            $stmt2 = $conn->prepare("SELECT id FROM users WHERE email=?");
        $stmt2->bind_param("s", $email);
        $stmt2->execute();
        $result = $stmt2->get_result();
        $user = $result->fetch_assoc();
        $userId = $user['id'];
            echo 'Password reset successfully';
        } else {
            echo 'Failed to reset password';
        }
    } else {
        echo 'Email and new password are required';
    }
?>
