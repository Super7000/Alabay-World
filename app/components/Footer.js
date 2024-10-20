export default function Footer() {
    return (
        <div className="md:px-20 pb-32">
            <h1 className="ff-c text-orange-400 text-center md:text-left main-heading">SOCIAL MEDIA LINKS</h1>
            <div className="flex justify-center items-center flex-col md:flex-row">
                <div className="ff-m rounded-3xl flex flex-col justify-start items-start flex-1 bg-blue-400 border-8 text-2xl font-bold text-white p-10 gap-6 md:mr-auto shadow-lg shadow-black" style={{ borderColor: 'rgba(5, 83, 200, 0.66)' }}>
                    <div className="flex justify-center items-center gap-4">
                        <img className="w-16 h-16 p-3 bg-black rounded-full" src="./assets/twitter logo 1.png" />
                        <p>Twitter Link</p>
                    </div>
                    <div className="flex justify-center items-center gap-4" >
                        <img className="w-16 h-16 p-3 bg-black rounded-full" src="./assets/Mask group.png" />
                        <p>Telegram Link</p>
                    </div>
                </div>
                <img className="w-7/12" src={"./assets/DALL·E 2024-07-29 17.36.01 - A 3D cartoon illustration of a cute furry Central Asian Shepherd dog holding a mobile phone and looking at it. The dog has expressive eyes, a fluffy c 2.png"} />
            </div>
        </div>
    )
}

function Box() {
    return (
        <div>

        </div>
    )
}