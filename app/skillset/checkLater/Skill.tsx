"use client"

import "./skill.css"

import { useRef } from "react"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

export default function Skill() {
    const yearsContainer = useRef<HTMLDivElement>(null)
    const yearsCircle = useRef<HTMLDivElement>(null)
    const { contextSafe } = useGSAP()
    const tl1 = useRef(gsap.timeline())

    const handleMouseEnter = contextSafe(() => {
        gsap.to(yearsContainer.current, {
            width: "5em",
            ease: "power1.out",
            duration: 0.8,
        })
        gsap.to(yearsCircle.current, {
            x: "+=5em",
            ease: "power1.out",
            duration: 1,
        })
    })

    const handleMouseLeave = contextSafe(() => {
        tl1.current.to(yearsCircle.current, {
            x: "-=5em",
            ease: "power1.in",
            duration: 1,
        })

        tl1.current.to(
            yearsContainer.current,
            {
                width: "2em",
                ease: "power1.in",
                duration: 0.6,
            },
            "<+0.4",
        )
    })

    return (
        <div
            className="skill-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="skill-name">JavaScript</div>

            <div className="skill-years">
                <div className="skill-years-container" ref={yearsContainer} />
                <div className="skill-years-circle" ref={yearsCircle} />2 years
            </div>

            <div className="skill-tags">Front-end, Backend</div>
        </div>
    )
}
