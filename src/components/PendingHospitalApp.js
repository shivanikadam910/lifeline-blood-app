import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import UserProvider, { UserContext } from "../providers/userprovider";
import firebase from "../firebase/firebase";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../static/home.css';
import donate from "../images/donateVector.png";



class PendingHospitalApp extends Component {
    constructor(props) {
        super();
        this.state = {
            hospitals: [],
            donor: []
        };

    }

    componentDidMount() {

        const db = firebase.firestore();
        db.collection('RegisteredHospital')
            .where("Licence", "==", this.props.location.state.data)
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                this.setState({ hospitals: data })
                console.log("here is data", data);
            });

        db.collection('User')
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                this.setState({ donor: data })
                console.log("here is data", data);
            });





    }


    onInputchange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }



    render() {
        const { hospitals } = this.state;
        const { donor } = this.state;
        var nme;

        return (
            <div className="containermain" >
                <div className="sidebar">
          <div className="menu">
            <ul>
              <li>
                <div className="menulist">
                  <Link
                    to={{
                      pathname:"/Hospitaldashboard",
                      state : {data : this.props.location.state.data}
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
                    to="/Hospitaldashboard"
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
                      pathname :"/AddEvent",
                      state : {data : this.props.location.state.data}
                  }}
                    style={{ textDecoration: "none" }}
                    className="link"
                  >
                    <img src="https://img.icons8.com/material-two-tone/24/000000/news.png" />

                    <h3>Post Event</h3>
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
                <div class="request-card-1">
                    <h3>Pending Applications</h3>
                    {hospitals.map(user => {
                        nme = user.Hospital;



                    })}
                    {donor.map(user1=> {

                        if (user1.Appointment_hospital == nme)
                            return (
                                <div key={user1.uid} className="list">
                                    <h5>{user1.FirstName}  {user1.LastName} {user1.Appointment_hospital}</h5>
                                    <div>
                                        <h6>Age : {user1.Age}</h6>
                                        <h6>Blood Group : {user1.Bloodgrp}</h6>
                                        <h6>Gender : {user1.Gender}</h6>
                                        <h6>Contact : {user1.Contact}</h6>
                                        <h6>City : {user1.City} </h6>
                                        <h6>Medical condition :{user1.MedicalCondition}</h6>
                                        <h6>Weight:{user1.Weight}</h6>
                                    </div>
                                </div>)
                    })}


                </div>

            </div>
        )



    }

}
export default PendingHospitalApp