import React from "react";
import "../static/Contact_us_hosp.css";
import "../static/dashboard.css";
import lifeline from "../images/lifeline.png";
import firebase, { auth } from "../firebase/firebase";
import smile from "../images/smiling-woman.png";
import donate from "../images/donateVector.png";
import { Link } from "react-router-dom";
import Request from "./ReceiverRequest";

class Contact_us_hosp extends React.Component {
  constructor(props) {
    super();
    this.state = {
      users: [],
    };
  }
  render() {
    const { users } = this.state;
    var flag = false;
    if (auth.currentUser == null) {
      flag = true;
    }
    return (
      <div className="containermain">
       
        <div className="container2 contact">
          <div className="banner-contact">
            <h1>GET IN TOUCH</h1>
          </div>

          <div class="contact-info contact">
            <div class="contactinfo-1">
              <div>
                <img src="https://img.icons8.com/ios-filled/50/000000/phone.png" />
              </div>
              <h2>Phone</h2>
              <p>
                <a href="tel:+91987456321">+91 987456321</a>
              </p>
            </div>

            <div class="contactinfo-1">
              <div>
                <img src="https://img.icons8.com/ios-filled/50/000000/apple-mail.png" />
              </div>
              <h2>Email</h2>
              <p>
                <a href="mailto:lifeline@gmail.com">lifeline@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact_us_hosp;
