import React, { useEffect, useState } from 'react';
import StudentNavbar from "./StudentNavbar";
import "../../css/global-styles.css";
import BarChartComponent from "./Barchart";
import DoughnutChartComponent from "./DonutChart";
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Grades() {
  const [tab, setTab] = React.useState(0);
  const Grades = () => {
    const { examId } = useParams();
    const [examStats, setExamStats] = useState(null);

    useEffect(() => {
        // Make a POST request to fetch exam statistics
        axios.post(`https://axs2459.uta.cloud/examStats`, { exam_id: examId })
            .then(response => {
                setExamStats(response.data);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
                // Handle error
            });
    }, [examId]);
  };
  function wrapWithHeaders(content: any) {
    return (
      <table className="grades-table">
        <thead>
          <tr className="grades-table-row">
            <th className="grades-table-header">Name</th>
            <th className="grades-table-header">Due</th>
            <th className="grades-table-header">Status</th>
            <th className="grades-table-header">Score</th>
            <th className="grades-table-header"></th>
          </tr>
        </thead>
        {content}
      </table>
    );
  }

  function getTabView() {
    switch (tab) {
      case 1:
        return wrapWithHeaders(
          <tbody>
            <tr className="grades-table-row">
              <td>Assignment-1</td>
              <td>Feb 26 by 11:59pm</td>
              <td></td>
              <td>89/100</td>
              <td>expand</td>
            </tr>
            <tr className="grades-table-row">
              <td>Assignment-2</td>
              <td>Feb 26 by 11:59pm</td>
              <td>Late</td>
              <td>97/100</td>
              <td>expand</td>
            </tr>
            <tr className="grades-table-row">
              <td>quiz-1</td>
              <td>Feb 26 by 11:59pm</td>
              <td></td>
              <td>9/10</td>
              <td>expand</td>
            </tr>
            <tr className="grades-table-row">
              <td>quiz-2</td>
              <td>Feb 26 by 11:59pm</td>
              <td></td>
              <td>8/10</td>
              <td>expand</td>
            </tr>
          </tbody>
        );
      case 2:
        return wrapWithHeaders(
          <tbody>
            <tr className="grades-table-row">
              <td>Exam-1</td>
              <td>Feb 26 by 11:59pm</td>
              <td></td>
              <td>89/100</td>
              <td>expand</td>
            </tr>
            <tr className="grades-table-row">
              <td>Exam-2</td>
              <td>Feb 26 by 11:59pm</td>
              <td></td>
              <td>65/100</td>
              <td>expand</td>
            </tr>
          </tbody>
        );
      case 3:
        return (
          <div className="c1content graphs">
            {/* <div className="bar-container">
              <div className="descriptio">
                <h2>Assignment-1</h2>
                <p>
                  marks<span>89/100</span>
                </p>
                <p>mean:80</p>
              </div>
              <div className="bar">
                <div className="marks"></div>
                <div className="mean"></div>
                <div className="numbers mean-num">80</div>
                <div className="numbers letter ">89</div>
                <div className="numbers max">100</div>
                <div className="numbers min">0</div>
              </div>
            </div> */}
            <div className="charts">
            <DoughnutChartComponent totalMarks={100} score={80} />
            <br />
            <h2>Your Score</h2>
            </div>
            <div className="charts">
            <BarChartComponent marks={80} mean={60} topMark={98} />
            <br />
            <h2>Overall Stats</h2>
            </div>
            

          </div>
        );
      default:
        return wrapWithHeaders(
          <tbody>
            <tr className="grades-table-row">
              <td>Assignment-1</td>
              <td>Feb 26 by 11:59pm</td>
              <td></td>
              <td>89/100</td>
              <td>
                <a href="javascript:void(0)" onClick={() => setTab(3)}>
                  expand
                </a>
              </td>
            </tr>
            <tr className="grades-table-row">
              <td>Assignment-2</td>
              <td>Feb 26 by 11:59pm</td>
              <td>Late</td>
              <td>97/100</td>
              <td>expand</td>
            </tr>
            <tr className="grades-table-row">
              <td>quiz-1</td>
              <td>Feb 26 by 11:59pm</td>
              <td></td>
              <td>9/10</td>
              <td>expand</td>
            </tr>
            <tr className="grades-table-row">
              <td>quiz-2</td>
              <td>Feb 26 by 11:59pm</td>
              <td></td>
              <td>8/10</td>
              <td>expand</td>
            </tr>
            <tr className="grades-table-row">
              <td>Exam-1</td>
              <td>Feb 26 by 11:59pm</td>
              <td></td>
              <td>89/100</td>
              <td>expand</td>
            </tr>
            <tr className="grades-table-row">
              <td>Exam-2</td>
              <td>Feb 26 by 11:59pm</td>
              <td></td>
              <td>75/100</td>
              <td>expand</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        );
    }
  }
  
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

        {tab === 3 ? (
          <></>
        ) : (
          <div className="grades-container">
            <div className="grades-navbar">
              <button className="button" onClick={() => setTab(0)}>
                All
              </button>
              <button className="button" onClick={() => setTab(1)}>
                Assignments
              </button>
              <button className="button" onClick={() => setTab(2)}>
                Exams
              </button>
            </div>
            {getTabView()}
          </div>
        )}
        {tab == 3 && getTabView()}
      </div>
    </div>
  );
}

export default Grades;
