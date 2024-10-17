export default function Header() {
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