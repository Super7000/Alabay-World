export default function GamePreview({ themeColor = '#90FFAE', imgs = [], folder }) {
    return (
        <div className='mt-auto'>
            <span className='text-3xl font-bold mt-auto'>
                <span style={{ color: themeColor }}>GAME</span>
                <span className='text-white'> PREVIEW</span>
            </span>
            <div className="grid grid-flow-col gap-6 mt-4 overflow-x-auto w-full">
                {
                    imgs.map((img, i) => (
                        <Thumb src={`./assets/Alabay Games/${folder ? (folder + '/') : ''}${img}`} key={i} />
                    ))
                }
            </div>
        </div>
    )
}

function Thumb({ src }) {
    return (
        <img src={src} className='rounded-3xl w-full h-full max-h-56 border-4 border-white' style={{ objectFit: 'cover', objectPosition: 'center center' }}></img>
    )
}