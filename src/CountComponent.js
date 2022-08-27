import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './Redux/countSlice';
const CountComponent = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.count)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>Incrment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}

export default CountComponent