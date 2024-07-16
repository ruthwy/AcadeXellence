<?php
    include("db.php");
    header('Access-Control-Allow-Origin: https://axs2459.uta.cloud');
    $side=$_REQUEST['side'];
    $role=$_REQUEST['role'];
    $username=$_REQUEST['username'];
    $message=$_REQUEST['message'];
  

    $sql="insert into chat(role,username,message,side) values('$role','$username','$message','$side')";
    $res=mysqli_query($conn,$sql);
    if($res)
    {
        if($side=="admin")
        {
        echo "<script>alert('Chat Added Succesfully');
        window.location.href='https://axs2459.uta.cloud/admin/chat/'
        </script>"; 
        }  
        else if($side=='student')
        {
            echo "<script>alert('Chat Added Succesfully');
        window.location.href='https://axs2459.uta.cloud/student/chat/'
        </script>";  
        }
        else if($side=='pc')
        {
            echo "<script>alert('Chat Added Succesfully');
            window.location.href='https://axs2459.uta.cloud/pc/chat/'
            </script>"; 
        }
        else if($side=='instructor')
        {
            echo "<script>alert('Chat Added Succesfully');
            window.location.href='https://axs2459.uta.cloud/instructor/chat/'
            </script>"; 
        }
    }
?>