import React from 'react';
import "./HomeComponent.css";

function Home(props) {

    console.log('Home functional component invoked');

    return (
        <div className="container">
            <h1>Home</h1>
        </div>
    )

}

export default Home;