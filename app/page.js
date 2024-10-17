export default function Home() {
    return (
        <div>
            <Header />
            <Cards />
            <ProjectVision />
            <RoadMap />
            <VerticalCards />
            <Tokenomics />
            <Merchandise />
            <Games />
            <SocialMedia />
        </div>
    )
}


function Header() {
    return (
        <div className="w-full">
            {/* bg */}
            <svg xmlns="http://www.w3.org/2000/svg" width="1796" viewBox="0 0 1796 1177" fill="none" className="w-full absolute top-0 -z-10">
                <path d="M-2.34642 38.0611C-1.31258 16.7482 16.2686 -0.000827721 37.6066 -0.00083385L1754.47 -0.000806873C1776.38 -0.00079702 1794.21 17.6204 1794.47 39.5255L1807.45 1135.84C1807.74 1160.2 1786.38 1179.15 1762.24 1175.98L-9.48193 942.806C-30.1191 940.09 -45.2242 922 -44.2157 901.21L-2.34642 38.0611Z" fill="url(#paint0_radial_217_399)" />
                <defs>
                    <radialGradient id="paint0_radial_217_399" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(894.201 679.176) rotate(-5.34706) scale(851.75 516.822)">
                        <stop stop-color="#FFF280" />
                        <stop offset="1" stop-color="#FFC700" />
                    </radialGradient>
                </defs>
            </svg>

            {/* white bar */}
            <div className="rounded-full bg-white opacity-70 mt-6 relative left-1/2 -translate-x-1/2" style={{
                width: '231px',
                height: '29px'
            }}></div>

            <div className="text-right container px-4 flex w-full mt-9">
                <div className="relative top-36">
                    <img src={"./assets/DALL·E 2024-07-14 16.40.05 - A 3D cartoon illustration of a furry Central Asian Shepherd dog jumping happily in the air. The dog should have a joyful expression with a wide smile, 2.png"} width={"100%"} />
                    <div className="reflect" style={{ backgroundImage: 'url("./assets/DALL·E 2024-07-14 16.40.05 - A 3D cartoon illustration of a furry Central Asian Shepherd dog jumping happily in the air. The dog should have a joyful expression with a wide smile, 2.png")' }}></div>
                </div>

                {/* texts */}
                <div className="-translate-x-16 w-7/12">
                    <h1 className="text-8xl" style={{ color: 'rgba(247, 105, 2, 0.82)' }}><span className="font-extrabold ff-m">History Of</span> <div className="ff-c text-white tracking-wide" style={{ fontSize: '11.25rem' }}>ALABAY</div></h1>
                    <p className="mt-9 ff-k font-extrabold" style={{ fontSize: '2.5rem', lineHeight: 1 }}>
                        The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.
                    </p>
                </div>
            </div>
        </div>
    )
}

