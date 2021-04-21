import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase, { auth } from "../firebase/firebase";

import smile from "../images/smiling-woman.png";
import donate from "../images/donateVector.png";

import "../static/varificationreq.css";
import lifeline from "../images/lifeline.png";

import Request from "./ReceiverRequest";

class VerificationReq extends Component {
  verifyUser = () => {
    var user = firebase.auth().currentUser;
    console.log("Verify user");
    user
      .sendEmailVerification()
      .then(function () {
        // Email sent.
        window.alert("Verification sent");
        // this.state.emailVerification = true;
      })
      .catch(function (error) {
        // An error happened.
        window.alert(error.message);
      });
  };

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
          <div className="verify">
            <div className="verify-1">
              <div className="verifytext">
                <h1>Email Account Not Verified</h1>

                <h3>Please Verify your Email Account to continue</h3>

                <h4 className="lead">
                  After verifing the mail please login here.
                </h4>
                <br />
              </div>
              <button className="verifybutton" id="login_butn">
                {" "}
                <a
                  onClick={() => {
                    window.location.href = "/login";
                  }}
                >
                  <b>Login</b>
                </a>
              </button>
              <button onClick={this.verifyUser} className="verifybutton">
                <b>Send Verification link</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VerificationReq;
