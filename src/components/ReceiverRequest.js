import React from "react";
import firebase from "../firebase/firebase";
import "../static/receiverrequest.css";
import data from '../Hospitals.json'
import Select from 'react-select';

class ReceiverRequest extends React.Component {

  constructor() {
    super();
    this.state = {
      BloodGrp: "",
      City: "",
      ContactDetails: "",
      FirstName: "",
      LastName: "",
      Post: "",
      Hospital:""
    };

    this.addUser = this.addUser.bind(this);
  }
 
  
  handleFirstNameChange(e) {
    this.setState({ FirstName: e.target.value });
  }
  handleLastNameChange(e) {
    this.setState({ LastName: e.target.value });
  }
  handlePostChange(e) {
    this.setState({ Post: e.target.value });
  }
  handleContactDetailsChange(e) {
    this.setState({ ContactDetails: e.target.value });
  }
  handleBloodGrpChange(e) {
    this.setState({ BloodGrp: e.target.value });
  }
  handleCityChange(e) {
    this.setState({ City: e.target.value });
  }
  handleHospitalChange(e){
    this.setState({Hospital : e.target.value})
   }

  addUser = e => {
    e.preventDefault();
    const db = firebase.firestore();
    if (this.state.FirstName === "") {
      window.alert("Enter you First Name")
    }
    else {
      if (this.state.LastName === "") {
        window.alert("Enter you Last Name")
      }
      else {
        if (this.state.BloodGrp === "") {
          window.alert("Enter you Blood Group")
        }
        else {
          if (this.state.City === "") {
            window.alert("Enter you City")
          }
          else {
            if (this.state.ContactDetails.length != 14) {
              window.alert("required 10 digits, match format!")
            }
            else {
              if (this.state.Post === "") {
                window.alert("Enter reason for requesting blood.")
              }
              else {
                const userRef = db.collection('Receiver').add({
                  BloodGrp: this.state.BloodGrp,
                  City: this.state.City,
                  ContactDetails: this.state.ContactDetails,
                  FirstName: this.state.FirstName,
                  LastName: this.state.LastName,
                  Post: this.state.Post
                });
                window.alert("Your request has beed successfully submitted!");
                this.props.history.push("/Donorlist");
                console.log("Your request has beed successfully submitted!");
              }
            }
          }
        }
      }
    }

  }
  render() {
    
    return (
      <div class="frame">
        <div class="rec-request">
          <form>
            <label for="firstname">
              <b>First Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter First Name"
              name="firstname"
              value={this.state.FirstName}
              onChange={this.handleFirstNameChange.bind(this)}
              required
            />
            <br />
            <label for="lastname">
              <b>Last Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter Last Name"
              name="lastname"
              value={this.state.LastName}
              onChange={this.handleLastNameChange.bind(this)}
              required
            />
            <br />
            <label for="bloodgroup">
              <b>Blood Group</b>
            </label>
            <input
              type="text"
              placeholder="Enter blood group"
              name="bloodgroup"
              value={this.state.BloodGrp}
              onChange={this.handleBloodGrpChange.bind(this)}
              required
            />
            <br />
            <label for="bloodgroup">
              <b>City</b>
            </label>
            <input
              type="text"
              placeholder="Enter city"
              name="city"
              value={this.state.City}
              onChange={this.handleCityChange.bind(this)}
              required
            />
            <br />
            <label for="contactno">
              <b>Contact Number</b>
            </label>
            <input
              type="tel"
              placeholder="+91-9120034561"
              name="contactno"
              value={this.state.ContactDetails}
              onChange={this.handleContactDetailsChange.bind(this)}
              required
            />
            <br />
            <label for="post">
              <b>Reason</b>
            </label>
            <input
              type="text"
              placeholder="Enter brief reason here"
              name="reason"
              value={this.state.Post}
              onChange={this.handlePostChange.bind(this)}
              required
            />
            <br />

            <label for="hospitals">Choose a Hospital:</label>
            <select id="sel" onchange={this.handleHospitalChange.bind(this.Hospital_Name) }>
              {data.map((e,key) => {
                if(e.District == this.state.City){
                return <option key={key} value={e.Hospital_Name}>{e.Hospital_Name}</option>
                }
              })}
            </select>
            
            <button class="cta-btn" onClick={this.addUser}>Make Request</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ReceiverRequest;
