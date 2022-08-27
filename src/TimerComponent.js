import React from 'react'

function TimerComponent() {
    return (
        <div>
            <div className='d-flex justify-content-center timer'>
                <input type='number' className='col-1 border-0 text-right' maxlength="2" max="59" />
                :
                <input type='number' className='col-1 border-0' maxlength="2" max="12" />
            </div>
            <button>Start</button>
            <button>Stop</button>
        </div>
    )
}

export default TimerComponent