import React from "react";
import "../static/style.css";

function LoginPage(props) {
  return (
    <div className="container">
      <div className="layer" id="login">
        <div className="loginArea" id="loginId">
          <div className="vector" id="vector-login"></div>
          <h3 className="loginText">Sign In</h3>
          <div className="textArea">
            <form>
              <div>
                <input
                  type="text"
                  onChange=""
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
                  <b>LOGIN</b>
                </button>
              </div>
            </form>
            <div className="createAccount">
              <a href="">Create an Account</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
