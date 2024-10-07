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

export default function Page() {
    useGSAP(() => {
        gsap.from(".content-row", {
            scrollTrigger: {
                trigger: ".content-row",
                // trigger: ".content-row",
                start: "top 80%",
                endTrigger: ".story-line-wrapper",
                end: "bottom 20%",
                toggleActions: "play reverse play reverse",
            },

            opacity: 0,
            duration: 2,
            // stagger: 1,
            // yoyo: true,
        })
    })

    return (
        <div className="story-line-wrapper">
            <div className="content-row">
                <TextColumn
                    header={"Bachelor Degree"}
                    text={
                        "Finished Fontys, the university of applied science, with a degree in Computer Science"
                    }
                />
                <IconColumn
                    iconSrc={graduateSrc}
                    duration={"Sep 2020 - Jul 2024"}
                />
            </div>
            <div className="content-row">
                <TextColumn
                    header={"Graduation Internship"}
                    text={
                        "Finished Fontys, the university of applied science, with a degree in Computer Science"
                    }
                />
                <IconColumn
                    iconSrc={brainSrc}
                    duration={"Feb 2024 - Jun 2024"}
                    imageMarginBottom="40px"
                />
            </div>
            <div className="content-row">
                <TextColumn
                    header={"GLOW Festival"}
                    text={
                        "Finished Fontys, the university of applied science, with a degree in Computer Science"
                    }
                />
                <IconColumn
                    iconSrc={lightBulbSrc}
                    duration={"Sep 2023 - Nov 2023"}
                    imageMarginBottom="35px"
                />
            </div>

            {/* The complete timeline object. Maybe will need to move to a separate .tsx file later. TODO: think about <--- */}
            <div className="central-column">
                <div className="line-and-point">
                    <Line />
                    <Point />
                </div>
                <div className="line-and-point">
                    <Line />
                    <Point />
                </div>
                <div className="line-and-point">
                    <Line />
                    <Point marginTop="20px" />
                </div>
            </div>
        </div>
    )
}
