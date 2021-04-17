import React from "react";

import donate from "../images/donateVector.png";
import donateblood from "../images/Donating-Blood-1.svg";
import "../static/dashboard.css";
import "../static/popup.css";
import lifeline from "../images/lifeline.png";
import firebase, { auth } from "../firebase/firebase";
import smile from "../images/smiling-woman.png";

import { Link } from "react-router-dom";
import Request from "./ReceiverRequest";

class WhyDonateBlood extends React.Component {
  render() {
    return (
      <div className="containermain" >
        <div className="sidebar">

          <div className="menu">
            <ul>
              <li>
                <div className="menulist">
                  <Link to="/dashboard" style={{ textDecoration: "none" }} className="link">
                    <img src="https://img.icons8.com/fluent-systems-regular/48/000000/dashboard-layout.png" />
                    <h3>Dashboard</h3>
                  </Link>
                </div>

                <div className="menulist">
                  <Link to="/receiverrequest" style={{ textDecoration: "none" }} className="link">
                    <img src="https://img.icons8.com/material-outlined/24/000000/invite.png" />

                    <h3>Request Blood</h3>
                  </Link>
                </div>

                <div className="menulist">
                  <Link to="/Donor_profile" style={{ textDecoration: "none" }} className="link">
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
              <img src={donate} alt="why donate" />
            </div>
          </div>
        </div>
        <div className="container2">
        <div className="banner">
            
            <img src={donateblood} alt="some error occured" />              
          
        </div>
        <div class="blood">
        <div class="blood-1">
          <div class="bloodtext">
          <h2>Why Donate Blood?</h2>
        </div>   

          
            <p>Every 2 Seconds, someone in the country is in need of blood.</p>
            <p>Every year our nation requires about 4 Crore units of blood.</p>
            <p>Out of which only a meager 5 Lakh units of blood are available.</p>
          
          
            <p>An adequate amount of blood is needed in all health care facilities to meet the urgent need
            for patients facing trauma and other lifesaving procedures, such as blood transfusions – 
            which saves millions of lives each year. Donating blood is a simple procedure that can be 
            done within an hour.</p>
            <p>Safe blood saves lives and improves health. It is the most precious gift that anyone can give 
            to another person: the gift of life.</p>
          </div>
          </div>

          

        </div>

      </div>

        
    
    );
  }
}

export default WhyDonateBlood;