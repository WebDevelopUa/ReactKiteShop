/* component based design */
// #1 import React
import React from 'react';
import './ProductsList.css'

// #2 create component
class ProductsList extends React.Component {



    // embed a javascript expression inside your JSX
    render() {
        return (
            <div className='Products-list'>
                <h1>List of Products:</h1>

            </div>
        );

    };
}

// #3 export component
export default ProductsList;

// #4 use  <ProductsList/> in App.js after:
// import ProductsList from "./components/ProductsList";