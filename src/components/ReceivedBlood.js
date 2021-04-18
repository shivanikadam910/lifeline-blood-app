import React from "react";

import firebase, { auth } from "../firebase/firebase";
import { Link } from "react-router-dom";
import donateblood from "../images/Donating-Blood-1.svg";
import "../static/receiverrequest.css";


import smile from "../images/smiling-woman.png";
import donate from "../images/donateVector.png";

import data from '../Hospitals.json'
import Select from 'react-select';

class ViewMyRequest extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
        };
    }
    componentDidMount() {
        const db = firebase.firestore();
        db.collection("Receiver")
            .where("Email", "==", auth.currentUser.email)
            .where("ApplicationStatus","==",true)
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                console.log("here is data", data);
                this.setState({ users: data });
            });
    }


    render() {
        const { users } = this.state;
        const { donors } = this.state;
        return (
            <div className="containermain" >
                <div className="sidebar">

                    <div className="menu">
                        <ul>
                            <li>
                                <div className="menulist">
                                <Link to="/dashboard" style={{ textDecoration: "none" }} className="link">
                                    <img src="https://img.icons8.com/fluent-systems-regular/48/000000/dashboard-layout.png" />
                                    <h3>Dashboard</h3>
                                </Link>
                                </div>

                                <div className="menulist">
                                    <Link to="/receiverrequest" style={{ textDecoration: "none" }} className="link">
                                        <img src="https://img.icons8.com/material-outlined/24/000000/invite.png" />

                                        <h3>Request Blood</h3>
                                    </Link>
                                </div>

                                <div className="menulist">
                                    <Link to="/receiverrequest" style={{ textDecoration: "none" }} className="link">
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
                        <h3>Why Donate Blood?</h3>

                        <div className="donateVector">
                            <img src={donate} alt="why donate" />
                        </div>
                    </div>
                </div>
                <div className="container2">
                <div className="banner">
            
            <img src={donateblood} alt="some error occured" />              
          
        </div>
                    <div class="request-card">
                        <div class="request-card-1">
                            <h3 > Received Blood Requests</h3>
                            {users.map(user => (
                                <div key={user.uid} class="list">
                                    <h5> {user.FirstName}  {user.LastName}</h5>
                                    <div>
                                        <h6>{user.Age}</h6>
                                        <h6>Blood Group : {user.BloodGrp}</h6>
                                        <h6>Reason : {user.Post}</h6>
                                        <h6>Contact : {user.ContactDetails}</h6>
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