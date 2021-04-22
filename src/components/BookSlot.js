import firebase, { auth } from "../firebase/firebase";
import React, { Component } from "react";
import Calendar from "react-calendar";
import "../static/Calendar.css";
import "../static/receiverrequest.css";
import { Link } from "react-router-dom";
import donate from "../images/donateVector.png";

class BookSlot extends Component {
  constructor(props) {
    super();
    this.state = {
      date: new Date(),
      currentID: "",
      email:""
    };
  }
  componentDidMount(){
    firebase.auth().onAuthStateChanged(function(user) {
      console.log(user)
      this.setState({ email: user.email })
      }.bind(this));
  }
  bookDate = (date) => {
    console.log("Passed parameters:----");
    console.log(this.props.location.state.Donation_Request);
    console.log(this.props.location.state.Lname);

    const db = firebase.firestore();
    db.collection("User")
      .where("Email", "==", this.state.email)
      .where("FirstName", "==", this.props.location.state.Donation_Request)
      .where("LastName", "==", this.props.location.state.Lname)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          this.setState(
            {
              currentID: doc.id,
            },
            () => {
              db.collection("User").doc(this.state.currentID).update({
                Date: this.state.date,
              });
              window.alert("Date booked");
              this.props.history.push("/dashboard");
            }
          );
        });
      });
  };

  onChange = (date) =>
    this.setState({
      date,
    });

  render() {
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
          <div class="request-card view">
            <div class="request-card-1 view">
              <h3>Book your date</h3>
              <div class = "list">
              <Calendar onChange={this.onChange} value={this.state.date} />
              {console.log(this.state.date)}
              <div className="buttons">
                <button
                  class="cta-btn"
                  onClick={this.bookDate}
                  class="buttonform"
                >
                  <h4>Book your slot</h4>
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
export default BookSlot;
