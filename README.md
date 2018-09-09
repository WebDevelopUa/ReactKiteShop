# Install process

    node -v
    npm -v
    npm init (if package.json is absent)
    npm install lite-server --save-dev
    npm install -g create-react-app  (if App is not created)
    create-react-app app (if App is not created)
    
#### Start the development server (cd app)

    npm start
    Local: http://localhost:3000
    
#### Install an NPM Modules (Bootstrap 4, Reactstrap, React-popper, Font Awesome, Bootstrap Social, React Router DOM 

    npm install bootstrap
    npm install reactstrap
    npm install react-popper
    npm install font-awesome@4.7.0
    npm install bootstrap-social@5.1.1
    npm install react-router-dom
    
#### Configure Bootstrap, Reactstrap, Font Awesome, Bootstrap Social, React Router DOM (cd app/src/)

    index.js:
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'font-awesome/css/font-awesome.min.css'
    
    App.js:
    import {Navbar, NavbarBrand} from 'reactstrap';
    import {BrowserRouter} from 'react-router-dom';
    
Components: https://reactstrap.github.io/components/navbar/

    <Navbar dark color="primary">
        <div className="container">
             <NavbarBrand href="/">BRAND</NavbarBrand>
        </div>
    </Navbar>
    
    <BrowserRouter>
        <div className="App"><Main/></div>
    </BrowserRouter>    
    
    MainComponent.js:
    import {Switch, Route, Redirect} from 'react-router-dom';
    
    
#### Configure Links (React Router DOM) (cd app/src/)

    FooterComponent.js:
    import {Link} from "react-router-dom";
        
    <Link to="/home">Home</Link>
      
  
      
#### Configure NavLinks (React Router DOM) (cd app/src/)

    HeaderComponent.js:
    import {NavLink} from "react-router-dom";
        
    <NavLink className="nav-link" to="/home"></NavLink>
      
    import {Nav, Collapse, NavItem} from 'reactstrap';
      
    <Navbar className='Navigation-bar' expand="md"> <Collapse navbar> <Nav navbar> <NavItem> <NavLink className="nav-link" to="/home"> <span className="fa fa-home fa-lg"> Home</span> </NavLink> </NavItem> </Nav> </Collapse>  </Navbar>
      
  
  
  
  
  
  
  
  
  
  ---  
    
#### Create component (cd app/src/components/*.js)
*component based design*
 
1. import React
    
        import React from 'react';
2. create component
       
       class ProductsList extends React.Component {
        }
3. export component
       
       export default ProductsList;
4. use  <ProductsList/> in App.js after:
       
       import ProductsList from "./components/ProductsList";

 
    
