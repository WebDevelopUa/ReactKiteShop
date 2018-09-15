// https://reactstrap.github.io/components/navbar/
// https://reactstrap.github.io/components/jumbotron/

import './HeaderComponent.css'
import React, {Component, Fragment} from "react";
import {Navbar, NavbarBrand, Jumbotron} from 'reactstrap';
import {NavLink} from "react-router-dom";
import {Nav, Collapse, NavItem} from 'reactstrap';
import {NavbarToggler} from 'reactstrap';


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {isNavOpen: false};
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({isNavOpen: !this.state.isNavOpen});
    }

    render() {

        return (
            <Fragment>
                <span className="App-structure">Header Component</span>

                <Navbar className='Navigation-bar' expand="md">
                    <div className="container">

                        <NavbarToggler onClick={this.toggleNav}/>

                        <NavbarBrand href="/home">
                            <span> <img src="/img/kite-logo-yellow.png" alt="Kite shop" height="30" width="41"/></span>
                            <span>&emsp;</span>
                            <span>Kite shop</span>
                        </NavbarBrand>

                        <Collapse navbar isOpen={this.state.isNavOpen}>
                            <Nav navbar>

                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"/>
                                        <span>&nbsp; Home</span>
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/about">
                                        <span className="fa fa-info fa-lg"/>
                                        <span>&nbsp; About</span>
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/list">
                                        <span className="fa fa-list fa-lg"/>
                                        <span>&nbsp; List</span>
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/contact">
                                        <span className="fa fa-address-card fa-lg"/>
                                        <span>&nbsp; Contact</span>
                                    </NavLink>
                                </NavItem>


                            </Nav>
                        </Collapse>


                    </div>
                </Navbar>

                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h4>KiteBoarding Shop | KiteSurf | Kite Shop Online</h4>
                                <p>We carry everything you need for kiteboarding: kites, boards, harnesses, bags,
                                    leashes, pumps, wetsuits, wind meters</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

            </Fragment>
        );

    }
}

export default Header;