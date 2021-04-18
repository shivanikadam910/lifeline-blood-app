import React from "react";
import "../static/contact.css";
import "../static/dashboard.css";
import lifeline from "../images/lifeline.png";
import firebase, { auth } from "../firebase/firebase";
import smile from "../images/smiling-woman.png";
import donate from "../images/donateVector.png";
import { Link } from "react-router-dom";
import Request from "./ReceiverRequest";

// add "import Contact_us from './components/contact_us.js'" to App.js

// import { Icon, InlineIcon } from '@iconify/react';
// import iosLocationOutline from '@iconify-icons/ion/ios-location-outline';
// import logoInstagram from '@iconify-icons/ion/logo-instagram';
// import logoLinkedin from '@iconify-icons/ion/logo-linkedin';
// import telephonereceiver2Icon from '@iconify-icons/fxemoji/telephonereceiver2';
// import emailIcon from '@iconify-icons/fxemoji/email';
// npm install --save-dev @iconify/react @iconify-icons/mdi
// npm install --save-dev @iconify/react @iconify-icons/ion

class Contact_us extends React.Component {
  render() {
    return (
      <div className="containermain">
        <div className="sidebar">
          <div className="menu">
            <ul>
              <li>
                <div className="menulist">
                  <Link
                    to="/dashboard"
                    style={{ textDecoration: "none" }}
                    className="link"
                  >
                    <img src="https://img.icons8.com/fluent-systems-regular/48/000000/dashboard-layout.png" />
                    <h3>Dashboard</h3>
                  </Link>
                </div>

                <div className="menulist">
                  <Link
                    to="/receiverrequest"
                    style={{ textDecoration: "none" }}
                    className="link"
                  >
                    <img src="https://img.icons8.com/material-outlined/24/000000/invite.png" />

                    <h3>Request Blood</h3>
                  </Link>
                </div>

                <div className="menulist">
                  <Link
                    to="/Donor_profile"
                    style={{ textDecoration: "none" }}
                    className="link"
                  >
                    <img src="https://img.icons8.com/fluent-systems-regular/48/000000/drop-of-blood.png" />

                    <h3>Donate Blood</h3>
                  </Link>
                </div>

                <div className="menulist">
                  <img src="https://img.icons8.com/material/24/000000/hospital-2.png" />
                  <h3>Hospitals</h3>
                </div>

                <div className="emergency">
                  <img src="https://img.icons8.com/material-outlined/24/000000/error--v1.png" />
                  <h3>Emergency</h3>
                </div>
              </li>
            </ul>
          </div>
          <div className="why">
            <h3>
              <Link to="/WhyDonateBlood" style={{ fontWeight: "600" }}>
                Why Donate Blood?
              </Link>
            </h3>
            <div className="donateVector">
              <Link to="/WhyDonateBlood">
                <img src={donate} alt="why donate" />
              </Link>
            </div>
          </div>
        </div>
        <div className="container2">
          <div className="banner">
            <div class="banner1">
              <h1>
                Donate Blood
                <br />
                Save lives!
              </h1>
              <h3>Donate Now &nbsp; &gt;</h3>
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

export default Contact_us;
