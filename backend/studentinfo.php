<?php
include('db.php');
header('Access-Control-Allow-Origin: https://axs2459.uta.cloud');

$firstName=$_REQUEST['firstName'];
$lastName=$_REQUEST['lastName'];
$email=$_REQUEST['email'];

$phoneNumber=$_REQUEST['phoneNumber'];
$dob=$_REQUEST['dob'];
$gender=$_REQUEST['gender'];

$address=$_REQUEST['address'];
$emergencyContact=$_REQUEST['emergencyContact'];
$studentId=$_REQUEST['studentId'];



$currentSemester=$_REQUEST['currentSemester'];
$currentGPA=$_REQUEST['currentGPA'];
$enrolledCourses=$_REQUEST['enrolledCourses'];


$skills=$_REQUEST['skills'];
$interests=$_REQUEST['interests'];




$sql="insert into student_info(fname,lname,email,phone,dob,gender,address,emg_contact,student_Id,c_semester,c_gpa,enrolled_course,skills,interest) values('$firstName','$lastName','$email','$phoneNumber','$dob','$gender','$address','$emergencyContact','$studentId','$currentSemester','$currentGPA','$enrolledCourses','$skills','$interests')";
$res=mysqli_query($conn,$sql);
if($res)
{
    echo "<script>alert('Submitted Succesfully')
    window.location.href='https://axs2459.uta.cloud/student/info'
    </script>";
   
}
else 
{
    echo "<script>alert('Something Went Wrong')</script>";
}
?>