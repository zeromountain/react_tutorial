import React from 'react';
import Hello from './Hello';
import './App.css';
import Wrapper from './containers/Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true}/>
      <Hello color="pink" />
    </Wrapper>
  );
}

export default App;
