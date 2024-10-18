import React from 'react'
import GamePreview from '../components/pages/GamePreview'
import PlayBtn from '../components/pages/PlayBtn'
import GamePageLayout from '../components/pages/GamePageLayout'

function page() {
    return (
        <GamePageLayout
            bg={"./assets/Alabay Games/Alabay heritage prev gradient.png"}
            heading={"ALABAY HERITAGE"}
            subHeading={"THE LOST ADVENTURE"}
            details={"Take on the role of the legendary Alabay on a quest to uncover the ancient secrets of its ancestors."}
            themeColor={"#90FFAE"}
        >
            <PlayBtn themeColor='#90FFAE' />
            <GamePreview
                themeColor='#90FFAE'
                imgs={["overview.png", "Abilities.png", "artifacts.png", "locations preview.png"]}
                folder={"Alabay Adventure - The Lost Heritage"} />
        </GamePageLayout>
    )
}

export default page