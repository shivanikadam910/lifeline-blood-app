import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import CardGroup from "react-bootstrap/CardGroup";
import Popup from "reactjs-popup";
import "../static/home.css";
import data from "../Blood_news_json";
import Request from "./ReceiverRequest";
import WhyDonateBlood from "./WhyDonateBlood";
import smile from "../images/smiling-woman.png";
import donate from "../images/donateVector.png";
import { Link } from "react-router-dom";
import firebase, { auth } from "../firebase/firebase";
const newdata = data.map((data) => {
  return (
    <Card key={data.post_id} style={{ background: "#f5f5f5" }}>
      <Card.Body>
        <Card.Title>{data.post_title}</Card.Title>
        <Card.Text>-{data.post_author}</Card.Text>

        <a
          className="btn-primary"
          href={data.post_url}
          target="_blank"
          rel=" noopener noreferrer"
        >
          Go to link
        </a>
      </Card.Body>
    </Card>
  );
});

export default class Main extends Component {
  constructor(props) {
    super();
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    const db = firebase.firestore();
    db.collection("Events")
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
                    to="/receiverrequest"
                    style={{ textDecoration: "none" }}
                    className="link"
                  >
                    <img src="https://img.icons8.com/fluent-systems-regular/48/000000/drop-of-blood.png" />
                    <h3>Donate Blood</h3>
                  </Link>
                </div>

                <div className="menulist">
                  <Link
                    to="/Hospitalregister"
                    style={{ textDecoration: "none" }}
                    className="link"
                  >
                    <img src="https://img.icons8.com/material/24/000000/hospital-2.png" />
                    <h3>Hospitals</h3>
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
          <div className="banner">
            <div class="banner1">
              <h1>
                Donate Blood
                <br />
                Save lives!
              </h1>
              <h3>Donate Now &nbsp; &gt;</h3>
            </div>
            <div class="banner2">
              <img src={smile} alt="Smiling Woman" />
            </div>
          </div>

          <div className="nearby">Latest News</div>
          <CardColumns className=" m-3 p-3 owncard "> {newdata} </CardColumns>

          <div class="request-card view event">
            <div class="request-card-1 view event">
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
      </div>
    );
  }
}
