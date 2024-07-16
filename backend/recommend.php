<?php
include('db.php');
header('Access-Control-Allow-Origin: https://axs2459.uta.cloud');

$name=$_REQUEST['instructorName'];
$address=$_REQUEST['address'];

$sql="insert into recommendations(inst_name,recommend) values('$name','$address')";
$res=mysqli_query($conn,$sql);
if($res)
{
    echo "<script>alert('Submitted Succesfully')
    window.location.href='https://axs2459.uta.cloud/qa/recommendation';
    </script>";
  
}
else 
{
    echo "<script>alert('Something Went Wrong')</script>";
}
?>