'use client'
import { useRef } from "react";
import Arrow from "./icons/Arrow";

export default function Merchandise() {
    const container = useRef();
    const bgElem = useRef();

    const bgSrcs = ["pink tee bck.png", "yellow tee bck.png", "black hoodie bck.png", "blue cap bck.png"];
    const productSrcs = ["pink tshirt.png", "yellow tshirt.png", "black hoodie.png", "cap mockup.png"];

    const scrollContainer = (direction) => {
        const containerEl = container.current;
        const scrollAmount = direction === 'left' ? -containerEl.clientWidth - 32 : containerEl.clientWidth + 32;
        containerEl.scrollBy({ left: scrollAmount, behavior: 'smooth' });

        const nextIndex = Math.floor((containerEl.scrollLeft + scrollAmount) / containerEl.clientWidth) % bgSrcs.length;
        bgElem.current.src = `./assets/Alabay Merch/${bgSrcs[nextIndex]}`;
    };

    return (
        <div className="md:px-20 pb-32 relative">
            <h1 className="relative ff-c text-orange-400 text-center z-20 main-heading">MERCHANDISE</h1>
            <div className="flex justify-center items-center gap-4 mx-2">
                <div className="rotate-180 p-5 bg-white shadow-sm shadow-black rounded-full z-20 cursor-pointer" onClick={() => scrollContainer('left')}>
                    <Arrow width={2} height={2} fill="black" />
                </div>
                <div className="relative z-20 flex-1 overflow-hidden">
                    <div className="flex flex-row overflow-x-auto sliding-container whitespace-nowrap" ref={container}>
                        {productSrcs.map((src, index) => (
                            <img
                                key={index}
                                src={"./assets/Alabay Merch/" + src}
                                className="w-full mr-8 sliding-image inline-block rounded-3xl z-20"
                                style={{ objectFit: 'cover' }}
                            />
                        ))}
                        <img
                            src={`./assets/Alabay Merch/${bgSrcs[0]}`}
                            alt="Background"
                            className="absolute inset-0 w-full h-full object-cover z-0 rounded-3xl"
                            ref={bgElem}
                        />
                    </div>
                </div>
                <div className="p-5 bg-white shadow-sm shadow-black rounded-full z-20 cursor-pointer" onClick={() => scrollContainer('right')}>
                    <Arrow width={2} height={2} fill="black" />
                </div>
            </div>
            <img src="./assets/yellow-bg-2.svg" className="z-10 absolute left-0 -translate-y-1/4" style={{ zIndex: 5, left: "2.05%", width: '95.9%' }} />
        </div>
    )
}
