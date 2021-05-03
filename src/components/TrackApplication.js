import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase, { auth } from "../firebase/firebase";

import donate from "../images/donateVector.png";
import donateblood from "../images/Donating-Blood-1.svg";
import "../static/receiverrequest.css";

class TrackApplication extends React.Component {
  constructor() {
    super();
    this.state = {
      Donation_Request: [],
      email: "",
      date: new Date(),
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(
      function (user) {
        console.log(user);
        this.setState({ email: user.email }, () => {
          const db = firebase.firestore();
          db.collection("User")
            .where("Email", "==", this.state.email)
            .get()
            .then((querySnapshot) => {
              const data = querySnapshot.docs.map((doc) => doc.data());
              console.log("here is data", data);
              this.setState({ Donation_Request: data });
            });
        });
      }.bind(this)
    );
  }
  bookApp = (user) => {
    console.log(user.ApplicationStatus);
    if (user.ApplicationStatus == "true") {
      this.props.history.push({
        pathname: "/BookSlot",
        state: { Donation_Request: user.FirstName, Lname: user.LastName },
      });
    } else {
      if (user.ApplicationStatus == "pending") {
        window.alert("Your status is pending you cannot book appointment yet ");
      } else {
        window.alert(
          "Your Application is rejected by the hospital you cannot book an appointment"
        );
      }
    }
  };

  render() {
    const { Donation_Request } = this.state;

    return (
      <div className="containermain">
        <div className="sidebar">
          <div className="menu">
            <ul>
              <li>
                <div className="menulist">
                  <Link
                    to="/dashboard"
                    style={{ textDecoration: "none" }}
                    className="link"
                  >
                    <img src="https://img.icons8.com/fluent-systems-regular/48/000000/dashboard-layout.png" />
                    <h3>Dashboard</h3>
                  </Link>
                </div>

                <div className="menulist">
                  <Link
                    to="/receiverrequest"
                    style={{ textDecoration: "none" }}
                    className="link"
                  >
                    <img src="https://img.icons8.com/material-outlined/24/000000/invite.png" />

                    <h3>Request Blood</h3>
                  </Link>
                </div>

                <div className="menulist">
                  <Link
                    to="/Donor_profile"
                    style={{ textDecoration: "none" }}
                    className="link"
                  >
                    <img src="https://img.icons8.com/fluent-systems-regular/48/000000/drop-of-blood.png" />

                    <h3>Donate Blood</h3>
                  </Link>
                </div>

                <div
                  className="menulist"
                  style={{
                    background: "#f2f2f2",
                    borderRight: "5px solid #fc3d3d",
                  }}
                >
                  <Link
                    to="/TrackApplication"
                    style={{ textDecoration: "none" }}
                    className="link"
                  >
                    <img src="https://img.icons8.com/material/24/000000/hospital-2.png" />
                    <h3>Track Application</h3>
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
          <div class="request-card view">
            <div class="request-card-1 view">
              <h3> My Donation Request</h3>
              {Donation_Request.map((user) => (
                <div key={user.uid} class="list">
                  <h5>
                    {" "}
                    {user.FirstName} {user.LastName}
                  </h5>
                  <div>
                    <h6>Age:{user.Age}</h6>
                    <h6>Blood Group : {user.Bloodgrp}</h6>
                    <h6>Appointment_hospital : {user.Appointment_hospital}</h6>
                    <h6>Contact : {user.Contact}</h6>
                    <h6>City : {user.City} </h6>

                    {/* {status = user.ApplicationStatus} */}
                    {user.Booked === "true" ? (
                      [
                        <h6>ApplicationStatus : Accepted</h6>,
                        <h6>Time slot:Booked</h6>,
                        <h6>
                          Date:{" "}
                          {new Date(
                            user.Date.seconds * 1000
                          ).toLocaleDateString("en-US")}
                        </h6>,
                      ]
                    ) : user.ApplicationStatus === "false" ? (
                      <h6>ApplicationStatus : Rejected</h6>
                    ) : user.ApplicationStatus === "true" ? (
                      [
                        <h6>ApplicationStatus : Accepted</h6>,
                        <div className="buttons">
                          <button
                            class="cta-btn"
                            onClick={this.bookApp.bind(this, user)}
                            class="buttonform"
                          >
                            <h4>Book your slot</h4>
                          </button>
                        </div>,
                      ]
                    ) : (
                      <h6>ApplicationStatus : Pending</h6>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrackApplication;
