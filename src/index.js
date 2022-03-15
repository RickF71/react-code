import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoComponent from './component/TodoComponent';
import TC from './component/TodoComponent'
import Todo2Comp from './component/Todo2Comp';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>

    <App />
    <Todo2Comp />
    <TodoComponent name="Richard" />

  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
