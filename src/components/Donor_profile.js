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
            Medic_condition: "", bloodgrp: "", selectValue: "",
            users: [],


            onInputchange(event) {
                this.setState({
                    [event.target.name]: event.target.value

                });

            }
        };
        this.onInputchange = this.onInputchange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);

    }
    componentDidMount() {


        console.log(auth.currentUser.email)
        const db = firebase.firestore();
        db.collection("RegisteredHospital")

            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                
                this.setState({ users: data });
            });

       
    }





    onInputchange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }




    onSubmitForm() {


        const db = firebase.firestore();
        db.collection("RegisteredHospital")

            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                console.log("here is data", data);
                this.setState({ users: data });
            });

        db.collection("User")
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                console.log("here is data", data);
                this.setState({ donors: data });
            });

        if (this.state.age > 65 || this.state.age < 18) {

            window.alert("Sorry ,You cannot donate blood at this age");
            window.location = "/dashboard"

        }
        else {
            if (this.state.weight < 50) {
                window.alert("You are underweight to donate blood :(");
                window.location = "/dashboard";
            }
            else {
                if (this.state.Medic_condition != "None") {
                    window.alert("Sorry you cannot donate blood with this medical condition");
                    window.location = "/dashboard";
                }
                else {
                    if (this.state.rct_don === "True") {
                        window.alert("Sorry you cannot donate blood , as you have donated recently");
                        window.location = "/dashboard";

                    } else {

                        const db = firebase.firestore();


                        const userRef = db.collection('User').add({
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
                            MedicalCondition: this.state.Medic_condition,
                            City: this.state.city,
                            Contact: this.state.contact,
                            Email: auth.currentUser.email,
                            Appointment_hospital: this.state.selectValue


                        })
                            .then(() => {
                                console.log("Document successfully written!");
                                console.log(this.state.special_med_con);
                                alert("Profile Created successfully ")
                                this.props.history.push("/ViewRecievers");

                            })
                            .catch((error) => {
                                console.error("Error writing document: ", error);
                                alert(error.message);
                            });


                    }

                }

            }
        }


    }


    render() {
        const { items } = this.state;
        const { users } = this.state;



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

                    <div class="request-card" >
                        <div class="request-card-1">
                            <div class="rec-request">
                            <form>
                                <h3>Medical Profile</h3>
                                <label for="firstname">
                                    <b>First Name</b>
                                </label>             
                                <input
                                    name="fname"
                                    placeholder="Enter First Name"
                                    type="text"
                                    value={this.state.fname}
                                    onChange={this.onInputchange}
                                    required
                                />
                                <br />
                                    <label for="lastname">
                                        <b>Last Name</b>
                                        </label>
                                    <input
                                            name="lname"
                                            type="text"
                                            placeholder="Enter Last Name"
                                            value={this.state.lname}
                                            onChange={this.onInputchange}
                                            required
                                        />
                                    
                                
                                <br />
                                    <label for="Bloodgrp"><b>Blood Group</b></label>


                                    <select className="drpdwn" name="bloodgrp" id="bloodgrp" value={this.state.bloodgrp} onChange={(e) => this.setState({ bloodgrp: e.target.value })}>
                                        <option selected > -- select an option -- </option>
                                        <option value="O+" >O+</option>
                                        <option value="O-" >O-</option>
                                        <option value="A+" >A+</option>
                                        <option value="A-" >A-</option>
                                        <option value="B+" >B+</option>
                                        <option value="B-" >B-</option>
                                        <option value="AB+" >AB+</option>
                                        <option value="AB-" >AB-</option>

                                    </select>

                                <br />
                                    <label >
                                        <b>Gender </b>
                                        </label>
                                        <input
                                            name="gender"
                                            placeholder="Enter gender"
                                            type="text"
                                            value={this.state.gender}
                                            onChange={this.onInputchange}
                                        />
                                    
                                    <br />
                                    <label>
                                        <b>Age </b>
                                    </label>
                                    <input
                                            name="age"
                                            type="number"
                                            placeholder="enter your age"
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
                                            placeholder="Enter city"
                                            value={this.state.city}
                                            onChange={this.onInputchange}
                                            required
                                        />
                                    <br />
                                
                                    <label for="contactno">
                                        <b>Contact Number</b>
                                    </label>
                                    <input
                                            name="contact"
                                            placeholder="+91-9120034561"
                                            type="tel"
                                            value={this.state.contact}
                                            onChange={this.onInputchange}
                                            required
                                        />
                                    <br />
                                
                                    <label>
                                       <b> Weight </b>
                                        </label>
                                    <input
                                            name="weight"
                                            placeholder="Enter your weight"
                                            type="number" step="0.01"
                                            value={this.state.weight}
                                            onChange={this.onInputchange}
                                            required
                                        />
                                    <br />
                                
                                
                                    <label>
                                        <b>Height</b>
                                    </label>
                                    <input
                                            name="height"
                                            placeholder="Enter your height"
                                            type="number" step="0.01"
                                            value={this.state.height}
                                            onChange={this.onInputchange}
                                            required
                                        />
                                    <br />

                                    <label for="condition">
                                        <b>Do you have any of these medical Conditions</b>
                                    </label>


                                    <select class="drpdwn" name="special_med_con" id="special_med_con" value={this.state.Medic_condition} onChange={(e) => this.setState({ Medic_condition: e.target.value })}>
                                        <option selected > -- select an option -- </option>
                                        <option value="Cardiac Arrest" >Cardiac Arrest</option>
                                        <option value="Severe lung disease" >Severe lung disease</option>
                                        <option value="Hepatitis B" >Hepatitis B</option>
                                        <option value="Hepatitis C" >Hepatitis C</option>
                                        <option value="Cancer" >Cancer</option>
                                        <option value="HIV" >HIV</option>
                                        <option value="Chronic Alchoholism" >Chronic Alchoholism</option>
                                        <option value="None" >None of the above</option>

                                    </select>
                                    <br />
                                    
                                    <label >
                                        <b>Have you donated blood in past 112 days</b>
                                        </label>
                                        
                                        
                                    
                                    <label for="yes">
                                    <input 
                                        
                                        name="rct_don" 
                                        placeholder="Yes/No"
                                        type="radio" 
                                        id="rct_yes" 
                                        value="True" 
                                        onChange={this.onInputchange} 
                                        style={{ margin:"20px"}}
                                    
                                    />
                                       <b>Yes</b>
                                    </label>
                                    
                                    
                                    <label for="no" >
                                    <input type="radio" id="rct_no" name="rct_don" value="False" onChange={this.onInputchange}></input>
                                        <b>No</b></label>
                                    
                                    <br />
                                    
                                
                                <label for="hospitals"><b>Choose a Hospital</b></label>
                                <select className="drpdwn2" id="select" value={this.state.selectValue} onChange={(e1) => this.setState({ selectValue: e1.target.value })} >
                                    <option selected > -- select an option -- </option>
                                    {users.map((e, key) => {
                                        if (this.state.city == e.City) {
                                            return (<option key={key} value={e.Hospital}>{e.Hospital}</option>)
                                        }
                                    })}
                                </select>

                                <button class="cta-btn" onClick={this.onSubmitForm} class="buttonform"><h4>Submit</h4></button>
                            </form>
                            
                                
                            
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    }

}

export default Donor_profile;

