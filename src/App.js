import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import firebase from "./firebase/firebase";
import UserProvider from "./providers/userprovider";
import Navbar from "./components/navbar";
import Navbar_Home from "./components/navbar_sout";
import LoginPage from "./components/LoginPage";
import Register from "./components/Register";
import HomeScreen from "./components/HomeScreen";
import dashboard from "./components/dashboard";
import Verification from "./components/VerificationReq";
import Request from "./components/ReceiverRequest";
import Donorprofile from "./components/Donor_profile";
import ViewMyRequest from "./components/ViewMyRequest";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact_us from "./components/Contact_us";
import About_us from "./components/About_us";
import WhyDonateBlood from "./components/WhyDonateBlood";
import View_reciever from "./components/ViewRecievers";
import HospitalRegister from "./components/HospitalRegister";
import HospitalSignin from "./components/HospitalSignin";
import ReceivedBlood from "./components/ReceivedBlood";
import Hospitaldashboard from "./components/Hospitaldashboard";
import PendingHospitalrequ from "./components/PendingHospitalApp";
import viewapplication from "./components/ViewApplications";
import Addevent from "./components/AddEvent";
import MyEvents from "./components/MyEvents";
import TrackApplication from "./components/TrackApplication";
import BookSlot from "./components/BookSlot";
import Appointments from "./components/Appointments";
import SuccessfulDonations from "./components/Successfuldonations";
import WhydonatebloodHop from "./components/WhydonatebloodHosp";
import About_us_hp from "./components/About_us_hosp";
import Contact_us_hp from "./components/Contact_us_hosp"

const RouteWithNavbar = ({exact, path, component:Component}) => {
  return(
    <div>
    <Navbar/>
    <Route exact={exact} path={path} component={Component} />
    </div>
  );
}

const Route1 = ({exact, path, component:Component}) => {
  return(
    <div>
    <Navbar_Home/>
    <Route exact={exact} path={path} component={Component} />
    </div>
  );
}



class App extends Component {
  
  render() {
    return (
      <Router>
        <UserProvider>
          <Switch>
          <RouteWithNavbar exact path="/" component={HomeScreen} />
          <RouteWithNavbar exact path="/Signup" component={Register} />
          <RouteWithNavbar exact path="/Login" component={LoginPage} />
          <RouteWithNavbar exact path="/Home" component={HomeScreen} />
          <RouteWithNavbar exact path="/Hospitalregister" component={HospitalRegister} />
          <RouteWithNavbar exact path="/About" component={About_us} />
          <RouteWithNavbar exact path="/Contact" component={Contact_us} />
          <RouteWithNavbar exact path="/WhyDonateBlood" component={WhyDonateBlood} />

          <Route1 exact path="/dashboard" component={dashboard} />
          <Route1 exact path="/verificationReq" component={Verification} />
          <Route1 exact path="/receiverrequest" component={Request} />
          <Route1 exact path="/Donor_profile" component={Donorprofile} />
          <Route1 exact path="/ViewMyRequest" component={ViewMyRequest} />
          <Route1 exact path="/ViewRecievers" component={View_reciever} />
          <Route1 exact path="/Hsignin" component={HospitalSignin} />
          <Route1 exact path="/ReceivedBlood" component={ReceivedBlood} />
          <Route1 exact path="/TrackApplication" component={TrackApplication} />
          <Route1 exact path="/BookSlot" component={BookSlot} />
          <Route1 exact path="/Appointments" component={Appointments} />
          <Route1 exact path="/About_us_hosp" component={About_us_hp} />
          <Route1 exact path="/Contact_us_hosp" component={Contact_us_hp} />
          <Route1 exact path="/WhyDonateBloodhp" component={WhydonatebloodHop} />

          <Route1
            exact
            path="/Hospitaldashboard"
            component={Hospitaldashboard}
          />
          <Route1
            exact
            path="/PendingHospitalApp"
            component={PendingHospitalrequ}
          />
          <Route1 exact path="/AddEvent" component={Addevent} />
          <Route1 exact path="/MyEvents" component={MyEvents} />
          <Route1 exact path="/ViewApplication" component={viewapplication} />
          <Route1 exact path="/SuccessfulDonations" component={SuccessfulDonations} />
          </Switch>  
        </UserProvider>
      </Router>
    );
  }
}

export default App;
