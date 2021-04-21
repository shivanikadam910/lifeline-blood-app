import React from "react";
import "../static/dashboard.css";
import lifeline from "../images/lifeline.png";
import firebase, { auth } from "../firebase/firebase";
import smile from "../images/smiling-woman.png";
import donate from "../images/donateVector.png";
import { Link } from "react-router-dom";
import Request from "./ReceiverRequest";
class MyEvents extends React.Component {
  constructor(props) {
    super();
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    const db = firebase.firestore();

    db.collection("Events")
      .where("Licence", "==", this.props.location.state.data)
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        console.log("here is data", data);
        this.setState({ users: data });
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
                    to={{
                      pathname: "/Hospitaldashboard",
                      state: { data: this.props.location.state.data },
                    }}
                    className="link"
                    style={{ textDecoration: "none" }}
                  >
                    <img src="https://img.icons8.com/fluent-systems-regular/48/000000/dashboard-layout.png" />
                    <h3>Dashboard</h3>
                  </Link>
                </div>

                <div className="menulist">
                  <Link
                    to="/Hospitaldashboard"
                    style={{ textDecoration: "none" }}
                    className="link"
                  >
                    <img src="https://img.icons8.com/windows/32/000000/approve-and-update.png" />

                    <h3>Update Applications</h3>
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
                      pathname: "/AddEvent",
                      state: { data: this.props.location.state.data },
                    }}
                    className="link"
                    style={{ textDecoration: "none" }}
                  >
                    <img src="https://img.icons8.com/material-two-tone/24/000000/news.png" />

                    <h3 style={{ color: "black" }}>Post Event</h3>
                  </Link>
                </div>

                <div className="menulist">
                  <Link
                    to="/Hospitaldashboard"
                    style={{ textDecoration: "none" }}
                    className="link"
                  >
                    <img src="https://img.icons8.com/material-rounded/24/000000/calendar-minus.png" />
                    <h3>Appointments</h3>
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
          <div class="request-card view event">
            <div class="request-card-1 view event">
              <div className="eventheader" style={{ marginBottom: "0px  " }}>
                <div className="add">
                  <Link
                    to={{
                      pathname: "/AddEvent",
                      state: { data: this.props.location.state.data },
                    }}
                  >
                    <h4>Add Event</h4>
                  </Link>
                </div>
                <div
                  className="my"
                  style={{ borderBottom: "8px solid firebrick" }}
                >
                  <Link
                    to={{
                      pathname: "/MyEvents",
                      state: { data: this.props.location.state.data },
                    }}
                  >
                    <h4>My Events</h4>
                  </Link>
                </div>
              </div>

              <h3> My Events</h3>
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

        {/* <div className="nearby">Nearby Hospitals
                </div>
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
                </div> */}
      </div>
    );
  }
}

export default MyEvents;
