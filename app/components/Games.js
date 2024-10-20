'use client'
import Link from "next/link";
import Arrow from "./icons/Arrow";
import ArrowBtn from "./icons/ArrowBtn";
import { useEffect, useRef, useState } from "react";

export default function Games() {
    const container = useRef();
    const gamePreviewContainer = useRef();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        let animationFrameId;

        const startAnimation = () => {
            setTimeout(() => {
                changeSlide()
                animationFrameId = requestAnimationFrame(startAnimation);
            }, 3000); // 3s delay
        };

        startAnimation();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    function changeSlide() {
        const containerEl = container.current;
        containerEl.scrollBy({ left: containerEl.clientWidth + 32, behavior: 'smooth' });
        if (containerEl.scrollLeft >= containerEl.scrollWidth - containerEl.clientWidth - 32) {
            containerEl.scrollLeft = 0;
        }
        const newIndex = containerEl.scrollLeft === 0 ? 1 : 0;
        setCurrentImageIndex(newIndex);
    }

    const handleScroll = (direction) => {
        const containerEl = gamePreviewContainer.current;
        const scrollAmount = 400;
        if (direction === 'left') {
            containerEl.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            containerEl.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="px-4 md:px-12 pb-32 z-20 relative">
            <h1 className="ff-c text-white text-center main-heading">GAMES</h1>
            <p className="mt-0 mb-5 ff-m font-extrabold text-center mx-auto" style={{ fontSize: '4rem', lineHeight: 1.2 }}>Stay tuned for upcoming games !</p>
            <div className="w-full">
                <div className="flex flex-row overflow-x-auto sliding-container whitespace-nowrap" style={{ minHeight: '40rem' }} ref={container}>
                    <img src={"./assets/Alabay Games/alabay guard prev 2 1.png"} className="w-full mr-8 sliding-image inline-block" style={{ borderRadius: '3.75rem', border: '1rem solid #fff', objectFit: 'cover' }} />
                    <img src={"./assets/Alabay Games/alabay lost heritage prev 1.png"} className="w-full mr-8 sliding-image inline-block" style={{ borderRadius: '3.75rem', border: '1rem solid #fff', objectFit: 'cover' }} />
                    <img src={"./assets/Alabay Games/alabay guard prev 2 1.png"} className="w-full sliding-image inline-block" style={{ borderRadius: '3.75rem', border: '1rem solid #fff', objectFit: 'cover' }} />
                    <ArrowBtn w={'5.56rem'} h={"8.75rem"} className={"absolute right-0 top-1/3 translate-y-1/2 -translate-x-full"} onClick={changeSlide} />
                </div>
                <div className="flex justify-center -translate-y-44">
                    {currentImageIndex === 0 && (
                        <Link href={"/shepherd-of-the-steppes"} className="cursor-pointer">
                            <div className="flex gap-4 text-3xl text-white p-5 px-10 rounded-full font-extrabold shadow-xl shadow-black cursor-pointer" style={{ backgroundColor: "#843AFC" }}>
                                <p>DISCOVER</p><Arrow width={2.5} className={"my-auto ms-auto"} />
                            </div>
                        </Link>
                    )}
                    {currentImageIndex === 1 && (
                        <Link href={"/the-lost-adventure"} className="cursor-pointer">
                            <div className="flex gap-4 text-3xl text-white p-5 px-10 rounded-full font-extrabold shadow-xl shadow-black cursor-pointer" style={{ backgroundColor: "#45D689" }}>
                                <p>DISCOVER</p><Arrow width={2.5} className={"my-auto ms-auto"} />
                            </div>
                        </Link>
                    )}
                </div>
            </div>
            <h1 className="font-extrabold text-5xl ff-m text-center md:text-left"><span style={{ color: '#FFA800' }}>GAME</span> PREVIEWS</h1>
            <div className="grid grid-flow-col mt-8">
                <div className="grid grid-flow-col gap-8 overflow-x-auto overflow-y-clip" ref={gamePreviewContainer}>
                    <div className="rounded-3xl bg-slate-700 overflow-hidden border-8 border-white hover:border-black" style={{ width: '25rem', height: '25rem' }}>
                        <img src={"./assets/Alabay Games/artifacts 2.png"} className="rounded-2xl" style={{ objectPosition: 'center', objectFit: "cover" }} />
                    </div>
                    <div className="rounded-3xl bg-slate-700 overflow-hidden border-8 border-white hover:border-black" style={{ width: '25rem', height: '25rem' }}>
                        <img src={"./assets/Alabay Games/Abilities 2.png"} className="rounded-2xl" style={{ objectPosition: 'center', objectFit: "cover" }} />
                    </div>
                    <div className="rounded-3xl bg-slate-700 overflow-hidden border-8 border-white hover:border-black" style={{ width: '25rem', height: '25rem' }}>
                        <img src={"./assets/Alabay Games/image 3 alabay guard 2.png"} className="rounded-2xl" style={{ objectPosition: 'center', objectFit: "cover" }} />
                    </div>
                </div>
                <ArrowBtn w={'5.56rem'} h={"8.75rem"} className={"ml-2"} onClick={() => handleScroll('right')} />
            </div>
        </div>
    )
}
