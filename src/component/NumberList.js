import React from 'react';

function NumberList(props) {
    const  listItems = [1,2,3,5,7];
    // const listItems = props.numbers;
    const numbers = listItems.map((number) => 
        <li key={number.toString}>{number}</li>
    )

    return (
        <ul>{numbers}</ul>
    );
}

export default NumberList;