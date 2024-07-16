<?php
include('db.php');
header('Access-Control-Allow-Origin: https://axs2459.uta.cloud');
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');





$service=$_REQUEST['service'];
$programmname=$_REQUEST['programName'];
$objective=$_REQUEST['objective'];
$descp=$_REQUEST['description'];


        $sql="insert into quality_awarness(service,pro_name,objective,descrip) values('$service','$programmname','$objective','$descp')";
        $res=mysqli_query($conn,$sql);
        if($res)
        {
            echo "<script>alert('Submitted Succesfully')
            window.location.href='https://axs2459.uta.cloud/qa';
            </script>";
            
        }
        else 
        {
            echo "<script>alert('Something Went Wrong')</script>";
        }
    
  

?>