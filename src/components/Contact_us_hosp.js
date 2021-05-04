import React from "react";
import "../static/contact.css";
import "../static/dashboard.css";
import lifeline from "../images/lifeline.png";
import firebase, { auth } from "../firebase/firebase";
import smile from "../images/smiling-woman.png";
import donate from "../images/donateVector.png";
import { Link } from "react-router-dom";
import Request from "./ReceiverRequest";

class Contact_us_hosp extends React.Component {
  render() {
    return (
      <div className="containermain">
         {/* <div className="sidebar">
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
     </div> */}
        <div className="container2">
          <div className="banner">
            <div class="banner1">
              <h1>
                Donate Blood
                <br />
                Save lives!
              </h1>
              <h3>
                <Link to="/Donor_profile">Donate Now &nbsp; &gt;</Link>
              </h3>
            </div>
            <div class="banner2">
              <img src={smile} alt="Smiling Woman" />
            </div>
          </div>

          <div class="contact-info">
            <div class="contactinfo1">
              <h2>Contact Us</h2>
            </div>
            <div class="contactinfo1">
              {/* &emsp;&emsp;&emsp;<Icon icon={telephonereceiver2Icon} /> */}
              <h3>Phone Number</h3>
              <p>
                <a href="tel:+91987456321">+91 987456321</a>
              </p>
            </div>

            <div class="contactinfo1">
              {/* &emsp;<Icon icon={emailIcon} /> */}
              <h3>Email</h3>
              <p>
                <a href="mailto:lifeline@gmail.com">lifeline@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact_us_hosp;
