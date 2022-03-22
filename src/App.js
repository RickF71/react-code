import React, { Component, useState } from 'react';
// import day4 from './component/day4';
// import styles from './howYaDoin.module.css';
// import FirstComponent from './component/FirstComponent';
import ParentToChild from './component/ParentToChild';
// import Child1 from './component/Child1';
// import Child2 from './component/Child2';

import TwoWayBind from './component/TwoWayBind';
// import ChildComponent from './component/ChildComponent';
// import Calculator from './component/Calculator';
// import CauculatorOutput from './component/CalculatorOutput';

function App() {

    const[selectedMessage, setMessage] = useState('');
    return (
      <div>
        <ParentToChild />
     
      </div>
      
    );
}

export default App;
