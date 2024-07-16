<?php
include('db.php');
header('Access-Control-Allow-Origin: *');

$name = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$password = $_POST['pass'];
$cpassword = $_POST['cpass'];
$role = $_POST['category'];
$phone = $_POST['phone'];

$query = "SELECT * FROM signup WHERE email='$email'";
$res = mysqli_query($conn, $query);
$count = mysqli_num_rows($res);

if($count != 0) {
    echo "<script>alert('This account already exists');
    window.location.href='https://axs2459.uta.cloud/signup';
    </script>";
} else {
    
        // Generate a unique ID based on role
        $prefix = [
            'admin' => 'acxadm_',
            'student' => 'acxstud_',
            'instructor' => 'acxins_',
            'qao' => 'acxqa_',
            'pc' => 'acxpc_'
        ];

        do {
            $num = rand(1001, 9999);
            $id = $prefix[$role] . $num;
            $query = "SELECT * FROM users WHERE id='$id'";
            $res = mysqli_query($conn, $query);
            $count = mysqli_num_rows($res);
        } while($count != 0);

        // Generate a dummy password
        $dummy_password = bin2hex(random_bytes(4));

        // Insert into signup table
        $sql_signup = "INSERT INTO signup(name, email, password, role, lname, phone) VALUES('$name', '$email', '$password', '$role', '$lname', '$phone')";
        $res_signup = mysqli_query($conn, $sql_signup);

        // Insert into users table
        $sql_users = "INSERT INTO users(id, fname, lname, email, role, password) VALUES('$id', '$name', '$lname', '$email', '$role', '$dummy_password')";
        $res_users = mysqli_query($conn, $sql_users);
        if($role === 'student' && $res_users) {
            $default_courses = [4,8,10];
            foreach($default_courses as $course_id) {
                $sql_enroll = "INSERT INTO student_courses(student_id, course_id) VALUES('$id', $course_id)";
                mysqli_query($conn, $sql_enroll);
            }
        }

        if($res_signup && $res_users) {
            // Send email with ID and dummy password
            $to = $email;
            $subject = "Account Details";
            $message = "Your ID: $id \n Your temporary password: $dummy_password";
            $headers = "From: noreply@yourdomain.com\r\n";

            mail($to, $subject, $message, $headers);

            echo "<script>alert('Submitted Successfully. Please check your email for login details');
            window.location.href='https://axs2459.uta.cloud/signup';
            </script>";
        } 
    
}
?>
