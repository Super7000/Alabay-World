import React from 'react'
import GamePreview from '../components/pages/GamePreview'
import PlayBtn from '../components/pages/PlayBtn'
import GamePageLayout from '../components/pages/GamePageLayout'
import PlayExitBtns from '../components/pages/PlayExitBtns'

function page() {
    return (
        <GamePageLayout
            bg={"./assets/Alabay Games/Alabay heritage prev gradient.png"}
            heading={"ALABAY HERITAGE"}
            subHeading={"THE LOST ADVENTURE"}
            themeColor={"#90FFAE"}
        >
            <div style={{ height: '80vh' }}>
                <p className="text-white ff-m mt-10 w-1/2 font-bold" style={{ fontSize: '1.375rem' }}>Take on the role of the legendary Alabay on a quest to uncover the ancient secrets of its ancestors.</p>
                <PlayBtn themeColor='#90FFAE' />
                <GamePreview
                    themeColor='#90FFAE'
                    imgs={["overview.png", "Abilities.png", "artifacts.png", "locations preview.png"]}
                    folder={"Alabay Adventure - The Lost Heritage"} />
            </div>

            <div className='mt-20' style={{ height: '75vh' }}>
                <h2 className="text-3xl font-bold mt-auto" style={{ color: "#90FFAE" }}>FEATURES</h2>
                <div className='text-white mt-4'>
                    <span className='font-bold ff-m' style={{ fontSize: '1.3rem' }}>
                        Explore a variety of landscapes, including <span style={{ color: "#90FFAE" }}>mountains</span>, <span style={{ color: "#90FFAE" }}>forests</span>, <span style={{ color: "#90FFAE" }}>deserts</span>, and ancient ruins.<br /><br />

                        Use the Alabay's <span style={{ color: "#90FFAE" }}>abilities</span> to solve <span style={{ color: "#90FFAE" }}>puzzles</span> that involve moving objects, activating mechanisms, or finding hidden clues.<br /><br />

                        Discover relics that tell the story of the Alabay’s ancestors, each piece contributing to a larger narrative about the breed's role in ancient history.<br /><br />

                        Unlock new skills and abilities for the Alabay, enhancing its capacity to explore and solve puzzles.<br /><br />

                        Challenge Modes:<br />
                        &emsp; - <span style={{ color: "#90FFAE" }}>Time Trials</span>: Compete in special timed challenges where the Alabai must navigate through complex mazes or
                        complete puzzles within a time limit.<br />
                        &emsp; - <span style={{ color: "#90FFAE" }}>Exploration Mastery</span>: A mode that rewards players for fully exploring every nook and cranny of the game’s world,
                        uncovering all secrets
                    </span>
                    <PlayExitBtns />
                </div>
            </div>
        </GamePageLayout>
    )
}

export default page