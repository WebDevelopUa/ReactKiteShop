/* Function component based design */

import React from 'react';
import './ProductsList.css'

import {Card, CardImg, CardText, CardImgOverlay, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

//  create Functional component RenderProductsListItem
function RenderProductsListItem({kite, onClick}) {
    return (
        <Card key={kite.id} onClick={() => onClick(kite.id)}>
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
    )
}

const ProductsList = (props) => {

    const products = props.products.map((kite) => {

        return (
            <div key={kite.id} className="col-6 col-md-2">
                <RenderProductsListItem kite={kite} onClick={props.onClick}/>
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


export default ProductsList;