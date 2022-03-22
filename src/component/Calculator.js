import React, { Component, useState } from 'react';


function Calculator () {
    const [nbr1, setNbr1] = useState();
    const [nbr2, setNbr2] = useState();
    
    

        return (
            <div>
                <h1>Calculator</h1>
                {/* <form id="calcNumbers" onSubmit={}> */}
                    <label>
                        Nbr1:
                        <input type="number" value={nbr1} />
                    </label>
                    <label>
                        Nbr2:
                        <input type="number" value={nbr2} />
                    </label>
                    <div>
                    <button onClick={() => calculate('nbrAdd',{nbr1},{nbr2})}>Add</button>
                    <button onClick={() => this.calculate('nbrSub')}>Subtract</button>
                    <button onClick={() => this.calculate('nbrMul')}>Multiply</button>
                    <button onClick={() => this.calculate('nbrDiv')}>Divide</button>

                    {/* this doesn't work!!! */}
                    {/* <button onClick={this.calculate('nbrSub')}>Sub</button> */}

                        {/* <input id="nbrAdd" name="nbrAdd" type="button" onClick={calculate('nbrAdd', this)}>Add</input>
                        <input id="subAdd" name="nbrSub" type="button" onClick={calculate('nbrSub', this)}>Subtract</input> */}

                    </div>
                {/* </form> */}
            </div>
        ); 

        function calculate(data) {
            console.log(data)
        }

}
export default Calculator;