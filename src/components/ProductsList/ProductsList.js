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
                <div className="col-12 col-md-8 mx-auto">
                    <Card>
                        <CardImg top width="100%" src={kite.image} alt={kite.name}/>
                        <CardBody>
                            <CardTitle>{kite.name}</CardTitle>
                            <CardText className="Product-description"> {kite.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        else {
            return (
                <div className="mx-auto text-center"><span>Product Detail</span></div>
            )
        }
    }

    renderComments(comments) {
        if (comments != null)
            return (
                <div className="col-12 col-md-4 mx-auto">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment) => {
                            return (
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>&#8505; &nbsp; {comment.author}, {new Intl.DateTimeFormat('en-US', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: '2-digit'
                                    }).format(new Date(Date.parse(comment.date)))}</p>
                                </li>
                            );
                        })}

                    </ul>

                </div>
            );
        else {
            return (
                <div className="mx-auto text-center"><span>Product Comments</span></div>
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
                        <span className="App-structure">Product Detail</span>
                        {this.renderProduct(this.state.selectedProduct)}
                        {this.renderComments(this.state.comments)}
                    </div>

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