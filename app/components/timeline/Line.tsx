"use client"

import "./line.css"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

import ScrollTrigger from "gsap/ScrollTrigger"
import CSSRulePlugin from "gsap/CSSRulePlugin"
import { useRef } from "react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Line({ height = 300 }: { height?: number }) {
    const filledLine = useRef(null)
    const dashedLine = useRef(null)

    useGSAP(() => {
        gsap.to(filledLine.current, {
            scrollTrigger: {
                trigger: dashedLine.current,
                start: "10% center",
                endTrigger: dashedLine.current,
                end: "80% center",
                scrub: 2.5,
            },
            height: "100%",
            ease: "power1.in",
        })
    }, [filledLine, dashedLine])

    return (
        <div className="line">
            <div className="filled-line" ref={filledLine} />
            <div
                className="dashed-line"
                ref={dashedLine}
            />
        </div>
    )
}
