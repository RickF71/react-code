import React, {useState} from 'react';

function ChildComponent(props) {
    
    return (
        <div>
            <h1>Output</h1>
            <div id="firstName">First Name : {props.firstName}</div>
            <div id="lastName">Last Name : {props.lastName}</div>
            <div id="age">Age : {props.age}</div>
            <div id="address">Address : {props.address}</div>
            <div id="hobbies">Hobbies : {props.hobbies}</div>
            
        </div>
    );
}

export default ChildComponent;