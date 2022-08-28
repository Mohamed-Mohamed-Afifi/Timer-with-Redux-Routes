import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import './router.css'
function Routers() {
    return (
        <Fragment>
            <NavLink to='Counter' className='mx-2 counter'>Counter</NavLink>
            <NavLink to='Timer' className='mx-2 time' >Timer</NavLink>
        </Fragment>
    )
}

export default Routers