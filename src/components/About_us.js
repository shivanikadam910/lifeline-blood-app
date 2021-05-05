import React from "react";
import lifeline from "../images/lifeline.png";
import firebase, { auth } from "../firebase/firebase";
import donate from "../images/donateVector.png";
import { Link } from "react-router-dom";
import Request from "./ReceiverRequest";
import "../static/contact.css";
import "../static/about.css";

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
                    <h3>Register Hospital</h3>
                  </Link>
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
          <div className="banner-about">
            <h1>ABOUT US</h1>
          </div>

          <div class="contact-info about">
            <div class="contactinfo1">
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
              
              
            </div>
            <div class="contactinfo1">
            <h2>
                <a>Objectives</a>
              </h2>
              <ul>
                Safe and Adequate Blood Supplies<br/>
                Reduced Turnaround Time<br/>
                Networking of Blood Banks<br/>
                Donor Repository<br/>
              </ul>
            </div>

            <div class="contactinfo1">
            <h2>
                <a>Salient Features</a>
              </h2>
              <ul>
                Web Based Application<br/>
                Dashboard<br/>
                List of Blood Donors<br/>
                List of Receivers<br/>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About_us;
