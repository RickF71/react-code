import React, {useState} from 'react';
import {useNavigate, Route, Routes} from 'react-router-dom';
import LoginValidate from './LoginValidate';
import { Col, Row, Form, Navbar, Container, Nav, NavDropdown, NavDropdownProps } from "react-bootstrap";

function LoginForm(props) {
    let navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const userNameChange = (e) => {setUserName(e.target.value);}
    const passwordChange = (e) => {setPassword(e.target.value);}
    const emailChange = (e) => {setEmail(e.target.value);}

    function toLoginValidate() {
        if ({userName}=='user'){
            navigate('/loginValidate');
        }
        console.log ('login click ' + {userName})
        
    }
    <Routes>
        <Route path="/loginValidate" element={<LoginValidate />} />
    </Routes>

    return (
        <div>
            <div>
                <h3 className="text-center">Sign In Here</h3>
                <Container>
                    <Row>
                        <Col><label for="userName">User Name: </label></Col>
                        <Col>
                            {/* <input onChange={userNameChange} value={userName}></input> */}
                            <input value={userName}></input>
                        </Col>
                    </Row>

                    <Row>
                        <Col><label for="userPassword">Password: </label></Col>
                        <Col><input value={password}></input></Col>
                    </Row>

                    <Row>
                        <Col><label for="email">Email: </label></Col>
                        <Col><input value={email}></input></Col>
                    </Row>
             
                    <center><button onClick={() => toLoginValidate()} >Submit</button> </center>
                </Container>
            </div>
        </div>
    );
}

export default LoginForm;