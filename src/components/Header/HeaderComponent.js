// https://reactstrap.github.io/components/navbar/
// https://reactstrap.github.io/components/jumbotron/

import './HeaderComponent.css'
import React, {Component, Fragment} from "react";
import {Navbar, NavbarBrand, Jumbotron} from 'reactstrap';


class Header extends Component {
    render() {

        return (
            <Fragment>
                <span className="App-structure">Header Component</span>

                <Navbar className='Navigation-bar'>
                    <div className="container">
                        <NavbarBrand href="/">
                            <span> Kite shop</span>
                        </NavbarBrand>
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