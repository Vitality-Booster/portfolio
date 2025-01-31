"use client"

import "./storyline.css"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

import ScrollTrigger from "gsap/ScrollTrigger"
import { useMainStore } from "../stores/mainStore"
import useWindowSize from "../utils/windowSize"
import CombinedColumn from "./combined_column/CombinedColumn"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function StoryLine() {
    const { storyParts } = useMainStore()
    const { width: windowWidth } = useWindowSize()

    useGSAP(() => {
        gsap.from(".new-content-row", {
            scrollTrigger: {
                trigger: ".new-content-row",
                start: "top 80%",
                endTrigger: ".story-line-wrapper",
                end: "bottom 20%",
                toggleActions: "play reverse play reverse",
            },

            opacity: 0,
            duration: 2,
        })
    }, [])

    return (
        <div id="story-line" className="full-page-section">
            <h1 className="section-heading">Story Line</h1>
            {storyParts.length > 0 && (
                <CombinedColumn
                    storyParts={storyParts}
                    windowWidth={windowWidth}
                ></CombinedColumn>
            )}
        </div>
    )
}
