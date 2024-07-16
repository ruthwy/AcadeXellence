import React, { useEffect, useState } from 'react';
import QANavbar from "./QANavbar";

type ActivityData = {
  fname: string;
  lname: string;
  activity_timestamp: string;
  user_ip: string;
};

const QAMonitor = () => {
  const [activities, setActivities] = useState<ActivityData[]>([]);

  useEffect(() => {
    fetch('https://axs2459.uta.cloud/monitor.php') // Adjust the path as necessary
      .then(response => response.json())
      .then(data => {
        setActivities(data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);


  return (
    <div className="qamonpage_container">
      <div className="qamonmain-container">
        <QANavbar />
        <div className="sfcontent">
          <br />
        <h2>User Activities</h2>
        <br />
        {activities.map(activity => (
        <div className="monitor" key={activity.activity_timestamp}>
          <p className="monitor-details">User: {activity.fname} {activity.lname}</p>
          <p className="monitor-details">Time: {activity.activity_timestamp}</p>
          <p className="monitor-details">IP: {activity.user_ip}</p>
       
        </div>
      ))}
          
        </div>
      </div>
    </div>
  );
}

export default QAMonitor;
