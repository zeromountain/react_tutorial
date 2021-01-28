import React from 'react';

//Component 1
function User({user, onRemove}) {
  
  const { username, email, id } = user;
  
  return (
    <div>
      <b>{username}</b> <span>({email})</span>
      <button onClick={()=> onRemove(id)}>삭제</button>
    </div>
  )
}

function UserList ({ users, onRemove }) {

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
              />)
        )
      } 
    </div>
  );
}

export default UserList;