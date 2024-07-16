<?php
include('db.php');
header('Access-Control-Allow-Origin: https://axs2459.uta.cloud');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id'];
    $new_password = $_POST['new_password'];
    $confirm_password = $_POST['confirm_password'];

    if ($new_password == $confirm_password) {
        // Update the password in the database
        $stmt = $conn->prepare("UPDATE users SET password=? WHERE id=?");
        $stmt->bind_param("ss", $new_password, $id);
        $stmt->execute();

        if ($stmt->affected_rows > 0) {
            echo "<script>alert('Password updated successfully'); window.location.href='https://axs2459.uta.cloud/login';</script>";
        } else {
            echo "<script>alert('Failed to update password'); window.location.href='https://axs2459.uta.cloud/set_password';</script>";
        }
    } else {
        echo "<script>alert('Passwords do not match'); window.location.href='https://axs2459.uta.cloud/set_password';</script>";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Set Password</title>
</head>
<body>
    <h2>Set Your New Password</h2>
    <form method="POST" action="set_password.php">
        <label for="id">ID:</label>
        <input type="text" id="id" name="id" required><br><br>
        <label for="new_password">New Password:</label>
        <input type="password" id="new_password" name="new_password" required><br><br>
        <label for="confirm_password">Confirm Password:</label>
        <input type="password" id="confirm_password" name="confirm_password" required><br><br>
        <input type="submit" value="Set Password">
    </form>
</body>
</html>
