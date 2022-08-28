import React from 'react'
import Routers from './route'

function Timer() {
    return (
        <div className='d-flex flex-column'>
            <div className='d-flex justify-content-center timer'>
                <input type='number' className='col-1 border-0 text-right' maxlength="2" max="59" />
                :
                <input type='number' className='col-1 border-0' maxlength="2" max="12" />
            </div>
            <div className='col-12 justify-content-center d-flex'>
                <button>Start</button>
                <button>Stop</button>

            </div>
        </div>
    )
}

export default Timer