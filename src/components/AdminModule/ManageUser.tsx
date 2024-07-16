import React from "react";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";
class ManageUser extends React.Component {
  // const navigate = useNavigate();
  constructor(props) {
    super(props);
  }
  state = {
    data: [],
    url: "https://axs2459.uta.cloud/deleteuser.php?q=",
    edit_record_url: "https://axs2459.uta.cloud/editUser.php?q=",
  };
  componentDidMount() {
    axios
      .get("https://axs2459.uta.cloud/users.php")
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((error) => {
        // Handle the error here. For example, log to console or set state with error information
        console.error("There was an error fetching the user data:", error);
      });
  }

  render() {
    return (
      <div className="amcpage_container">
        <div className="amcmain-container">
          <AdminNavbar />

          <div className="amccontent">
            <br />
            <div className="form">
              <form
                id="admin_form"
                action="https://axs2459.uta.cloud/adminAdd.php"
                method="post"
              >
                <fieldset id="admc">
                  <legend>Add a New User</legend>

                  <label htmlFor="courseSelect">Role</label>
                  <select id="courseSelect" name="category">
                    <option value="none">Choose Role</option>
                    <option value="student">student</option>
                    <option value="instructor">Instructor</option>
                    <option value="pc">PC</option>
                    <option value="qao">QAO</option>
                  </select>

                  <label htmlFor="firstName">First Name:</label>
                  <input id="firstName" name="fname" type="text" required />

                  <label htmlFor="lastName">Last Name:</label>
                  <input id="lastName" name="lname" type="text" required />

                  <label htmlFor="email">Email:</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"
                    required
                  />

                  {/* <label htmlFor="phoneNumber">Password:</label>
                  <input
                    id="phoneNumber"
                    name="pass"
                    type="password"
                    required
                  /> */}

                  {/* <label htmlFor="phoneNumber">Phone Number:</label>
                  <input id="phoneNumber" name="phone" type="tel" required /> */}
                </fieldset>
                <br />
                <button type="submit">Add User</button>
              </form>
            </div>

            <div className="amctable">
              <table className="amcgrades-table">
                <thead>
                  <tr className="amcgrades-table-row">
                    <th className="amcgrades-table-header">F_NAME</th>
                    <th className="amcgrades-table-header">L_NAME</th>
                    <th className="amcgrades-table-header">EMAIL</th>
                    {/* <th className="amcgrades-table-header">PHONE NO.</th> */}
                    <th className="amcgrades-table-header">ROLE</th>
                    <th className="amcgrades-table-header">U_ID</th>
                    <th className="amcgrades-table-header">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map((result, index) => {
                    // Added index here if result.id is not unique
                    return (
                      <tr
                        key={result.id || index}
                        className="amcgrades-table-row"
                      >
                        {" "}
                        {/* Added key prop */}
                        <td>{result.fname}</td>{" "}
                        {/* Assuming result.fname is the correct field */}
                        <td>{result.lname}</td>
                        <td>{result.email}</td>
                        <td>{result.role}</td>
                        <td>{result.id}</td>
                        <td>
                          <a href={this.state.url + result.id}>
                            <button type="submit">Delete</button>
                          </a>
                          <a href={this.state.edit_record_url + result.id}>
                            <button type="submit">Edit</button>
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <br />
              <br />
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default ManageUser;
