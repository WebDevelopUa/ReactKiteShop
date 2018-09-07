import React, {Component, Fragment}  from 'react';
import Header from "../Header/HeaderComponent";
import ProductsList from "../ProductsList/ProductsList";
import {KITES} from "../../shared/ProductDetailsInfo";
import ProductDetail from "../ProductDetail/ProductDetail";
import Footer from '../Footer/FooterComponent';

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
            <Fragment>
                <span className="App-structure">Main Component</span>

                <Header/>

                <ProductsList products={this.state.products} onClick={(kiteId) => this.onProductSelect(kiteId)}/>

                <ProductDetail kite={this.state.products.filter((kite) => kite.id === this.state.selectedProduct)[0]}/>

                <Footer/>

            </Fragment>
        )
    }
}

export default Main;