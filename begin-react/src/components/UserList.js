import React, { useEffect } from 'react';

//Component 1
const User = React.memo(function User({user, onRemove, onToggle}) {
  
  const { username, email, id, active } = user;

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
})

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

export default React.memo(UserList, (prevProps, nextProps) => nextProps.users === prevProps.users); 