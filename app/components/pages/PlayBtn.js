import Play from '../icons/Play'

export default function PlayBtn({ themeColor = '#90FFAE' }) {
    return (
        <div className='mt-10'>
            <button className='flex items-center rounded-full pl-5 pr-12 py-3 transition-all my-auto mr-auto active:pl-3 active:pr-11 active:py-2 active:ml-2' style={{ background: themeColor }}>
                <Play />
                <span className='text-black ff-m ml-6 font-bold' style={{ fontSize: '1.375rem' }}>PLAY</span>
            </button>
        </div>
    )
}