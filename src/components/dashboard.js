import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import '../static/dashboard.css'
import data from '../Blood_news_json'


const newdata = data.map((data) => {
    return (
        <Card key={data.post_id}>
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
            <CardColumns className=" m-3 p-3 owncard ">  {newdata}  </CardColumns>

        )
    }
}