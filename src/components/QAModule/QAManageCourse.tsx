import React from "react";
import QANavbar from "./QANavbar";
import axios from 'axios';

class QAManageCourse extends React.Component {
  constructor(props)
  {
    super(props)
  }
state={
  users:[],
  data:[],
  url:"https://axs2459.uta.cloud/deleteCourseQa.php?q="
}
  componentDidMount(){
    //get request

    
    axios.get('https://axs2459.uta.cloud/fetchinstructor.php').then(res => 
    {
    
    this.setState({users: res.data});
    console.log(this.state.users)
       }); 

       
    axios.get('https://axs2459.uta.cloud/manageCourse.php').then(res => 
    {
    
    this.setState({data: res.data});
    console.log(this.state.data)
       }); 
      }

render()
{
  return (
    <div className="amcpage_container">
      <div className="amcmain-container">
        <QANavbar />
        <div className="amccontent">
          <br />
          <div className="form">
            <form id="admin_form" action="https://axs2459.uta.cloud/addcourse.php">
              <input type="hidden" name="role" value="quality"/>
              <fieldset id="admc">
                <legend>Add a New Course</legend>
                <br />
                <br />
                <label htmlFor="courseName">Course Name</label>
                <input type="text" id="courseName" name="courseName" required />
                <br />
                <br />
                <label htmlFor="courseObjective">Course Objective</label>
                <textarea
                  id="courseObjective"
                  name="courseObjective"
                  rows={8}
                  cols={40}
                ></textarea>
                <br />
                <br />
                <label htmlFor="instructorName">Instructor Name</label>
                <select id="instructorName" name="instructorName">
                {this.state.users.map((result) => {
            return (
                    <option value={result.name}>{result.name}</option>

                    )
                  })}
                </select>
                <br />
                <br />
                <label htmlFor="programName">Program Name</label>
                <select id="programName" name="programName">
                  <option value="mscComputerScience"></option>
                  <option value="mscComputerScience">
                    MSC in Computer Science
                  </option>
                  <option value="mscDataScience">MSC in Data Science</option>
                  <option value="mscAI">MSC in Artificial Intelligence</option>
                </select>
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
                
               <a href={this.state.url+result.cid}>     <button type="submit">Delete</button></a>
                  </td>
                </tr>
            )})}
              
              </tbody>
            </table>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
}

export default QAManageCourse;
