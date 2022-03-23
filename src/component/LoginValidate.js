import React, {useState} from 'react';


function LoginValidate(props) {
    if (props.userName=='rick') {
        console.log ('got username right');
    }
    return (
        <div>
            <h1>Got it</h1>
        </div>
    );
}

export default LoginValidate;