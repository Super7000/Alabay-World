import Play from '../icons/Play'

export default function PlayBtn({ themeColor = '#90FFAE' }) {
    return (
        <div className='mt-5'>
            <button className='flex items-center rounded-full pl-4 pr-11 py-3 transition-all my-auto mr-auto active:pl-2 active:pr-10 active:py-1 active:ml-1' style={{ background: themeColor }}>
                <Play />
                <span className='text-black ff-m ml-6 font-bold' style={{ fontSize: '1rem' }}>PLAY</span>
            </button>
        </div>
    )
}