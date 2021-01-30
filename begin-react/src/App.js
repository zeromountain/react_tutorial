import React, { useRef, useState, useMemo, useCallback } from 'react';
import CreateUser from './components/CreatUser';
import UserList from './components/UserList';


function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...')
  return users.filter(user => user.active).length;
}

function App() {

  const [ inputs, setInputs ] = useState({
    username:'',
    email:'',
  });

  const { username, email } = inputs;

  const [ users, setUsers ] = useState([
    {
      id: 1,
      username: 'zeromountain',
      email: 'public.zeromountain@gamil.com',
      active: true,
    },
    {
      id: 2,
      username: 'tester',
      email: 'public.tester@gamil.com',
      active: false,
    },  
    {
      id: 3,
      username: 'liz',
      email: 'public.liz@gamil.com',
      active: false,
    }
  ]);

  const nextId = useRef(4);

  // EVENT function

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    // existing element of array maintain and add new element
    // setUsers([...users, user]);
    setUsers(users => users.concat(user));
    setInputs({
      username: '',
      email: ''
    })
    console.log(nextId.current);
    nextId.current += 1;
  }, [username, email]);

  const onChange = useCallback(e => {
    const { name, value} = e.target;
    setInputs({
      ...inputs,
      [ name ]: value
    })
  }, [inputs]);

  const onRemove = useCallback(id => {
    setUsers(users => users.filter(user => user.id !== id));
  }, []);

  const onToggle = useCallback(id => {
    setUsers(users => users.map(
      user => user.id === id 
      ? {...user, active: !user.active}
      : user
    ))
  }, []);

  // if users chagnge, useMemo function is excuted
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList 
        users={users} 
        onRemove={onRemove} 
        onToggle={onToggle}  
        />
        <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;
