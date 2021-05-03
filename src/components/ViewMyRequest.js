import React from "react";

import firebase, { auth } from "../firebase/firebase";
import { Link } from "react-router-dom";
import donateblood from "../images/Donating-Blood-1.svg";
import "../static/receiverrequest.css";

import smile from "../images/smiling-woman.png";
import donate from "../images/donateVector.png";

import data from "../Hospitals.json";
import Select from "react-select";
import { BeatLoader } from "react-spinners"
import { css } from "@emotion/core";
const override = css`
  margin-top: 250px;
  margin-left: 650px;
  position: fixed; 
  top: 100px;  
`;


class ViewMyRequest extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      donors: [],
      currentID: "",
      email:"",
      isLoading: true
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    firebase.auth().onAuthStateChanged(function(user) {
      console.log(user)
      this.setState({ email: user.email },() => {
        const db = firebase.firestore();
        db.collection("Receiver")
          .where("Email", "==", this.state.email)
          .where("ApplicationStatus", "==", false)
          .get()
          .then((querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => doc.data());
            console.log("here is data", data);
            this.setState({ users: data });
            this.setState({ isLoading: false });
          });

        db.collection("User")
        .where("EmergencyDonor", "==", "True")
          .get()
          .then((querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => doc.data());
            console.log("here is data", data);
            this.setState({ donors: data });
            this.setState({ isLoading: false });
          });
        });
      }.bind(this));
  }

  applicationUpdate = (user) => {
    const db = firebase.firestore();
    db.collection("Receiver")
      .where("Email", "==", this.state.email)
      .where("ApplicationStatus", "==", false)
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
              db.collection("Receiver").doc(this.state.currentID).update({
                ApplicationStatus: true,
              });
              window.alert("Request Marked Completed");
              this.props.history.push("/ReceivedBlood");
            }
          );
        });
      });
  };

  applicationDelete = (user) => {
    const db = firebase.firestore();
    db.collection("Receiver")
      .where("Email", "==", this.state.email)
      .where("ApplicationStatus", "==", false)
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
              db.collection("Receiver")
                .doc(this.state.currentID)
                .delete()
                .then(() => {
                  window.alert("Request Deleted Successfully");
                });
            }
          );
        });
      });
  };

  render() {
    const { users } = this.state;
    const { donors } = this.state;
    const { isLoading } = this.state;

    if (isLoading) {
      return <BeatLoader        
      color='red'
      size={70}
      css = {override}
      loading/>;
    }
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
                    to="/Donor_Profile"
                    style={{ textDecoration: "none" }}
                    className="link"
                  >
                    <img src="https://img.icons8.com/fluent-systems-regular/48/000000/drop-of-blood.png" />

                    <h3>Donate Blood</h3>
                  </Link>
                </div>

                <div className="menulist">
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
            <div class="request-card-1 view myreq">
              <h3> My Requests</h3>
              {users.map((user) => (
                <div key={user.uid} class="list">
                  <h5>
                    {" "}
                    {user.FirstName} {user.LastName}
                  </h5>
                  <div>
                    <h6>{user.Age}</h6>
                    <h6>Blood Group : {user.BloodGrp}</h6>
                    <h6>Reason : {user.Post}</h6>
                    <h6>Contact : {user.ContactDetails}</h6>
                    <h6>City : {user.City} </h6>
                    <div className="buttons">
                      <button
                        class="cta-btn"
                        onClick={this.applicationUpdate.bind(this, user)}
                        class="buttonform"
                      >
                        <h4>Complete Request</h4>
                      </button>
                      <button
                        class="cta-btn"
                        onClick={this.applicationDelete.bind(this, user)}
                        class="buttonform"
                      >
                        <h4>Delete Request</h4>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div class="request-card-1 view">
              <h3>Donor List</h3>
              {donors.map((user) => (
                <div key={user.uid} className="list">
                  <h5>
                    {user.FirstName} {user.LastName}
                  </h5>
                  <div>
                    <h6>Age : {user.Age}</h6>
                    <h6>Blood Group : {user.Bloodgrp}</h6>
                    <h6>Gender : {user.Gender}</h6>
                    <h6>Contact : {user.Contact}</h6>
                    <h6>City : {user.City} </h6>
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
export default ViewMyRequest;
