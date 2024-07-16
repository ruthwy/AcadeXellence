<?php
include('db.php');

if(isset($_POST['student_id']) && isset($_POST['course_id'])) {
    $student_id = $_POST['student_id'];
    $course_id = $_POST['course_id'];

    $sql = "INSERT INTO student_courses(student_id, course_id) VALUES('$student_id', $course_id)";
    $res = mysqli_query($conn, $sql);

    if($res) {
        echo "Enrolled successfully";
    } else {
        echo "Failed to enroll";
    }
} else {
    echo "Student ID and Course ID are required";
}
?>
