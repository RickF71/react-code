import React, {useState} from 'react';
import ChildComponent from './ChildComponent';

function ParentToChild({props}) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [hobbies, setHobbies] = useState('');

    const firstNameChange = (e) => {setFirstName(e.target.value);}
    const lastNameChange = (e) => {setLastName(e.target.value);}
    const ageChange = (e) => {setAge(e.target.value);}
    const addressChange = (e) => {setAddress(e.target.value);}
    const hobbiesChange = (e) => {setHobbies(e.target.value);}
    

    return (
        <div>
            <label for="firstName">First Name: </label>
            <input onChange={firstNameChange} value={firstName}></input>
            <br />

            <label for="lastName">Last name: </label>
            <input onChange={lastNameChange} value={lastName}></input>
            <br />

            <label for="age">Age: </label>
            <input onChange={ageChange} value={age}></input>
            <br />

            <label for="address">Address: </label>
            <input onChange={addressChange} value={address}></input>
            <br />
            <label for="hobbies">Hobbies: </label>
            <input onChange={hobbiesChange} value={hobbies}></input>
            {/* <button onClick={() => toChild()}>Submit</button>  */}
            <ChildComponent 
                firstName={firstName}
                lastName={lastName}
                age={age}
                address={address}
                hobbies={hobbies}
            />
        </div>
    );
}

export default ParentToChild;