function Cards() {
    let cardData = [
        {
            type: "photo",
            src: "./assets/DALL·E 2024-07-14 16.40.05 - A 3D cartoon illustration of a furry Central Asian Shepherd dog jumping happily in the air. The dog should have a joyful expression with a wide smile, 2.png",
        },
        {
            type: "photo",
            src: "./assets/DALL·E 2024-07-14 16.40.05 - A 3D cartoon illustration of a furry Central Asian Shepherd dog jumping happily in the air. The dog should have a joyful expression with a wide smile, 2.png",
        },
        {
            type: "photo",
            src: "./assets/DALL·E 2024-07-14 16.40.05 - A 3D cartoon illustration of a furry Central Asian Shepherd dog jumping happily in the air. The dog should have a joyful expression with a wide smile, 2.png",
        },
        {
            type: "photo",
            src: "./assets/DALL·E 2024-07-14 16.40.05 - A 3D cartoon illustration of a furry Central Asian Shepherd dog jumping happily in the air. The dog should have a joyful expression with a wide smile, 2.png",
        },
        {
            type: "photo",
            src: "./assets/DALL·E 2024-07-14 16.40.05 - A 3D cartoon illustration of a furry Central Asian Shepherd dog jumping happily in the air. The dog should have a joyful expression with a wide smile, 2.png",
        },
        {
            type: "video",
            src: "./assets/DALL·E 2024-07-14 16.40.05 - A 3D cartoon illustration of a furry Central Asian Shepherd dog jumping happily in the air. The dog should have a joyful expression with a wide smile, 2.png",
        }
    ]

    return (
        <>
            <div className="flex gap-9 text-3xl mx-auto justify-center">
                <div className="text-black hover:text-yellow-400 cursor-pointer font-extrabold">ALL</div>
                <div className="text-black hover:text-yellow-400 cursor-pointer font-extrabold">PHOTOS</div>
                <div className="text-black hover:text-yellow-400 cursor-pointer font-extrabold">VIDEOS</div>
            </div>
            <div className="container grid grid-flow-col justify-center ps-14 pr-4 mt-8">
                <div className="grid grid-flow-col gap-12 overflow-x-auto overflow-y-clip">
                    {
                        cardData.map((card, index) => {
                            return <Card key={index} type={card.type} src={card.src} />
                        })
                    }
                </div>
                <svg viewBox="0 0 159 210" fill="none" xmlns="http://www.w3.org/2000/svg" className="my-auto ml-6 cursor-pointer active:p-3 transition-all" style={{ width: "159", height: "210" }}>
                    <g id="Frame 3">
                        <g id="Rectangle 7" filter="url(#filter0_d_13002_594)">
                            <rect x="11" y="10" width="121" height="172" rx="33.8647" fill="#353535" />
                        </g>
                        <g id="Union">
                            <mask id="path-2-outside-1_13002_594" maskUnits="userSpaceOnUse" x="30.3984" y="61.3867" width="80" height="69" fill="black">
                                <rect fill="white" x="30.3984" y="61.3867" width="80" height="69" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M69.9453 69.5131C72.7805 66.6779 77.3772 66.6779 80.2125 69.5131L100.792 90.0931C100.927 90.2279 101.056 90.3667 101.178 90.5091C102.733 91.8406 103.718 93.8183 103.718 96.0262C103.718 97.2013 103.439 98.3111 102.944 99.293C102.591 100.104 102.083 100.864 101.419 101.527L80.8394 122.107C78.0042 124.942 73.4074 124.942 70.5722 122.107C67.737 119.272 67.737 114.675 70.5722 111.84L79.1258 103.286H43.6584C39.6488 103.286 36.3984 100.036 36.3984 96.0262C36.3984 92.0167 39.6488 88.7662 43.6584 88.7662H78.9312L69.9453 79.7803C67.1101 76.9451 67.1101 72.3483 69.9453 69.5131Z" />
                            </mask>
                            <path fillRule="evenodd" clipRule="evenodd" d="M69.9453 69.5131C72.7805 66.6779 77.3772 66.6779 80.2125 69.5131L100.792 90.0931C100.927 90.2279 101.056 90.3667 101.178 90.5091C102.733 91.8406 103.718 93.8183 103.718 96.0262C103.718 97.2013 103.439 98.3111 102.944 99.293C102.591 100.104 102.083 100.864 101.419 101.527L80.8394 122.107C78.0042 124.942 73.4074 124.942 70.5722 122.107C67.737 119.272 67.737 114.675 70.5722 111.84L79.1258 103.286H43.6584C39.6488 103.286 36.3984 100.036 36.3984 96.0262C36.3984 92.0167 39.6488 88.7662 43.6584 88.7662H78.9312L69.9453 79.7803C67.1101 76.9451 67.1101 72.3483 69.9453 69.5131Z" fill="white" />
                            <path d="M80.2125 69.5131L84.4551 65.2705V65.2705L80.2125 69.5131ZM69.9453 69.5131L74.1879 73.7558V73.7558L69.9453 69.5131ZM100.792 90.0931L96.5498 94.3357L96.5498 94.3358L100.792 90.0931ZM101.178 90.5091L96.6211 94.4127L96.923 94.7651L97.2754 95.0668L101.178 90.5091ZM102.944 99.293L97.5873 96.5896L97.5103 96.7421L97.4421 96.8988L102.944 99.293ZM101.419 101.527L97.1767 97.2844L101.419 101.527ZM80.8394 122.107L85.082 126.35L80.8394 122.107ZM79.1258 103.286L83.3684 107.529L93.6111 97.2862H79.1258V103.286ZM78.9312 88.7662V94.7662H93.4165L83.1738 84.5236L78.9312 88.7662ZM69.9453 79.7803L74.1879 75.5377L69.9453 79.7803ZM84.4551 65.2705C79.2767 60.0921 70.881 60.0921 65.7026 65.2705L74.1879 73.7558C74.68 73.2637 75.4778 73.2637 75.9698 73.7558L84.4551 65.2705ZM105.035 85.8504L84.4551 65.2705L75.9698 73.7558L96.5498 94.3357L105.035 85.8504ZM105.734 86.6054C105.512 86.3462 105.279 86.0943 105.035 85.8504L96.5498 94.3358C96.5755 94.3615 96.5992 94.3871 96.6211 94.4127L105.734 86.6054ZM109.718 96.0262C109.718 91.9922 107.91 88.3741 105.08 85.9513L97.2754 95.0668C97.5561 95.3071 97.7185 95.6445 97.7185 96.0262H109.718ZM108.3 101.996C109.209 100.195 109.718 98.1616 109.718 96.0262H97.7185C97.7185 96.2409 97.6694 96.4268 97.5873 96.5896L108.3 101.996ZM105.662 105.77C106.866 104.566 107.797 103.177 108.445 101.687L97.4421 96.8988C97.3844 97.0315 97.2996 97.1615 97.1767 97.2844L105.662 105.77ZM85.082 126.35L105.662 105.77L97.1767 97.2844L76.5968 117.864L85.082 126.35ZM66.3296 126.35C71.5079 131.528 79.9037 131.528 85.082 126.35L76.5968 117.864C76.1047 118.356 75.3069 118.356 74.8149 117.864L66.3296 126.35ZM66.3296 107.597C61.1512 112.776 61.1512 121.171 66.3296 126.35L74.8149 117.864C74.3228 117.372 74.3228 116.575 74.8148 116.082L66.3296 107.597ZM74.8832 99.0436L66.3296 107.597L74.8148 116.082L83.3684 107.529L74.8832 99.0436ZM43.6584 109.286H79.1258V97.2862H43.6584V109.286ZM30.3984 96.0262C30.3984 103.35 36.3351 109.286 43.6584 109.286V97.2862C42.9626 97.2862 42.3984 96.7221 42.3984 96.0262H30.3984ZM43.6584 82.7662C36.3351 82.7662 30.3984 88.703 30.3984 96.0262H42.3984C42.3984 95.3304 42.9626 94.7662 43.6584 94.7662V82.7662ZM78.9312 82.7662H43.6584V94.7662H78.9312V82.7662ZM65.7026 84.0229L74.6886 93.0089L83.1738 84.5236L74.1879 75.5377L65.7026 84.0229ZM65.7026 65.2705C60.5243 70.4488 60.5243 78.8446 65.7026 84.0229L74.1879 75.5377C73.6958 75.0456 73.6958 74.2478 74.1879 73.7558L65.7026 65.2705Z" fill="#353535" mask="url(#path-2-outside-1_13002_594)" />
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_d_13002_594" x="0" y="0" width="159" height="210" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="8" dy="9" />
                            <feGaussianBlur stdDeviation="9.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13002_594" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13002_594" result="shape" />
                        </filter>
                    </defs>
                </svg>

            </div>
        </>
    )
}

