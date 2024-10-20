import React from 'react';

function ReflectImage({ src, className, fixer = 28, ...props }) {
    return (
        <div {...props} className={"reflect-container z-20 " + className}>
            <img src={src} className='w-full' />
            <div className="reflect w-full z-10" style={{ backgroundImage: `url("${src}")`, transform: `scaleY(-1) translateY(${fixer}%)` }}></div>
        </div>
    );
}

export default ReflectImage;