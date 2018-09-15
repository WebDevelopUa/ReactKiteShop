import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import "./HomeComponent.css";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

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

            <div className="row">
                <div className="col-12">
                    <Breadcrumb>
                        <BreadcrumbItem active>Home</BreadcrumbItem>
                    </Breadcrumb>
                </div>
            </div>

            <div className="row align-items-lg-start">

                <div className="col-12 col-md m-1">
                    <RenderCard item={props.product}/>
                </div>

                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion}/>
                </div>

                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader}/>
                </div>

            </div>

        </div>
    )

}

export default Home;