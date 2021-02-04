import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './Hello';
import Counter from './components/Counter';
import LifeCycleSample from './components/LifeCycleSample';
// import ContextSample from './components/contextSample';
// import Counter from './components/Counter';
import "./index.css";
// 랜덤 색상을 생성합니다
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function App() {
  const [color, setColor] = useState("#000000");
  const [visible, setVisible] = useState(true);

  const onClick = () => {
    setColor(getRandomColor());
  };

  const onToggle = () => {
    setVisible(!visible);
  };

  return (
    <>
      <button onClick={onClick}>랜덤 색상</button>
      <button onClick={onToggle}>토글</button>
      {visible && <LifeCycleSample color={color} />}
    </>
  );
}



ReactDOM.render(
  <React.StrictMode>
    {/* <ContextSample /> */}
    {/* <App /> */}
    {/* <Counter /> */}
    {/* <Hello name="react" /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();