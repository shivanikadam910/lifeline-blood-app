import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import firebase from "./firebase/firebase";
import UserProvider from "./providers/userprovider";
import Login from "./components/login";
import Navbar from "./components/navbar";
import LoginPage from "./components/LoginPage";
import Register from "./components/Register";
import HomeScreen from "./components/HomeScreen";
import dashboard from "./components/dashboard";
import Verification from "./components/VerificationReq";
import Request from "./components/ReceiverRequest";
import Donorprofile from "./components/Donor_profile";
import ViewMyRequest from "./components/ViewMyRequest";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <UserProvider>
          <Navbar />
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/Signup" component={Register} />
          <Route exact path="/Login" component={LoginPage} />
          <Route exact path="/Home" component={HomeScreen} />
          <Route exact path="/dashboard" component={dashboard} />
          <Route exact path="/verificationReq" component={Verification} />
          <Route exact path="/receiverrequest" component={Request} />
          <Route exact path="/Donor_profile" component={Donorprofile} />
          <Route exact path="/ViewMyRequest" component={ViewMyRequest} />
          

        </UserProvider>
      </Router>
    );
  }
}

export default App;
