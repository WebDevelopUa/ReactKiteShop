import "./ContactComponent.css";
import React from 'react';

function Contact(props) {

    return (
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                    <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                    <h5>Our Address</h5>
                    <address>
                        Kiev City<br/>
                        Ukraine<br/>
                        <i className="fa fa-phone"/>: +38044 777 7777<br/>
                        <i className="fa fa-fax"/>: +38067 777 7777<br/>
                        <i className="fa fa-envelope"/>: <a href="mailto:kiteshop@gmail.com">kiteshop@gmail.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+380677777777"><i
                            className="fa fa-phone"/> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"/> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:kiteshop@gmail.com">
                            <i className="fa fa-envelope-o"/> Email</a>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Contact;