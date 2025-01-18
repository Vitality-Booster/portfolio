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
    skills,
    windowWidth,
}: {
    skills: Skill[]
    windowWidth: number
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
    const [clickedStack, setClickedStack] = useState("")

    /**
     * Calculating the values for the Circles based on the window width
     */

    console.log("The window width is:", windowWidth)
    let maxX = parseInt((windowWidth * 0.7).toString())
    let circleSize = 100
    let iconSize = 40
    let animationPadding = 10

    if (windowWidth < 1024) {
        circleSize = 80
        iconSize = 35
        animationPadding = 7
    }

    if (windowWidth < 768) {
        maxX = parseInt((windowWidth * 0.8).toString())
    }

    if (windowWidth < 600) {
        circleSize = 70
        iconSize = 30
        animationPadding = 5
    }

    const getAllCircles = async () => {
        const allCircles: TechCircleType[] = await generateAllCircles({
            skills: skills,
            maxX: maxX,
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

    const circleClickHandler = contextSafe((type: string) => {
        if (type === clickedStack) return

        if (clickedStack !== "") {
            const formattedType = clickedStack
                .toLowerCase()
                .replaceAll(" ", "-")
                .replace("/", "")
            const lineType = `${formattedType}-line`
            const circleType = `${formattedType}-circle`
            const nameType = `${formattedType}-name`
            const iconType = `${formattedType}-icon`

            tl.current.to(`.${lineType}`, {
                opacity: 0,
                duration: 0.2,
            })
            tl.current.to(
                `.${circleType}`,
                {
                    borderColor: "#5e5e5e94",
                    duration: 0.2,
                },
                "<",
            )
            tl.current.to(
                `.${nameType}`,
                {
                    opacity: 0,
                    duration: 0.2,
                },
                "<",
            )
            tl.current.to(
                `.${iconType}`,
                {
                    duration: 0.2,
                },
                "<",
            )
        }

        setClickedStack(type)
        // circleHoverHandler(type)
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
                duration: 0.2,
            },
            "<",
        )
        tl.current.to(
            `.${nameType}`,
            {
                opacity: 1,
                duration: 0.2,
            },
            "<",
        )
        tl.current.to(
            `.${iconType}`,
            {
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
                            onClickCallback={circleClickHandler}
                        />
                    ))}
                {lines.length > 0 &&
                    lines.map((line) => (
                        <div key={line.id} className="line-wrapper">
                            <Line key={line.id} lineData={line} />
                        </div>
                    ))}
            </div>
            <div className="stack-title">
                <h1>{stackTitle}</h1>
            </div>
        </div>
    )
}
