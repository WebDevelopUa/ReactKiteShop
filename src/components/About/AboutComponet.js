import "./AboutComponet.css";
import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function About(props) {
    return (
        <div className="container">

            <div className="row">
                <div className="col-12">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>About</BreadcrumbItem>
                    </Breadcrumb>
                </div>
            </div>

            <div className="row row-content">
                <div className="col-12">
                    <h3>About</h3>
                </div>
            </div>

        </div>

    );

}

export default About;