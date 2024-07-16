<?php
    include("db.php");
    header('Access-Control-Allow-Origin: https://axs2459.uta.cloud');
    $role=$_POST['role'];
    $name=$_POST['name'];
    $email=$_POST['email'];
    $subject=$_POST['subject'];
    $feedback=$_POST['feedback'];

    $sql="insert into feedback(role,name,email,subject,feedback) values('$role','$name','$email','$subject','$feedback')";
    $res=mysqli_query($conn,$sql);
    if($res)
    {
        echo "<script>alert('Feedback Added Succesfully');
        window.location.href='https://axs2459.uta.cloud/student'
        </script>";   
    }
    else{
        echo ('not added');
    }
?>