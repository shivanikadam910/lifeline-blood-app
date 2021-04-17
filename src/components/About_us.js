import React from "react";

// add "import Contact_us from './components/contact_us.js'" to App.js

// import { Icon, InlineIcon } from '@iconify/react';
// import iosLocationOutline from '@iconify-icons/ion/ios-location-outline';
// import logoInstagram from '@iconify-icons/ion/logo-instagram';
// import logoLinkedin from '@iconify-icons/ion/logo-linkedin';
// import telephonereceiver2Icon from '@iconify-icons/fxemoji/telephonereceiver2';
// import emailIcon from '@iconify-icons/fxemoji/email';
// npm install --save-dev @iconify/react @iconify-icons/mdi
// npm install --save-dev @iconify/react @iconify-icons/ion

import "../static/about.css"


class About_us extends React.Component {
  render() {
    return (

        <div className="container">
        <div className="section-header">
          <h2>About Us</h2>
        </div>
  
        <p> Lifeline Blood App is developed as a part of Software Engineering project. It is developed by a team of students at Ahmedabad University. It not only limits to donating blood to hospitals, but it also helps receivers who need blood urgently, to find a donor for themselves.  </p>
        <p> Lifeline ensures proper collection and donation, effective management and monitoring the quality and quantity of the donated blood. It has been developed with modular and scalable approach with configurable rule based architecture allowing customization to easily incorporate specific requirements from nationwide stakeholders.</p>
  
        <div className="row about-cols">
  
          <div className="col-md-4">
            <div className="about-col">
              <h2 className="title"><a>Objectives</a></h2>
              <ul>
                <li>
                  Safe and Adequate Blood Supplies
                </li>
                <li>
                  Reduced Turnaround Time
                </li>
                <li>
                  Networking of Blood Banks
                </li>
                <li>
                  Donor Repository
                </li>
              </ul>
            </div>
          </div>
  
  
          <div className="col-md-4">
            <div className="about-col">
              <h2 className="title"><a>Salient Features</a></h2>
              <ul>
                <li>
                  Web Based Application
                </li>
                <li>
                  Dashboard
                </li>
                <li>
                  List of Blood Donors
                </li>
                <li>
                  List of Receivers
                </li>
              </ul>
            </div>
          </div>
  
        </div>
  
      </div>

    );
  }
}

export default About_us;