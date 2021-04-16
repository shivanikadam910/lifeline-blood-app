import React from "react";  

import firebase from "../firebase/firebase";
import { Link } from "react-router-dom";
import donateblood from "../images/Donating-Blood-1.svg";
import "../static/receiverrequest.css";


import smile from "../images/smiling-woman.png";
import donate from "../images/donateVector.png";

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
      Hospital:"",
      users: []
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
  componentDidMount() {
    const db = firebase.firestore();
    db.collection("User")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data); 
        this.setState({ users: data });
      });
  }
  render() {
    const { users } = this.state;
    return (
      <div className="containermain" >
      <div className="sidebar">
        
        <div className="menu">
          <ul>
            <li>
              <div className="menulist">
                <img src="https://img.icons8.com/fluent-systems-regular/48/000000/dashboard-layout.png" />
                <h3>Dashboard</h3>
              </div>

              <div className="menulist">
              <Link to="/receiverrequest" style={{ textDecoration : "none"  }} className="link">
                <img src="https://img.icons8.com/material-outlined/24/000000/invite.png" />
                
                <h3>Request Blood</h3>
              </Link>
              </div>

              <div className="menulist">
              <Link to="/receiverrequest" style={{ textDecoration : "none"  }} className="link">
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
          <img src={donate} alt="why donate"/>
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
        <div class="request-card">
          <div class="request-card-1">
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

            <label for="hospitals"><b>Choose a Hospital:</b></label>
            <select id="sel" onchange={this.handleHospitalChange.bind(this.Hospital_Name) }>
              {data.map((e,key) => {
                if(e.District == this.state.City){
                return <option key={key} value={e.Hospital_Name}>{e.Hospital_Name}</option>
                }
              })}
            </select>
            
            <button class="cta-btn" onClick={this.addUser} class="buttonform"><h3>Make Request</h3></button>
            
          </form>
        </div>
        </div>
        <div class="request-card-1">
          {users.map(user => (
          <div key={user.uid} >
            <h5>Name : {user.FirstName}  {user.LastName}</h5>
            <div>                  
                  <h6>Age : {user.Age}</h6>
                  <h6>Blood Group : {user.BloodGrp}</h6>
                  <h6>Gender : {user.Gender}</h6>
                  <h6>Contact : {user.Contact}</h6>
                  <h6>City : {user.City} </h6>
            </div>
            <hr />
          </div>
        ))}       
        </div>
        </div>

        <div className="card-grid">
          <div className="card1">
            <div>My Donations</div>
            <div className="total">Total</div>
            <div className="num">0</div>
          </div>
          <div className="card2">
            <div>Received</div>
            <div className="total">Total</div>
            <div className="num">0</div>
          </div>
          <div className="card3">
            <div>Request Pending</div>
            <div className="total">Total</div>
            <div className="num">0</div>
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
        
      </div>
       
    </div>
    );
  }
}

export default ReceiverRequest;
