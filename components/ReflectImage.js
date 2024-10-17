import React from 'react'

function ReflectImage({ props }) {
    return (
        <div {...props}>
            <img src={"./assets/DALL·E 2024-07-14 16.40.05 - A 3D cartoon illustration of a furry Central Asian Shepherd dog jumping happily in the air. The dog should have a joyful expression with a wide smile, 2.png"} className='w-full'/>
            <div className="reflect w-full" style={{ backgroundImage: 'url("./assets/DALL·E 2024-07-14 16.40.05 - A 3D cartoon illustration of a furry Central Asian Shepherd dog jumping happily in the air. The dog should have a joyful expression with a wide smile, 2.png")' }}></div>
        </div>
    )
}

export default ReflectImage