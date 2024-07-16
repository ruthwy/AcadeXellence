<?php
include("db.php");
header('Access-Control-Allow-Origin: https://axs2459.uta.cloud');
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');
$id=$_REQUEST['q'];
$sql="delete from signup where id='$id'";
$trp = mysqli_query($conn,$sql);


    echo "<script>alert('Deleted Succesfully');
    window.location.href='https://axs2459.uta.cloud/admin/manageStudent/';
    </script>";

?>