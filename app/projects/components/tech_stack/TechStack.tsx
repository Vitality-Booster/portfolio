"use client"

import "./techStack.css"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { LineDataType, TechCircleType } from "@/app/types/TechCircle"
import { generateAllCircles, generateLines } from "./functions"
import { useRef, useState } from "react"
import Line from "./Line"
import Circle from "./Circle"
import { Skill } from "@prisma/client"

gsap.registerPlugin(useGSAP)

export default function TechStack({
    circleSize,
    iconSize,
    animationPadding,
    skills,
}: {
    circleSize: number
    iconSize: number
    animationPadding: number
    skills: Skill[]
}) {
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
            skills: skills,
            maxX: 1200,
            maxY: 400,
            size: circleSize,
            animationPadding: animationPadding,
        })
        setTechCircles(allCircles)
    }

    const getAllLines = async () => {
        const receivedLines: LineDataType[] = await generateLines(
            techCircles,
            circleSize + animationPadding * 2,
        )
        setLines(receivedLines)
        setCounter(counter + 1)
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

            setAnimationComplete(true)
        }
    }, [tl, animationComplete, techCircles, lines])

    // TODO: If I decide to improve the animation, add the Timer that starts on Hover,
    // and stops on Leave. If the spent time is
    const circleHoverHandler = contextSafe((type: string) => {
        setStackTitle(type)
        const formattedType = type
            .toLowerCase()
            .replaceAll(" ", "-")
            .replace("/", "")
        const lineType = `${formattedType}-line`
        const circleType = `${formattedType}-circle`
        const nameType = `${formattedType}-name`
        const iconType = `${formattedType}-icon`
        tl.current.to(`.${lineType}`, {
            opacity: 1,
            duration: 0.2,
        })
        tl.current.to(
            `.${circleType}`,
            {
                borderColor: "#43FF3F",
                padding: `+=${animationPadding}px`,
                duration: 0.2,
            },
            "<",
        )
        tl.current.to(
            `.${nameType}`,
            {
                y: `+=${2 * animationPadding}px`,
                opacity: 1,
                duration: 0.2,
            },
            "<",
        )
        tl.current.to(
            `.${iconType}`,
            {
                y: `-=${2 * animationPadding}px`,
                duration: 0.2,
            },
            "<",
        )
    })

    const circleLeaveHandler = contextSafe(() => {
        const formattedType = stackTitle
            .toLowerCase()
            .replaceAll(" ", "-")
            .replace("/", "")
        const lineType = `${formattedType}-line`
        const circleType = `${formattedType}-circle`
        const nameType = `${formattedType}-name`
        const iconType = `${formattedType}-icon`
        setStackTitle("")
        tl.current.to(`.${lineType}`, {
            opacity: 0,
            duration: 0.2,
        })
        tl.current.to(
            `.${circleType}`,
            {
                borderColor: "#5e5e5e94",
                padding: `-=${animationPadding}px`,
                duration: 0.2,
            },
            "<",
        )
        tl.current.to(
            `.${nameType}`,
            {
                y: `-=${2 * animationPadding}px`,
                opacity: 0,
                duration: 0.2,
            },
            "<",
        )
        tl.current.to(
            `.${iconType}`,
            {
                y: `+=${2 * animationPadding}px`,
                duration: 0.2,
            },
            "<",
        )
    })

    return (
        <div className="tech-stack-container" ref={techContainerRef}>
            <div className="circles-and-lines">
                {techCircles.length > 0 &&
                    techCircles.map((circle) => (
                        <Circle
                            key={circle.id}
                            techCircle={circle}
                            src={circle.src}
                            alt={`${circle.name} logo`}
                            iconSize={iconSize}
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
