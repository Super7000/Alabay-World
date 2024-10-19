'use client'
import { useEffect, useRef, useState } from "react";
import Arrow from "./icons/Arrow";

export default function Merchandise() {
    const productElem = useRef();
    const bgElem = useRef();
    const bgSrcs = ["pink tee bck.png", "yellow tee bck.png", "black hoodie bck.png", "blue cap bck.png"]
    const productSrcs = ["pink tshirt.png", "yellow tshirt.png", "black hoodie.png", "cap mockup.png"]
    const [bg, setBg] = useState(bgSrcs[0]);
    const [product, setProduct] = useState(productSrcs[0])
    const [animateState, setAnimateState] = useState('enter'); // 'enter', 'middle', 'exit'
    const [bgAnimateState, setBgAnimateState] = useState('fade-in'); // 'fade-in', 'fade-out'
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextProduct();
        }, 3000)
        return () => {
            clearInterval(interval)
        }
    }, [index])

    const nextProduct = () => {
        setAnimateState('enter');
        setBgAnimateState('fade-out');
        setTimeout(() => {
            setAnimateState('middle');
            setBgAnimateState('fade-in');
            setTimeout(() => {
                setAnimateState('exit');
                setTimeout(() => {
                    const newIndex = (index + 1) % bgSrcs.length;
                    setBg(bgSrcs[newIndex]);
                    setProduct(productSrcs[newIndex]);
                    setIndex(newIndex);
                }, 500); // Duration of the "exit" animation
            }, 2000); // Duration of the "middle" state
        }, 500); // Duration of the "enter" animation
    }

    const prevProduct = () => {
        setAnimateState('enter');
        setBgAnimateState('fade-out');
        setTimeout(() => {
            setAnimateState('middle');
            setBgAnimateState('fade-in');
            setTimeout(() => {
                setAnimateState('exit');
                setTimeout(() => {
                    const newIndex = (index - 1 + bgSrcs.length) % bgSrcs.length;
                    setBg(bgSrcs[newIndex]);
                    setProduct(productSrcs[newIndex]);
                    setIndex(newIndex);
                }, 500); // Duration of the "exit" animation
            }, 2000); // Duration of the "middle" state
        }, 500); // Duration of the "enter" animation
    }

    return (
        <div className="md:px-20 pb-32">
            <h1 className="relative ff-c text-orange-400 text-center z-20 main-heading">MERCHANDISE</h1>
            <div className="flex justify-center items-center gap-4 mx-2">
                <div className="rotate-180 p-5 bg-white shadow-sm shadow-black rounded-full z-20 cursor-pointer" onClick={prevProduct}>
                    <Arrow width={2} height={2} fill="black" />
                </div>
                <div className="relative z-20 flex-1 overflow-hidden">
                    <img
                        src={"./assets/Alabay Merch/" + bg}
                        className={`rounded-3xl transition-opacity bg-slate-600 ${bgAnimateState === 'fade-in' ? 'opacity-100' : 'opacity-0'}`}
                        ref={bgElem}
                    />
                    <img
                        src={"./assets/Alabay Merch/" + product}
                        className={`absolute transition-all -translate-y-full duration-500 ${animateState === 'enter' ? 'translate-x-full opacity-0' : animateState === 'middle' ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
                        ref={productElem}
                    />
                </div>
                <div className="p-5 bg-white shadow-sm shadow-black rounded-full z-20 cursor-pointer" onClick={nextProduct}>
                    <Arrow width={2} height={2} fill="black" />
                </div>
            </div>
            <img src="./assets/yellow-bg-2.svg" className="z-10 absolute left-0 -translate-y-1/4" style={{ zIndex: 5, left: "2.05%", width: '95.9%' }} />
        </div>
    )
}
