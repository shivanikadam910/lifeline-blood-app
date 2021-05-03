import React from "react";
import "../static/dashboard.css";
import lifeline from "../images/lifeline.png";
import firebase, { auth } from "../firebase/firebase";
import smile from "../images/smiling-woman.png";
import donate from "../images/donateVector.png";
import { Link } from "react-router-dom";
import Request from "./ReceiverRequest";
import { BeatLoader } from "react-spinners"
import { css } from "@emotion/core";
const override = css`
  margin-top: 250px;
  margin-left: 650px;
  position: fixed; 
  top: 100px;  
`;

class dashboard extends React.Component {
  constructor() {
    super();

    this.state = {
      Requestcount: "",
      Donation_rqst_cnt: "",
      ReceivedCount: "",
      users: [],
      email: "",
      isLoading: true
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    firebase.auth().onAuthStateChanged(
      function (user) {
        console.log(user);
        this.setState({ email: user.email }, () => {
          const db = firebase.firestore();
          console.log("email", this.state.email);
          db.collection("Receiver")
            .where("Email", "==", this.state.email)
            .where("ApplicationStatus", "==", false)
            .get()
            .then((querySnapshot) => {
              const count = querySnapshot.size;
              this.setState({ Requestcount: count });
              console.log(count);
              this.setState({ isLoading: false });
            });

          db.collection("User")
            .where("Email", "==", this.state.email)
            .where("Donation_complete", "==", "true")
            .get()
            .then((querySnapshot) => {
              const count1 = querySnapshot.size;
              this.setState({ Donation_rqst_cnt: count1 });
              console.log(count1);
              this.setState({ isLoading: false });
            });

          db.collection("Receiver")
            .where("Email", "==", this.state.email)
            .where("ApplicationStatus", "==", true)
            .get()
            .then((querySnapshot) => {
              const count2 = querySnapshot.size;
              this.setState({ ReceivedCount: count2 });
              console.log(count2);
              this.setState({ isLoading: false });
            });

          db.collection("Events")
            .get()
            .then((querySnapshot) => {
              const data = querySnapshot.docs.map((doc) => doc.data());
              console.log("here is data", data);
              this.setState({ users: data });
              this.setState({ isLoading: false });
            });
        });
      }.bind(this)
    );
  }
  render() {
    const { users } = this.state;
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
                <div
                  className="menulist"
                  style={{
                    background: "#f2f2f2",
                    borderRight: "5px solid #fc3d3d",
                  }}
                >
                  <Link
                    to="/dashboard"
                    style={{ textDecoration: "none" }}
                    className="link"
                  >
                    <img src="https://img.icons8.com/fluent-systems-regular/48/000000/dashboard-layout.png" />
                    <h3 style={{ color: "black" }}>Dashboard</h3>
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

          <div className="card-grid">
            <div className="card1">
              {this.state.Donation_rqst_cnt != 0 ? (
                [
                  <Link to="/ViewRecievers">
                    <div>My Donations</div>
                    <div className="total">Total</div>
                    <div className="num">{this.state.Donation_rqst_cnt}</div>
                  </Link>,
                ]
              ) : (
                <Link to="/dashboard">
                  <div>My Donations</div>
                  <div className="total">Total</div>
                  <div className="num">{this.state.Donation_rqst_cnt}</div>
                </Link>
              )}
            </div>
            <div className="card2">
            {this.state.ReceivedCount != 0 ? (
                [
                  <Link to="/ReceivedBlood">
                  <div>Received</div>
                  <div className="total">Total</div>
                  <div className="num">{this.state.ReceivedCount}</div>
                </Link>,
                ]
              ) : (
                <Link to="/dashboard">
                  <div>Received</div>
                  <div className="total">Total</div>
                  <div className="num">{this.state.ReceivedCount}</div>
                </Link>
              )}
              
            </div>
            <div className="card3">
              {this.state.Requestcount != 0 ? (
                [
                  <Link to="/ViewMyRequest">
                    <div>Request Pending</div>
                    <div className="total">Total</div>
                    <div className="num">{this.state.Requestcount}</div>
                  </Link>,
                ]
              ) : (
                <Link to="/dashboard">
                  <div>Request Pending</div>
                  <div className="total">Total</div>
                  <div className="num">{this.state.Requestcount}</div>
                </Link>
              )}
            </div>
          </div>

          <div className="nearby">Nearby Hospitals</div>
          <div className="card-grid">
            <div className="hospital1">
              <div className="hospitalName">City Hospital</div>
            </div>
            <div className="hospital2">
              <div className="hospitalName">City Hospital</div>
            </div>
            <div className="hospital3">
              <div className="hospitalName">City Hospital</div>
            </div>
          </div>

          <div class="request-card view event">
            <div
              class="request-card-1 view event"
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h3> Events </h3>
              {users.map((user) => (
                <div key={user.uid} class="list">
                  <h5> {user.Title}</h5>
                  <div>
                    <h6>{user.Description}</h6>
                  </div>
                  <div className="image">
                    <img src={user.Url} width="300" height="300" />
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

export default dashboard;
