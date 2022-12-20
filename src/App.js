import React, { Component, useState } from 'react';
import { useBootstrapBreakpoints } from 'react-bootstrap/esm/ThemeProvider';
import DynamicContent from './component/DynamicContent';
import NumberList from './component/NumberList';
// import day4 from './component/day4';
// import styles from './howYaDoin.module.css';
// import FirstComponent from './component/FirstComponent';
import ParentToChild from './component/ParentToChild';
// import Child1 from './component/Child1';
// import Child2 from './component/Child2';

import TwoWayBind from './component/TwoWayBind';
// import ChildComponent from './component/ChildComponent';

import CalculatorOutput from './component/CalculatorOutput';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
// import {HashRouter as Router, Link, Routes, Route} from 'react-router-dom';
// import { HashRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Home from './component/Home';
import Calculator from './component/Calculator';
import About from './component/About';
import Profile from './component/Profile';
import RouteError from './RouteError';
import Redirect from './Redirect';

import { Col, Row, Form, Navbar, 
    Container, Nav, NavDropdown, NavDropdownProps } from "react-bootstrap";
import LoginForm from './component/LoginForm';
import LoginValidate from './component/LoginValidate';
import './App.css';


function App() {

    const[selectedMessage, setMessage] = useState('');
    const[user, changeUser] = useState('userA');
    
    return (
      <div>
        <Router>
          <Container>
            <Navbar className="navigation" fixed="top" expand="lg" >
              <Navbar.Brand href="/">Rick React</Navbar.Brand>
              <NavDropdown title="Assignments" id="basic-nav-dropdown">
                <NavDropdown.Item><Link to="/calculator">Calculator</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/reactlayout">React Layout</Link></NavDropdown.Item>
                {/* <NavDropdown.Item><Link to="/dynamiccontent">Dynamic Content</Link></NavDropdown.Item> */}
                <NavDropdown.Item><Link to="/nbrlist">Number List</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/loginform">Login Form</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item><Link to="/githubext">My Github React</Link></NavDropdown.Item>
            
              </NavDropdown>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
        
            </Navbar>
            
          </Container>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="profile" element={<Profile />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="nbrlist" element={<NumberList />} />
            <Route path="reactlayout" element={<ParentToChild />} />
            <Route path="loginform" element={<LoginForm />} />
            <Route path="loginValidate" element={<LoginValidate />} />
            {/* <Route path="/dynamiccontent" element={<DynamicContent />} /> */}
 
            <Route path="/githubext" element={() => { 
              window.open("https://github.com/RickF71/react-code");
              // window.location.href = 'https://github.com/RickF71/react-code'; 
              // return null;
              }}/>
            <Route path="*" element={<RouteError />} />
          </Routes>
          <Redirect />
        </Router>
    
          

        
      </div>
     )
    
}

export default App;
