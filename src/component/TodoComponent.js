import React from "react";

class TodoComponent extends React.Component{
    constructor() {
        super();
        this.state ={
            id: "1",
            value: "Geralt"
        };
    }
    render() {

        return (
            <div>
                <h1>First Component </h1>
                <p>testing this</p>
                <p>Hello {this.props.name}</p>
                <p>ID is {this.state.id} and has value of {this.state.value}</p>
                <button onClick={this.showData}>Show</button>
            </div>
        )
    }
    showData =() => {
        console.log("This is data!")
        this.setState({value:"new Value"})
        console.log(this.state.value)
    }
}

export default TodoComponent;