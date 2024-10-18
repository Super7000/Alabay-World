import React from 'react'
import GamePreview from '../components/pages/GamePreview'
import PlayBtn from '../components/pages/PlayBtn'
import GamePageLayout from '../components/pages/GamePageLayout'
import PlayExitBtns from '../components/pages/PlayExitBtns'

function page() {
    return (
        <GamePageLayout
            bg={"./assets/Alabay Games/Alabay Guard prev gradient.png"}
            heading={"ALABAY GUARDIAN"}
            subHeading={"SHEPHERD OF THE STEPPES"}
            themeColor={"#A4A8FF"}
        >
            <div>
                <p className="text-white ff-m mt-10 w-1/2" style={{ fontSize: '1.375rem' }}>Take on the role of the legendary Alabay on a quest to uncover the ancient secrets of its ancestors. </p>
                <PlayBtn themeColor='#A4A8FF' />
                <GamePreview
                    themeColor='#A4A8FF'
                    imgs={["image 1 alabay guard.png", "image 2 alabay guard.png", "image 3 alabay guard.png"]}
                    folder={"Alabay Guard"} />
            </div>

            <div className='mt-20' style={{ height: '75vh' }}>
                <h2 className="text-3xl font-bold mt-auto" style={{ color: "#A4A8FF" }}>FEATURES</h2>
                <div className='text-white mt-4'>
                    <span className='font-bold' style={{ fontSize: '1.3rem' }}>
                        Explore a variety of landscapes, including <span style={{ color: "#A4A8FF" }}>mountains</span>, <span style={{ color: "#A4A8FF" }}>forests</span>, <span style={{ color: "#A4A8FF" }}>deserts</span>, and ancient ruins.<br /><br />

                        Use the Alabay's <span style={{ color: "#A4A8FF" }}>abilities</span> to solve <span style={{ color: "#A4A8FF" }}>puzzles</span> that involve moving objects, activating mechanisms, or finding hidden clues.<br /><br />

                        Discover relics that tell the story of the Alabay’s ancestors, each piece contributing to a larger narrative about the breed's role in ancient history.<br /><br />

                        Unlock new skills and abilities for the Alabay, enhancing its capacity to explore and solve puzzles.<br /><br />

                        Challenge Modes:<br />
                        &emsp; - <span style={{ color: "#A4A8FF" }}>Time Trials</span>: Compete in special timed challenges where the Alabai must navigate through complex mazes or
                        complete puzzles within a time limit.<br />
                        &emsp; - <span style={{ color: "#A4A8FF" }}>Exploration Mastery</span>: A mode that rewards players for fully exploring every nook and cranny of the game’s world,
                        uncovering all secrets
                    </span>
                    <PlayExitBtns />
                </div>
            </div>
        </GamePageLayout>
    )
}

export default page