function Card({ type = "photo", src }) {
    return (
        <div className="rounded-2xl bg-slate-700 overflow-hidden border-8 border-transparent hover:border-black" style={{ height: '300px', width: '436px' }}>
            {
                type === "photo" ? <img src={src} className="rounded-2xl" style={{ objectPosition: 'center', objectFit: "cover" }} /> : <video src={src} className="w-full rounded-2xl" />
            }
        </div>
    )
}

function ProjectVision() {
    return (
        <div className="mt-16">
            <h1 className="ff-c text-orange-400 text-center" style={{ fontSize: '185px' }}>PROJECT VISION</h1>
            <img src="./assets/DALL·E 2024-07-14 20.01.25 - A wide 3D cartoon illustration of a group of furry Central Asian Shepherd dog friends. The dogs should have joyful expressions with wide smiles, ears_ 2.png" ></img>
            <p className="mt-9 ff-k font-extrabold text-center w-10/12 mx-auto" style={{ fontSize: '40px', lineHeight: 1 }}>
                Our mission is to honor the heritage of the Alabay by creating a vibrant, loyal, and powerful community. Just as the Alabay protects its flock, we aim to build a pack that stands strong together.
            </p>
        </div>
    )
}

function RoadMap() {
    return (
        <div className="mt-16">
            <h1 className="ff-c text-orange-400 text-center" style={{ fontSize: '185px' }}>ROAD MAP</h1>
            <div className="flex items-center">
                <p className="mt-9 ff-k font-extrabold text-left mx-auto ml-28" style={{ fontSize: '40px', lineHeight: 1 }}>
                    Our journey is just beginning. Explore our roadmap to see the exciting milestones and future plans we have in store.
                    <br />
                    <br />
                    <span className="text-orange-400">Join us as we grow and achieve new heights.</span>
                </p>
                <img src="./assets/DALL·E 2024-07-14 21.37.17 - A 3D cartoon illustration of a very happy furry Central Asian Shepherd dog in explorer attire, standing at a crossroads and holding a map with a yello 2.png" className="w-6/12" ></img>
            </div>
        </div>
    )
}

