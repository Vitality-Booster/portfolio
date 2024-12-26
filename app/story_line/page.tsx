"use client"

import "./page.css"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Line from "../components/timeline/Line"
import Point from "../components/timeline/Point"
import TextColumn from "./text_column/TextColumn"
import IconColumn from "./icon_column/IconColumn"

import ScrollTrigger from "gsap/ScrollTrigger"
import { useStorylineStore } from "../stores/storylineStore"
import { useEffect } from "react"
import { useMainStore } from "../stores/mainStore"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function StoryLine() {
    // const {storyParts, setStoryParts} = useStorylineStore()
    const { storyParts, setStoryParts } = useMainStore()

    // useEffect(() => {
    //     async function fetchStoryParts() {
    //         const res = await fetch("/api/storyline", {
    //             cache: "force-cache",
    //         })
    //         const data = await res.json()
    //         setStoryParts(data.storyParts)
    //     }

    //     fetchStoryParts()
    // }, [])

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
        <div id="story-line" className="story-line-wrapper">
            <Line />
            {storyParts.length > 0 &&
                storyParts.map((storyPart) => (
                    <div className="new-content-row" key={storyPart.id}>
                        <TextColumn
                            header={storyPart.title}
                            text={storyPart.description}
                        />
                        <div className="new-point-col">
                            <Point />
                        </div>
                        <IconColumn
                            iconSrc={storyPart.icon}
                            duration={storyPart.date}
                        />
                    </div>
                ))}
        </div>
    )
}
