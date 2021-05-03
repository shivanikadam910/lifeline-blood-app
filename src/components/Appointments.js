import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import UserProvider, { UserContext } from "../providers/userprovider";
import firebase from "../firebase/firebase";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../static/home.css";
import "../static/receiverrequest.css";
import donate from "../images/donateVector.png";
import Calendar from "react-calendar";
import "../static/Calendar.css";

class Appointments extends Component {
  constructor(props) {
    super();
    this.state = {
      appointments: [],
      donor: [],
      currentID: "",
      User: "",
      date: new Date(),
      email: "",
    };
  }
  onChange = (date) =>
    this.setState({
      date,
      donor: [],
    });

  componentDidMount() {
    const db = firebase.firestore();
    firebase.auth().onAuthStateChanged(
      function (user) {
        console.log(user);
        this.setState({ email: user.email });
      }.bind(this)
    );
    db.collection("RegisteredHospital")
      .where("Licence", "==", this.props.location.state.data)
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        this.setState({ appointments: data });
        console.log("here is data", data);
      });
  }
  donation_done = (user) => {
    const db = firebase.firestore();
    db.collection("User")
      .where("Email", "==", this.state.email)
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
                Donation_complete: "true",
              });
              window.alert("Donation completed successfully !!");
              this.props.history.push({
                pathname: "/Hospitaldashboard",
                state: { data: this.props.location.state.data },
              });
            }
          );
        });
      });
  };
  showAppointments = () => {
    const db = firebase.firestore();
    db.collection("User")
      .where("Date", "==", this.state.date)
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        this.setState({ donor: data });
        console.log("here is data", data);
      });
  };

  onInputchange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { appointments } = this.state;
    const { donor } = this.state;
    var nme;

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
                    style={{ textDecoration: "none" }}
                    className="link"
                  >
                    <img src="https://img.icons8.com/material-two-tone/24/000000/news.png" />

                    <h3>Post Event</h3>
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
                      pathname: "/Appointments",
                      state: { data: this.props.location.state.data },
                    }}
                    style={{ textDecoration: "none" }}
                    className="link"
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
        <div class="request-card view" style={{ marginLeft: "275px" }}>
          <div class="request-card-1 view">
            <h3>Appointment List</h3>
            <Calendar onChange={this.onChange} value={this.state.date} />
            {console.log(this.state.date)}
            <div className="buttons">
              <button
                class="cta-btn"
                onClick={this.showAppointments}
                class="buttonform"
              >
                <h4>Show Appointments</h4>
              </button>
            </div>

            {appointments.map((user) => {
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
                      {user1.Donation_complete === "true" ? (
                        <h6>Donation status : updated</h6>
                      ) : (
                        <div className="buttons">
                          <button
                            class="cta-btn"
                            onClick={this.donation_done.bind(this, user1)}
                            class="buttonform"
                          >
                            <h4>Donation completed</h4>
                          </button>
                        </div>
                      )}
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
export default Appointments;
