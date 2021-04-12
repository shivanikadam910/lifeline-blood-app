import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../firebase/firebase";

class VerificationReq extends Component {

    verifyUser = () => {
      var user = firebase.auth().currentUser;
        console.log("Verify user")
        user.sendEmailVerification().then(function () {
          // Email sent.
          window.alert("Verification sent")
          // this.state.emailVerification = true;
        }).catch(function (error) {
          // An error happened.
              window.alert(error.message)
        });


       

      }

  render() {
    
    return (
      
        <div>
          <h1>Email Account Not Verified</h1>
          <h3>
            Please Verify your Email Account to continue
          </h3>

          <h4 className="lead">After verifing the mail please login here.</h4>
          <br />
          <button onClick={this.verifyUser}>
            Send Verification link
          </button>
          <button id="login_butn"> <a onClick={() => {window.location.href="/login"}}>
            Login
          </a>
          </button>
        </div>
      
    );
  }
}

export default VerificationReq;
