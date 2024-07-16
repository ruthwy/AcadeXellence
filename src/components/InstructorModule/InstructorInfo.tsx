import React from "react";
import InstructorNavbar from "./InstructorNavbar";

function InstructorInfo() {
  return (
    <div className="page-container">
      {/* MAIN CONTENT */}
      <div className="main-container">
        {/* LEFT NAVBAR */}
        <InstructorNavbar />
        {/* INFO BOXES */}
        <div className="profile_pic_update">
          <form style={{ textAlign: "left" }} action="https://axs2459.uta.cloud/instructinfo.php">
            <div className="row">
              <div className="col-25">
                <label htmlFor="country">Title</label>
              </div>
              <div className="col-75">
                <select id="country" name="status">
                  <option value="dr">Dr.</option>
                  <option value="mr">Mr.</option>
                  <option value="mrs">Mrs.</option>
                  <option value="miss">Miss.</option>
                  <option value="professor">Professor</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="fname">First Name</label>
              </div>
              <div className="col-75">
                <input
                  style={{ textAlign: "left" }}
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Richard"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="lname">Last Name</label>
              </div>
              <div className="col-75">
                <input
                  style={{ textAlign: "left" }}
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder="Davenport"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="country">Academic Title</label>
              </div>
              <div className="col-75">
                <select id="country" name="role">
                  <option value="instructor">Instructor</option>
                  <option value="assistant_professor">Assistant Professor</option>
                  <option value="associate_professor_">Associate Professor</option>
                  <option value="professor">Professor</option>
                  <option value="chairman">Chairman</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="fname">Email Address</label>
              </div>
              <div className="col-75">
                <input
                  style={{ textAlign: "left" }}
                  type="text"
                  id="fname"
                  name="id"
                  placeholder="dvrxxxxxxxxx.edu"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="fname">Password</label>
              </div>
              <div className="col-75">
                <input
                  style={{ textAlign: "left" }}
                  type="text"
                  id="fname"
                  name="password"
                  placeholder="***********"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="fname">Office Address</label>
              </div>
              <div className="col-75">
                <input
                  style={{ textAlign: "left" }}
                  type="text"
                  id="fname"
                  name="office_address"
                  placeholder="Room 4655,HGT,UTA"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="fname">Phone Number</label>
              </div>
              <div className="col-75">
                <input
                  style={{ textAlign: "left" }}
                  type="text"
                  id="fname"
                  name="phone"
                  placeholder="647398475654"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="fname">Bio</label>
              </div>
              <div className="col-75">
                <input
                  style={{ textAlign: "left" }}
                  type="text"
                  id="fname"
                  name="bio"
                  placeholder="Web Data Management, Cloud Computing, Software Engineering, Object Oriented Programming..."
                />
              </div>
            </div>
            <br />
            <div className="row">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
      {/* CHAT */}
      <div className="chat-icon">Chat?</div>
    </div>
  );
}

export default InstructorInfo;
