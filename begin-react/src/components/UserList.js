import React, { useEffect, useContext } from 'react';
import { UserDispatch } from '../App';
//Component 1
const User = React.memo(function User({user}) {
  
  const { username, email, id, active } = user;
  const dispatch = useContext(UserDispatch);

  return (
    <div>
      <b style={{
        color: active ? 'green' : 'black',
        cursor: 'pointer'
      }}
      onClick={() => dispatch({
        type: 'TOGGLE_USER',
        id
      })}
      >
        {username}
      </b>
      &nbsp;
      <span>({email})</span>
      <button onClick={()=> dispatch({
        type: 'REMOVE_USER',
        id
      })}>삭제</button>
    </div>
  )
})

function UserList ({ users }) {

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
              />)
        )
      } 
    </div>
  );
}

export default React.memo(UserList, (prevProps, nextProps) => nextProps.users === prevProps.users); 