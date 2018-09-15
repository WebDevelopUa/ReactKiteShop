/* Function component based design */

import React from 'react';
import './ProductsList.css'

import {Card, CardImg, CardText, CardImgOverlay, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

//  create Functional component RenderProductsListItem
function RenderProductsListItem({product, onClick}) {
    return (
        <Card>
            <Link to={`/list/${product.id}`}>
                <CardImg top width="100%" src={product.image} alt={product.name}/>
                <CardBody>
                    <CardImgOverlay>
                        <CardTitle>{product.name}</CardTitle>
                        <CardSubtitle>{product.price}</CardSubtitle>
                        <br/>
                        <Button>Details</Button>
                    </CardImgOverlay>
                </CardBody>
            </Link>
        </Card>
    )
}

const ProductsList = (props) => {

    const products = props.products.map((product) => {

        return (
            <div key={product.id} className="col-6 col-md-2">
                <RenderProductsListItem product={product}/>
            </div>
        );

    });

    return (

        <div className="container">

            <div className="row">
                <div className="col-12">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Product List</BreadcrumbItem>
                    </Breadcrumb>
                </div>
            </div>

            <div className="Products-list">
                <div className="row">
                    <span className="App-structure">Product List</span>

                    {products}
                </div>
            </div>
        </div>
    );


};


export default ProductsList;