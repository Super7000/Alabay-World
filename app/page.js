import Features from "./components/Features"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Games from "./components/Games"
import Header from "./components/Header"
import Merchandise from "./components/Merchandise"
import ProjectVision from "./components/ProjectVision"
import RoadMap from "./components/Roadmap"
import Tokenomics from "./components/Tokenomics"

export default function Home() {
    return (
        <>
            <div className="w-screen h-screen fixed top-0 left-0 -z-20">
                <div className="heading absolute w-full">welcome to alabay world</div>
                <div className="sub-heading flex flex-col justify-center absolute top-1/3 mt-20 md:mt-0 md:top-1/2 bg-black">
                    <span>where the <span className="highlight">legendary Central Asian Shepherd Dog</span> meets a new-age adventure. <span className="highlight">Join us</span> in celebrating the <span className="highlight">strength</span>, <span className="highlight">loyalty</span>, and <span className="highlight">heritage</span> of the Alabay breed.</span>
                </div>
                <img src="./assets/main-bg.png" className="w-full h-full" style={{ objectFit: 'cover', objectPosition: 'center center' }} />
            </div>
            <MainPage />
        </>
    )
}

function MainPage() {
    return (
        <div className="px-0 lg:px-8 z-10 absolute w-full" style={{ top: '90%' }}>
            <div className="w-full bg-white mb-8 overflow-x-hidden" style={{ borderRadius: "2rem" }}>
                <Header />
                <Gallery />
                <ProjectVision />
                <RoadMap />
                <Features />
                <Tokenomics />
                <Merchandise />
                <Games />
                <Footer />
            </div>
        </div>
    )
}