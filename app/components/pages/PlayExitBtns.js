import React from 'react'
import Play from '../icons/Play'

function PlayExitBtns() {
    return (
        <div className='flex gap-16 mt-10 mb-4'>
            <button className="bg-white text-black flex gap-6 pr-12 font-bold py-3 px-4 rounded-full" style={{ fontSize: '1.375rem' }}>
                <Play />
                <div className='my-auto'>PLAY</div>
            </button>
            <button className="bg-transparent text-white border-4 border-white font-bold py-3 px-16 rounded-full" style={{ fontSize: '1.375rem' }}>EXIT</button>
        </div>
    )
}

export default PlayExitBtns