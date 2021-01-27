import React, { useRef } from 'react';
import UserList from './components/UserList';


function App() {

  const users = [
    {
      id: 1,
      username: 'zeromountain',
      email: 'public.zeromountain@gamil.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'public.tester@gamil.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'public.liz@gamil.com'
    }
  ]
 
  const nextId = useRef(4);

  const onCreate = () => {

    console.log(nextId.current);
    nextId.current += 1;
  }

  return (
    <UserList users={users} />
  );
}

export default App;
