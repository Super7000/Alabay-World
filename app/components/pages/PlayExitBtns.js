import React from 'react'
import Play from '../icons/Play'

function PlayExitBtns() {
    return (
        <div className='flex gap-14 mt-8 mb-3'>
            <button className="bg-white text-black flex items-center gap-5 pr-11 font-bold py-0 px-1 rounded-full transition-all border-8 border-white active:border-0 active:pl-2" style={{ fontSize: '1rem' }}>
                <Play />
                <div className='my-auto'>PLAY</div>
            </button>
            <button className="bg-transparent text-white border-4 border-white font-bold py-3 px-16 rounded-full transition-all active:py-2 active:px-14 active:ml-1" style={{ fontSize: '1rem' }}>EXIT</button>
        </div>
    )
}

export default PlayExitBtns