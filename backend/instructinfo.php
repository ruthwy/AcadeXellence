<?php
    include("db.php");
    header('Access-Control-Allow-Origin: https://axs2459.uta.cloud');
    $status=$_REQUEST['status'];
    $role=$_REQUEST['role'];
    $firstname=$_REQUEST['firstname'];
    $lastname=$_REQUEST['lastname'];
    $email=$_REQUEST['email'];
    $password=$_REQUEST['password'];
    $office_address=$_REQUEST['office_address'];
  $phone=$_REQUEST['phone'];
$bio=$_REQUEST['bio'];
    $sql="insert into instructor_info(title,fname,lname,academic_title,email,password,office_address,phone,bio) values('$status','$role','$firstname','$lastname','$email','$password','$office_address','$phone','$bio')";
    $res=mysqli_query($conn,$sql);
    if($res)
    {
       
        echo "<script>alert('Info Added Succesfully');
        window.location.href='https://axs2459.uta.cloud/instructor/info'
        </script>"; 
      
       
    }
?>