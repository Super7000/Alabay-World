'use client'
import Link from "next/link";
import Arrow from "./icons/Arrow";
import ArrowBtn from "./icons/ArrowBtn";
import { useEffect, useRef } from "react";

export default function Games() {
    const image = useRef();
    const image1 = useRef();
    const currentImg = useRef(1);
    const container = useRef();
    const btn1 = useRef();
    const btn2 = useRef();

    useEffect(() => {
        let i;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    i = setInterval(() => {
                        goToNext()
                    }, 3000);
                } else {
                    if (i) {
                        clearInterval(i);
                        i = null;
                    }
                }
            },
            { threshold: 0.5 }
        );

        if (container.current) {
            observer.observe(container.current);
        }

        return () => {
            if (container.current) {
                observer.unobserve(container.current);
            }
            if (i) {
                clearInterval(i);
            }
        };

    }, [image, image1, currentImg, container, btn1, btn2]);

    function goToNext() {
        image.current = image.current.nextElementSibling;
        if (image.current && currentImg.current < 4) {
            image.current.scrollIntoView({ behavior: 'smooth' });
            currentImg.current = Number(currentImg.current) + 1;
            if (currentImg.current === 2) {
                btn1.current.style.display = 'none';
                btn2.current.style.display = 'flex';
            } else {
                btn1.current.style.display = 'flex';
                btn2.current.style.display = 'none';
            }
        } else {
            image1.current.scrollIntoView();
            image.current = image1.current.nextElementSibling;
            image1.current.nextElementSibling.scrollIntoView({ behavior: 'smooth' });
            currentImg.current = 2;
            btn1.current.style.display = 'none';
            btn2.current.style.display = 'flex';
        }
    }

    return (
        <div className="px-4 md:px-12 pb-32 z-20 relative">
            <h1 className="ff-c text-white text-center main-heading">GAMES</h1>
            <p className="mt-0 mb-5 ff-m font-extrabold text-center mx-auto" style={{ fontSize: '4rem', lineHeight: 1.2 }}>Stay tuned for upcoming games !</p>
            <div className="w-full">
                <div className="flex flex-row overflow-x-auto" style={{ minHeight: '40rem' }} ref={container}>
                    <img src={"./assets/Alabay Games/alabay guard prev 2 1.png"} className="w-full mr-8" style={{ borderRadius: '60px', border: '1rem solid #fff', objectFit: 'cover' }} ref={elem => {
                        image.current = elem;
                        image1.current = elem;
                    }} />
                    <img src={"./assets/Alabay Games/alabay lost heritage prev 1.png"} className="w-full" style={{ borderRadius: '60px', border: '1rem solid #fff', objectFit: 'cover' }} />
                    <img src={"./assets/Alabay Games/alabay guard prev 2 1.png"} className="w-full mr-8" style={{ borderRadius: '60px', border: '1rem solid #fff', objectFit: 'cover' }} />
                </div>
                <ArrowBtn w={"7.56rem"} h={"10.75rem"} className={"absolute top-1/3 translate-y-1/2 right-0 -translate-x-1/3 mr-4"} onClick={goToNext} />
                <div className="flex justify-center -translate-y-44">
                    <Link href={"/shepherd-of-the-steppes"} className="cursor-pointer" ref={btn1}>
                        <div className="flex gap-4 text-3xl text-white p-5 px-10 rounded-full font-extrabold shadow-xl shadow-black cursor-pointer" style={{ backgroundColor: "#843AFC" }}>
                            <p>DISCOVER</p><Arrow width={2.5} className={"my-auto ms-auto"} />
                        </div>
                    </Link>
                    <Link href={"/the-lost-adventure"} className="cursor-pointer" style={{ display: 'none' }} ref={btn2}>
                        <div className="flex gap-4 text-3xl text-white p-5 px-10 rounded-full font-extrabold shadow-xl shadow-black cursor-pointer" style={{ backgroundColor: "#45D689" }}>
                            <p>DISCOVER</p><Arrow width={2.5} className={"my-auto ms-auto"} />
                        </div>
                    </Link>
                </div>
            </div>
            <h1 className="font-extrabold text-5xl ff-m text-center md:text-left"><span style={{ color: '#FFA800' }}>GAME</span> PREVIEWS</h1>
            <div className="grid grid-flow-col mt-8">
                <div className="grid grid-flow-col gap-8 overflow-x-auto overflow-y-clip">
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
                <ArrowBtn w={'5.56rem'} h={"8.75rem"} className={"ml-2"} />
            </div>
        </div>
    )
}