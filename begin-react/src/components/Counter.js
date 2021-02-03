import React, { useState, useReducer, Component } from 'react';

class Counter extends Component {
  
  // not Javascript Syntax but Babel plugin Syntax 
  state = {
    counter: 0,
    fixed: 1,
    updateMe: {
      toggleMe: false,
      dontChangeMe: 1,
    }

  }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     counter: 0
  //   }
  //   // this.handleDecreaese = this.handleDecreaese.bind(this);
  //   // this.handleIncrease = this.handleIncrease.bind(this);
  // }


  handleIncrease = () => {
    console.log(this);
    console.log('increase');
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    this.setState(state => ({
      counter: state.counter + 1
    }))
  }
  handleDecreaese = () => {
    console.log(this);
    console.log('decrease');
    this.setState({
      counter: this.state.counter - 1 
    })
  }
  handleToggle = () => {
    this.setState({
      updateMe: {
        ...this.state.updateMe,
        toggleMe: !this.state.updateMe.toggleMe,
      }
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecreaese}>-1</button>
        <p>고정된 값: {this.state.fixed} </p>
      </div>
    );
  }
};

// function reducer(state, action) {
//   switch (action.type) {
//     case 'INCREMENT' :
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       throw new Error('Unhadled action');
//   }
// }


// function Counter() {
//   // const [ number, setNumber ] = useState(0);
//   const [ number, dispatch ] = useReducer(reducer, 0);

//   const onIncrease = () => {
//     // setNumber(prevNumber => prevNumber + 1);
//     dispatch({
//       type: 'INCREMENT'
//     })
//   }

//   const onDecrease = () => {
//     // setNumber(prevNumber => prevNumber - 1);
//     dispatch({
//       type: 'DECREMENT'
//     })
//   }

//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={onIncrease}>+1</button>
//       <button onClick={onDecrease}>-1</button>
//     </div>
//   )
// }

export default Counter;