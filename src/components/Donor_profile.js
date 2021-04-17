import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../firebase/firebase";

import donateblood from "../images/Donating-Blood-1.svg";
import "../static/receiverrequest.css";


import smile from "../images/smiling-woman.png";
import donate from "../images/donateVector.png";

import data from '../Hospitals.json'
import Select from 'react-select';
class Donor_profile extends Component {


    constructor() {
        super();
        this.state = {
        };
        this.onInputchange = this.onInputchange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onInputchange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmitForm() {




        const db = firebase.firestore();

        const userRef = db.collection('User').add({
            FirstName: this.state.fname,
            LastName: this.state.lname,
            DonorType: this.state.dtype,
            Gender: this.state.gender,
            Height: this.state.height,
            Weight: this.state.weight,
            Age: this.state.age,
            RecentDonation: this.state.rct_don,
            BloodPre: this.state.bp,
            Diabetic: this.state.dib,
            BloodGrp: this.state.bgrp


        })
            .then(() => {
                console.log("Document successfully written!");
                window.alert("Profile Created successfully ")
                window.location = '/dashboard';
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
                window.alert(error.message);
            });


    }

    render() {
        const { items } = this.state;

        return (
            <div class="frame" >
                <div >
                    <form>
                        <label>
                            First Name :
                <input
                                name="fname"
                                type="text"
                                value={this.state.fname}
                                onChange={this.onInputchange}
                            />
                        </label>
                    </form>
                </div>
                <div>
                    <label>
                        Last Name :
                <input
                            name="lname"
                            type="text"
                            value={this.state.lname}
                            onChange={this.onInputchange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Blood Group :
                <input
                            name="bgrp"
                            type="text"
                            value={this.state.bgrp}
                            onChange={this.onInputchange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Donor Type :
                <input
                            name="dtype"
                            type="text"
                            value={this.state.dtype}
                            onChange={this.onInputchange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Gender :
                <input
                            name="gender"
                            type="text"
                            value={this.state.gender}
                            onChange={this.onInputchange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Age :
                <input
                            name="age"
                            type="number"
                            value={this.state.age}
                            onChange={this.onInputchange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Weight :
                <input
                            name="weight"
                            type="number" step="0.01"
                            value={this.state.weight}
                            onChange={this.onInputchange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Height:
                <input
                            name="height"
                            type="number" step="0.01"
                            value={this.state.height}
                            onChange={this.onInputchange}
                        />
                    </label>
                    <div>
                        <label>
                            Blood Pressure :
                <input name="bp" type="radio" id="bp_yes" value="True" onChange={this.onInputchange} />
                            <label for="yes">Yes</label>
                            <input type="radio" id="bp_no" name="bp" value="False" onChange={this.onInputchange} ></input>
                            <label for="no">No</label><br />
                        </label>
                    </div>
                    <div>
                        <label>
                            Diabetes :
                <input name="dib" type="radio" id="dib_yes" value="True" onChange={this.onInputchange} />
                            <label for="yes">Yes</label>
                            <input type="radio" id="dib_no" name="dib" value="False " onChange={this.onInputchange}></input>
                            <label for="no">No</label><br />
                        </label>
                    </div>
                    <div>
                        <label>
                            Recent Donation :
                <input name="rct_don" type="radio" id="rct_yes" value="True" onChange={this.onInputchange} />
                            <label for="yes">Yes</label>
                            <input type="radio" id="rct_no" name="rct_don" value="False" onChange={this.onInputchange}></input>
                            <label for="no">No</label><br />
                        </label>
                    </div>
                </div>
                <div>
                    <button onClick={this.onSubmitForm}>Submit</button>
                </div>
            </div>
        );
    }

}

export default Donor_profile;
