import React from "react";
import AdminNavbar from "./AdminNavbar";
import axios from 'axios';

type ActivityData = {
  fname: string;
  lname: string;
  activity_timestamp: string;
  user_ip: string;
};

class ManageUserActivities extends React.Component {
  state = {
    activities: [] as ActivityData[]
  }

  componentDidMount() {
    // Get request
    axios.get('https://axs2459.uta.cloud/monitor.php') // Update this URL to your activity log endpoint
      .then(res => {
        this.setState({ activities: res.data });
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }

  render() {
    return (
      <div className="amcpage_container">
        <div className="amcmain-container">
          <AdminNavbar />
          <div className="sfcontent">
          <br />
        <h2>User Activities</h2>
        <br />
        {this.state.activities.map(activity => (
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
}

export default ManageUserActivities;
