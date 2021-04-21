import React from "react";
import lifeline from "../images/lifeline.png";
import firebase, { auth } from "../firebase/firebase";
import smile from "../images/smiling-woman.png";
import donate from "../images/donateVector.png";
import { Link } from "react-router-dom";
import Request from "./ReceiverRequest";
import "../static/contact.css";

class About_us extends React.Component {
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
                  <Link
                    to="/Hospitalregister"
                    style={{ textDecoration: "none" }}
                    className="link"
                  >
                    <img src="https://img.icons8.com/material/24/000000/hospital-2.png" />
                    <h3>Hospitals</h3>
                  </Link>
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
              <h2>About Us</h2>
              <p>
                {" "}
                Lifeline Blood App is developed as a part of Software
                Engineering project. It is developed by a team of students at
                Ahmedabad University. It not only limits to donating blood to
                hospitals, but it also helps receivers who need blood urgently,
                to find a donor for themselves.{" "}
              </p>
              <p>
                {" "}
                Lifeline ensures proper collection and donation, effective
                management and monitoring the quality and quantity of the
                donated blood. It has been developed with modular and scalable
                approach with configurable rule based architecture allowing
                customization to easily incorporate specific requirements from
                nationwide stakeholders.
              </p>
              <h2>
                <a>Objectives</a>
              </h2>
              <ul>
                <li>Safe and Adequate Blood Supplies</li>
                <li>Reduced Turnaround Time</li>
                <li>Networking of Blood Banks</li>
                <li>Donor Repository</li>
              </ul>
              <h2>
                <a>Salient Features</a>
              </h2>
              <ul>
                <li>Web Based Application</li>
                <li>Dashboard</li>
                <li>List of Blood Donors</li>
                <li>List of Receivers</li>
              </ul>
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

export default About_us;
