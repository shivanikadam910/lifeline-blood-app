import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import CardGroup from 'react-bootstrap/CardGroup'

import '../static/home.css'
import data from '../Blood_news_json'
import Request from "./ReceiverRequest";
import smile from "../images/smiling-woman.png";
import donate from "../images/donateVector.png";
import { Link } from "react-router-dom";
const newdata = data.map((data) => {
    return (
        <Card key={data.post_id} style={{ background: '#f5f5f5' }}>
            <Card.Body>
                <Card.Title>{data.post_title}</Card.Title>
                <Card.Text>
                      -{data.post_author}
                </Card.Text>

                <a className="btn-primary"
                    href={data.post_url}
                    target="_blank"
                    rel=" noopener noreferrer"
                >
                    Go to link
          </a>
            </Card.Body>
        </Card>

    )
}
)
export default class Main extends Component {
    render() {
        return (
            <div className="containermain" >
      <div className="sidebar">
        
        <div className="menu">
          <ul>
            <li>
              <div className="menulist">
                <Link to = "/dashboard"  style={{ textDecoration : "none"  }} className="link">
                <img src="https://img.icons8.com/fluent-systems-regular/48/000000/dashboard-layout.png" />
                <h3>Dashboard</h3>
                </Link>
              </div>

              <div className="menulist">
              <Link to="/receiverrequest" style={{ textDecoration : "none"  }} className="link">
              <img src="https://img.icons8.com/material-outlined/24/000000/invite.png" />
               <h3>Request Blood</h3>
              </Link>            
              </div>

              <div className="menulist">
              <Link to="/receiverrequest" style={{ textDecoration : "none"  }} className="link">
                <img src="https://img.icons8.com/fluent-systems-regular/48/000000/drop-of-blood.png" />
                <h3>Donate Blood</h3>
              </Link>
              </div>

              <div className="menulist">
                <img src="https://img.icons8.com/material/24/000000/hospital-2.png" />
                <h3>Hospitals</h3>
              </div>

              <div className="emergency">
                <img src="https://img.icons8.com/material-outlined/24/000000/error--v1.png" />
                <h3>Emergency</h3>
              </div>
            </li>
          </ul>
        </div>
        <div className="why">
          <h3>Why Donate Blood?</h3>
          
          <div className="donateVector">
          <img src={donate} alt="why donate"/>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="banner">
            <div class="banner1">
              <h1>
                  Donate Blood
                  <br />
                  Save lives!
                </h1>
                <h3>Donate Now &nbsp; &gt;</h3>
            </div>
            <div class="banner2">
              <img src={smile} alt="Smiling Woman" />
            </div>
        </div>
        
        
          <div className="nearby">Latest News</div>
          <CardColumns className=" m-3 p-3 owncard "> {newdata}  </CardColumns>
      </div>
       
    </div>
            

        )
    }
}