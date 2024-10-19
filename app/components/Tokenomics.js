export default function Tokenomics() {
    return (
        <div className="md:px-20 pb-32">
            <h1 className="ff-c relative text-orange-400 lg:text-white text-center lg:text-left z-20 main-heading">TOKENOMICS</h1>
            <div className="flex flex-col relative lg:flex-row z-20">
                <div className="flex flex-col gap-12 justify-center items-start flex-1 font-bold text-white px-6 text-center md:text-left">
                    <div className="bg-black shadow-2xl shadow-black rounded-3xl py-5 px-14 w-full">
                        <div style={{ fontSize: '2.56rem' }}>LIQUIDITY</div>
                        <div style={{ fontSize: '4.56rem', lineHeight: 1 }} className="text-yellow-300 font-extrabold">LOCKED</div>
                    </div>
                    <div className="bg-black shadow-2xl shadow-black rounded-3xl py-5 md:px-14 w-full">
                        <div style={{ fontSize: '2.56rem' }}>LIQUIDITY</div>
                        <div style={{ fontSize: '4.46rem', lineHeight: 1 }} className="text-yellow-300 font-extrabold">RENOUNCED</div>
                    </div>
                    <div className="bg-black shadow-2xl shadow-black rounded-3xl py-5 px-14 w-full">
                        <div style={{ fontSize: '2.56rem' }}>TAXES</div>
                        <div style={{ fontSize: '4.56rem', lineHeight: 1 }} className="text-yellow-300 font-extrabold">0%</div>
                    </div>
                </div>
                <img className="w-full pt-10 lg:w-7/12 lg:pt-0" src="./assets/DALL·E 2024-07-23 00.50.44 - A 3D cartoon illustration of a furry Central Asian Shepherd Alabay dog with big eyes, wearing a cap with a dollar logo on its head and counting money_ 1.png" />
            </div>
            <img src="./assets/yellow-bg-2.svg" className="z-10 absolute left-0" style={{ zIndex: 5, left: "2%", width: '96%', transform: 'translateY(-80%)' }} />
        </div>
    )
}