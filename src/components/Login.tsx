import React, { useState } from "react";
import "../global-styles.less";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { routes } from "../constants";
import { useUser } from "../UserContext";


const links = [routes.home, routes.login, routes.signup];

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student"); // Default role
  // const { id, changeId } = useUser();
const { userId, setUserId } = useUser();


  const handleLogin = async (event) => {
    event.preventDefault();
    console.log("****");
    try {
      const response = await fetch("https://axs2459.uta.cloud/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, role }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.valid) {
          // Set the user ID in local storage
          setUserId(username);

          // Determine the redirection route based on the user's role
          const redirectionRoute = getRedirectionRoute(data.role);
          console.log(redirectionRoute)
          navigate(redirectionRoute.to);
        } else {
          console.error(data.message);
        }
      } else {
        console.error("Server error");
      }
    } catch (error) {
      console.error("Network error", error);
    }
  };

  const getRedirectionRoute = (userRole) => {
    switch (userRole) {
      case "admin":
        return routes.admin;
      case "student":
        return routes.student;
      case "instructor":
        return routes.instructor;
      case "qao":
        return routes.qao;
      case "pc":
        return routes.pc;
      default:
        return routes.home; // Default route, you can change this to any other route
    }
  };

  return (
    <div className="global-styles-ui">
      <div className="pcrpage_container">
        <div className="head">
          <Header links={links} />
          <hr />
        </div>
        <div className="login-container">
          <form onSubmit={handleLogin}>
            <fieldset id="info" className="filldetails for_phone">
              <legend>LOGIN</legend>
              <br />
              <label htmlFor="username">U_ID &nbsp;&nbsp;&nbsp;</label>
              <input
                name="id"
                type="text"
                id="username"
                placeholder="Enter your username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              <br />
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                id="Password"
                name="password"
                placeholder="Enter your Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <label htmlFor="roleselection">Select your Category</label>
              <select
                id="roleselection"
                className="signselect"
                name="category"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="student">Student</option>
                <option value="instructor">Instructor</option>
                <option value="admin">Admin</option>
                <option value="qao">Quality Assurance Officer</option>
                <option value="pc">Program Coordinator</option>
              </select>
              <br />
              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <br />
              <a>
                <p
                  className="forgot-password"
                  onClick={() => {
                    navigate("/forgotpassword");
                  }}
                >
                  Forgot password?
                </p>
              </a>
              <br />
            </fieldset>
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;