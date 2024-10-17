export default function Tokenomics() {
    return (
        <div className="px-20">
            <h1 className="ff-c text-orange-400 text-left" style={{ fontSize: '185px' }}>TOKENOMICS</h1>
            <div className="flex flex-row md:flex-col">
                <div className="flex flex-col gap-12 justify-center items-start flex-1 font-bold text-white">
                    <div className="bg-black shadow-2xl shadow-black rounded-3xl py-5 px-14 w-full">
                        <div style={{ fontSize: '41px' }}>LIQUIDITY</div>
                        <div style={{ fontSize: '73px', lineHeight: 1 }} className="text-yellow-300 font-extrabold">LOCKED</div>
                    </div>
                    <div className="bg-black shadow-2xl shadow-black rounded-3xl py-5 px-14 w-full">
                        <div style={{ fontSize: '41px' }}>LIQUIDITY</div>
                        <div style={{ fontSize: '73px', lineHeight: 1 }} className="text-yellow-300 font-extrabold">RENOUNCED</div>
                    </div>
                    <div className="bg-black shadow-2xl shadow-black rounded-3xl py-5 px-14 w-full">
                        <div style={{ fontSize: '41px' }}>TAXES</div>
                        <div style={{ fontSize: '73px', lineHeight: 1 }} className="text-yellow-300 font-extrabold">0%</div>
                    </div>
                </div>
                <img className="w-full sm:w-7/12" src="./assets/DALL·E 2024-07-23 00.50.44 - A 3D cartoon illustration of a furry Central Asian Shepherd Alabay dog with big eyes, wearing a cap with a dollar logo on its head and counting money_ 1.png" />
            </div>
        </div>
    )
}