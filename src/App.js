import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import firebase from "./firebase/firebase";
import UserProvider from "./providers/userprovider";
import Login from "./components/login";
import Navbar from "./components/navbar";
import LoginPage from "./components/LoginPage";
import Register from "./components/Register";
import HomeScreen from "./components/HomeScreen";

class App extends Component {
  render() {
    return (
      <Router>
        <UserProvider>
          <Navbar />
          <Route exact path="/" component={Register} />
          <Route exact path="/Signup" component={Register} />
          <Route exact path="/Login" component={LoginPage} />
          <Route exact path="/Home" component={HomeScreen} />
        </UserProvider>
      </Router>
    );
  }
}

export default App;
