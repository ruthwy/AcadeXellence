import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import axios from 'axios';
class EditForm extends React.Component {
    constructor(props) {
        super(props)
    }

    state={
        data:[]
    }
    componentDidMount(){
        //get request
    
       
        axios.get('https://axs2459.uta.cloud/editUser.php').then(res => 
        {
        
        this.setState({data: res.data});
        console.log(this.state.data)
           }); 
        
        }
    
    


    render() {
        return (
            <>
                <div className="container mt-5">
                    <h3 className='text-center'>Edit Form</h3>
                    <div className="row">
                        <div className="col-lg-4" style={{ placeContent: "center" }}></div>



                        <div className="col-lg-4" style={{ placeContent: "center" }}>
                            <form>
                            {this.state.data.map((result) => {
            return (
                   <>
                      <div className="mb-3">
                                <label className="form-label">First Name</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Last Name</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Role</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Select Role</option>
                                    <option value="admin">Admin</option>
                                    <option value="student">Student</option>
                                    <option value="instructor">Instructor</option>
                                    <option value="qa">Quality Awarness</option>
                                    <option value="pc">Programm Coordinator</option>
                                </select>
                            </div>
                            <div className="mb-3">
                              <input type="submit" value="Update" className='btn btn-primary'/>
                            </div>
                   </>

                    )
                  })}
                         
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default EditForm