/* component based design */
// #1 import React
import React from 'react';
import './ProductsList.css'

// https://reactstrap.github.io/components/card/
import {Card, CardImg, CardText, CardImgOverlay, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

// #2 create component (move all state content to separate file in shared folder)
class ProductsList extends React.Component {

    constructor(props) {
        super(props);
    }


    // embed a javascript expression inside your JSX
    render() {

        // pass a function to map. The map() method creates a new array with the results of calling a provided function on every element in the calling array.
        const products = this.props.products.map((kite) => {

            return (
                <div key={kite.id} className="col-6 col-md-2">
                    <Card key={kite.id} onClick={() => this.props.onClick(kite.id)}>
                        <CardImg top width="100%" src={kite.image} alt={kite.name}/>
                        <CardBody>
                            <CardImgOverlay>
                                <CardTitle>{kite.name}</CardTitle>
                                <CardSubtitle>{kite.price}</CardSubtitle>
                                <br/>
                                <Button>Details</Button>
                            </CardImgOverlay>
                        </CardBody>
                    </Card>
                </div>
            );

        });

        return (
            <div className="Products-list">
                <div className="container">
                    <div className="row">
                        <span className="App-structure">Product List</span>
                        {products}
                    </div>
                </div>
            </div>
        );


    };


}

// #3 export component
export default ProductsList;

// #4 use <ProductsList/> in App.js after:
// import ProductsList from "./components/ProductsList";