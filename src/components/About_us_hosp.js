import React from "react";
import lifeline from "../images/lifeline.png";
import firebase, { auth } from "../firebase/firebase";
import donate from "../images/donateVector.png";
import { Link } from "react-router-dom";
import Request from "./ReceiverRequest";
import "../static/contact.css";
import "../static/About_us_hosp.css";

class About_us_hosp extends React.Component {
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
        <div className="banner-about">
          <h1>ABOUT US</h1>
        </div>

        <div class="contact-info about">
          <div class="contactinfo1">
            <p>
              {" "}
              Lifeline Blood App is developed as a part of Software Engineering
              project. It is developed by a team of students at Ahmedabad
              University. It not only limits to donating blood to hospitals, but
              it also helps receivers who need blood urgently, to find a donor
              for themselves.{" "}
            </p>
            <p>
              {" "}
              Lifeline ensures proper collection and donation, effective
              management and monitoring the quality and quantity of the donated
              blood. It has been developed with modular and scalable approach
              with configurable rule based architecture allowing customization
              to easily incorporate specific requirements from nationwide
              stakeholders.
            </p>
          </div>
          <div class="contactinfo1">
            <h2>
              <a>Objectives</a>
            </h2>
            <ul>
              Safe and Adequate Blood Supplies
              <br />
              Reduced Turnaround Time
              <br />
              Networking of Blood Banks
              <br />
              Donor Repository
              <br />
            </ul>
          </div>

          <div class="contactinfo1">
            <h2>
              <a>Salient Features</a>
            </h2>
            <ul>
              Web Based Application
              <br />
              Dashboard
              <br />
              List of Blood Donors
              <br />
              List of Receivers
              <br />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About_us_hosp;
