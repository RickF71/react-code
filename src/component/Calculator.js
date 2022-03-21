import React, { Component } from 'react';

class Calculator extends Component {
    // handleSubmit() {

    // }
    render() {
        const calcStyle={       
            backgroundColor: 'yellow', 
            height:'20vh',
            marginTop:'-70px',
            fontSize:'50px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        };
        return (
            <div style={calcStyle}>
                <h1>Calculator</h1>
                <form id="calcNumbers" onSubmit={}>
                    <label>
                        Nbr1:
                        <input type="number" name="nbr1" />
                    </label>
                    <label>
                        Nbr2:
                        <input type="number" name="nbr2" />
                    </label>
                    <div>
                    <button onClick={() => this.calculate('nbrAdd')}>Add</button>
                    <button onClick={() => this.calculate('nbrSub')}>Subtract</button>
                    <button onClick={() => this.calculate('nbrMul')}>Multiply</button>
                    <button onClick={() => this.calculate('nbrDiv')}>Divide</button>

                    {/* this doesn't work!!! */}
                    {/* <button onClick={this.calculate('nbrSub')}>Sub</button> */}

                        {/* <input id="nbrAdd" name="nbrAdd" type="button" onClick={calculate('nbrAdd', this)}>Add</input>
                        <input id="subAdd" name="nbrSub" type="button" onClick={calculate('nbrSub', this)}>Subtract</input> */}

                    </div>
                </form>
            </div>
        ); 

        function calculate(fn) {
            console.log(fn)
        }
    }


}

export default Calculator;