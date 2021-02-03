import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './Hello';
// import ContextSample from './components/contextSample';
// import Counter from './components/Counter';

ReactDOM.render(
  <React.StrictMode>
    {/* <ContextSample /> */}
    {/* <App /> */}
    {/* <Counter /> */}
    <Hello name="react" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();