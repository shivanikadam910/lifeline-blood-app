import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import UserProvider, { UserContext } from "../providers/userprovider";
import firebase from "../firebase/firebase";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../static/home.css";
import donate from "../images/donateVector.png";
import { BeatLoader } from "react-spinners";
import { css } from "@emotion/core";
const override = css`
  margin-top: 250px;
  margin-left: 650px;
  position: fixed;
  top: 100px;
`;

class PendingHospitalApp extends Component {
  constructor(props) {
    super();
    this.state = {
      hospitals: [],
      donor: [],
      currentID: "",
      User: "",
      isLoading: true,
    };
  }

  componentDidMount() {
    const db = firebase.firestore();
    this.setState({ isLoading: true });
    db.collection("RegisteredHospital")
      .where("Licence", "==", this.props.location.state.data)
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        this.setState({ hospitals: data });
        console.log("here is data", data);
        this.setState({ isLoading: false });
      });

    db.collection("User")
      .where("ApplicationStatus", "==", "pending")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        this.setState({ donor: data });
        console.log("here is data", data);
        this.setState({ isLoading: false });
      });
  }

  onInputchange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  acceptbtn = (user) => {
    const db = firebase.firestore();
    console.log(
      user.FirstName,
      user.LastName,
      user.Appointment_hospital,
      user.id
    );
    db.collection("User")
      .where("FirstName", "==", user.FirstName)
      .where("LastName", "==", user.LastName)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          this.setState(
            {
              currentID: doc.id,
            },
            () => {
              db.collection("User").doc(this.state.currentID).update({
                ApplicationStatus: "true",
              });

              window.alert("Application successfully accepted");
              this.props.history.push({
                pathname: "/Hospitaldashboard",
                state: { data: this.props.location.state.data },
              });

              // window.location='/PendingHospitalApp'
            }
          );
        });
      });
  };

  rejectbtn = (user) => {
    const db = firebase.firestore();
    console.log(
      user.FirstName,
      user.LastName,
      user.Appointment_hospital,
      user.id
    );
    db.collection("User")
      .where("FirstName", "==", user.FirstName)
      .where("LastName", "==", user.LastName)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          this.setState(
            {
              currentID: doc.id,
            },
            () => {
              db.collection("User").doc(this.state.currentID).update({
                ApplicationStatus: "false",
              });
              window.alert("Application successfully Denied ");
              this.props.history.push({
                pathname: "/PendingHospitalApp",
                state: { data: this.props.location.state.data },
              });
            }
          );
        });
      });
  };

  render() {
    const { hospitals } = this.state;
    const { donor } = this.state;
    var nme;
    const { isLoading } = this.state;

    if (isLoading) {
      return <BeatLoader color="red" size={70} css={override} loading />;
    }

    return (
      <div className="containermain">
        <div className="sidebar">
          <div className="menu">
            <ul>
              <li>
                <div className="menulist">
                  <Link
                    to={{
                      pathname: "/Hospitaldashboard",
                      state: { data: this.props.location.state.data },
                    }}
                    style={{ textDecoration: "none" }}
                    className="link"
                  >
                    <img src="https://img.icons8.com/fluent-systems-regular/48/000000/dashboard-layout.png" />
                    <h3>Dashboard</h3>
                  </Link>
                </div>

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
        <div className="request-card view" style={{ marginLeft: "275px" }}>
          <div class="request-card-1 view ">
            <h3>Pending Applications</h3>
            {hospitals.map((user) => {
              nme = user.Hospital;
            })}
            {donor.map((user1) => {
              if (user1.Appointment_hospital == nme)
                return (
                  <div key={user1.uid} className="list">
                    <h5>
                      {user1.FirstName} {user1.LastName}{" "}
                      {user1.Appointment_hospital}
                    </h5>
                    <div>
                      <h6>Age : {user1.Age}</h6>
                      <h6>Blood Group : {user1.Bloodgrp}</h6>
                      <h6>Gender : {user1.Gender}</h6>
                      <h6>Contact : {user1.Contact}</h6>
                      <h6>City : {user1.City} </h6>
                      <h6>Medical condition :{user1.MedicalCondition}</h6>
                      <h6>Weight:{user1.Weight}</h6>
                      <div className="application buttons">
                        <button
                          class="cta-btn"
                          class="buttonform"
                          onClick={this.acceptbtn.bind(this, user1)}
                        >
                          <h4>Accept</h4>
                        </button>
                        <button
                          class="cta-btn"
                          class="buttonform"
                          onClick={this.rejectbtn.bind(this, user1)}
                        >
                          <h4>Deny</h4>
                        </button>
                      </div>
                    </div>
                  </div>
                );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default PendingHospitalApp;
