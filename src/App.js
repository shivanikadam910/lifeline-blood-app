import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import firebase from "./firebase/firebase";
import Login from "./components/login";
import Navbar from "./components/navbar";
import LoginPage from "./components/LoginPage";
import Register from "./components/Register";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Route exact path="/" component={Register} />
      </Router>
    );
  }
}

export default App;
