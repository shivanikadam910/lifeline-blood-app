import React from "react";
import "../static/dashboard.css";
import lifeline from "../images/lifeline.png";
import smile from "../images/smiling-woman.png";
import donate from "../images/donateVector.png";
import { Link } from "react-router-dom";
import Request from "./ReceiverRequest";
class dashboard extends React.Component {
  render() {
    return (
      <div className="containermain" >
      <div className="sidebar">
        
        <div className="menu">
          <ul>
            <li>
              <div className="menulist">
                <img src="https://img.icons8.com/fluent-systems-regular/48/000000/dashboard-layout.png" />
                <h3>Dashboard</h3>
              </div>

              <div className="menulist">
              <Link to="/receiverrequest" style={{ textDecoration : "none"  }} className="link">
                <img src="https://img.icons8.com/material-outlined/24/000000/invite.png" />
                
                <h3>Request Blood</h3>
              </Link>
              </div>

              <div className="menulist">
              <Link to="/receiverrequest" style={{ textDecoration : "none"  }} className="link">
                <img src="https://img.icons8.com/fluent-systems-regular/48/000000/drop-of-blood.png" />
               
                <h3>Donate Blood</h3>
                </Link>
              </div>

              <div className="menulist">
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
          
          <div className="donateVector">
          <img src={donate} alt="why donate"/>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="banner">
            <div class="banner1">
              <h1>
                  Donate Blood
                  <br />
                  Save lives!
                </h1>
                <h3>Donate Now &nbsp; &gt;</h3>
            </div>
            <div class="banner2">
              <img src={smile} alt="Smiling Woman" />
            </div>
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
          </div>
        
      </div>
       
    </div>
    );
  }
}

export default dashboard;
