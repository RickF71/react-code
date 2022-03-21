import React from 'react';

function Child1({setMessage}) {

    const onButtonClick =(changeValue) => {
        setMessage(changeValue);
    }
    return (
        <div>
            <button onClick={()=>onButtonClick("Message from child1")}>Child1</button>
        </div>
    );
}

export default Child1;