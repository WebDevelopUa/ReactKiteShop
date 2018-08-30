import React, {Component} from 'react';
import NavigationBar from "../NavigationBar/NavigationBar";
import ProductsList from "../ProductsList/ProductsList";
import {KITES} from "../../shared/ProductDetailsInfo";
import ProductDetail from "../ProductDetail/ProductDetail";

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: KITES,
            selectedProduct: null
        };
    }

    onProductSelect(kiteId) {
        this.setState({selectedProduct: kiteId})
    }

    render() {
        return (
            <div>
                <span className="App-structure">Main Component</span>

                <NavigationBar/>

                <ProductsList products={this.state.products} onClick={(kiteId) => this.onProductSelect(kiteId)} />

                <ProductDetail kite={this.state.products.filter((kite) => kite.id === this.state.selectedProduct)[0]} />

            </div>
        )
    }
}

export default Main;