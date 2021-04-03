import React from "react";
import firebase from "../firebase/firebase";
import "../static/navbar.css";

class navbar extends React.Component {
  render() {
    return (
      <nav class="nav">
        <div class="container">
          <ul class="functions">
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
              <a href="#">Sign-In</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default navbar;
