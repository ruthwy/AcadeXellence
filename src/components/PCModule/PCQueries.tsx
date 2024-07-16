import React, { useState, useEffect } from "react";
import PCNavbar from "./PCNavbar";

interface Feedback {
  feedbackid: number;
  role: string;
  name: string;
  email: string;
  subject: string;
  feedback: string;
}

function PCQueries() {
  const [feedbackList, setFeedbackList] = useState<Feedback[]>([]);

  useEffect(() => {
    fetch('https://axs2459.uta.cloud/fetchfeedback.php')
      .then((response) => response.json())
      .then((data) => setFeedbackList(data))
      .catch((error) => console.error('Fetch error:', error));
  }, []);

  const handleDelete = (feedbackId: number) => {
    // Send a delete request to your PHP server
    // Replace 'http://yourdomain.com/deletefeedback.php' with the actual path to your PHP script
    fetch(`https://axs2459.uta.cloud/deletefeedback.php?feedbackid=${feedbackId}`, {
      method: 'POST', // or 'DELETE' if your server supports it
    })
    .then((response) => {
      if (response.ok) {
        setFeedbackList(feedbackList.filter((feedback) => feedback.feedbackid !== feedbackId));
      } else {
        throw new Error('Delete action was not successful.');
      }
    })
    .catch((error) => console.error('Delete error:', error));
  };

  return (
    <div className="pcrpage_container">
      <div className="main-container">
        <PCNavbar />
        <div className="right-content">
          <div className="PC_container-card-grid">
            <div className="card-row-enquiries">
              <p>
                Feedback forms submitted by Students are shown here. Feedback
                form can include course feedback and queries
              </p>
              {feedbackList.map((feedback) => (
                <div className="card-enquiries" key={feedback.feedbackid}>
                  <div className="student-info-enquiries">
                    <p>Student Name: {feedback.name}</p>
                    <p>Student ID: {feedback.feedbackid}</p>
                    <p>
                      Student Mail:{" "}
                      <a href={`mailto:${feedback.email}`}>
                        {feedback.email}
                      </a>
                    </p>
                    <p>Subject: {feedback.subject}</p>
                    <p>Feedback: {feedback.feedback}</p>
                    <button type="submit" onClick={() => handleDelete(feedback.feedbackid)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PCQueries;
