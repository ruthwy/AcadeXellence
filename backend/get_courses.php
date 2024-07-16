<?php
// Include your database connection file
include("db.php");
session_start();

// Check if the user is logged in
if(isset($_POST['student_id'])) {
    $student_id = $_POST['student_id'];
    $currentTerm = 'Fall 2023';  // Replace with logic to determine current term

    // Use prepared statements to prevent SQL injection
    $stmt = $conn->prepare("SELECT * FROM enrolled_courses WHERE student_id = ? AND term = ?");
    $stmt->bind_param("ss", $student_id, $currentTerm);
    $stmt->execute();
    $result = $stmt->get_result();

    $courses = [];
    while($row = $result->fetch_assoc()) {
        $courses[] = $row;
    }

    // Form-encode the response
    foreach($courses as $course) {
        echo "course_name=" . urlencode($course['course_name']) . "&";
    }
} else {
    echo "error=User not logged in";
}
?>
