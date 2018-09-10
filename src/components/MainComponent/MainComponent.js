import React, {Component, Fragment} from 'react';
import Header from "../Header/HeaderComponent";
import ProductsList from "../ProductsList/ProductsList";
// import {KITES} from "../../shared/ProductDetailsInfo";
import ProductDetail from "../ProductDetail/ProductDetail";
import RenderFooter from "../Footer/FooterComponent";
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from "../Home/HomeComponent";
import Contact from "../Contact/ContactComponent";

import {KITES} from "../../shared/kites";
import {COMMENTS} from "../../shared/comments";
import {LEADERS} from "../../shared/leaders";
import {PROMOTIONS} from "../../shared/promotions";

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: KITES,
            comments: COMMENTS,
            leaders: LEADERS,
            promotions: PROMOTIONS
        };
    }


    render() {

        // define functional components
        const HomePage = () => {
            return (
                <Home
                    product={this.state.products.filter((product) => product.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                    promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
                />
            );
        };

        // const List = () =>  <ProductsList products={this.state.products}/>}
        const List = () => {
            return (
                <ProductsList products={this.state.products}/>
            );
        };

        return (
            <Fragment>
                <span className="App-structure">Main Component</span>

                <Header/>

                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route path="/list" component={List}/>
                    <Route path="/contact" component={Contact}/>
                    <Redirect to="/home"/>
                </Switch>

                <RenderFooter/>

            </Fragment>
        )
    }
}

export default Main;