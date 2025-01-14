"use client"

import "./skillsetTab.css"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

gsap.registerPlugin(useGSAP)

export default function SkillsetTab({
    tabText,
    active,
    wasActive,
    onClickCallback,
}: {
    tabText: string
    active: boolean
    wasActive: boolean
    onClickCallback: (tab: string) => void
}) {
    // const [finishedInitAnimation, setFinishedInitAnimation] = useState(false)

    const tabRef = useRef(null)
    const rectRef = useRef(null)
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

        if (wasActive && !active) {
            tl.current.reverse()
            // setFinishedInitAnimation(true)
        } else if (wasActive && active) {
            tl.current.play()
            // setFinishedInitAnimation(true)
        } else if (active && !wasActive) {
            tl.current.play()
        }
    }, [wasActive, active])

    const handleMouseEnter = contextSafe(() => {
        if (!active) tl.current.play()
    })

    const handleMouseLeave = contextSafe(() => {
        if (!active) tl.current.reverse()
    })

    return (
        <div
            className="skillset-tab"
            ref={tabRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => onClickCallback(tabText)}
        >
            <div className="skillset-extra-rectangle" ref={rectRef} />
            <h3 className="skillset-tab-text">{tabText}</h3>
        </div>
    )
}
