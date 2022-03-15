import React from 'react';

function HappyFNComp(props) {
    return (
        <div>
            <h1>Happy Function Component</h1>
            <p>{props.whoHappy}</p>
        </div>
    );
}

export default HappyFNComp;