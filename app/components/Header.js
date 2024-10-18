import ReflectImage from "@/components/ReflectImage";

export default function Header() {
    return (
        <div className="w-full h-full">
            {/* bg */}
            <img src="./assets/yellow-bg-1.svg" className="absolute w-full pr-0 lg:pr-16" />

            {/* white bar */}
            <div className="rounded-full bg-white opacity-70 relative left-1/2 -translate-x-1/2 top-6" style={{
                width: '14.43rem',
                height: '1.8rem',
            }}></div>

            <div className="absolute top-40 w-full md:w-11/12 lg:w-7/12 z-10">
                <ReflectImage src={"./assets/DALL·E 2024-07-14 16.40.05 - A 3D cartoon illustration of a furry Central Asian Shepherd dog jumping happily in the air. The dog should have a joyful expression with a wide smile, 2.png"} />
            </div>

            <div className="text-center lg:text-right container mr-20 w-full px-3 lg:w-5/12 relative z-10 ms-auto h-full mt-24">
                <h1 style={{ color: 'rgba(247, 105, 2, 0.82)', fontSize: '5.5rem', lineHeight: 1 }}>
                    <span className="font-extrabold ff-m">History Of</span>
                    <div className="ff-c text-white tracking-wide mt-10" style={{ fontSize: '11.25rem' }}>ALABAY</div>
                </h1>
                <p className="mt-10 ff-k font-extrabold" style={{ fontSize: '2.5rem', lineHeight: 1 }}>
                    The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.
                </p>
            </div>
        </div>
    )
}