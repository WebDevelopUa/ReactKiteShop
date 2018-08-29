import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import './NavigationBar.css';
// https://reactstrap.github.io/components/navbar/


class NavigationBar extends React.Component {


    render() {
        return (
            <Navbar className='Navigation-bar' dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">
                        <span> Kite shop</span>
                    </NavbarBrand>
                </div>
            </Navbar>
        )
    }
}

export default NavigationBar;