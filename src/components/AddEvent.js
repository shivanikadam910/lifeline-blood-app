import React, { Component } from "react";
import firebase, { storage } from "../firebase/firebase";
import "../static/main.css";
import "../static/AddEvents.css";
import { Link } from "react-router-dom";
import donate from "../images/donateVector.png";

class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      progress: 0,
      title: "",
      description: "",
    };
  }

  handleChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };
  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }
  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  handleUpload = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            this.setState({ url });
          });
      }
    );
  };
  handlePost = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    if (this.state.title === "" && this.state.description === "") {
      window.alert("Enter details");
    } else {
      const userRef = db.collection("Events").add({
        Title: this.state.title,
        Description: this.state.description,
        Url: this.state.url,
        Licence: this.props.location.state.data,
      });
      window.alert("Your event has beed successfully Post!");
      this.props.history.push({
        pathname: "/MyEvents",
        state: { data: this.props.location.state.data },
      });
    }
  };
  render() {
    return (
      <div>
        <div className="sidebar">
          <div className="menu">
            <ul>
              <li>
                <div className="menulist">
                  <Link
                    to={{
                      pathname : "/Hospitaldashboard",
                      state : { data : this.props.location.state.data}
                    }}                    
                    style={{ textDecoration: "none" }}
                    className="link"
                  >
                    <img src="https://img.icons8.com/fluent-systems-regular/48/000000/dashboard-layout.png" />
                    <h3>Dashboard</h3>
                  </Link>
                </div>

                <div className="menulist">
                  <Link
                    to="/Hospitaldashboard"
                    style={{ textDecoration: "none" }}
                    className="link"
                  >
                    <img src="https://img.icons8.com/windows/32/000000/approve-and-update.png" />

                    <h3>Update Applications</h3>
                  </Link>
                </div>

                <div className="menulist">
                  <Link
                    to={{
                      pathname: "/AddEvent",
                      className: "link",
                      state: { data: this.props.location.state.data },
                    }}
                    style={{ textDecoration: "none" }}
                    className="link"
                  >
                    <img src="https://img.icons8.com/material-two-tone/24/000000/news.png" />

                    <h3>Post Event</h3>
                  </Link>
                </div>

                <div className="menulist">
                  <Link
                    to="/Hospitaldashboard"
                    style={{ textDecoration: "none" }}
                    className="link"
                  >
                    <img src="https://img.icons8.com/material-rounded/24/000000/calendar-minus.png" />
                    <h3>Appointments</h3>
                  </Link>
                </div>

                <div className="emergency">
                  <img src="https://img.icons8.com/material-outlined/24/000000/error--v1.png" />
                  <h3>Emergency</h3>
                </div>
              </li>
            </ul>
          </div>
          <div className="why">
            <h3>
              <Link to="/WhyDonateBlood" style={{ fontWeight: "600" }}>
                Why Donate Blood?
              </Link>
            </h3>
            <div className="donateVector">
              <Link to="/WhyDonateBlood">
                <img src={donate} alt="why donate" />
              </Link>
            </div>
          </div>
        </div>

        <div className="containerevent">
          <div className="eventheader">
            <div className="add">
              <Link to={{
                pathname :"/AddEvent",
                state : {data : this.props.location.state.data}
              }}>
                <h4>Add Event</h4>
              </Link>
            </div>
            <div className="my">
              <Link to=
              {{pathname : "/MyEvents",
                state : {data :this .props.location.state.data}
            }}>
                <h4>My Events</h4>
              </Link>
            </div>
          </div>
          <div>
            <span>File&nbsp;&nbsp;</span>
            <input type="file" onChange={this.handleChange} />
          </div>
          <br />

          <div className="imageUpload">
            <img
              src={this.state.url || "https://via.placeholder.com/400x300"}
              alt="Uploaded Images"
              height="300"
              width="400"
            />
            <button className="upload" onClick={this.handleUpload}>
              Upload
            </button>
          </div>
          <br />
          <progress
            value={this.state.progress}
            max="100"
            className="progress"
          />
          <br />
          <div className="imageinfo">
            <label> Title </label>
            <input
              type="text"
              placeholder="ex. Blood Donation Camp"
              name="title"
              value={this.state.title}
              onChange={this.handleTitleChange.bind(this)}
              required
            />
            <label> Description </label>
            <input
              type="text"
              placeholder="ex. Time, details etc."
              name="description"
              value={this.state.description}
              onChange={this.handleDescriptionChange.bind(this)}
              required
            />
          </div>
          <button className="submit" onClick={this.handlePost}>
            Post
          </button>
        </div>
      </div>
    );
  }
}

export default AddEvent;
