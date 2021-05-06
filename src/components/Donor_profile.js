import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase, { auth } from "../firebase/firebase";
import "../static/receiverrequest.css";
import donate from "../images/donateVector.png";
import donateblood from "../images/Donating-Blood-1.svg";


class Donor_profile extends Component {
  constructor() {
    super();
    this.state = {
      Medic_condition: "",
      bloodgrp: "",
      selectValue: "",
      gender: "",
      users: [],

      onInputchange(event) {
        this.setState({
          [event.target.name]: event.target.value,
        });
      },
    };
    this.onInputchange = this.onInputchange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }
  componentDidMount() {
    const db = firebase.firestore();
    db.collection("RegisteredHospital")

      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        // console.log("here is data", data);
        this.setState({ users: data });
      });
  }

  onInputchange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onSubmitForm() {
    const db = firebase.firestore();
    db.collection("RegisteredHospital")

      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        console.log("here is data", data);
        this.setState({ users: data });
      });

    db.collection("User")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        console.log("here is data", data);
        this.setState({ donors: data });
      });

    console.log("fname");
    console.log(this.state.fname);

    if (this.state.fname == undefined) {
      window.alert("Enter your First Name");
    } else {
      if (this.state.lname == undefined) {
        window.alert("Enter your Last Name");
      } else {
        if (this.state.gender == "") {
          window.alert("Enter your Gender");
        } else {
          if (this.state.age == undefined) {
            window.alert("Enter your Age");
          } else {
            if (this.state.city == undefined ) {
              window.alert("Enter your city");
            } else {
              if (this.state.contact == undefined) {
                window.alert("Enter your contact");
              } else {
                if (this.state.weight == undefined) {
                  window.alert("Enter your Weight");
                } else {
                  if (this.state.height == undefined) {
                    window.alert("Enter your Height");
                  } else {
                    if (this.state.Medic_condition == "") {
                      window.alert("Enter your Medical Condition");
                    } else {
                      if (this.state.bloodgrp == "") {
                        window.alert("Enter your Blood Group");
                      } else {
                        if (this.state.rct_don == undefined) {
                          window.alert("Enter your Recent Donation");
                        } else {
                          if (this.state.eme_don == undefined) {
                            window.alert(
                              "Enter if you would like to donate directly to patients"
                            );
                          } else {
                            if (this.state.selectValue == "") {
                              window.alert(
                                "Enter the hospital where you would like to place a request"
                              );
                            } else {
                              if (this.state.contact.length !== 14 || isNaN(this.state.contact)) {
                                window.alert(
                                  "Required 10 digits, match format and write numeric data!"
                                );
                              } else {
                                console.log("length");
                                console.log(this.state.contact.length);

                                if (
                                  this.state.age > 65 ||
                                  this.state.age < 18
                                ) {
                                  window.alert(
                                    "Sorry ,You cannot donate blood at this age"
                                  );
                                  window.location = "/dashboard";
                                } else {
                                  if (this.state.weight < 50) {
                                    window.alert(
                                      "You are underweight to donate blood :("
                                    );
                                    window.location = "/dashboard";
                                  } else {
                                    if (this.state.Medic_condition != "None") {
                                      window.alert(
                                        "Sorry you cannot donate blood with this medical condition"
                                      );
                                      window.location = "/dashboard";
                                    } else {
                                      if (this.state.rct_don === "True") {
                                        window.alert(
                                          "Sorry you cannot donate blood , as you have donated recently"
                                        );
                                        window.location = "/dashboard";
                                      } else {
                                        const db = firebase.firestore();

                                        const userRef = db
                                          .collection("User")
                                          .add({
                                            FirstName: this.state.fname,
                                            LastName: this.state.lname,
                                            DonorType: "Regular",
                                            Gender: this.state.gender,
                                            Height: this.state.height,
                                            Weight: this.state.weight,
                                            Age: this.state.age,
                                            RecentDonation: this.state.rct_don,
                                            Contact: this.state.contact,
                                            Bloodgrp: this.state.bloodgrp,
                                            MedicalCondition: this.state
                                              .Medic_condition,
                                            City: this.state.city,
                                            Contact: this.state.contact,
                                            Email: auth.currentUser.email,
                                            Appointment_hospital: this.state
                                              .selectValue,
                                            ApplicationStatus: "pending",
                                            EmergencyDonor: this.state.eme_don,
                                          })
                                          .then(() => {
                                            console.log(
                                              "Document successfully written!"
                                            );
                                            console.log(
                                              this.state.special_med_con
                                            );
                                            alert(
                                              "Profile Created successfully "
                                            );
                                            this.props.history.push(
                                              "/TrackApplication"
                                            );
                                          })
                                          .catch((error) => {
                                            console.error(
                                              "Error writing document: ",
                                              error
                                            );
                                            alert(error.message);
                                          });
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  render() {
    const { items } = this.state;
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

                <div
                  className="menulist"
                  style={{
                    background: "#f2f2f2",
                    borderRight: "5px solid #fc3d3d",
                    cursor: "pointer",
                  }}
                >
                  <Link
                    to="/Donor_profile"
                    style={{ textDecoration: "none" }}
                    className="link"
                  >
                    <img src="https://img.icons8.com/fluent-systems-regular/48/000000/drop-of-blood.png" />

                    <h3 style={{ color: "black" }}>Donate Blood</h3>
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
              <Link to="/Whydonateblood_dashboard" style={{ fontWeight: "600" }}>
                Why Donate Blood?
              </Link>
            </h3>
            <div className="donateVector">
              <Link to="/Whydonateblood_dashboard">
                <img src={donate} alt="why donate" />
              </Link>
            </div>
          </div>
        </div>

        <div className="container2">
          <div class="request-card view">
            <div class="request-card-1">
              <div class="rec-request">
                <form>
                  <h3>Medical Profile</h3>
                  <label for="firstname">
                    <b>First Name</b>
                  </label>
                  <input
                    name="fname"
                    type="text"
                    value={this.state.fname}
                    onChange={this.onInputchange}
                  />

                  <br />
                  <label for="lastname">
                    <b>Last Name</b>
                  </label>

                  <input
                    name="lname"
                    type="text"
                    value={this.state.lname}
                    onChange={this.onInputchange}
                  />

                  <br />
                  <label for="Bloodgrp">
                    <b>Blood Group</b>
                  </label>

                  <select
                    className="drpdwn"
                    name="bloodgrp"
                    id="bloodgrp"
                    value={this.state.bloodgrp}
                    onChange={(e) =>
                      this.setState({ bloodgrp: e.target.value })
                    }
                  >
                    <option selected> -- select an option -- </option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>

                  <br />
                  <label for="Gender">
                    <b>Gender</b>
                  </label>

                  <select
                    className="drpdwn"
                    name="gender"
                    id="gender"
                    value={this.state.gender}
                    onChange={(e) => this.setState({ gender: e.target.value })}
                  >
                    <option selected> -- select an option -- </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>

                  <br />

                  <br />
                  <label>
                    <b>Age </b>
                  </label>

                  <input
                    name="age"
                    type="number"
                    value={this.state.age}
                    onChange={this.onInputchange}
                  />

                  <br />

                  <label>
                    <b>City </b>
                  </label>
                  <input
                    name="city"
                    type="text"
                    placeholder="Ahmedabad"
                    value={this.state.city}
                    onChange={this.onInputchange}
                  />

                  <br />

                  <label for="contactno">
                    <b>Contact Number</b>
                  </label>
                  <input
                    name="contact"
                    type="tel"
                    pattern="[0-9*]"
                    placeholder="+91-9120034561"
                    value={this.state.contact}
                    onChange={this.onInputchange}
                  />

                  <br />

                  <label>
                    <b> Weight </b>
                  </label>
                  <input
                    name="weight"
                    type="number"
                    step="0.01"
                    value={this.state.weight}
                    onChange={this.onInputchange}
                  />

                  <br />

                  <label>
                    <b>Height</b>
                  </label>
                  <input
                    name="height"
                    type="number"
                    step="0.01"
                    value={this.state.height}
                    onChange={this.onInputchange}
                  />

                  <br />

                  <label for="condition">
                    <b>Do you have any of these medical Conditions</b>
                  </label>

                  <select
                    class="drpdwn"
                    name="special_med_con"
                    id="special_med_con"
                    value={this.state.Medic_condition}
                    onChange={(e) =>
                      this.setState({ Medic_condition: e.target.value })
                    }
                  >
                    <option selected> -- select an option -- </option>
                    <option value="Cardiac Arrest">Cardiac Arrest</option>
                    <option value="Severe lung disease">
                      Severe lung disease
                    </option>
                    <option value="Hepatitis B">Hepatitis B</option>
                    <option value="Hepatitis C">Hepatitis C</option>
                    <option value="Cancer">Cancer</option>
                    <option value="HIV">HIV</option>
                    <option value="Chronic Alchoholism">
                      Chronic Alchoholism
                    </option>
                    <option value="None">None of the above</option>
                  </select>

                  <br />

                  <label>
                    <b>Have you donated blood in past 112 days</b>
                  </label>
                  <label for="yes" className="radiolabel">
                    <input
                      className="radiob"
                      name="rct_don"
                      type="radio"
                      id="rct_yes"
                      value="True"
                      onChange={this.onInputchange}
                      style={{ margin: "20px" }}
                    />
                    <b>Yes</b>{" "}
                  </label>
                  <label for="no" className="radiolabel">
                    <input
                      className="radiob"
                      type="radio"
                      id="rct_no"
                      name="rct_don"
                      value="False"
                      onChange={this.onInputchange}
                      style={{ margin: "20px" }}
                    ></input>
                    <b>No</b>
                  </label>
                  <br />

                  <br />

                  <label>
                    <b>Would You like to donate blood directly to patients</b>
                  </label>
                  <label for="yes" className="radiolabel">
                    <input
                      className="radiob"
                      name="eme_don"
                      type="radio"
                      id="rct_yes"
                      value="True"
                      onChange={this.onInputchange}
                      style={{ margin: "20px" }}
                    />
                    <b>Yes</b>{" "}
                  </label>
                  <label for="no" className="radiolabel">
                    <input
                      className="radiob"
                      type="radio"
                      id="rct_no"
                      name="eme_don"
                      value="False"
                      onChange={this.onInputchange}
                      style={{ margin: "20px" }}
                    ></input>
                    <b>No</b>
                  </label>
                  <br />

                  <label>
                    <b>Select the hospital you would like to donate bloood</b>{" "}
                  </label>
                  <select
                    className="drpdwn"
                    id="select"
                    value={this.state.selectValue}
                    onChange={(e1) =>
                      this.setState({ selectValue: e1.target.value })
                    }
                  >
                    <option selected> -- select an option -- </option>
                    {users.map((e, key) => {
                      if (this.state.city == e.City) {
                        return (
                          <option key={key} value={e.Hospital}>
                            {e.Hospital}
                          </option>
                        );
                      }
                    })}
                  </select>
                </form>
                <div className="req-button" style={{ paddingBottom: "40px" }}>
                  <button className="buttonform" onClick={this.onSubmitForm}>
                    <h4>Submit</h4>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Donor_profile;
