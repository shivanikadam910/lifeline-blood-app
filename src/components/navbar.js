import React from "react";
import firebase from "../firebase/firebase";
import logo from "../images/logo.png";
import "../static/navbar.css";

class navbar extends React.Component {
  render() {
    return (
      <div class="maincontainer">
        <div class="nav">
          <div class="navlogo">
            <img src={logo} alt="LifeLine" /> 
          </div>
          <div class="navul">
            <ul class="ulnav">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#" className="signin">
                  Sign-In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default navbar;
