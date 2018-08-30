import React, {Component} from 'react';
import NavigationBar from "../NavigationBar/NavigationBar";
import ProductsList from "../ProductsList/ProductsList";
import {KITES} from "../../shared/ProductDetails";

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: KITES
        };
    }


    render() {
        return (
            <div>
                <span className="App-structure">Main Component</span>

                <NavigationBar/>

                <ProductsList products={this.state.products}/>
            </div>
        )
    }
}

export default Main;