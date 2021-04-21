import React from "react";

import firebase, { auth } from "../firebase/firebase";
import { Link } from "react-router-dom";
import donateblood from "../images/Donating-Blood-1.svg";
import "../static/receiverrequest.css";

import smile from "../images/smiling-woman.png";
import donate from "../images/donateVector.png";

import data from "../Hospitals.json";
import Select from "react-select";
class ReceiverRequest extends React.Component {
  constructor() {
    super();
    this.state = {
      BloodGrp: "",
      City: "",
      ContactDetails: "",
      FirstName: "",
      LastName: "",
      Post: "",
      Hospital: "",
      users: [],
      users1: [],
      selectValue: "",
      ApplicationStatus: false,
      stat: new Boolean(null),
    };

    this.addUser = this.addUser.bind(this);
  }

  handleFirstNameChange(e) {
    this.setState({ FirstName: e.target.value });
  }
  handleLastNameChange(e) {
    this.setState({ LastName: e.target.value });
  }
  handlePostChange(e) {
    this.setState({ Post: e.target.value });
  }
  handleContactDetailsChange(e) {
    this.setState({ ContactDetails: e.target.value });
  }
  handleBloodGrpChange(e) {
    this.setState({ BloodGrp: e.target.value });
  }
  handleCityChange(e) {
    this.setState({ City: e.target.value });
  }
  handleHospitalChange(e) {
    this.setState({ Hospital: e.target.value });
  }

  addUser = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    this.state.users1.forEach((user) => {
      if (
        user.FirstName == this.state.FirstName &&
        user.LastName == this.state.LastName &&
        !user.ApplicationStatus
      ) {
        console.log("True");
        this.setState({ stat: true });
      } else {
        console.log("False");
        this.setState({ stat: false });
      }
    });

    if (this.state.FirstName === "") {
      window.alert("Enter your First Name");
    } else {
      if (this.state.LastName === "") {
        window.alert("Enter your Last Name");
      } else {
        if (this.state.BloodGrp === "") {
          window.alert("Enter your Blood Group");
        } else {
          if (this.state.City === "") {
            window.alert("Enter your City");
          } else {
            if (this.state.ContactDetails.length != 14) {
              window.alert("Required 10 digits, match format!");
            } else {
              if (this.state.Post === "") {
                window.alert("Enter reason for requesting blood.");
              } else {
                if (this.state.stat == true) {
                  window.alert(
                    "Request with the name already exists. Try with different name"
                  );
                } else {
                  const userRef = db.collection("Receiver").add({
                    BloodGrp: this.state.BloodGrp,
                    City: this.state.City,
                    ContactDetails: this.state.ContactDetails,
                    FirstName: this.state.FirstName,
                    LastName: this.state.LastName,
                    Post: this.state.Post,
                    Email: auth.currentUser.email,
                    Hospital: this.state.selectValue,
                    ApplicationStatus: this.state.ApplicationStatus,
                  });
                  window.alert(
                    "Your request has beed successfully submitted! View your request and donor list. Get well soon!"
                  );
                  this.props.history.push("/ViewMyRequest");
                  console.log("Your request has beed successfully submitted! ");
                }
              }
            }
          }
        }
      }
    }
  };
  componentDidMount() {
    console.log(auth.currentUser.email);
    const db = firebase.firestore();
    db.collection("Receiver")
      .where("Email", "==", auth.currentUser.email)
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        console.log("here is data", data);
        this.setState({ users1: data });
      });
  }

  render() {
    const { users } = this.state;
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

                <div
                  className="menulist"
                  style={{
                    background: "#f2f2f2",
                    borderRight: "5px solid #fc3d3d",
                  }}
                >
                  <Link
                    to="/receiverrequest"
                    style={{ textDecoration: "none" }}
                    className="link"
                  >
                    <img src="https://img.icons8.com/material-outlined/24/000000/invite.png" />

                    <h3 style={{ color: "black" }}>Request Blood</h3>
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
          <div class="request-card">
            <div class="request-card-1">
              <div class="rec-request">
                <form>
                  <h3>Recieve Request</h3>
                  <label for="firstname">
                    <b>First Name</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    name="firstname"
                    value={this.state.FirstName}
                    onChange={this.handleFirstNameChange.bind(this)}
                    required
                  />
                  <br />
                  <label for="lastname">
                    <b>Last Name</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    name="lastname"
                    value={this.state.LastName}
                    onChange={this.handleLastNameChange.bind(this)}
                    required
                  />
                  <br />
                  <div className="customSelect">
                    <label for="Bloodgrp">
                      <b>Blood Group</b>
                    </label>

                    <select
                      className="drpdwn"
                      name="bloodgrp"
                      id="bloodgrp"
                      value={this.state.BloodGrp}
                      onChange={(e) =>
                        this.setState({ BloodGrp: e.target.value })
                      }
                    >
                      <option selected> -- select an option -- </option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>

                  <label for="bloodgroup">
                    <b>City</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter city"
                    name="city"
                    value={this.state.City}
                    onChange={this.handleCityChange.bind(this)}
                    required
                  />
                  <br />
                  <label for="contactno">
                    <b>Contact Number</b>
                  </label>
                  <input
                    type="tel"
                    placeholder="+91-9120034561"
                    name="contactno"
                    value={this.state.ContactDetails}
                    onChange={this.handleContactDetailsChange.bind(this)}
                    required
                  />
                  <br />
                  <label for="post">
                    <b>Reason</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter brief reason here"
                    name="reason"
                    value={this.state.Post}
                    onChange={this.handlePostChange.bind(this)}
                    required
                  />
                  <br />

                  <label for="hospitals">
                    <b>Choose a Hospital</b>
                  </label>
                  <select
                    className="drpdwn2"
                    id="sel"
                    value={this.state.selectValue}
                    onChange={(e) =>
                      this.setState({ selectValue: e.target.value })
                    }
                  >
                    <option selected> -- select an option -- </option>
                    {data.map((e, key) => {
                      if (e.District == this.state.City) {
                        return (
                          <option key={key} value={e.Hospital_Name}>
                            {e.Hospital_Name}
                          </option>
                        );
                      }
                    })}
                  </select>

                  <div className="req-button">
                    <button
                      class="cta-btn"
                      onClick={this.addUser}
                      className="buttonform"
                    >
                      <h4>Make Request</h4>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReceiverRequest;
