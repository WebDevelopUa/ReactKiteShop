import React, {Component} from 'react';


import './App.css';
import ProductsList from "./components/ProductsList/ProductsList";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import {KITES} from "./shared/ProductDetails";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: KITES
        };
    }

    render() {
        return (

            <div>

                <NavigationBar/>

                <div className="container">

                    <div className="row">
                        <div className="col-md-12">
                            <ProductsList products={this.state.products}/>
                        </div>
                    </div>

                </div>


            </div>
        );
    }
}

export default App;
