<?php
include('db.php');
header('Access-Control-Allow-Origin: https://axs2459.uta.cloud');

$name=$_REQUEST['fname'];
$email=$_REQUEST['email'];
$password=$_REQUEST['pass'];
$role=$_REQUEST['category'];
$phone=$_POST['phone'];
$lname=$_POST['lname'];

$query="select * from signup where email='$email'";
$res=mysqli_query($conn,$query);
$count=mysqli_num_rows($res);
if($count!=0)
{
    echo "<script>alert('this account already exist');
    window.location.href='https://axs2459.uta.cloud/admin/manageStudent';
    </script>";
}
else 
{
   
        $sql="insert into signup(name,email,password,role,lname,phone) values('$name','$email','$password','$role','$lname','$phone')";
        $res=mysqli_query($conn,$sql);
        if($res)
        {
            echo "<script>alert('Submitted Succesfully')
            window.location.href='https://axs2459.uta.cloud/admin/manageStudent';
            </script>";
            
        }
        else 
        {
            echo "<script>alert('Something Went Wrong')</script>";
        }
    
   
    
}


?>