<?php
include('db.php');
header('Access-Control-Allow-Origin: https://axs2459.uta.cloud');

$name=$_REQUEST['name'];
$email=$_REQUEST['email'];
$message=$_REQUEST['message'];
$sql="insert into contact(name,email,message) values('$name','$email','$message')";
$res=mysqli_query($conn,$sql);
if($res)
{
    echo "<script>alert('Submitted Succesfully')</script>";
    header('location:https://axs2459.uta.cloud/contactus');
}
else 
{
    echo "<script>alert('Something Went Wrong')</script>";
}
?>