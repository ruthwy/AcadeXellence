import React from "react";
import AdminNavbar from "./AdminNavbar";
import axios from 'axios';


class AdminChat extends React.Component {
  constructor(prop)
  {
    super(prop)
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

    axios.get('https://axs2459.uta.cloud/users.php').then(res => {

    this.setState({ data: res.data });
    console.log(this.state.data)
  });
  axios.get('https://axs2459.uta.cloud/pcChatfetch.php').then(res => {

  this.setState({ chatRecord: res.data });
  console.log(this.state.chatRecord)
});
  }

  render()
  {
  return (
    <div className="chpage-container">
      <div className="chmain-container">
        <AdminNavbar />
        <div className="sccontent">
          <form className="feedback-form" action="https://axs2459.uta.cloud/chatAdd.php">
            <fieldset id="info">
              <legend>CHAT</legend>
              <input type="hidden" name="side" value="admin" />
              <select className="chatdropdown" name="role">
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
              <textarea rows={4} name="message" cols={50} placeholder="Message..."></textarea>
              <br />
              <br />
              <button type="submit">Submit</button>
              <br />
              <br />
            </fieldset>
          </form>
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

export default AdminChat;
