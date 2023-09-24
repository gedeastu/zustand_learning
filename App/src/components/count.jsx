import React from 'react'
import { useAppStore } from '../hooks/useStore';
import {shallow} from 'zustand/shallow';
const Count = () => {
  const [count, increase] = useAppStore((state)=>{
    return [state.count,state.increase];
  }, shallow)
  return (
    <>
    <div>Count : {count}</div>
    <button onClick={increase}>+</button>
    </>
  )
}

export default Count