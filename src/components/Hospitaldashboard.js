import React from "react";
import "../static/dashboard.css";
import lifeline from "../images/lifeline.png";
import firebase, { auth } from "../firebase/firebase";
import smile from "../images/smiling-woman.png";
import donate from "../images/donateVector.png";
import { Link } from "react-router-dom";
import Request from "./ReceiverRequest";
class Hospitaldashboard extends React.Component {
  constructor() {
    super();
    this.state = {
     
    };
  }
  
  render() {
    return (
      <div className="containermain" >
        <div className="sidebar">

          <div className="menu">
            <ul>
              <li>
                <div className="menulist">
                  <Link to="/Hospitaldashboard" style={{ textDecoration: "none" }} className="link">
                    <img src="https://img.icons8.com/fluent-systems-regular/48/000000/dashboard-layout.png" />
                    <h3>Dashboard</h3>
                  </Link>
                </div>

                <div className="menulist">
                  <Link to="/Hospitaldashboard" style={{ textDecoration: "none" }} className="link">
                    <img src="https://img.icons8.com/material-outlined/24/000000/invite.png" />

                    <h3>Update Applications</h3>
                  </Link>
                </div>

                <div className="menulist">
                  <Link to="/Hospitaldashboard" style={{ textDecoration: "none" }} className="link">
                    <img src="https://img.icons8.com/fluent-systems-regular/48/000000/drop-of-blood.png" />

                    <h3>News and Events</h3>
                  </Link>
                </div>

                <div className="menulist">
                <Link to="/Hospitaldashboard" style={{ textDecoration: "none" }} className="link">
                  <img src="https://img.icons8.com/material/24/000000/hospital-2.png" />
                  <h3>Appointments</h3>
                  </Link>
                </div>

                <div className="emergency">
                  <img src="https://img.icons8.com/material-outlined/24/000000/error--v1.png" />
                  <h3>Emergency</h3>
                </div>
              </li>
            </ul>
          </div>
          <div className="why">
            <h3>Why Donate Blood?</h3>

            <div className="donateVector">
              <img src={donate} alt="why donate" />
            </div>
          </div>
        </div>
        <div className="container2">
          <div className="card-grid">
            <div className="card1">
              <Link to="">
              <div>My Applications</div>
              <div className="total">Total</div>
              <div className="num">0</div>
              </Link>
            </div>
            <div className="card2">
              <Link to = "">
              <div>My Report</div>
              <div className="total">Total</div>
              <div className="num">0</div>
              </Link>
            </div>
            <div className="card3">
              <Link to="">
                <div>My Events</div>
                <div className="total">Total</div>
                <div className="num">0</div>
              </Link>
            </div>
          </div>

          {/* <div className="nearby">Nearby Hospitals</div>
          <div className="card-grid">
            <div className="hospital1">
              <div className="hospitalName">City Hospital</div>
            </div>
            <div className="hospital2">
              <div className="hospitalName">City Hospital</div>
            </div>
            <div className="hospital3">
              <div className="hospitalName">City Hospital</div>
            </div>
          </div> */}

        </div>

      </div>
    );
  }
}

export default Hospitaldashboard;
