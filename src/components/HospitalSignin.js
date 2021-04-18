import "../static/style.css";
// import { Link } from "react-router-dom";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import UserProvider, { UserContext } from "../providers/userprovider";
import firebase from "../firebase/firebase";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class HospitalRegister extends Component {
    constructor() {
        super();
        this.state = {
            Hlicence: '',
            Hpassword: '',
            users: [],
        };
        this.loginHospital = this.loginHospital.bind(this);
    }
    handleHlicenceChange(e) {
        this.setState({ Hlicence: e.target.value });
    }
    handleHpasswordChange(e) {
        this.setState({ Hpassword: e.target.value });
    }

    loginHospital = () => {

        console.log(this.state.Hlicence)
        console.log(" button pressed")
        if (this.state.Hlicence === '' && this.state.Hpassword === '') {
            console.log('Enter details to login!')
        }
        else {
            console.log(this.state.Hpassword)
            const db = firebase.firestore();
            db.collection('RegisteredHospital')
                .where("Licence", "==", this.state.Hlicence)
                .where("Password", "==", this.state.Hpassword)
                .get()
                .then(querySnapshot => {
                    const data = querySnapshot.docs.map(doc => doc.data());
                    this.setState({ users: data })
                    console.log("here is data", data);
                    if (data == "") {
                        window.alert("Login failed!")
                        this.props.history.push("/Hsignin");
                    }

                });
            this.props.history.push("/Hospitaldashboard");
        }
    };
    render() {

        return (
            <div className="container">
                <div className="layer" id="login">
                    <div className="loginArea" id="loginId">
                        <div className="vector" id="vector-login"></div>
                        <h3 className="loginText">Sign In</h3>
                        <div className="textArea">
                            <form>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Enter licence number"
                                        name="licence"
                                        size="35"
                                        required
                                        value={this.state.Hlicence}
                                        onChange={this.handleHlicenceChange.bind(this)}
                                    ></input>
                                </div>
                                <div>
                                    <input
                                        type="Password"
                                        placeholder="Enter Password"
                                        name="pwd"
                                        size="35"
                                        required
                                        value={this.state.Hpassword}
                                        onChange={this.handleHpasswordChange.bind(this)}
                                    ></input>


                                </div>


                                <div className="btn">
                                    <button type="submit" className="submitButton" onClick={this.loginHospital.bind(this)}>
                                        <b>LOGIN</b>
                                    </button>
                                </div>
                            </form>


                            <div className="createAccount">
                                <p>Don't have an account?&nbsp;&nbsp;</p>
                                <Link to="/HospitalRegister" style={{ fontWeight: "600" }}>
                                    Register Hospital here
              </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}