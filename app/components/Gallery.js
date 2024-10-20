'use client'
import ArrowBtn from "./icons/ArrowBtn"
import { useState, useRef } from 'react';
export default function Gallery() {
    const [filter, setFilter] = useState("ALL");
    const scrollContainerRef = useRef(null);

    let cardData = [
        {
            type: "photo",
        },
        {
            type: "photo",
        },
        {
            type: "photo",
        },
        {
            type: "photo",
        },
        {
            type: "photo",
        },
        {
            type: "video",
        }
    ];

    const filteredData = filter === "ALL" ? cardData : cardData.filter(card => card.type.toUpperCase() === filter);

    const handleScroll = (direction) => {
        if (scrollContainerRef.current) {
            if (direction === 'left') {
                scrollContainerRef.current.scrollBy({
                    left: -300,
                    behavior: 'smooth'
                });
            } else {
                scrollContainerRef.current.scrollBy({
                    left: 300,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <div className="relative z-10 mt-52 pb-32">
            <div className="flex gap-9 text-3xl mx-auto justify-center z-20">
                <div className={`text-black hover:text-yellow-400 cursor-pointer font-extrabold ${filter === "ALL" ? "text-yellow-400" : ""}`} onClick={() => setFilter("ALL")}>ALL</div>
                <div className={`text-black hover:text-yellow-400 cursor-pointer font-extrabold ${filter === "PHOTO" ? "text-yellow-400" : ""}`} onClick={() => setFilter("PHOTO")}>PHOTOS</div>
                <div className={`text-black hover:text-yellow-400 cursor-pointer font-extrabold ${filter === "VIDEO" ? "text-yellow-400" : ""}`} onClick={() => setFilter("VIDEO")}>VIDEOS</div>
            </div>
            <div className="grid grid-flow-col justify-center ps-4 pr-4 mt-16 w-full">
                <ArrowBtn w={'5.56rem'} h={"8.75rem"} className={"ml-0 mr-6 rotate-180"} onClick={() => handleScroll('left')} />
                <div className="grid grid-flow-col gap-12 overflow-x-auto overflow-y-clip" ref={scrollContainerRef}>
                    {
                        filteredData.map((card, index) => {
                            return <Card key={index} type={card.type} src={card.src || null} />
                        })
                    }
                </div>
                <ArrowBtn w={'5.56rem'} h={"8.75rem"} className={"ml-6"} onClick={() => handleScroll('right')} />
            </div>
        </div>
    )
}

function Card({ type = "photo", src }) {
    return (
        <div className={"rounded-2xl overflow-hidden border-8 border-transparent hover:border-black" + (src === null ? ' flex justify-center items-center' : "")} style={{ height: '19rem', width: '28rem', backgroundColor: '#A6A6A6' }}>
            {
                src && (type === "photo" ? <img src={src} className="rounded-2xl" style={{ objectFit: "cover", objectPosition: 'center center' }} /> : <video src={src} className="w-full rounded-2xl" />)
            }
            {
                src === null ? <div className="text-2xl font-bold m-auto text-white">{type.toUpperCase()}</div> : ''
            }
        </div>
    )
}