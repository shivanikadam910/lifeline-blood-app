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
