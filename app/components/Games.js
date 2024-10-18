import Link from "next/link";
import Arrow from "./icons/Arrow";
import ArrowBtn from "./icons/ArrowBtn";

export default function Games() {
    return (
        <div className="px-4 md:px-12 pb-32 z-20 relative">
            <h1 className="ff-c text-white text-center" style={{ fontSize: '11.56rem' }}>GAMES</h1>
            <p className="mt-0 mb-5 ff-k font-extrabold text-center mx-auto" style={{ fontSize: '4rem' }}>Stay tuned for upcoming games !</p>
            <div className="w-full">
                <div className="flex flex-row overflow-x-auto">
                    <img src={"./assets/Alabay Games/alabay guard prev 2 1.png"} className="w-full mr-8" style={{ borderRadius: '60px', border: '1rem solid #fff' }} />
                    <img src={"./assets/Alabay Games/alabay lost heritage prev 1.png"} className="w-full" style={{ borderRadius: '60px', border: '1rem solid #fff' }} />
                </div>
                <div className="flex justify-center -translate-y-44">
                    <Link href={"/shepherd-of-the-steppes"} className="cursor-pointer">
                        <div className="flex gap-4 bg-green-400 text-3xl text-white p-5 px-10 rounded-full font-extrabold shadow-xl shadow-black cursor-pointer">
                            <p>DISCOVER</p><Arrow width={40} className={"my-auto ms-auto"} />
                        </div>
                    </Link>
                </div>
            </div>
            <h1 className="font-extrabold text-5xl"><span className="text-yellow-300">GAME</span> PREVIEW</h1>
            <div className="grid grid-flow-col mt-8">
                <div className="grid grid-flow-col gap-8 overflow-x-auto overflow-y-clip">
                    <div className="rounded-2xl bg-slate-700 overflow-hidden border-8 border-transparent hover:border-black" style={{ width: '25rem', height: '25rem' }}>
                        <img src={"./assets/Alabay Games/artifacts 2.png"} className="rounded-2xl" style={{ objectPosition: 'center', objectFit: "cover" }} />
                    </div>
                    <div className="rounded-2xl bg-slate-700 overflow-hidden border-8 border-transparent hover:border-black" style={{ width: '25rem', height: '25rem' }}>
                        <img src={"./assets/Alabay Games/Abilities 2.png"} className="rounded-2xl" style={{ objectPosition: 'center', objectFit: "cover" }} />
                    </div>
                    <div className="rounded-2xl bg-slate-700 overflow-hidden border-8 border-transparent hover:border-black" style={{ width: '25rem', height: '25rem' }}>
                        <img src={"./assets/Alabay Games/image 3 alabay guard 2.png"} className="rounded-2xl" style={{ objectPosition: 'center', objectFit: "cover" }} />
                    </div>
                </div>
                <ArrowBtn w={'139px'} h={"190px"} className={"ml-2"} />
            </div>
        </div>
    )
}