import React from 'react';

//Component 1
function User({user}) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  )
}

function UserList ({ users }) {
  
  return (
    <div>
      {/* <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} /> */}
      {
        users.map(
          user=> (<User key={user.id} user={user} />)
        )
      } 
    </div>
  );
}

export default UserList;