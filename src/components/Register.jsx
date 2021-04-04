import React, { Component } from 'react';
import firebase from "../firebase/firebase";
import "../static/style.css";
import { Link } from 'react-router-dom'
export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      isLoading:false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  registerUser = () => {
    console.log("register user button pressed")
    if (this.state.email === '' && this.state.password === '') {
      console.log('Enter details to signup!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
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
                    onChange={(val) => this.updateInputVal(val, 'displayName')}
                  ></input>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    size="30"
                    required
                    // value={this.state.email}
                    onChange={(val) => this.updateInputVal(val, 'email')}
                  ></input>
                </div>
                <div>
                  <input
                    type="Password"
                    placeholder="Enter Password"
                    name="pwd"
                    size="30"
                    // value={this.state.password}
                    onChange={(val) => this.updateInputVal(val, 'password')}
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
