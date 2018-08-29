/* component based design */
// #1 import React
import React from 'react';
import './ProductsList.css'

// https://reactstrap.github.io/components/media/
import {Media} from 'reactstrap';

// #2 create component (move all state content to separate file in shared folder)
class ProductsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};


    }


    // embed a javascript expression inside your JSX
    render() {

        // pass a function to map. The map() method creates a new array with the results of calling a provided function on every element in the calling array.
        const products = this.props.products.map(function (kite) {

            return (
                <div key={kite.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={kite.image} alt={kite.name}/>
                        </Media>

                        <Media body className="ml-5">
                            <Media heading>
                                {kite.name}
                            </Media>
                            <p>
                                {kite.description}
                            </p>
                        </Media>

                    </Media>

                </div>
            );

        });

        return (
            <div className='Products-list'>
                <h1>List of Products:</h1>

                <Media list>
                    {/* const output */}
                    {products}
                </Media>

            </div>
        );

    };
}

// #3 export component
export default ProductsList;

// #4 use  <ProductsList/> in App.js after:
// import ProductsList from "./components/ProductsList";