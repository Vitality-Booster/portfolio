"use client"

import "./techStack.css"
import PostgreIcon from "@/public/tech_stack/postgre.png"
import Image, { StaticImageData } from "next/image"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import {
    LineDataType,
    RawCircleType,
    TechCircleType,
} from "@/app/types/TechCircle"
import { generateAllCircles, generateLines } from "./functions"
import { useEffect, useRef, useState } from "react"
import Line from "./Line"
import Circle from "./Circle"

gsap.registerPlugin(useGSAP)

const allRawCircles: RawCircleType[] = [
    {
        id: "c1",
        type: "Front-end Development",
    },
    {
        id: "c2",
        type: "Back-end Development",
    },
    {
        id: "c3",
        type: "Data Management",
    },
    {
        id: "c4",
        type: "Data Science",
    },
    {
        id: "c5",
        type: "CI / CD",
    },
    {
        id: "c6",
        type: "Front-end Development",
    },
    {
        id: "c7",
        type: "Front-end Development",
    },
    {
        id: "c8",
        type: "Data Management",
    },
    {
        id: "c9",
        type: "Front-end Development",
    },
    {
        id: "c10",
        type: "Data Science",
    },
    {
        id: "c11",
        type: "Data Management",
    },
]

export default function TechStack() {
    // TODO: Think about using GSAP to move the tech stack in the very beginning of the render
    // And make it look like the positions of the Technologies are "flexible" and always different.
    const tl = useRef(gsap.timeline())
    const techContainerRef = useRef(null)
    const [animationComplete, setAnimationComplete] = useState(false)
    const [techCircles, setTechCircles] = useState<TechCircleType[]>([])
    const [lines, setLines] = useState<LineDataType[]>([])
    const [counter, setCounter] = useState(0)
    const [stackTitle, setStackTitle] = useState("")
    const { contextSafe } = useGSAP({ scope: techContainerRef })

    const getAllCircles = async () => {
        const allCircles: TechCircleType[] = await generateAllCircles({
            rawCircles: allRawCircles,
            maxX: 1200,
            maxY: 300,
            size: 70,
        })
        setTechCircles(allCircles)
    }

    const getAllLines = async () => {
        const receivedLines: LineDataType[] = await generateLines(
            techCircles,
            68,
        )
        setLines(receivedLines)
        setCounter(counter + 1)
        console.log("The counter has increased: ", counter)
    }

    useGSAP(() => {
        if (techCircles.length === 0) {
            getAllCircles()
        }

        if (lines.length === 0 && techCircles.length > 0) {
            getAllLines()
        }

        if (techCircles.length > 0 && !animationComplete && lines.length > 0) {
            techCircles.forEach((circle) =>
                tl.current.to(
                    `#${circle.id}`,
                    {
                        x: circle.newX,
                        y: circle.newY,
                        duration: 0.3,
                    },
                    "-=0.1",
                ),
            )

            console.log(JSON.stringify(lines))
            // lines.forEach((line) => gsap.to(`#${line.id}`,
            //     {
            //         borderColor: "red",
            //         duration: 1,
            //     }))
            // lines.forEach((line) => {
            //     // gsap.to(`#${line.id}`, {
            //     //     x: `+=${line.x}`,
            //     //     y: `+=${line.y}`,
            //     // })
            //     tl.current.to(
            //         `#${line.id}`,
            //         {
            //             opacity: 0,
            //             duration: 1,
            //         },
            //         "-=0.1",
            //     )
            // })

            setAnimationComplete(true)
        }
    }, [tl, animationComplete, techCircles, lines])

    const circleHoverHandler = contextSafe((type: string) => {
        setStackTitle(type)
        const formattedType = type.toLowerCase().replaceAll(" ", "-").replace("/", "")
        const lineType = `${formattedType}-line`
        const circleType = `${formattedType}-circle`
        gsap.to(`.${lineType}`, {
            opacity: 1,
            duration: 0.3,
        })
        gsap.to(`.${circleType}`, {
            borderColor: "#fff",
            duration: 0.3,
        })
    })

    const circleLeaveHandler = contextSafe(() => {
        setStackTitle("")
        gsap.to(`.attachment-line`, {
            opacity: 0,
            duration: 0.3,
        })
        gsap.to(`.tech-circle`, {
            borderColor: "#5e5e5e94",
            duration: 0.3,
        })
    })

    return (
        <div className="tech-stack-container" ref={techContainerRef}>
            <div className="circles-and-lines">
                {techCircles.length > 0 &&
                    techCircles.map((circle) => (
                        <Circle
                            key={circle.id}
                            techCircle={circle}
                            src={PostgreIcon}
                            alt="PostgreSQL logo"
                            size={30}
                            onHoverCallback={circleHoverHandler}
                            onLeaveCallback={circleLeaveHandler}
                        />
                    ))}
                {lines.length > 0 &&
                    lines.map((line) => (
                        <div key={line.id} className="line-wrapper">
                            <Line key={line.id} lineData={line} />
                        </div>
                    ))}
            </div>
            <div className="stack-title">{stackTitle}</div>
        </div>
    )
}
