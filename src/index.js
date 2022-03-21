import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import CalculatorComponent from './component/CalculatorFunctions';
// import TodoComponent from './component/TodoComponent';
// import TC from './component/TodoComponent'
// import Todo2Comp from './component/Todo2Comp';
// import Calculator from './component/Calculator';
// import CalculatorOutput from './component/CalculatorOutput';
// import FunctionalComponent from './component/FunctionalComponent';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>

    <App />
    {/* <Calculator /> */}
    {/* <CalculatorOutput /> */}
    

  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
