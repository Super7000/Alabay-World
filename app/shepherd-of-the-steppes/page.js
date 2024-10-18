import React from 'react'
import GamePreview from '../components/pages/GamePreview'
import PlayBtn from '../components/pages/PlayBtn'
import GamePageLayout from '../components/pages/GamePageLayout'

function page() {
    return (
        <GamePageLayout
            bg={"./assets/Alabay Games/Alabay Guard prev gradient.png"}
            heading={"ALABAY GUARDIAN"}
            subHeading={"SHEPHERD OF THE STEPPES"}
            details={"Take on the role of the legendary Alabay on a quest to uncover the ancient secrets of its ancestors. "}
            themeColor={"#A4A8FF"}
        >
            <PlayBtn themeColor='#A4A8FF' />
            <GamePreview
                themeColor='#A4A8FF'
                imgs={["image 1 alabay guard.png", "image 2 alabay guard.png", "image 3 alabay guard.png"]}
                folder={"Alabay Guard"} />
        </GamePageLayout>
    )
}

export default page