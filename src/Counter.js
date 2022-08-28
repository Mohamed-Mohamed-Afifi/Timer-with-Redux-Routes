import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
import { decrement, increment, reset } from './Redux/countSlice';
import Routers from './route';
const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.count)
    return (
        <div className='text-center'>
            <h1 className='my-2 py-0'>{count}</h1>
            <Button onClick={() => dispatch(increment())} color='primary'>Incrment</Button>
            <Button onClick={() => dispatch(decrement())} className='mx-2' color='primary'>Decrement</Button>
            <Button onClick={() => dispatch(reset())} color='danger'>Reset</Button>
        </div>
    )
}

export default Counter