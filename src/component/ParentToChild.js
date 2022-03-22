import React, {Component, useState} from 'react';
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
    
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [isChecked4, setIsChecked4] = useState(false);

    const handleOnChange = () => {setIsChecked(!isChecked);};
    const handleOnChange2 = () => {setIsChecked2(!isChecked2);};
    const handleOnChange3 = () => {setIsChecked3(!isChecked3);};
    const handleOnChange4 = () => {setIsChecked4(!isChecked4);};

    function toChild() {

    }

    return (
       
        <div> 
            <h2>Parent/Child React Assignment March 21</h2>

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
            {/* <input onChange={hobbiesChange} value={hobbies}></input> */}
            <br />
            
            <div className="hobby">
                <input
                type="checkbox"
                id="fruit"
                name="fruit"
                value="Programming"
                checked={isChecked}
                onChange={handleOnChange}
                />
                Programming
            </div>

            <div className="hobby">
                <input
                type="checkbox"
                id="hobby2"
                name="hobby2"
                value="Watching Movies"
                checked={isChecked2}
                onChange={handleOnChange2}
                />
                Watching Movies
            </div>
        
            <div className="hobby">
                <input
                type="checkbox"
                id="hobby3"
                name="hobby3"
                value="Computer Games"
                checked={isChecked3}
                onChange={handleOnChange3}
                />
                Computer Games
            </div>
        
            <div className="hobby">
                <input
                type="checkbox"
                id="hobby4"
                name="hobby4"
                value="Bicycling"
                checked={isChecked4}
                onChange={handleOnChange4}
                />
                Bicycling
            </div>
        
            <br />

            <button onClick={() => toChild()}>Submit</button> 

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