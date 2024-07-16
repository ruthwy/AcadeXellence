import React from "react";
import QANavbar from "./QANavbar";
import axios from "axios";
class QARecommendations extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    data: [],
  };

  componentDidMount() {
    //get request

    
    axios.get("https://axs2459.uta.cloud/fetchinstructor.php").then((res) => {
      // Assuming the response has a key 'instructors' which is an array of instructor objects
      const instructorsList = res.data.instructors ? res.data.instructors : [];
      this.setState({ data: instructorsList });
      console.log(this.state.data);
    }).catch(error => {
      console.error("There was an error fetching the instructors!", error);
    });

      console.log(this.state.data);
    
  }

  render() {
    return (
      <div className="qrecpage-container">
        <div className="qrecmain-container">
          <QANavbar />
          <div className="qreccontainer">
            <form action="https://axs2459.uta.cloud/recommend.php">
              <fieldset id="info">
                <legend>Add Recommendations</legend>
                <br />
                <label htmlFor="instructorName">Instructor Name</label>

                <select id="instructorName" name="instructorName">
                  {this.state.data.map((instructor) => {
                    return (
                      <option
                        key={instructor.id}
                        value={instructor.name}
                      >
                        {instructor.name}
                      </option>
                    );
                  })}
                </select>

                <br />
                <br />
                <label htmlFor="description">Recommendations:</label>
                <textarea
                  id="description"
                  name="address"
                  rows={4}
                  style={{ width: "auto" }}
                ></textarea>
                <br />
                <br />
              </fieldset>
              <br />
              <button type="submit">Submit</button>
            </form>
            <br />
            <br />
            <form className="feedback">
              <fieldset id="info" className="qaorec">
                <p>
                  Here are recommendations for enhancing teaching methods,
                  assessments, and program effectiveness:
                </p>
                <h3>Teaching Methods</h3>
                <ul>
                  <li>Encourage interactive and participatory learning.</li>
                  <li>Incorporate technology for engaging lessons.</li>
                  <li>Regularly assess and adapt teaching strategies.</li>
                </ul>
                <h3>Assessments</h3>
                <p>To improve assessments:</p>
                <ol>
                  <li>
                    <strong>Diversify Assessment Types:</strong> Include a mix
                    of quizzes, projects, and presentations.
                  </li>
                  <li>
                    <strong>Clear Assessment Criteria:</strong> Provide students
                    with transparent grading rubrics.
                  </li>
                  <li>
                    <strong>Feedback Loop:</strong> Establish a feedback
                    mechanism for ongoing improvement.
                  </li>
                </ol>
                <h3>Program Effectiveness</h3>
                <p>For enhancing program effectiveness:</p>
                <ul>
                  <li>Conduct regular program evaluations.</li>
                  <li>Collect feedback from students and instructors.</li>
                  <li>Review and update curriculum as needed.</li>
                </ul>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default QARecommendations;
