import React, { useEffect, useState } from "react";
import InstructorNavbar from "./InstructorNavbar";
import "../../css/InstructorStyles.css";
import { useUser } from "../../UserContext";
// import { useUser } from './UserContext';

interface Recommendation {
  id: number;
  recommendation: string;
  inst_name: string;
  // Add other fields as necessary
}

const InstructorRecommendations = () => {
  const { user } = useUser();
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  useEffect(() => {
    if (user) {
      const { fname, lname } = user;
      fetch('https://axs2459.uta.cloud/fetchrecommendations.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `fname=${fname}&lname=${lname}`,
      })
        .then(response => response.json())
        .then(data => setRecommendations(data))
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [user]);

  return (
    <div className="page-container">
      <div className="main-container">
        <InstructorNavbar />
        <br></br>
        <div className="IN_container-card-grid">
          <div className="card-row-enquiries">
            <p>Feedback from PC</p>
            {recommendations.map(rec => (
              <div className="card-enquiries" key={rec.id}>
                <div className="student-info-enquiries">
                  <p>{rec.recommendation}</p>
                  {/* Add other fields as necessary */}
                  <button type="submit">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorRecommendations;