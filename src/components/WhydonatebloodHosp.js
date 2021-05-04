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

class WhydonatebloodHosp extends React.Component {

  render() {
    return (
      <div className="containermain">
        <div className="sidebar">
        <div className="menu">
          <ul>
            <li>
              <div
                className="menulist"
                style={{
                  background: "#f2f2f2",
                  borderRight: "5px solid #fc3d3d",
                  cursor: "pointer",
                }}
              >
                <Link
                  to={{
                    pathname: "/Hospitaldashboard",
                    state: { data: this.props.location.state.data },
                  }}
                  className="link"
                  style={{ textDecoration: "none" }}
                >
                  <img src="https://img.icons8.com/fluent-systems-regular/48/000000/dashboard-layout.png" />
                  <h3 style={{ color: "black" }}>Dashboard</h3>
                </Link>
              </div>

              <div className="menulist">
                <Link
                  to={{
                    pathname: "/PendingHospitalApp",
                    state: { data: this.props.location.state.data },
                  }}
                  style={{ textDecoration: "none" }}
                  className="link"
                >
                  <img src="https://img.icons8.com/windows/32/000000/approve-and-update.png" />

                  <h3>Update Applications</h3>
                </Link>
              </div>

              <div className="menulist">
                <Link
                  to={{
                    pathname: "/AddEvent",
                    state: { data: this.props.location.state.data },
                  }}
                  className="link"
                  style={{ textDecoration: "none" }}
                >
                  <img src="https://img.icons8.com/material-two-tone/24/000000/news.png" />

                  <h3>Post Event</h3>
                </Link>
              </div>

              <div className="menulist">
                <Link
                  to={{
                    pathname: "/Appointments",
                    state: { data: this.props.location.state.data },
                  }}
                  className="link"
                  style={{ textDecoration: "none" }}
                >
                  <img src="https://img.icons8.com/material-rounded/24/000000/calendar-minus.png" />
                  <h3>Appointments</h3>
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="why">
          <h3>
            <Link to={{
                      pathname: "/WhyDonateBloodhp",
                      state: { data: this.props.location.state.data },
                    }}style={{ fontWeight: "600" }}>
              Why Donate Blood?
            </Link>
          </h3>
          <div className="donateVector">
            <Link to={{
                      pathname: "/WhyDonateBloodhp",
                      state: { data: this.props.location.state.data },
                    }}>
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

export default WhydonatebloodHosp;
