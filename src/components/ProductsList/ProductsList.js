/* component based design */
// #1 import React
import React from 'react';
import './ProductsList.css'
import {Media} from 'reactstrap';

// #2 create component
class ProductsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            kites:
                [
                    {
                        id: 0,
                        name: 'nobile_50fifty',
                        image: 'img/nobile_50fifty.jpg',
                        category: 'kites',
                        label: 'Hot',
                        price: '899 - 1399 €',
                        description: 'Size (m): 5, 7, 9, 10, 12, 14\n' +
                            '\n' +
                            'Main features:\n' +
                            '– Shape: hybrid C-shape and full bridles which combines the advantages of both types\n' +
                            '– High freestyle and wakestyle performance\n' +
                            '– Bridles with no pulleys give better control and direct feeling\n' +
                            '– Great lift and pop combined with constant power while performing tricks\n' +
                            '– Great control combined with medium bar feeling\n' +
                            '– Fast, low drag, quickly generating power profiles\n' +
                            '– Floating strut eliminates gusty wind effects\n' +
                            '– 5-strut construction\n' +
                            '– Easy to relaunch\n' +
                            '– Quick inflating/deflating screw valve\n' +
                            '– One-pump system\n' +
                            '– Quick and easy setup\n' +
                            '– Improved sewing technology and quality\n' +
                            '– 4-line control bar system\n' +
                            '– Colour-coded and fool-proof line connectors\n' +
                            '\n' +
                            'Shape: C-shape\n' +
                            '\n' +
                            'Materials:\n' +
                            '– T9675 Double Ripstop Teijin;\n' +
                            '– T9600 Ripstop Teijin;\n' +
                            '– Dacron Ripstop\n' +
                            '– Double-layer Dacron on bridle attachment points\n' +
                            '– Double-stitched bonded seams\n' +
                            '– Dacron reinforced canopy (tips and trailing edge)\n' +
                            '– Bladder construction with doublelayer section in wear areas\n' +
                            '– Catch-free one pump valves position\n' +
                            '– Thin LE&Strut ends',
                        comments: [
                            {
                                id: 0,
                                rating: 5,
                                comment: 'Great choice',
                                author: 'Tom Lee',
                                date: '2018-03-16T17:57:28.556094Z'

                            },
                            {
                                id: 1,
                                rating: 5,
                                comment: 'Best buy!',
                                author: 'Tom Lee',
                                date: '2018-04-16T17:57:28.556094Z'

                            },
                            {
                                id: 2,
                                rating: 5,
                                comment: 'I`m Happy!',
                                author: 'Tom Lee',
                                date: '2018-05-16T17:57:28.556094Z'

                            },

                        ]
                    },
                    {
                        id: 1,
                        name: 'nobile_t5',
                        image: 'img/nobile_t5.jpg',
                        category: 'kites',
                        label: 'Hot',
                        price: '899 – 1.399 €',
                        description: ' Size (m): 5, 6, 7.5, 9, 10, 12, 14\n' +
                            '\n' +
                            'Main features:\n' +
                            '– Shape: hybrid kite excellent for wave riding\n' +
                            '– Exceptional freeride and wave performance\n' +
                            '– Great lift and hang time for big airs\n' +
                            '– Big depower and turning speed dedicated for wave riding\n' +
                            '– Great control combined with soft bar feeling\n' +
                            '– High lift, low drag profiles\n' +
                            '– Superb upwind performance\n' +
                            '– 3-strut construction\n' +
                            '– Tough construction dedicated for wave riding and schools\n' +
                            '– Easy to relaunch\n' +
                            '– Quick inflating/deflating screw valve\n' +
                            '– One-pump system\n' +
                            '– Quick and easy setup\n' +
                            '– Bridles with pulleys, owing to which the kite has a wider lower range, it doesn’t fall, it’s more stable in the zenith and has a better relaunch\n' +
                            '– More durable lines at the pulleys on bridles\n' +
                            '– Improved sewing technology and quality\n' +
                            '– 4-line control bar system\n' +
                            '– Colour-coded and fool-proof line connectors\n' +
                            '\n' +
                            'Shape: Hybrid\n' +
                            'Materials:\n' +
                            '– T9675 Double Ripstop Teijin;\n' +
                            '– T9600 Ripstop Teijin;\n' +
                            '– Dacron Ripstop\n' +
                            '– Double-layer Dacron on bridle attachment points\n' +
                            '– Double-stitched bonded seams\n' +
                            '– Dacron reinforced canopy (tips, canopy stripes, leading edge and trailing edge)\n' +
                            '– Bladder construction with doublelayer section in wear areas catch-free one pump valves position\n' +
                            '– Thin LE & Strut ends',
                        comments: [
                            {
                                id: 0,
                                rating: 5,
                                comment: 'Great choice',
                                author: 'Tom Lee',
                                date: '2018-03-16T17:57:28.556094Z'

                            },
                            {
                                id: 1,
                                rating: 5,
                                comment: 'Best buy!',
                                author: 'Tom Lee',
                                date: '2018-04-16T17:57:28.556094Z'

                            },
                            {
                                id: 2,
                                rating: 5,
                                comment: 'I`m Happy!',
                                author: 'Tom Lee',
                                date: '2018-05-16T17:57:28.556094Z'

                            },

                        ]
                    },
                    {
                        id: 2,
                        name: 'nobile_no1',
                        image: 'img/nobile_no1.jpg',
                        category: 'kites',
                        label: 'Hot',
                        price: '599 €',
                        description: ' Size (m): 3,5\n' +
                            '\n' +
                            'Main features:\n' +
                            '– Shape: hybrid kite designed for training\n' +
                            '– Best for beach training, bodydrag, first steps in water\n' +
                            '– Easy and forgiving\n' +
                            '– Soft bar feeling\n' +
                            '– Floating strut eliminates gusty wind effects\n' +
                            '– 3-strut construction\n' +
                            '– Tough construction dedicated for schools\n' +
                            '– Easy to relaunch\n' +
                            '– One-pump system\n' +
                            '– Quick and easy setup\n' +
                            '– Improved sewing technology and quality\n' +
                            '– Fully compatible with Nobile 4-line control bar system\n' +
                            '– Colour-coded and fool-proof line connectors\n' +
                            '\n' +
                            'Shape: Hybrid\n' +
                            '\n' +
                            'Materials:\n' +
                            '– T9600 Ripstop Teijin;\n' +
                            '– Dacron Ripstop\n' +
                            '– Double-layer Dacron on bridle attachment points\n' +
                            '– Double-stitched bonded seams\n' +
                            '– Dacron reinforced canopy (tips and trailing edge)\n' +
                            '– Bladder construction with doublelayer section in wear areas\n' +
                            '– Catch-free one pump valves position\n' +
                            '– Thin LE & Strut ends',
                        comments: [
                            {
                                id: 0,
                                rating: 5,
                                comment: 'Great choice',
                                author: 'Tom Lee',
                                date: '2018-03-16T17:57:28.556094Z'

                            },
                            {
                                id: 1,
                                rating: 5,
                                comment: 'Best buy!',
                                author: 'Tom Lee',
                                date: '2018-04-16T17:57:28.556094Z'

                            },
                            {
                                id: 2,
                                rating: 5,
                                comment: 'I`m Happy!',
                                author: 'Tom Lee',
                                date: '2018-05-16T17:57:28.556094Z'

                            },

                        ]
                    },
                    {
                        id: 3,
                        name: 'nobile_mr_big',
                        image: 'img/nobile_mr_big.jpg',
                        category: 'kites',
                        label: 'Top',
                        price: '1549 €',
                        description: ' Size (m): 17\n' +
                            '\n' +
                            'Main features:\n' +
                            '– Shape: flat bow dedicated for lighter wind conditions\n' +
                            '– Low wind performance\n' +
                            '– High freeride performance\n' +
                            '– Flat shape generating huge power\n' +
                            '– Great lift and hang time for big airs\n' +
                            '– Big depower and fast turning speed optimized for low wind conditions\n' +
                            '– Great control combined with soft bar feeling\n' +
                            '– High lift, very low drag profiles\n' +
                            '– Superb upwind performance\n' +
                            '– 6-strut construction\n' +
                            '– Light construction dedicated for low wind conditions\n' +
                            '– Easy to relaunch\n' +
                            '– Quick inflating/deflating screw valve\n' +
                            '– One-pump system\n' +
                            '– Quick and easy setup\n' +
                            '– Bridles with pulleys, owing to which the kite has a wider lower range, it doesn’t fall, it’s more stable in the zenith and has a better relaunch\n' +
                            '– More durable lines at the pulleys on bridles\n' +
                            '– Improved sewing technology and quality\n' +
                            '– 4-line control bar system\n' +
                            '– Colour-coded and fool-proof line connectors\n' +
                            '\n' +
                            'Shape: Eliptical Flat\n' +
                            '\n' +
                            'Materials:\n' +
                            '– T9600 Ripstop Teijin;\n' +
                            '– Dacron Ripstop\n' +
                            '– Double-layer Dacron on bridle attachment points\n' +
                            '– Double-stitched bonded seams\n' +
                            '– Dacron reinforced canopy (tips and trailing edge)\n' +
                            '– Bladder construction with doublelayer section in wear areas\n' +
                            '– Catch-free one pump valves position\n' +
                            '– Thin LE&Strut ends',
                        comments: [
                            {
                                id: 0,
                                rating: 5,
                                comment: 'Premium quality',
                                author: 'Tom Lee',
                                date: '2018-03-16T17:57:28.556094Z'

                            },
                            {
                                id: 1,
                                rating: 5,
                                comment: 'Best buy!',
                                author: 'Tom Lee',
                                date: '2018-04-16T17:57:28.556094Z'

                            },
                            {
                                id: 2,
                                rating: 5,
                                comment: 'I`m Happy!',
                                author: 'Tom Lee',
                                date: '2018-05-16T17:57:28.556094Z'

                            },

                        ]
                    },
                    {
                        id: 4,
                        name: 'rookie glowne',
                        image: 'img/rookie glowne.jpg',
                        category: 'kites',
                        label: 'Hot',
                        price: '99 €',
                        description: ' Size (m): 2\n' +
                            '\n' +
                            'Main features:\n' +
                            '– Shape: foil kite\n' +
                            '– Dedicated for beginners\n' +
                            '– Best for fun, first steps and beach training\n' +
                            '– 2-lines control bar included\n' +
                            '– Easy and forgiving\n' +
                            '– Quick and easy setup\n' +
                            '– Light, soft and safe construction\n' +
                            '– Colour-coded lines and bar\n' +
                            '\n' +
                            'Material:\n' +
                            '– Nylon\n' +
                            '– 2-line system with wrist leash',
                        comments: [
                            {
                                id: 0,
                                rating: 5,
                                comment: 'Great choice',
                                author: 'Tom Lee',
                                date: '2018-03-16T17:57:28.556094Z'

                            },
                            {
                                id: 1,
                                rating: 5,
                                comment: 'Best buy!',
                                author: 'Tom Lee',
                                date: '2018-04-16T17:57:28.556094Z'

                            },
                            {
                                id: 2,
                                rating: 5,
                                comment: 'I`m Happy!',
                                author: 'Tom Lee',
                                date: '2018-05-16T17:57:28.556094Z'

                            },

                        ]
                    },


                ],
        };


    }


    // embed a javascript expression inside your JSX
    render() {

        const products = this.state.kites.map((kite) => {

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