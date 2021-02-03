import React,{ Component } from 'react';

class Hello extends Component {
  static defaultProps = {
    name: '이름없음'
  }
  render() {
    const { color, isSpecial, name } = this.props; 
    return (
      <div>
        {this.props.isSpecial && <b>*</b>}
        안녕하세요 {this.props.name}
      </div>
    );
  }
};
// function Component
// Component's first letter is upper case.
// function Hello({ color, name, isSpecial }) {
//   console.log(name);
//   return <div style={{
//     color
//   }}>
//     {isSpecial && <b>*</b>}  
//     {/* {isSpecial ? <b>*</b> : null} */}
//     안녕하세요 {name}
//   </div>
// } 

// Hello.defaultProps = {
//   name: '이름 없음'
// }
export default Hello;