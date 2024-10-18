'use client'
import React, { useRef } from 'react'
import ScrollBar from './ScrollBar'
import styles from "@/app/the-lost-adventure/style.module.css"

function GamePageLayout({ bg, heading, subHeading, themeColor, children }) {
    const scrollElem = useRef()
    return (
        <>
            <div className="w-screen h-screen fixed top-0 left-0 -z-20">
                <img src={bg} className="w-full h-full" style={{ objectFit: 'cover', objectPosition: 'center center' }} />
            </div>
            <div className='p-14 flex flex-col h-screen'>
                <h1 className={styles.heading}>{heading}</h1>
                <span className={styles.subHeading} style={{ color: themeColor }}>{subHeading}</span>
                <div className='flex flex-col flex-1 overflow-y-auto' ref={scrollElem}>
                    {children}
                </div>
            </div>
            <ScrollBar themeColor={themeColor} scrollElement={scrollElem} />
        </>
    )
}

export default GamePageLayout