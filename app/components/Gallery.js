import ArrowBtn from "./icons/ArrowBtn"

export default function Gallery() {
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
        <div className="relative z-10 mt-52 pb-32">
            <div className="flex gap-9 text-3xl mx-auto justify-center z-20">
                <div className="text-black hover:text-yellow-400 cursor-pointer font-extrabold">ALL</div>
                <div className="text-black hover:text-yellow-400 cursor-pointer font-extrabold">PHOTOS</div>
                <div className="text-black hover:text-yellow-400 cursor-pointer font-extrabold">VIDEOS</div>
            </div>
            <div className="container grid grid-flow-col justify-center ps-14 pr-2 mt-16 w-full">
                <div className="grid grid-flow-col gap-12 overflow-x-auto overflow-y-clip">
                    {
                        cardData.map((card, index) => {
                            return <Card key={index} type={card.type} src={card.src} />
                        })
                    }
                </div>
                <ArrowBtn w={'7.56rem'} h={"10.75rem"} className={"ml-6"} />
            </div>
        </div>
    )
}

function Card({ type = "photo", src }) {
    return (
        <div className="rounded-2xl bg-slate-700 overflow-hidden border-8 border-white hover:border-black" style={{ height: '19rem', width: '28rem' }}>
            {
                type === "photo" ? <img src={src} className="rounded-2xl" style={{ objectPosition: 'center', objectFit: "cover" }} /> : <video src={src} className="w-full rounded-2xl" />
            }
        </div>
    )
}