function VerticalCards() {
    return (
        <div className="container px-20 gap-4 flex justify-center justify-items-center text-center">
            <div className="p-5 px-2" style={{ background: 'linear-gradient(180deg, #DBC70C 0%, rgba(255, 242, 128, 0.00) 100%)', borderTopLeftRadius: '3rem' }}>
                <div className="text-4xl text-white font-bold">Community Building
                    and Initial Launch</div>
                <img src="./assets/DALL·E 2024-07-15 01.28.43 - A full body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed as a construction worker. The dog should have a big_ 3.png" />
            </div>
            <div className="p-5 px-2" style={{ background: 'linear-gradient(180deg, #00D4D4 0%, rgba(65, 255, 255, 0.00) 100%)' }}>
                <div className="text-4xl text-white font-bold">Community Building
                    and Initial Launch</div>
                <img src="./assets/DALL·E 2024-07-15 01.31.03 - A full-body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed in a t-shirt with an Alabay dog printed on it and we 2.png" />
            </div>
            <div className="p-5 px-2" style={{ background: "linear-gradient(180deg, #D427FF 0%, rgba(212, 39, 255, 0.00) 100%)" }}>
                <div className="text-4xl text-white font-bold">Community Building
                    and Initial Launch</div>
                <img src="./assets/DALL·E 2024-07-15 01.32.53 - A full-body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog celebrating with a trophy. The dog should have a big smile a 1.png" />
            </div>
            <div className="p-5 px-2" style={{ background: 'linear-gradient(180deg, #8F3A3C 0.41%, rgba(143, 58, 60, 0.00) 95.85%)', borderTopRightRadius: '3rem' }}>
                <div className="text-4xl text-white font-bold">Community Building
                    and Initial Launch</div>
                <img src="./assets/DALL·E 2024-07-15 01.33.29 - A full-body 3D cute cartoon illustration of a very happy furry Central Asian Shepherd dog dressed in a Viking outfit. The dog should have a big smile_ 1.png" />
            </div>
        </div>
    )
}

