<?php
    include("db.php");
    header('Access-Control-Allow-Origin: https://axs2459.uta.cloud');
    $coursename=$_REQUEST['courseName'];
    $courseObjective=$_REQUEST['courseObjective'];
    $instructorName=$_REQUEST['instructorName'];
    $programName=$_REQUEST['programName'];
    $role=$_REQUEST['role'];
    if($role=='quality')
    {
        $sql="insert into course(course_name,course_objective,instructor_name,program_name,role) values('$coursename','$courseObjective','$instructorName','$programName','$role')";
        $res=mysqli_query($conn,$sql);
        if($res)
        {
            echo "<script>alert('Course Added Succesfully');
            window.location.href='https://axs2459.uta.cloud/qa/manageCourse'
            </script>";   
        }
    }
    $sql="insert into course(course_name,course_objective,instructor_name,program_name,role) values('$coursename','$courseObjective','$instructorName','$programName','admin')";
    $res=mysqli_query($conn,$sql);
    if($res)
    {
        echo "<script>alert('Course Added Succesfully');
        window.location.href='https://axs2459.uta.cloud/admin/manageCourse/'
        </script>";   
    }
?>