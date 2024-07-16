<?php
include('db.php');

header('Content-Type: application/json');

if(isset($_POST['student_id'])) {
    $student_id = $_POST['student_id'];

    $sql = "SELECT c.* FROM courses c JOIN student_courses sc ON c.id = sc.course_id WHERE sc.student_id = '$student_id'";
    $res = mysqli_query($conn, $sql);

    $courses = [];
    while($row = mysqli_fetch_assoc($res)) {
        $courses[] = $row;
    }

    echo json_encode($courses);
} else {
    echo json_encode(['error' => 'Student ID is required']);
}
