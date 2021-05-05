import React from "react";
import "../static/contact.css";
import "../static/dashboard.css";
import lifeline from "../images/lifeline.png";
import firebase, { auth } from "../firebase/firebase";
import smile from "../images/smiling-woman.png";
import donate from "../images/donateVector.png";
import { Link } from "react-router-dom";
import Request from "./ReceiverRequest";

class Contact_us_hosp extends React.Component {
  render() {
    return (
      <div className="containermain">
        
        <div className="container2">
          <div className="banner">
            <div class="banner1">
              <h1>
                Donate Blood
                <br />
                Save lives!
              </h1>
              <h3>
                <Link to="/Donor_profile">Donate Now &nbsp; &gt;</Link>
              </h3>
            </div>
            <div class="banner2">
              <img src={smile} alt="Smiling Woman" />
            </div>
          </div>

          <div class="contact-info">
            <div class="contactinfo1">
              <h2>Contact Us</h2>
            </div>
            <div class="contactinfo1">
              {/* &emsp;&emsp;&emsp;<Icon icon={telephonereceiver2Icon} /> */}
              <h3>Phone Number</h3>
              <p>
                <a href="tel:+91987456321">+91 987456321</a>
              </p>
            </div>

            <div class="contactinfo1">
              {/* &emsp;<Icon icon={emailIcon} /> */}
              <h3>Email</h3>
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
