import React from "react";
import firebase from "../firebase/firebase";
import logo from "../images/logo.png";
import "../static/navbar.css";
import "../static/main.css";
import { Link } from "react-router-dom";

class navbar extends React.Component {
  render() {
    return (
      <div class="maincontainer">
        <div class="nav" id="header">
          <div class="navlogo">
            <img src={logo} alt="LifeLine" />
          </div>

          <div class="navul">
            <ul class="ulnav">
              <li>
                <Link to="/Home" style={{ fontWeight: "600" }}>
                  {" "}
                  Home
                </Link>
              </li>

              <li>
                <Link to="/About" style={{ fontWeight: "600" }}>
                  {" "}
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/Contact" style={{ fontWeight: "600" }}>
                  {" "}
                  Contact Us
                </Link>
              </li>

             

              <li>
                <Link to="/Login" style={{ fontWeight: "600" }}>
                  {" "}
                 Sign in{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default navbar;
