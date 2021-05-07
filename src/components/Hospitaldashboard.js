import React from "react";
import "../static/dashboard.css";
import lifeline from "../images/lifeline.png";
import firebase, { auth } from "../firebase/firebase";
import smile from "../images/smiling-woman.png";
import donate from "../images/donateVector.png";
import { Link } from "react-router-dom";
import Request from "./ReceiverRequest";
import { BeatLoader } from "react-spinners";
import { css } from "@emotion/core";
const override = css`
  margin-top: 250px;
  margin-left: 650px;
  position: fixed;
  top: 100px;
`;
class Hospitaldashboard extends React.Component {
  constructor(props) {
    super();
    this.state = {
      users: [],
      hospital: "",
      isLoading: true,
      currentID: "",
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    const db = firebase.firestore();
    db.collection("RegisteredHospital")
      .where("Licence", "==", this.props.location.state.data)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          this.setState(
            {
              currentID: doc.id,
            },
            () => {
              db.collection("RegisteredHospital")
                .doc(this.state.currentID)
                .update({
                  Login_status: true,
                });
            }
          );
        });
      });

    db.collection("Events")
      .where("Licence", "==", this.props.location.state.data)
      .get()
      .then((querySnapshot) => {
        const count = querySnapshot.size;
        this.setState({ Eventcount: count });
        console.log(count);
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

    db.collection("RegisteredHospital")
      .where("Licence", "==", this.props.location.state.data)
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        this.setState({ hospital: data }, () => {
          db.collection("User")
            .where(
              "ApplicationStatus",
              "==",
              "true" || "ApplicationStatus",
              "==",
              "false"
            )
            .where(
              "Appointment_hospital",
              "==",
              this.state.hospital[0].Hospital
            )
            .get()
            .then((querySnapshot) => {
              const count1 = querySnapshot.size;
              this.setState({ app_count: count1 });
              this.setState({ isLoading: false });
            });

          db.collection("User")
            .where("Donation_complete", "==", "true")
            .where(
              "Appointment_hospital",
              "==",
              this.state.hospital[0].Hospital
            )
            .get()
            .then((querySnapshot) => {
              const count1 = querySnapshot.size;
              this.setState({ don_count: count1 });
              this.setState({ isLoading: false });
            });
        });
      });
  }

  logoutHospital = () => {
    const db = firebase.firestore();
    db.collection("RegisteredHospital")
      .where("Licence", "==", this.props.location.state.data)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          this.setState(
            {
              currentID: doc.id,
            },
            () => {
              db.collection("RegisteredHospital")
                .doc(this.state.currentID)
                .update({
                  Login_status: false,
                });

              window.location.href = "/Home";
            }
          );
        });
      });
  };

  render() {
    const { users } = this.state;
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
                <div
                  className="menulist H"
                  style={{
                    background: "#f2f2f2",
                    borderRight: "5px solid #fc3d3d",
                    cursor: "pointer",
                  }}
                >
                  <Link
                    to={{
                      pathname: "/Hospitaldashboard",
                      state: { data: this.props.location.state.data },
                    }}
                    className="link"
                    style={{ textDecoration: "none" }}
                  >
                    <img src="https://img.icons8.com/fluent-systems-regular/48/000000/dashboard-layout.png" />
                    <h3 style={{ color: "black" }}>Dashboard</h3>
                  </Link>
                </div>

                <div className="menulist H">
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

                <div className="menulist H">
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

                <div className="menulist H">
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
              <Link
                to={{
                  pathname: "/WhyDonateBloodhp",
                  state: { data: this.props.location.state.data },
                }}
                style={{ fontWeight: "600" }}
              >
                Why Donate Blood?
              </Link>
            </h3>
            <div className="donateVector">
              <Link
                to={{
                  pathname: "/WhyDonateBloodhp",
                  state: { data: this.props.location.state.data },
                }}
              >
                <img src={donate} alt="why donate" />
              </Link>
            </div>
          </div>
        </div>
        <div className="container2">
          <div className="card-grid">
            <div className="card1">
              {this.state.app_count != 0 ? (
                [
                  <Link
                    to={{
                      pathname: "/ViewApplication",
                      state: { data: this.props.location.state.data },
                    }}
                  >
                    <div>My Applications</div>
                    <div className="total">Total</div>
                    <div className="num">{this.state.app_count}</div>
                  </Link>,
                ]
              ) : (
                <Link
                  to={{
                    pathname: "/Hospitaldashboard",
                    state: { data: this.props.location.state.data },
                  }}
                >
                  <div>My Applications</div>
                  <div className="total">Total</div>
                  <div className="num">{this.state.app_count}</div>
                </Link>
              )}
            </div>
            <div className="card2">
              {this.state.don_count != 0 ? (
                [
                  <Link
                    to={{
                      pathname: "/SuccessfulDonations",
                      state: { data: this.props.location.state.data },
                    }}
                  >
                    <div>Successful Donations</div>
                    <div className="total">Total</div>
                    <div className="num">{this.state.don_count}</div>
                  </Link>,
                ]
              ) : (
                <Link
                  to={{
                    pathname: "/Hospitaldashboard",
                    state: { data: this.props.location.state.data },
                  }}
                >
                  <div>Successful Donations</div>
                  <div className="total">Total</div>
                  <div className="num">{this.state.don_count}</div>
                </Link>
              )}
            </div>
            <div className="card3">
              {this.state.Eventcount != 0 ? (
                [
                  <Link
                    to={{
                      pathname: "/MyEvents",
                      state: { data: this.props.location.state.data },
                    }}
                  >
                    <div>My Events</div>
                    <div className="total">Total</div>
                    <div className="num">{this.state.Eventcount}</div>
                  </Link>,
                ]
              ) : (
                <Link
                  to={{
                    pathname: "/Hospitaldashboard",
                    state: { data: this.props.location.state.data },
                  }}
                >
                  <div>My Events</div>
                  <div className="total">Total</div>
                  <div className="num">{this.state.Eventcount}</div>
                </Link>
              )}
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
              <div class="listevent-1">
              {users.map((user) => (
                <div key={user.uid} class="listevent">
                  
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

          {/* <div className="nearby">Nearby Hospitals</div>
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
      </div>
    );
  }
}

export default Hospitaldashboard;
