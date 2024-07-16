import { studentRoutes } from "../../constants";
import StudentNavbar from "./StudentNavbar";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from "../../UserContext";


const DashboardCourseList = () => {
  // importing global variables from context
  const { userId, setUserId } = useUser();
  // setting global user id to state 
  const [studentId, setStudentId] = useState(userId);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!studentId) {
      setError('User student data not logged in.');
      return;
    }

    // Make a POST request to fetch enrolled courses
    axios.post(`https://axs2459.uta.cloud/get_courses.php`, { student_id: studentId })
      .then(response => {
        if (response.data.error) {
          setError(response.data.error);
        } else {
          setEnrolledCourses(response.data);
        }
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, [studentId]);

  return (
    <div className="page-container">
      <div className="main-container">
        <StudentNavbar wrapperClass="left-navbar" menuItemClass="nav-button" />
        <div className="course-box">
          <div className="course-box-header">
            <h2>Your Courses</h2>
          </div>
          <div className="course-box-content">
            {error ? <p>{error}</p> :
              <ul>
                {enrolledCourses.map(course => (
                  <li key={course.ecid}>{course.course_name}</li>
                ))}
              </ul>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCourseList;