import React from "react";
import { Link } from "react-router-dom";
import { studentRoutes } from "../../constants";
import "../../css/global-styles.css";
import StudentNavbar from "./StudentNavbar";

function StudentFeedback() {
  return (
    <div className="page-container">
      <div className="c1main-container">
        <StudentNavbar
          wrapperClass="c1left-navbar"
          menuItemClass="c1nav-button"
        />
        <StudentNavbar
          wrapperClass="c1right-navbar"
          menuItemClass="c1nav-button2"
          isSubMenu
        />

        <div className="c1mcontent">
          <p id="note">
            All the Feedback Forms will be reached to Program Coordinator and{" "}
            <br /> Quality Assurance Officer for Program Improvement
          </p>
          <br />
          <form
            action="https://axs2459.uta.cloud/feedback.php"
            className="feedback-form"
            method="post"
          >
            <fieldset id="info" className="studentfeedback">
              <legend>Feedback Form</legend>
              <input type="hidden" name="role" value="student"/>
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                name="name"
                
                required
                type="text"
              />
              <br />
              <br />
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                name="id"
                
                required
                type="email"
              />
              <br />
              <br />
              <label htmlFor="subject">Subject:</label>
              <input id="subject" name="subject" required type="text" />
              <br />
              <br />
              <label htmlFor="feedback">Feedback:</label>
              <textarea
                id="description"
                name="feedback"
                required
                rows={10}
                cols={50}
              ></textarea>
              <br />
              <br />
            </fieldset>
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default StudentFeedback;
