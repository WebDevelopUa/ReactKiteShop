import React from 'react';
import './ProductDetail.css';
import {Card, CardImg, CardText, CardImgOverlay, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

// create Functional component for the ProductDetail render
function RenderProductDetail({kite}) {
    return (
        <div className="col-12 col-md-4 m-5">
            <Card>
                <CardImg top width="100%" src={kite.image} alt={kite.name}/>
                <CardBody>
                    <CardTitle>{kite.name}</CardTitle>
                    <CardText className="Product-description"> {kite.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

// create Functional component for the comments with props parameter comments
function RenderComments({comments}) {

    if (comments != null)
        return (
            <div className="col-12 col-md-3 m-5">
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
            <span className="App-structure">renderComments() = null</span>
        )
    }
}

const ProductDetail = (props) => {
    if (props.kite != null)
        return (
            <div className="container">
                <div className="row">
                    <span className="App-structure">Product detail</span>
                    <RenderProductDetail kite={props.kite}/>
                    <RenderComments comments={props.kite.comments}/>
                </div>
            </div>

        );

    else
        return (
            <span className="App-structure">Product detail == null</span>
        );

};


export default ProductDetail;