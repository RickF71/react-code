import React, {useState} from 'react';
import {useNavigate, Route, Routes} from 'react-router-dom';
import LoginValidate from './LoginValidate';

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
                <h3>Sign In Here</h3>
                <label for="userName">User Name: </label>
                {/* <input onChange={userNameChange} value={userName}></input> */}
                <input value={userName}></input>
                <br />

                <label for="password">Password: </label>
                <input onChange={passwordChange} value={password}></input>
                <br />

                <label for="email">Email: </label>
                <input onChange={emailChange} value={email}></input>
                <br />

                <button onClick={() => toLoginValidate()}>Submit</button> 
            </div>
        </div>
    );
}

export default LoginForm;