import React from "react";
import "../../css/global-styles.css";
import { Link } from "react-router-dom";
import { studentRoutes } from "../../constants";
import StudentNavbar from "./StudentNavbar";
import axios from 'axios';

class StudentDiscussion extends React.Component {
constructor(props)
{
  super(props)
}
state={
  data:[],
  chatRecord:[]
}
componentDidMount() {
  //get request
  axios.get('https://axs2459.uta.cloud/users.php').then(res => {

    this.setState({ data: res.data });
    console.log(this.state.data)
  });

  axios.get('https://axs2459.uta.cloud/fetchChat.php').then(res => {

  this.setState({ chatRecord: res.data });
  console.log(this.state.chatRecord)
});
}

  render()
  {
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

        <div className="c1content">
          <div className="searchcontent">
            <form className="feedback-form" action="https://axs2459.uta.cloud/chatAdd.php">
              <input type="hidden" name="side" value="student"/>
              <fieldset id="info">
                <legend>CHAT</legend>
                <select id="description" name="role" className="chatdropdown">
                  <option value="student">student</option>
                  <option value="instructor">Instructor</option>
                  <option value="admin">Admin</option>
                  <option value="qa">QA</option>
                </select>
                <br />
                <br />
                <select name="username">
           {this.state.data.map((result) => {
            return (
                    <option value={result.name}>{result.name}</option>

                    )
                  })}
           </select>
                <br />
                <br />
                <textarea
                  id="description"
                  rows={4}
                  cols={50}
                  name="message"
                  placeholder="Message..."
                ></textarea>
                <br />
                <br />
                <button type="submit">Submit</button>
                <br />
                <br />
              </fieldset>
            </form>
          </div>
          <br />
          <br />
          <div className="chat-container">
            <div className="old-chats-header">
              <b>
                <h3>Messages</h3>
              </b>
              <b>
                <p>X</p>
              </b>
            </div>
            {this.state.chatRecord.map((result) => {
            return (
              <div className="chat-template">
              <div className="chat-header">
                <div className="user-avatar">
                  {/* You can add an image for the user's avatar here */}
                </div>
                <div className="user-info">
                  <h3>{result.username}</h3>
                  <span>2 hours ago</span>
                </div>
              </div>
              <div className="chat-content">
                <p>sqws{result.message}</p>
              </div>
            </div>
            )})}
          
         
          
          </div>
        </div>
      </div>
    </div>
  );
}
}
export default StudentDiscussion;
