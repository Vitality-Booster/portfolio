"use client"

import "./skillsetTab.css"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

gsap.registerPlugin(useGSAP)

export default function SkillsetTab({
    tabText,
    active,
}: {
    tabText: string
    active: boolean
}) {
    const tabRef = useRef(null)
    const rectRef = useRef(null)
    // const textRef = useRef(null)
    const tl = useRef(gsap.timeline())
    const { contextSafe } = useGSAP({ scope: tabRef })

    useGSAP(() => {
        tl.current.to(rectRef.current, {
            left: 0,
            top: 0,
            ease: "power1.out",
            duration: 0.4,
        })
        tl.current.to(
            tabRef.current,
            {
                backgroundColor: "#43FF3F",
                color: "#1F2133",
                ease: "power1.out",
                duration: 0.4,
            },
            "<+0.1",
        )

        tl.current.pause()
    }, [tl])

    const handleMouseEnter = contextSafe(() => {
        tl.current.play()
    })

    const handleMouseLeave = contextSafe(() => {
        tl.current.reverse()
    })

    return active ? (
        <div className="skillset-tab-active">
            <a className="skillset-tab-text">{tabText}</a>
        </div>
    ) : (
        <div
            className="skillset-tab"
            ref={tabRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="skillset-extra-rectangle" ref={rectRef} />
            <a className="skillset-tab-text">{tabText}</a>
        </div>
    )
}