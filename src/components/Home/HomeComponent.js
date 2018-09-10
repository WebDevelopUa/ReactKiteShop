import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import "./HomeComponent.css";

function RenderCard({item}) {

    return (
        <Card>
            <CardImg src={item.image} alt={item.name}/>
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );

}

function Home(props) {

    console.log('Home functional component invoked');

    return (
        <div className="container">
            <h1>Home</h1>

            <div className="row align-items-lg-start">

                <div className="col-12 col-md m-1">
                    <RenderCard item={props.product}/>
                </div>


                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader}/>
                </div>

            </div>

        </div>
    )

}

export default Home;