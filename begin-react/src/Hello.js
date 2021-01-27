import React from 'react';

// function Component
// Component's first letter is upper case.
function Hello({ color, name, isSpecial }) {
  console.log(name);
  return <div style={{
    color
  }}>
    {isSpecial && <b>*</b>}  
    {/* {isSpecial ? <b>*</b> : null} */}
    안녕하세요 {name}
  </div>
} 

Hello.defaultProps = {
  name: '이름 없음'
}
export default Hello;