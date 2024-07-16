import React from "react";
import "../global-styles.less";
import { useState } from "react";
import Header from "./Header";
import { routes } from "../constants";
import axios from "axios";
import $ from "jquery/dist/jquery";
function ContactUs() {

  const [inputs, setInputs] = useState([]);
  
  


  const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}));
     console.log(name)
  }

  
  // const handleSubmit=(event)=> {
   
  //   const form = $(event.target);
  //   // $.ajax({
  //   //     type: "POST",
  //   //     url: form.attr("action"),
  //   //     data: form.serialize(),
  //   //     success(data) {
  //   //       setInputs(data);
  //   //     },
  //   // });


  //   // axios.post('https://axs2459.uta.cloud/contact.php', inputs).then(function(response){
  //   //     console.log(response.data);
  //   // });
  
  // }







  return (
    <div className="global-styles-ui">
      <div className="page-container">
        <div className="head">
          <Header links={[routes.login, routes.signup, routes.home]} />
        </div>
        <div className="contact-form-container">
          <section className="contact-info">
            <h2>Contact Information</h2>
            <p>
              If you have any questions or need assistance, please feel free to
              contact us using the information below:
            </p>
            <ul>
              <li>
                Email:{" "}
                <a href="mailto:customerservice24by7@acadexellence.com">
                  customerservice24by7@acadexellence.com
                </a>
              </li>
              <li>
                Phone: <a href="tel:+16823731067">+1 (682) 373-1048</a>
              </li>
              <li>
                Address: 300 West First Street, Arlington, Texas 76019, USA
              </li>
            </ul>
          </section>
          <br />
          <br />
          <br />
          <form  action="https://axs2459.uta.cloud/contact.php"  id="info" className="info-contact-form" >
            <legend>CONTACT FORM</legend>
            <label htmlFor="username">Name:</label>
            <input type="text" id="username" name="name" required onChange={handleChange}/>
            <br />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required onChange={handleChange}/>
            <br />
            <br />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows={4} required onChange={handleChange}></textarea>
            <br />
            <br />
            <button type="submit">Submit</button>
            <br />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
