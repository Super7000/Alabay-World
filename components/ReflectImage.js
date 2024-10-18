import React from 'react';

function ReflectImage({ src, className, ...props }) {
    return (
        <div {...props} className={"reflect-container" + " " + className}>
            <img src={src} className='w-full' />
            <div className="reflect w-full" style={{ backgroundImage: `url("${src}")` }}></div>
        </div>
    );
}

export default ReflectImage;