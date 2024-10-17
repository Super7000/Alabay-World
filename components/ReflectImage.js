import React from 'react'

function ReflectImage({ src, props }) {
    return (
        <div {...props}>
            <img src={src} className='w-full' />
            <div className="reflect w-full" style={{ backgroundImage: `url("${src}")` }}></div>
        </div>
    )
}

export default ReflectImage