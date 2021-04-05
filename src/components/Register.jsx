import React, { Component } from 'react';
import firebase from "../firebase/firebase";
import "../static/style.css";
import { Link } from 'react-router-dom'
export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      displayName:'',
      email: '',
      password: '',
  };
  }

  // updateInputVal = (val, prop) => {
  //   const state = this.state;
  //   state[prop] = val;
  //   this.setState(state);
  // }
  handleEmailChange(e) {
    this.setState({email: e.target.value});
}
handlePasswordChange(e) {
    this.setState({password: e.target.value});
}
handledisplaynameChange(e){
  this.setState({displayName: e.target.value});
}

  registerUser = () => {
    console.log("register user button pressed")
    if (this.state.email === '' && this.state.password === '') {
         console.log('Enter details to signup!')
    } else {
      console.log(this.state.email)
      this.setState({
        isLoading: true,
      })
     
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
    firebase 
    .then((res) => {
      res.user.updateProfile({
        displayName: this.state.displayName
      })
      console.log('User registered successfully!')
      this.setState({
        isLoading: false,
        displayName: '',
        email: '',
        password: ''
      })
      // this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
    }
  }
  render() {
    return (
      <div className="container">
        <div className="layer" id="signup">
          <div className="loginArea register" id="signupId">
            <div className="vector"></div>
            <h3 className="loginText">Sign Up</h3>
            <div className="textArea">
              <form>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    name="username"
                    size="30"
                    required
                    value={this.state.displayName}
                    onChange={this.handledisplaynameChange.bind(this)}
                  ></input>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    size="30"
                    required
                    value={this.state.email} onChange={this.handleEmailChange.bind(this)}
                  ></input>
                </div>
                <div>
                  <input
                    type="Password"
                    placeholder="Enter Password"
                    name="pwd"
                    size="30"
                    value={this.state.password} onChange={this.handlePasswordChange.bind(this)}
                    maxLength={15}
                  
                  />
                </div>
                <div className="btn">
                  <button type="submit" className="submitButton" onClick={this.registerUser}>
                    <b>SIGN UP</b>
                  </button>
                </div>
              </form>
              <div className="signin">
                <Link to="/Login" >Already have an Account? Sign In</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

      {/* <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
      <label for="dispname">Name</label>
        <input type="disname" name="disname" placeholder="Displayname" />
        <label for="email">Email</label>
        <input type="email" name="email" placeholder="Email" />
        <label for="password">Password</label>
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </form> */}
    

