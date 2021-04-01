import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import firebase from "./firebase/firebase";
import Login from "./components/login";
import Navbar from "./components/navbar";



class App extends Component {
  render() {
    return (
      <Router>        
      <Navbar />
      <Route exact path='/' component={Login} />
      </Router>
      
    );
  }
}

export default App;