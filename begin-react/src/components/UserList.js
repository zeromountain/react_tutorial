import React, { useEffect } from 'react';

//Component 1
function User({user, onRemove, onToggle}) {
  
  const { username, email, id, active } = user;
  // callback, dependency
  // useEffect(() => {
  //   console.log('컴포넌트가 화면에 나타남');
  //   // props -> state
  //   // REST API
  //   // D3 Video.js
  //   // setInterval, setTimeout
  //   return () => {
  //     // clearInterval
  //     // clearTimeout
  //     // remove library instance
  //     console.log('컴포넌트가 화면에서 사라짐');
  //   }
  // }, []);

  useEffect(() => {
    console.log('user 값이 설정됨')
    // console.log(user);
    // return () => {
    //   console.log('user값이 바뀌기 전');
    //   console.log(user);
    // }
  }, [user]);

  return (
    <div>
      <b style={{
        color: active ? 'green' : 'black',
        cursor: 'pointer'
      }}
      onClick={() => onToggle(id)}
      >
        {username}
      </b>
      &nbsp;
      <span>({email})</span>
      <button onClick={()=> onRemove(id)}>삭제</button>
    </div>
  )
}

function UserList ({ users, onRemove, onToggle }) {

  return (
    <div>
      {/* <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} /> */}
      {
        users.map(
          user => (
            <User 
              key={user.id} 
              user={user} 
              onRemove={onRemove}
              onToggle={onToggle}  
              />)
        )
      } 
    </div>
  );
}

export default UserList;