function Tokenomics() {
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

function Merchandise() {
    return (
        <div className="px-20">
            <h1 className="ff-c text-orange-400 text-center" style={{ fontSize: '185px' }}>MERCHANDISE</h1>
            <div className="w-full">
                <img src={"./assets/Alabay Merch/black hoodie bck.png"} className="w-full rounded-3xl" />
            </div>
        </div>
    )
}

function Games() {
    return (
        <div className="px-12">
            <h1 className="ff-c text-orange-400 text-center" style={{ fontSize: '185px' }}>GAMES</h1>
            <p className="mt-0 mb-5 ff-k font-extrabold text-center mx-auto ml-28" style={{ fontSize: '64px' }}>Stay tuned for upcoming games !</p>
            <div className="w-full">
                <div className="flex flex-row overflow-x-auto">
                    <img src={"./assets/Alabay Games/alabay guard prev 2 1.png"} className="w-full" style={{ borderRadius: '60px', border: '1rem solid #fff' }} />
                    <img src={"./assets/Alabay Games/alabay lost heritage prev 1.png"} className="w-full" style={{ borderRadius: '60px', border: '1rem solid #fff' }} />
                </div>
                <div className="flex justify-center -translate-y-44">
                    <div className="bg-green-400 text-3xl text-white p-5 px-10 rounded-full font-extrabold">
                        <p>DISCOVER</p>
                    </div>
                </div>
            </div>
            <h1 className="font-extrabold text-5xl"><span className="text-yellow-300">GAME</span> PREVIEW</h1>
            <div className="grid grid-flow-col mt-8">
                <div className="grid grid-flow-col gap-8 overflow-x-auto overflow-y-clip">
                    <div className="rounded-2xl bg-slate-700 overflow-hidden border-8 border-transparent hover:border-black" style={{ width: '400px', height: '400px' }}>
                        <img src={"./assets/Alabay Games/artifacts 2.png"} className="rounded-2xl" style={{ objectPosition: 'center', objectFit: "cover" }} />
                    </div>
                    <div className="rounded-2xl bg-slate-700 overflow-hidden border-8 border-transparent hover:border-black" style={{ width: '400px', height: '400px' }}>
                        <img src={"./assets/Alabay Games/Abilities 2.png"} className="rounded-2xl" style={{ objectPosition: 'center', objectFit: "cover" }} />
                    </div>
                    <div className="rounded-2xl bg-slate-700 overflow-hidden border-8 border-transparent hover:border-black" style={{ width: '400px', height: '400px' }}>
                        <img src={"./assets/Alabay Games/image 3 alabay guard 2.png"} className="rounded-2xl" style={{ objectPosition: 'center', objectFit: "cover" }} />
                    </div>
                </div>
                <svg viewBox="0 0 159 210" fill="none" xmlns="http://www.w3.org/2000/svg" className="my-auto ml-2 cursor-pointer active:p-3 transition-all" style={{ width: "139", height: "190" }}>
                    <g id="Frame 3">
                        <g id="Rectangle 7" filter="url(#filter0_d_13002_594)">
                            <rect x="11" y="10" width="121" height="172" rx="33.8647" fill="#353535" />
                        </g>
                        <g id="Union">
                            <mask id="path-2-outside-1_13002_594" maskUnits="userSpaceOnUse" x="30.3984" y="61.3867" width="80" height="69" fill="black">
                                <rect fill="white" x="30.3984" y="61.3867" width="80" height="69" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M69.9453 69.5131C72.7805 66.6779 77.3772 66.6779 80.2125 69.5131L100.792 90.0931C100.927 90.2279 101.056 90.3667 101.178 90.5091C102.733 91.8406 103.718 93.8183 103.718 96.0262C103.718 97.2013 103.439 98.3111 102.944 99.293C102.591 100.104 102.083 100.864 101.419 101.527L80.8394 122.107C78.0042 124.942 73.4074 124.942 70.5722 122.107C67.737 119.272 67.737 114.675 70.5722 111.84L79.1258 103.286H43.6584C39.6488 103.286 36.3984 100.036 36.3984 96.0262C36.3984 92.0167 39.6488 88.7662 43.6584 88.7662H78.9312L69.9453 79.7803C67.1101 76.9451 67.1101 72.3483 69.9453 69.5131Z" />
                            </mask>
                            <path fillRule="evenodd" clipRule="evenodd" d="M69.9453 69.5131C72.7805 66.6779 77.3772 66.6779 80.2125 69.5131L100.792 90.0931C100.927 90.2279 101.056 90.3667 101.178 90.5091C102.733 91.8406 103.718 93.8183 103.718 96.0262C103.718 97.2013 103.439 98.3111 102.944 99.293C102.591 100.104 102.083 100.864 101.419 101.527L80.8394 122.107C78.0042 124.942 73.4074 124.942 70.5722 122.107C67.737 119.272 67.737 114.675 70.5722 111.84L79.1258 103.286H43.6584C39.6488 103.286 36.3984 100.036 36.3984 96.0262C36.3984 92.0167 39.6488 88.7662 43.6584 88.7662H78.9312L69.9453 79.7803C67.1101 76.9451 67.1101 72.3483 69.9453 69.5131Z" fill="white" />
                            <path d="M80.2125 69.5131L84.4551 65.2705V65.2705L80.2125 69.5131ZM69.9453 69.5131L74.1879 73.7558V73.7558L69.9453 69.5131ZM100.792 90.0931L96.5498 94.3357L96.5498 94.3358L100.792 90.0931ZM101.178 90.5091L96.6211 94.4127L96.923 94.7651L97.2754 95.0668L101.178 90.5091ZM102.944 99.293L97.5873 96.5896L97.5103 96.7421L97.4421 96.8988L102.944 99.293ZM101.419 101.527L97.1767 97.2844L101.419 101.527ZM80.8394 122.107L85.082 126.35L80.8394 122.107ZM79.1258 103.286L83.3684 107.529L93.6111 97.2862H79.1258V103.286ZM78.9312 88.7662V94.7662H93.4165L83.1738 84.5236L78.9312 88.7662ZM69.9453 79.7803L74.1879 75.5377L69.9453 79.7803ZM84.4551 65.2705C79.2767 60.0921 70.881 60.0921 65.7026 65.2705L74.1879 73.7558C74.68 73.2637 75.4778 73.2637 75.9698 73.7558L84.4551 65.2705ZM105.035 85.8504L84.4551 65.2705L75.9698 73.7558L96.5498 94.3357L105.035 85.8504ZM105.734 86.6054C105.512 86.3462 105.279 86.0943 105.035 85.8504L96.5498 94.3358C96.5755 94.3615 96.5992 94.3871 96.6211 94.4127L105.734 86.6054ZM109.718 96.0262C109.718 91.9922 107.91 88.3741 105.08 85.9513L97.2754 95.0668C97.5561 95.3071 97.7185 95.6445 97.7185 96.0262H109.718ZM108.3 101.996C109.209 100.195 109.718 98.1616 109.718 96.0262H97.7185C97.7185 96.2409 97.6694 96.4268 97.5873 96.5896L108.3 101.996ZM105.662 105.77C106.866 104.566 107.797 103.177 108.445 101.687L97.4421 96.8988C97.3844 97.0315 97.2996 97.1615 97.1767 97.2844L105.662 105.77ZM85.082 126.35L105.662 105.77L97.1767 97.2844L76.5968 117.864L85.082 126.35ZM66.3296 126.35C71.5079 131.528 79.9037 131.528 85.082 126.35L76.5968 117.864C76.1047 118.356 75.3069 118.356 74.8149 117.864L66.3296 126.35ZM66.3296 107.597C61.1512 112.776 61.1512 121.171 66.3296 126.35L74.8149 117.864C74.3228 117.372 74.3228 116.575 74.8148 116.082L66.3296 107.597ZM74.8832 99.0436L66.3296 107.597L74.8148 116.082L83.3684 107.529L74.8832 99.0436ZM43.6584 109.286H79.1258V97.2862H43.6584V109.286ZM30.3984 96.0262C30.3984 103.35 36.3351 109.286 43.6584 109.286V97.2862C42.9626 97.2862 42.3984 96.7221 42.3984 96.0262H30.3984ZM43.6584 82.7662C36.3351 82.7662 30.3984 88.703 30.3984 96.0262H42.3984C42.3984 95.3304 42.9626 94.7662 43.6584 94.7662V82.7662ZM78.9312 82.7662H43.6584V94.7662H78.9312V82.7662ZM65.7026 84.0229L74.6886 93.0089L83.1738 84.5236L74.1879 75.5377L65.7026 84.0229ZM65.7026 65.2705C60.5243 70.4488 60.5243 78.8446 65.7026 84.0229L74.1879 75.5377C73.6958 75.0456 73.6958 74.2478 74.1879 73.7558L65.7026 65.2705Z" fill="#353535" mask="url(#path-2-outside-1_13002_594)" />
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_d_13002_594" x="0" y="0" width="159" height="210" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="8" dy="9" />
                            <feGaussianBlur stdDeviation="9.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13002_594" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13002_594" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    )
}

function SocialMedia() {
    return (
        <div className="px-20">
            <h1 className="ff-c text-orange-400 text-left" style={{ fontSize: '185px' }}>SOCIAL MEDIA LINKS</h1>
            <div className="flex justify-center items-center">
                <div className="rounded-3xl flex flex-col justify-start items-start flex-1 bg-blue-500 border-blue-800 text-2xl font-bold text-white p-10 gap-6 mr-auto">
                    <div className="flex justify-center items-center gap-4">
                        <img className="w-16 h-16 p-3 bg-black rounded-full" src="./assets/twitter logo 1.png" />
                        <p>Twitter Link</p>
                    </div>
                    <div className="flex justify-center items-center gap-4" >
                        <img className="w-16 h-16 p-3 bg-black rounded-full" src="./assets/Mask group.png" />
                        <p>Telegram Link</p>
                    </div>
                </div>
                <img className="w-7/12" src={"./assets/DALL·E 2024-07-29 17.36.01 - A 3D cartoon illustration of a cute furry Central Asian Shepherd dog holding a mobile phone and looking at it. The dog has expressive eyes, a fluffy c 2.png"} />
            </div>
        </div>
    )
}