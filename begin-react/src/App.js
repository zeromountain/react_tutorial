import React, { useRef, useState } from 'react';
import CreateUser from './components/CreatUser';
import UserList from './components/UserList';


function App() {

  const [ inputs, setInputs ] = useState({
    username:'',
    email:'',
  });

  const { username, email } = inputs;
  const onChange = e => {
    const { name, value} = e.target;
    setInputs({
      ...inputs,
      [ name ]: value
    })
  };

  const [ users, setUsers ] = useState([
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
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    // existing element of array maintain and add new element
    // setUsers([...users, user]);
    setUsers(users.concat(user));
    setInputs({
      username: '',
      email: ''
    })
    console.log(nextId.current);
    nextId.current += 1;
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} />
    </>
  );
}

export default App;
