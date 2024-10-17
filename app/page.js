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
        <div>
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
    )
}