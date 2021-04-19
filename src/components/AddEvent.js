import React, { Component } from "react";
import firebase, { storage } from "../firebase/firebase";

class AddEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: "",
            progress: 0,
            title: "",
            description: ""
        };
    }

    handleChange = e => {
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
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                this.setState({ progress });
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        this.setState({ url });
                    });
            }
        );
    };
    handlePost = e => {
        e.preventDefault();
        const db = firebase.firestore();
        if (this.state.title === "" && this.state.description === "") {
            window.alert("Enter details")
        } else {
            const userRef = db.collection("Events").add({
                Title: this.state.title,
                Description: this.state.description,
                Url: this.state.url,
                Licence: this.props.location.state.data
            });
            window.alert("Your event has beed successfully Post!");
            this.props.history.push({pathname :"/MyEvents",state:{data : this.props.location.state.data}});
        }
    }
    render() {
        return (
            <div >
                <br /><br /><br /><br /><br />
                <div>
                    <span>File</span>
                    <input type="file" onChange={this.handleChange} />
                </div>
                <br />
                <button onClick={this.handleUpload}>
                    Upload
                </button>
                <img src={this.state.url || "https://via.placeholder.com/400x300"}
                    alt="Uploaded Images"
                    height="300"
                    width="400" />
                <br />
                <progress value={this.state.progress} max="100" className="progress" />
                <br />
                <div>

                    <label> Title </label>
                    <input
                        type="text"
                        placeholder="ex. Blood Donation Camp"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleTitleChange.bind(this)}
                        required
                    />
                    <br />
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
                <button onClick={this.handlePost}>
                    Post
                </button>
            </div>
        );
    }
}

export default AddEvent;