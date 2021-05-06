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
  constructor(props) {
    super();
    this.state = {
      users: [],
    };
  }
  render() {
    const { users } = this.state;
    var flag = false;
    if (auth.currentUser == null) {
      flag = true;
    }
    return (
      <div className="containermain">
        <div className="sidebar">
          <div className="menu">
            <ul>
              <li>
                <div className="menulist">
                  {flag && (
                    <Link
                      to="/Login"
                      style={{ textDecoration: "none" }}
                      className="link"
                    >
                      <img src="https://img.icons8.com/fluent-systems-regular/48/000000/dashboard-layout.png" />
                      <h3>Dashboard</h3>
                    </Link>
                  )}
                  {!flag && (
                    <Link
                      to="/dashboard"
                      style={{ textDecoration: "none" }}
                      className="link"
                    >
                      <img src="https://img.icons8.com/fluent-systems-regular/48/000000/dashboard-layout.png" />
                      <h3>Dashboard</h3>
                    </Link>
                  )}
                </div>

                <div className="menulist">
                  {flag && (
                    <Link
                      to="/Login"
                      style={{ textDecoration: "none" }}
                      className="link"
                    >
                      <img src="https://img.icons8.com/material-outlined/24/000000/invite.png" />
                      <h3>Request Blood</h3>
                    </Link>
                  )}
                  {!flag && (
                    <Link
                      to="/receiverrequest"
                      style={{ textDecoration: "none" }}
                      className="link"
                    >
                      <img src="https://img.icons8.com/material-outlined/24/000000/invite.png" />
                      <h3>Request Blood</h3>
                    </Link>
                  )}
                </div>

                <div className="menulist">
                  {flag && (
                    <Link
                      to="/Login"
                      style={{ textDecoration: "none" }}
                      className="link"
                    >
                      <img src="https://img.icons8.com/fluent-systems-regular/48/000000/drop-of-blood.png" />
                      <h3>Donate Blood</h3>
                    </Link>
                  )}
                  {!flag && (
                    <Link
                      to="/Donor_profile"
                      style={{ textDecoration: "none" }}
                      className="link"
                    >
                      <img src="https://img.icons8.com/fluent-systems-regular/48/000000/drop-of-blood.png" />
                      <h3>Donate Blood</h3>
                    </Link>
                  )}
                </div>

                <div className="menulist">
                  <Link
                    to="/Hospitalregister"
                    style={{ textDecoration: "none" }}
                    className="link"
                  >
                    <img src="https://img.icons8.com/material/24/000000/hospital-2.png" />
                    <h3>Register Hospital</h3>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          <div className="why">
            <h3>
              <Link to="/WhyDonateBlood" style={{ fontWeight: "600" }}>
                Why Donate Blood?
              </Link>
            </h3>
            <div className="donateVector">
              <Link to="/WhyDonateBlood">
                <img src={donate} alt="why donate" />
              </Link>
            </div>
          </div>
        </div>
        <div className="container2">
          <div class="blood">
            <div class="blood-1">
              <div class="bloodtext">
                <h2>Why should I donate blood?</h2>
              </div>

              <p>
                Safe blood saves lives and improves health. Blood transfusion is
                needed for: <br />
                <br />
                <ul>
                  <li>
                    women with complications of pregnancy, such as ectopic
                    pregnancies and haemorrhage before, during or after
                    childbirth;
                  </li>
                  <li>
                    children with severe anaemia often resulting from malaria or
                    malnutrition;
                  </li>
                  <li>
                    people with severe trauma following man-made and natural
                    disasters;and
                  </li>
                  <li>
                    many complex medical and surgical procedures and cancer
                    patients.
                  </li>
                </ul>
                <p>
                  It is also needed for regular transfusions for people with
                  conditions such as thalassaemia and sickle cell disease and is
                  used to make products such as clotting factors for people with
                  haemophilia.
                </p>
                <p>
                  There is a constant need for regular blood supply because
                  blood can be stored for only a limited time before use.
                  Regular blood donations by a sufficient number of healthy
                  people are needed to ensure that safe blood will be available
                  whenever and wherever it is needed.
                </p>
                <p>
                  Blood is the most precious gift that anyone can give to
                  another person — the gift of life. A decision to donate your
                  blood cans save a life, or even several if your blood is
                  separated into its components — red cells, platelets and
                  plasma — which can be used individually for patients with
                  specific conditions.
                </p>
                <br />
                <p style={{ fontSize: "20px" }}>
                  Source:&nbsp;
                  <a
                    style={{ fontSize: "20px" }}
                    href="https://www.who.int/news-room/q-a-detail/blood-products-why-should-i-donate-blood#:~:text=Blood%20is%20the%20most%20precious,for%20patients%20with%20specific%20conditions."
                    target="_blank"
                  >
                    World Health Organization →
                  </a>
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WhyDonateBlood;
