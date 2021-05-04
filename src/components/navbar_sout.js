import React from "react";
import logo from "../images/logo.png";
import "../static/navbar.css";
import "../static/main.css";
import { Link } from "react-router-dom";
import firebase, { auth } from "../firebase/firebase";

class navbar extends React.Component {
    logout(){
        firebase.auth().signOut();
        console.log(auth.currentUser.email);
    }
  render() {
    return (
      <div class="maincontainer">
        <div class="nav" id="header">
          <div class="navlogo">
            <img src={logo} alt="LifeLine" />
          </div>

          <div class="navul" >
            <ul class="ulnav">
              <li>
                <Link to="/Home" style={{ fontWeight: "600" }}>
                  {" "}
                  Home
                </Link>
              </li>

              <li>
                <Link  to={{
                    pathname: "/About_us_hosp",
                    // state: { data: this.props.location.state.data },
                  }} style={{ fontWeight: "600" }}>
                  {" "}
                  About Us
                </Link>
              </li>
              <li>
                <Link  to={{
                    pathname: "/Contact_us_hosp",
                    // state: { data: this.props.location.state.data },
                  }} style={{ fontWeight: "600" }}>
                  {" "}
                  Contact Us
                </Link>
              </li>
              <li onClick={this.logout.bind(this)}>
                <Link to="/Home" style={{ fontWeight: "600" }}>
                  {" "}
                  Sign Out{" "}
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
