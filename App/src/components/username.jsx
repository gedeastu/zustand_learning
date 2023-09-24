import React from 'react'
import { useAppStore } from '../hooks/useStore'
import { shallow } from 'zustand/shallow';
const Username = () => {
  const [username, updateUsername] = useAppStore((state)=>{
    return [state.username, state.updateUsername];
  },shallow)
  // const username = useAppStore((state)=>state.username)
  // const updateUsername = useAppStore((state)=>state.updateUsername)
  return (
    <>
    <span>Username : {username}</span>
    <br />
    <input type="text" placeholder='New Username' 
    onChange={(event)=>{
        const newUsername = event.target.value;
        updateUsername(newUsername);
      }
    }/>
    </>
  )
}

export default Username;