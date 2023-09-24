import React from 'react'
import { useAppStore } from '../hooks/useStore'
import { shallow } from 'zustand/shallow';
import { useState } from 'react';

const User = () => {
const [thisUser,getUser] = useAppStore((state)=>{return [state.thisUser,state.getUser];},shallow);
const [username,setUsername] = useState('');
  return (
    <>
    <span>Login by Username : {thisUser}</span>
    <input type="text" onChange={(e)=>setUsername(e.target.value)}/>
    <button type='button' onClick={()=>getUser(username)}></button>
    </>
  )
}

export default User;