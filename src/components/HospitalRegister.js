import React, { Component } from "react";
import firebase from "../firebase/firebase";
import "../static/style.css";
import { Link } from "react-router-dom";
import data from "../Hospitals.json";

export default class HospitalRegister extends Component {
  constructor() {
    super();
    this.state = {
      Hname: "",
      Hlicence: "",
      Hcity: "",
      Hpassword: "",
      selectValue: "",
    };

    this.registerHospital = this.registerHospital.bind(this);
  }

  handleHnameChange(e) {
    this.setState({ Hname: e.target.value });
  }
  handleHlicenceChange(e) {
    this.setState({ Hlicence: e.target.value });
  }
  handledHcityChange(e) {
    this.setState({ Hcity: e.target.value });
  }
  handledHpasswordChange(e) {
    this.setState({ Hpassword: e.target.value });
  }

  registerHospital = (e) => {
    e.preventDefault();
    console.log("register user button pressed");

    if (this.state.Hlicence === "") {
      alert("Enter Licence number proper.");
      window.location = "/Hsignup";
    } else {
      if (this.state.Hcity === "") {
        alert("Enter city");
        window.location = "/Hsignup";
      } else {
        if (this.state.Hpassword === "") {
          alert("Enter Password");
          window.location = "/Hsignup";
        } else {
          {
            data.map((e, key) => {
              //  console.log("Hospital name : ",e.Hospital_Name)
              //  console.log("Hname",this.state.selectValue)
              if (
                e.Hospital_Name == this.state.selectValue &&
                e.Licence_number == this.state.Hlicence
              ) {
                console.log("match");
                const db = firebase.firestore();
                const userRef = db.collection("RegisteredHospital").add({
                  Hospital: this.state.selectValue,
                  City: this.state.Hcity,
                  Licence: this.state.Hlicence,
                  Password: this.state.Hpassword,
                  Url:
                    "https://thumbs.dreamstime.com/z/hospital-building-modern-parking-lot-59693686.jpg",
                });
                window.alert("Hospital is registered successfully!");
                this.props.history.push("/Hsignin");
              }
            });
            // window.alert("Licence number not matched try again!")
          }
        }
      }
    }
  };
  render() {
    return (
      <div className="container">
        <div className="layer" id="signup">
          <div className="loginArea register" id="signupId">
            <div className="vector"></div>
            <h3 className="loginText">Register Hospital</h3>
            <div className="textArea">
              <form>
                <div>
                  <input
                    type="text"
                    placeholder="Enter City"
                    name="Hcity"
                    size="35"
                    value={this.state.Hcity}
                    onChange={this.handledHcityChange.bind(this)}
                    maxLength={15}
                  />
                </div>
                <div>
                  <select
                    className="drpdwn2"
                    id="sel"
                    value={this.state.selectValue}
                    onChange={(e) =>
                      this.setState({ selectValue: e.target.value })
                    }
                  >
                    {data.map((e, key) => {
                      if (e.District == this.state.Hcity) {
                        return (
                          <option key={key} value={e.Hospital_Name}>
                            {e.Hospital_Name}
                          </option>
                        );
                      }
                    })}
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Licence number"
                    name="Hlicence"
                    size="35"
                    required
                    value={this.state.Hlicence}
                    onChange={this.handleHlicenceChange.bind(this)}
                  ></input>
                </div>

                <div>
                  <input
                    type="Password"
                    placeholder="Enter Password"
                    name="Hpassword"
                    size="35"
                    value={this.state.Hpassword}
                    onChange={this.handledHpasswordChange.bind(this)}
                    maxLength={15}
                  />
                </div>
                <div className="btn">
                  <button
                    type="submit"
                    className="submitButton"
                    onClick={this.registerHospital}
                  >
                    <b>Register Here!</b>
                  </button>
                </div>
              </form>
              <div className="createAccount">
                <p>Already registered Hospital?&nbsp;&nbsp;</p>
                <Link to="/Hsignin" style={{ fontWeight: "600" }}>
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
