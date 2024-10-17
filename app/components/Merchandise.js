export default function Merchandise() {
    return (
        <div className="md:px-20 pb-32">
            <h1 className="relative ff-c text-orange-400 text-center z-20" style={{ fontSize: '11.56rem' }}>MERCHANDISE</h1>
            <div className="relative w-full z-20">
                <img src={"./assets/Alabay Merch/black hoodie bck.png"} className="w-full rounded-3xl" />
            </div>
            <img src="./assets/yellow-bg-2.svg" className="z-10 absolute left-0 -translate-y-1/4" style={{ zIndex: 5, left: "2.05%", width: '95.9%' }} />
        </div>
    )
}
