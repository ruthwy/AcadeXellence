<?php
    // Include database connection
    include("db.php");

    // Set headers to allow cross-origin requests
    header('Access-Control-Allow-Origin: https://axs2459.uta.cloud');

    // Check if the required parameters are set
    if(isset($_REQUEST['id']) && isset($_REQUEST['password'])) {
        $id = $_REQUEST['id'];
        $password = $_REQUEST['password'];

        // Use prepared statements to prevent SQL injection
        $stmt = $conn->prepare("SELECT * FROM users WHERE id=? AND password=?");
        $stmt->bind_param("ss", $id, $password);
        $stmt->execute();
        $result = $stmt->get_result();

        if($result->num_rows == 1) {
            $user = $result->fetch_assoc();

            // Check if the user is logging in with a dummy password
            if(strlen($password) == 8) { // assuming dummy passwords are 8 characters long
                echo "<script>alert('Please set your new password'); window.location.href='https://axs2459.uta.cloud/set_password';</script>";
            } else {
                // Redirect based on the role
                $redirect_urls = [
                    'admin' => 'https://axs2459.uta.cloud/admin',
                    'student' => 'https://axs2459.uta.cloud/student',
                    'instructor' => 'https://axs2459.uta.cloud/instructor',
                    'qao' => 'https://axs2459.uta.cloud/qa',
                    'pc' => 'https://axs2459.uta.cloud/pc'
                ];

                $role = $user['role'];
                if(array_key_exists($role, $redirect_urls)) {
                    echo "<script>window.location.href='{$redirect_urls[$role]}';</script>";
                } else {
                    echo "Invalid role specified";
                }
            }
        } else {
            echo "<script>alert('Invalid credentials'); window.location.href='https://axs2459.uta.cloud/login';</script>";
        }
    } else {
        // Required parameters not provided
        echo "ID and password are required";
    }
?>
