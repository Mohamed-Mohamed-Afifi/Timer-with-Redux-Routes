import React from 'react'
import { useParams } from 'react-router-dom'

function Timertype() {
    console.log(useParams())
    const { Timertype } = useParams();
    return (
        <div>
            <h2>Type of Your Timer IS </h2>
            <p>{Timertype}</p>
        </div>
    )
}

export default Timertype