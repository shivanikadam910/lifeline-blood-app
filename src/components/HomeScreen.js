import React from "react";
import "../static/home.css";
import lifeline from "../images/lifeline.png";
import smile from "../images/smiling-woman.png";
import { Link } from "react-router-dom";

class HomeScreen extends React.Component {
  render() {
    return (
      <div className="container" id="home">
        <div className="sidebar">
          <div className="logo">
            <img src={lifeline} alt="LifeLine" />
            <h1>LifeLine</h1>
          </div>

          <div className="menu">
            <ul>
              <li>
                <div className="dashboard">
                  <img src="https://img.icons8.com/fluent-systems-regular/48/000000/dashboard-layout.png" />
                  <h3>Dashboard</h3>
                </div>

                <div className="requestBlood">
                  <img src="https://img.icons8.com/material-outlined/24/000000/invite.png" />
                  <h3>Request Blood</h3>
                </div>

                <div className="donateBlood">
                  <img src="https://img.icons8.com/fluent-systems-regular/48/000000/drop-of-blood.png" />
                  <h3>Donate Blood</h3>
                </div>

                <div className="hospitals">
                  <img src="https://img.icons8.com/material/24/000000/hospital-2.png" />
                  <h3>Hospitals</h3>
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
            <div className="donateVector"></div>
          </div>
        </div>
        <div className="banner">
          <h1>
            Donate Blood
            <br />
            Save lives!
          </h1>
          <h3>Donate Now &nbsp; &gt;</h3>
          <img src={smile} alt="Smiling Woman" />
        </div>
        <div className="card-grid">
          <div className="card1">
            <div>My Donations</div>
            <div className="total">Total</div>
            <div className="num">0</div>
          </div>
          <div className="card2">
            <div>Received</div>
            <div className="total">Total</div>
            <div className="num">0</div>
          </div>
          <div className="card3">
            <div>Request Pending</div>
            <div className="total">Total</div>
            <div className="num">0</div>
          </div>
        </div>
        <div className="nearby">Nearby Hospitals</div>
        <div className="hospital-grid">
          <div className="hospital1">
            <div className="hospitalName">City Hospital</div>
          </div>
          <div className="hospital2">
            <div className="hospitalName">City Hospital</div>
          </div>
          <div className="hospital3">
            <div className="hospitalName">City Hospital</div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
