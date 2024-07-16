import React from "react";
import "../../css/global-styles.css";
import { Link } from "react-router-dom";
import { studentRoutes } from "../../constants";
import StudentNavbar from "./StudentNavbar";
import axios from 'axios';


class StudentInfo extends React.Component {
  constructor(props)
  {
    super(props)
  }
 
 
  render()
  {
  return (
    <div className="sipage-container">
      <div className="simain-container">
        <StudentNavbar wrapperClass="left-navbar" menuItemClass="nav-button" />
        <div className="sicontainer">
          <h2>MY INFORMATION</h2>
          <form id="userProfileForm" action="https://axs2459.uta.cloud/studentinfo.php">
            <fieldset id="info">
              <legend>PERSONAL INFORMATION:</legend>
              <label htmlFor="firstName">
                First Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              
              <input
                id="firstName"
                name="firstName"
                
                type="text"
              />
              <br />
              <br />

              <label htmlFor="lastName">
                Last Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <input
                id="lastName"
                name="lastName"
                
                type="text"
              />
              <br />
              <br />

              <label htmlFor="email">
                Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <input
                id="email"
                name="id"
                
                type="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
              <br />
              <br />

              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                
                type="tel"
                
              />
              <br />
              <br />

              <label htmlFor="dob">
                Date of Birth:&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <input
                id="dob"
                name="dob"
                type="date"
                pattern="\d{4}-\d{2}-\d{2}"
              />
              <br />
              <br />

              <label>Gender:</label>
              <br />
              <input type="radio" id="male" name="gender" value="Male" />
              <label className="gender-label" htmlFor="male">
                Male
              </label>
              <br />

              <input type="radio" id="female" name="gender" value="Female" />
              <label className="gender-label" htmlFor="female">
                Female
              </label>
              <br />

              <input type="radio" id="other" name="gender" value="Other" />
              <label className="gender-label" htmlFor="other">
                Other
              </label>
              <br />
              <br />
              <br />

              <label htmlFor="address">Address:</label>
              <textarea
                cols={50}
                id="description"
                name="address"
                rows={4}
              ></textarea>
              <br />
              <br />

              <label htmlFor="emergencyContact">Emergency Contact:</label>
              <input
                id="emergencyContact"
                name="emergencyContact"
                type="tel"
                
              />
              <br />
              <br />
            </fieldset>
            <br />
            <br />
            <br />
            <fieldset id="info">
              <legend>ACADEMIC INFORMATION:</legend>
              <label htmlFor="studentId">
                Student
                ID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <input
                id="studentId"
                name="studentId"
               
                type="text"
              />
              <br />
              <br />
              <label htmlFor="currentSemester">Current Semester:</label>
              <input
                id="currentSemester"
                name="currentSemester"
                
                type="text"
              />
              <br />
              <br />
              <label htmlFor="currentGPA">
                Current
                GPA:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <input
                id="currentGPA"
                name="currentGPA"
               
                type="text"
              />
              <br />
              <br />
              <label htmlFor="enrolledCourses">Enrolled Courses:</label>
              <div className="readonly-list" id="enrolledCourses">
              <select name="enrolledCourses">
          <option value="course-1">Course-1</option>
          <option value="course-2">Course-2</option>
          <option value="course-3">Course-3</option>
          <option value="course-4">Course-4</option>
          <option value="course-5">Course-5</option>

           </select>
             
                <br />
              </div>
              <br />
              <br />
            </fieldset>
            <br />
            <br />
            <br />
            <fieldset id="info">
              <legend>INTERESTS & SKILLS:</legend>
              <label htmlFor="skills">Skills:</label>
              <input
                id="description"
                name="skills"
                placeholder="e.g., Python, Machine Learning"
                type="text"
              />
              <br />
              <br />
              <label htmlFor="interests">Interests:</label>
              <textarea
                cols={50}
                id="description"
                placeholder="Let us know your technical interests"
                name="interests"
                rows={6}
              ></textarea>
              <br />
              <br />
            </fieldset>
            <br />
            <br />
            <button type="submit">Save Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
}
}
export default StudentInfo;
