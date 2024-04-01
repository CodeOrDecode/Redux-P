import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { increment } from '../Redux/Countredux/action';

const Counter = () => {
    const dispatch = useDispatch();
    const state = useSelector((state)=>{
        return state.countone
    })
  return (
    <div>
        <h3>Count :{state.count}</h3>
        <button onClick={()=>{dispatch(increment(10))}}>Incre</button>
    </div>
  )
}

export default Counter