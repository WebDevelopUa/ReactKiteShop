/* component based design */
// #1 import React
import React from 'react';
import './ProductsList.css'

// https://reactstrap.github.io/components/media/
// import {Media} from 'reactstrap';
// https://reactstrap.github.io/components/card/
import {Card, CardImg, CardText, CardImgOverlay, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

// #2 create component (move all state content to separate file in shared folder)
class ProductsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedProduct: null
        }

    }

    onProductSelect(kite) {
        this.setState({selectedProduct: kite})
    }

    renderProduct(kite) {
        if (kite != null)
            return (
                <Card>
                    <CardImg top width="100%" src={kite.image} alt={kite.name}/>
                    <CardBody>
                        <CardTitle>{kite.name}</CardTitle>
                        <CardText> {kite.description}</CardText>
                    </CardBody>
                </Card>
            );
        else {
            return (
                <div/>
            )
        }
    }

 
    // embed a javascript expression inside your JSX
    render() {

        // pass a function to map. The map() method creates a new array with the results of calling a provided function on every element in the calling array.
        const products = this.props.products.map((kite) => {

            return (
                <div key={kite.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onProductSelect(kite)}>
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
                        <h1>Product list</h1>
                    </div>
                    <div className="row">
                        {products}
                    </div>

                    <div className="row">
                        {this.renderProduct(this.state.selectedProduct)}
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