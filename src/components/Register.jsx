import React from "react";
import "../static/style.css";

function Register(props) {
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
                  name="username"
                  size="30"
                  required
                ></input>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  size="30"
                  required
                ></input>
              </div>
              <div>
                <input
                  type="Password"
                  placeholder="Enter Password"
                  name="pwd"
                  size="30"
                  required
                ></input>
              </div>
              <div className="btn">
                <button type="submit" className="submitButton">
                  <b>SIGN UP</b>
                </button>
              </div>
            </form>
            <div className="signin">
              <a href="">Already have an Account? Sign In</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
