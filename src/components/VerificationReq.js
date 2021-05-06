import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase, { auth } from "../firebase/firebase";
import smile from "../images/smiling-woman.png";
import heart from "../images/lifeline.png";
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
      <div className="containermain verification">
        <div className="verify">
          <div className="verify-1">
            <div className="verifytext">
              <h2>Verify your Email</h2>

              <h4 className="lead">
                Please varify your email by clicking on the button below
              </h4>
            </div>
            <button onClick={this.verifyUser} className="verifybutton">
              <b>VERIFY</b>
            </button>

            <h5>
              After verifying, Click here to{" "}
              <a
                style={{ color: "#6069b4" }}
                onClick={() => {
                  window.location.href = "/login";
                }}
              >
                Login
              </a>{" "}
            </h5>

            {/* <button className="verifybutton" id="login_butn">
              {" "}
              <a
                onClick={() => {
                  window.location.href = "/login";
                }}
              >
                <b>Login</b>
              </a>
            </button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default VerificationReq;
