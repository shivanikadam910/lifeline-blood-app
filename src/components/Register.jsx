import React, { Component } from "react";
import firebase from "../firebase/firebase";
import "../static/style.css";
import { Link } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';


export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",

      // emailVerification: false,
    };
    // this.verifyUser = this.verifyUser.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }


  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  handledisplaynameChange(e) {
    this.setState({ displayName: e.target.value });
  }
  verifyUser = () => {
    var user = firebase.auth().currentUser;
    console.log("Verify user")
    user.sendEmailVerification().then(function () {
      // Email sent.
      window.alert("Verification sent")
      // this.state.emailVerification = true;
    }).catch(function (error) {
      // An error happened.
      window.alert(error)
    });
  }

  registerUser = () => {
    console.log("register user button pressed");

    if (this.state.email === "") {
      alert('Enter email');
      window.location = '/Signup';

    }
    else {
      if (this.state.password === "") {
        alert('Enter password');
        window.location = '/Signup';


      }
      else {
        if (this.state.displayName === "") {
          alert('Enter name');
          window.location = '/Signup';
        }
        // 
        else {
          console.log(this.state.email);
          firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .catch(function (error) {
              var errorCode = error.code;
              var errorMessage = error.message;
              alert(errorMessage);
              window.location = '/Signup';
            })
            window.alert("Verify link from email!");
            // this.verifyUser();
          this.props.history.push("/verificationReq");
         
          console.log("User registered successfully!");
        }
      }
    }
  };
  render() {
    return (
      <div className="container">
        <div className="layer" id="signup">
          <div className="loginArea register" id="signupId">
            <div className="vector"></div>
            <h3 className="loginText">Sign Up</h3>
            <div className="textArea">
              <form>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    name="displayName"
                    size="35"
                    required
                    value={this.state.displayName}
                    onChange={this.handledisplaynameChange.bind(this)}
                  ></input>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    size="35"
                    required
                    value={this.state.email}
                    onChange={this.handleEmailChange.bind(this)}
                  ></input>
                </div>
                <div>
                  <input
                    type="Password"
                    placeholder="Enter Password"
                    name="password"
                    size="35"
                    value={this.state.password}
                    onChange={this.handlePasswordChange.bind(this)}
                    maxLength={15}
                  />
                </div>
                <div className="btn">
                  <button
                    type="submit"
                    className="submitButton"
                    onClick={this.registerUser}
                  >
                    <b>SIGN UP</b>
                  </button>
                 
                  <Link to="/login" />
                </div>
              </form>
              <div class="social-login">
                <button class="google-btn">
                  <img
                    style={{ width: "16px" }}
                    alt="Google"
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGQkJCMDA7IiBkPSJNMTEzLjQ3LDMwOS40MDhMOTUuNjQ4LDM3NS45NGwtNjUuMTM5LDEuMzc4QzExLjA0MiwzNDEuMjExLDAsMjk5LjksMCwyNTYNCgljMC00Mi40NTEsMTAuMzI0LTgyLjQ4MywyOC42MjQtMTE3LjczMmgwLjAxNGw1Ny45OTIsMTAuNjMybDI1LjQwNCw1Ny42NDRjLTUuMzE3LDE1LjUwMS04LjIxNSwzMi4xNDEtOC4yMTUsNDkuNDU2DQoJQzEwMy44MjEsMjc0Ljc5MiwxMDcuMjI1LDI5Mi43OTcsMTEzLjQ3LDMwOS40MDh6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojNTE4RUY4OyIgZD0iTTUwNy41MjcsMjA4LjE3NkM1MTAuNDY3LDIyMy42NjIsNTEyLDIzOS42NTUsNTEyLDI1NmMwLDE4LjMyOC0xLjkyNywzNi4yMDYtNS41OTgsNTMuNDUxDQoJYy0xMi40NjIsNTguNjgzLTQ1LjAyNSwxMDkuOTI1LTkwLjEzNCwxNDYuMTg3bC0wLjAxNC0wLjAxNGwtNzMuMDQ0LTMuNzI3bC0xMC4zMzgtNjQuNTM1DQoJYzI5LjkzMi0xNy41NTQsNTMuMzI0LTQ1LjAyNSw2NS42NDYtNzcuOTExaC0xMzYuODlWMjA4LjE3NmgxMzguODg3TDUwNy41MjcsMjA4LjE3Nkw1MDcuNTI3LDIwOC4xNzZ6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojMjhCNDQ2OyIgZD0iTTQxNi4yNTMsNDU1LjYyNGwwLjAxNCwwLjAxNEMzNzIuMzk2LDQ5MC45MDEsMzE2LjY2Niw1MTIsMjU2LDUxMg0KCWMtOTcuNDkxLDAtMTgyLjI1Mi01NC40OTEtMjI1LjQ5MS0xMzQuNjgxbDgyLjk2MS02Ny45MWMyMS42MTksNTcuNjk4LDc3LjI3OCw5OC43NzEsMTQyLjUzLDk4Ljc3MQ0KCWMyOC4wNDcsMCw1NC4zMjMtNy41ODIsNzYuODctMjAuODE4TDQxNi4yNTMsNDU1LjYyNHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGMTQzMzY7IiBkPSJNNDE5LjQwNCw1OC45MzZsLTgyLjkzMyw2Ny44OTZjLTIzLjMzNS0xNC41ODYtNTAuOTE5LTIzLjAxMi04MC40NzEtMjMuMDEyDQoJYy02Ni43MjksMC0xMjMuNDI5LDQyLjk1Ny0xNDMuOTY1LDEwMi43MjRsLTgzLjM5Ny02OC4yNzZoLTAuMDE0QzcxLjIzLDU2LjEyMywxNTcuMDYsMCwyNTYsMA0KCUMzMTguMTE1LDAsMzc1LjA2OCwyMi4xMjYsNDE5LjQwNCw1OC45MzZ6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg== "
                  />
                  <p class="btn-text">Sign up with Google</p>
                </button>
              </div>

              <div className="createAccount">
                <p>Already have an account?&nbsp;&nbsp;</p>
                <Link to="/login" style={{ fontWeight: "600" }}>
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}