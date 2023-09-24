import React from 'react'
import { useAppStore } from '../hooks/useStore'
import { shallow } from 'zustand/shallow';
const Conditional = () => {
  const [condition, stateConditional] = useAppStore((state)=>{
    return [state.condition,state.stateConditional];
  },shallow)
  console.log(condition);
  return (
    <>
    {condition ? ('true'):('false')}
    <br />
    <button onClick={stateConditional}>replace condition</button>
    </>
  )
}

export default Conditional