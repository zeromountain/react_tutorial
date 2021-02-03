import React, { useRef, useReducer, useMemo, useCallback, createContext } from 'react';
import CreateUser from './components/CreateUser';
import UserList from './components/UserList';
import produce from 'immer';

// window.produce = produce;

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...')
  return users.filter(user => user.active).length;
}

const initialState = {
  users: [
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
  ] 
} 

function reducer(state, action) {
  switch (action.type) {

    case 'CREATE_USER':
      return produce(state, draft => {
        draft.users.push(action.user);
      });
      
      // return {
      //   users: state.users.concat(action.user)
      // }
    case 'TOGGLE_USER':
      return produce(state,draft => {
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      });
    
    // return {
      
      //   users: state.users.map(user => 
      //     user.id === action.id
      //       ? { ...user, active: !user.active }
      //       : user  
      //   )
      // }
    case 'REMOVE_USER':
      return produce(state, draft => {
        const index = draft.users.findIndex(user => user.id ===   action.id);
        draft.users.splice(index, 1);
      })
      
      // return {
        
      //   users: state.users.filter(user => user.id !== action.id)
      // }
    default:
      throw new Error('Un  handled action');
  }
}

export const UserDispatch = createContext(null);

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const { users } = state;

  const count = useMemo(() => countActiveUsers(users, [users]));


  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성 사용자 수: {count} </div>
    </UserDispatch.Provider>
  );
}

export default App;
