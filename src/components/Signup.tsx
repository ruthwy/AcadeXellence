import React from "react";
import "../css/global-styles.css";
import { Link } from "react-router-dom";
import { routes } from "../constants";
import Header from "./Header";

const links = [routes.login, routes.home];
function Signup() {
  return (
    <div className="global-styles-ui">
      <div className="pcrpage_container">
        <div className="head">
          <Header links={links} />
          <hr />
        </div>
        <div className="signup-container">
          <form action="https://axs2459.uta.cloud/signup.php" method="post">
            <fieldset id="info" className="filldetails for_phone">
              <legend>SIGN UP</legend>
              <label htmlFor="username">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;First Name
              </label>
              <input
                type="text"
                id="username" name="fname"
                placeholder="Enter First Name"
                required
              />
              <br /><br/>
              <label htmlFor="username">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Last Name
              </label>
              <input
                type="text"
                id="lusername" name="lname"
                placeholder="Enter Last Name"
                required
              />
              <br />
              <br />
              <label htmlFor="email">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mail&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <input
                type="text"
                id="email" name="email"
                placeholder="Enter your mailID"
                required
              />
              <br />
              <br />
              <label htmlFor="Password">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phone
              </label>
              <input
                type="number"
                id="phone" name="phone"
                placeholder="Enter Phone"
                required
              />
              <br />
              <br />
              <label htmlFor="Password">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Password
              </label>
              <input
                type="password"
                id="Password" name="pass"
                placeholder="Choose your Password"
                required
              />
              <br />
              <br />
              <label htmlFor="Confirm_password">Confirm Password</label>
              <input
                type="password"
                id="Confirm_password" name="cpass"
                placeholder="Re-enter your Password"
                required
              />
              <br />
              <br />
              <label htmlFor="roleselection">Select your Category</label>
              <select
                id="roleselection"
                className="signselect"
                name="category"
              >
                <option value="student">Student</option>
                <option value="instructor">Instructor</option>
                <option value="admin">Admin</option>
                <option value="qao">Quality Assurance Officer</option>
                <option value="pc">Program Coordinator</option>
              </select>
              <br />
              <br />
              <div className="account-info-signup">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Already have an account?</p>
                <Link to="/">Login</Link>
              </div>
            </fieldset>
            <br />
            <br />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
