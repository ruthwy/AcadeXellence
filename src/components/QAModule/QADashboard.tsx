import React from "react";
import QANavbar from "./QANavbar";
import axios from 'axios';

class QADashboard extends React.Component {
  constructor(props)
  {
    super(props)
  }
  state={
    product:[],
    policy:[],
    url:'https://axs2459.uta.cloud/deleteQuality.php?q='
  
  }
  
  componentDidMount(){
    axios.get('https://axs2459.uta.cloud/fetchProduct.php').then(res => {

    this.setState({ product: res.data });
    console.log(this.state.product)

    
  });
  axios.get('https://axs2459.uta.cloud/fetchPolicy.php').then(res => {

  this.setState({ policy: res.data });
  console.log(this.state.policy)

  
});
    }

  render()
  {
  return (
    <div className="qapage-container">
      <div className="amcmain-container">
        <QANavbar />
        {/* MAIN CONTENT = NO HEADER AND FOOTER */}
        <div className="amccontent">
          <br />

          <div className="form">
            <form id="admin_form" action="https://axs2459.uta.cloud/addProductPolicy.php">
              <fieldset id="admc">
                <legend>Add a New Program/Policy</legend>
                <br />
                <br />
                <label htmlFor="instructorName">Select Program/Policy</label>
                <select id="instructorName" name="service">
                 
                  <option value="program">Program</option>
                  <option value="policy">Policy</option>
                </select>
                <br />
                <br />
                <label htmlFor="Name">Program Name</label>
                <input
                  type="text"
                  id="programName"
                  name="programName"
                  required
                />
                <br />
                <br />

                <label htmlFor="description">OBJECTIVE</label>
                <textarea
                  id="description"
                  name="objective"
                  rows={4}
                  required
                ></textarea>
                <br />
                <br />

                <label htmlFor="description">DESCRIPTION</label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  required
                ></textarea>
                <br />
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
                  <th className="amcgrades-table-header">Program Name</th>
                  <th className="amcgrades-table-header">Program Objective</th>
                  <th className="amcgrades-table-header">
                    Program Description
                  </th>
                  <th className="amcgrades-table-header">Action</th>
                </tr>
              </thead>
              <tbody>


              {this.state.product.map((result) => {
                    return (

                <tr className="amcgrades-table-row">



                  <td>{result.pro_name}</td>
                  <td>{result.objective}</td>
                  <td>{result.descrip}</td>
                  <td>
                   
                 <a href={this.state.url+result.id}> <button type="submit">Delete</button></a>
                  </td>
                </tr>
                    )})}
               
              </tbody>
            </table>
            <table className="amcgrades-table">
              <thead>
                <tr className="amcgrades-table-row">
                  <th className="amcgrades-table-header">Policy Name</th>
                  <th className="amcgrades-table-header">Policy Objective</th>
           
                  <th className="amcgrades-table-header">Program Name</th>
                  <th className="amcgrades-table-header">Action</th>
                </tr>
              </thead>
              <tbody>
              {this.state.policy.map((result) => {
                    return (
                      <tr className="amcgrades-table-row">
                  <td>{result.pro_name}</td>
                  <td>{result.objective}</td>
                  <td>{result.pro_name}</td>
                 
                  <td>
                    
                    <a href={this.state.url+result.id}>    <button type="submit">Delete</button></a>
                  </td>
                </tr>
                    )})}
                
                
              </tbody>
            </table>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default QADashboard;
