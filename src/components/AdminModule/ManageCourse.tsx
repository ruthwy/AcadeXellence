import React from "react";
import AdminNavbar from "./AdminNavbar";

import axios from "axios";
class ManageCourse extends React.Component {
  constructor(prop) {
    super(prop);
  }
  state = {
    data: [],
    users: [],
    url: "https://axs2459.uta.cloud/deleteCourse.php?q=",
  };

  componentDidMount() {
    // Fetch instructors
    axios
      .get("https://axs2459.uta.cloud/fetchinstructor.php")
      .then((res) => {
        if (res.data && Array.isArray(res.data.instructors)) {
          this.setState({ users: res.data.instructors });
        } else {
          // Handle non-array or missing 'instructors' key responses
          console.error(
            "Expected an object with an instructors array, but got:",
            res.data
          );
          this.setState({ users: [] });
        }
      })
      .catch((error) => {
        // Handle errors in fetching instructors
        console.error("An error occurred while fetching users:", error);
        this.setState({ users: [] });
      });

    // Fetch course data
    axios
      .get("https://axs2459.uta.cloud/manageCourse.php")
      .then((res) => {
        if (Array.isArray(res.data)) {
          this.setState({ data: res.data });
        } else {
          // Handle non-array responses
          console.error(
            "Expected an array for course data, but got:",
            res.data
          );
          this.setState({ data: [] });
        }
      })
      .catch((error) => {
        // Handle errors in fetching course data
        console.error("An error occurred while fetching course data:", error);
        this.setState({ data: [] });
      });
  }

  render() {
    return (
      <div className="amcpage_container">
        <div className="amcmain-container">
          <AdminNavbar />
          <div className="amccontent">
            <div className="form">
              <form
                id="admin_form"
                action="https://axs2459.uta.cloud/addcourse.php"
              >
                <fieldset id="admc">
                  <legend>Add a New Course</legend>

                  <label htmlFor="courseName">Course Name</label>
                  <input
                    type="text"
                    id="courseName"
                    name="courseName"
                    required
                  />

                  <label htmlFor="courseObjective">Course Objective</label>
                  <textarea
                    id="description"
                    name="courseObjective"
                    rows={8}
                    cols={40}
                  ></textarea>

                  <label htmlFor="instructorName">Instructor Name</label>
                  <select id="instructorName" name="instructorName">
                    {this.state.users.map((instructor) => {
                      return (
                        <option key={instructor.id} value={instructor.name}>
                          {instructor.name}
                        </option>
                      );
                    })}
                  </select>

                  <label htmlFor="programName">Program Name</label>
                  <select id="programName" name="programName">
                    <option value="mscComputerScience"></option>
                    <option value="mscComputerScience">
                      MSC in Computer Science
                    </option>
                    <option value="mscDataScience">MSC in Data Science</option>
                    <option value="mscAI">
                      MSC in Artificial Intelligence
                    </option>
                  </select>
                  <br />
                </fieldset>
                <br />
                <button type="submit">Add Course</button>
              </form>
            </div>
            <div className="amctable">
              <table className="amcgrades-table">
                <thead>
                  <tr className="amcgrades-table-row">
                    <th className="amcgrades-table-header">Course Name</th>
                    <th className="amcgrades-table-header">Course Objective</th>
                    <th className="amcgrades-table-header">Instructor Name</th>
                    <th className="amcgrades-table-header">Program Name</th>
                    <th className="amcgrades-table-header">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map((result) => {
                    return (
                      <tr className="amcgrades-table-row">
                        <td>{result.course_name}</td>
                        <td>{result.course_objective}</td>
                        <td>{result.instructor_name}</td>
                        <td>{result.program_name}</td>

                        <td>
                          <a href={this.state.url + result.cid}>
                            <button type="submit">Delete</button>
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <br />
            <br />
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default ManageCourse;
