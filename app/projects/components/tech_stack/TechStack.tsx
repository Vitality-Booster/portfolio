"use client"

import "./techStack.css"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
// import { LineDataType, TechCircleType } from "@/app/types/TechCircle"
// import { generateAllCircles, generateLines } from "./obsolete/functions"
import { useRef, useState } from "react"
import { Skill } from "@prisma/client"
import Square from "./Square"

gsap.registerPlugin(useGSAP)

export default function TechStack({
    skills,
    windowWidth,
}: {
    skills: Skill[]
    windowWidth: number
}) {

    const techContainerRef = useRef(null)
    const { contextSafe } = useGSAP({ scope: techContainerRef })
    const [clickedStack, setClickedStack] = useState("")

    const circleClickHandler = contextSafe((type: string) => {
        if (type === clickedStack) return

        if (clickedStack !== "") {
            const oldType = clickedStack
                .toLowerCase()
                .replaceAll(" ", "-")
                .replace("/", "")
            const oldSquareType = `${oldType}-square`
            const oldNameType = `${oldType}-name`


            gsap.to(
                `.${oldSquareType}`,
                {
                    borderColor: "#5e5e5e94",
                    duration: 0.5,
                    ease: "power1.out",
                }
            )
            gsap.to(
                `.${oldNameType}`,
                {
                    opacity: 0,
                    duration: 0.5,
                    ease: "power1.out",
                }
            )
        }

        

        const newType = type
            .toLowerCase()
            .replaceAll(" ", "-")
            .replace("/", "")
        const newSquareType = `${newType}-square`
        const newNameType = `${newType}-name`

        gsap.to(
            `.${newSquareType}`,
            {
                borderColor: "#43FF3F",
                duration: 0.5,
                ease: "power1.out",
            }
        )
        gsap.to(
            `.${newNameType}`,
            {
                opacity: 1,
                duration: 0.5,
                ease: "power1.out",
            }
        ).then(() => {
            console.log("I was supposed to play the animation but did I?")
        })
        setClickedStack(type)
    })

    return (
        <div className="tech-stack-container" >
            <div className="tech-squares-all" ref={techContainerRef}>
                {skills.length > 0 &&
                    skills.map((skill) => (
                        <Square
                            onClickCallback={circleClickHandler}
                            icon={skill.image}
                            type={skill.tags[0]}
                            name={skill.name}
                            id={skill.id.toString()}
                            key={skill.id.toString()} active={clickedStack === skill.tags[0]}                        />
                    ))}
            </div>
            <div className="stack-title">
                <h1>{clickedStack}</h1>
            </div>
        </div>
    )
}
