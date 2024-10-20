import React from 'react'

function Arrow({ width, height, className, fill = "white", ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width + 'rem'} height={height ? (height + 'rem') : (width - 0.5 + 'rem')} className={className} {...props} viewBox="0 0 59 52" fill="none">
            <path d="M4 22.5C2.067 22.5 0.5 24.067 0.5 26C0.5 27.933 2.067 29.5 4 29.5V22.5ZM57.4749 28.4749C58.8417 27.108 58.8417 24.892 57.4749 23.5251L35.201 1.25126C33.8342 -0.115572 31.6181 -0.115572 30.2513 1.25126C28.8844 2.6181 28.8844 4.83418 30.2513 6.20101L50.0503 26L30.2513 45.799C28.8844 47.1658 28.8844 49.3819 30.2513 50.7487C31.6181 52.1156 33.8342 52.1156 35.201 50.7487L57.4749 28.4749ZM4 29.5H55V22.5H4V29.5Z" fill={fill} />
        </svg>
    )
}

export default Arrow