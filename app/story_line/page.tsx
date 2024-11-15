"use client"

import { useRef } from "react"
import "./page.css"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Line from "../components/timeline/Line"
import Point from "../components/timeline/Point"
import Image from "next/image"

import brainSrc from "../../public/story_line/brain.png"
import graduateSrc from "../../public/story_line/graduate.png"
import lightBulbSrc from "../../public/story_line/light_bulb.png"
import TextColumn from "./text_column/TextColumn"
import IconColumn from "./icon_column/IconColumn"

import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function StoryLine() {
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
    })

    return (
        <div className="story-line-wrapper">
            <Line />
            <div className="new-content-row">
                <TextColumn
                    header={"Bachelor Degree"}
                    text={
                        "Finished Fontys, the university of applied science, with a degree in Computer Science"
                    }
                />
                <div className="new-point-col">
                    <Point />
                </div>
                <IconColumn
                    iconSrc={graduateSrc}
                    duration={"Sep 2020 - Jul 2024"}
                />
            </div>
            <div className="new-content-row">
                <TextColumn
                    header={"Graduation Internship"}
                    text={
                        "Finished Fontys, the university of applied science, with a degree in Computer Science"
                    }
                />
                <div className="new-point-col">
                    <Point />
                </div>
                <IconColumn
                    iconSrc={brainSrc}
                    duration={"Feb 2024 - Jun 2024"}
                    imageMarginBottom="40px"
                />
            </div>
            <div className="new-content-row">
                <TextColumn
                    header={"GLOW Festival"}
                    text={
                        "Finished Fontys, the university of applied science, with a degree in Computer Science"
                    }
                />
                <div className="new-point-col">
                    <Point />
                </div>
                <IconColumn
                    iconSrc={lightBulbSrc}
                    duration={"Sep 2023 - Nov 2023"}
                    imageMarginBottom="35px"
                />
            </div>
        </div>
    )
}
