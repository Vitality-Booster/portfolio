"use client"

import "./projectCard.css"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ProjectWithSkills } from "@/app/types/Project"
import Image from "next/image"
import { useRouter } from "next/navigation"

gsap.registerPlugin(useGSAP)

export default function ProjectCard({
    project,
}: {
    project: ProjectWithSkills
}) {
    const router = useRouter()
    const cardRef = useRef(null)
    const tl = useRef(gsap.timeline())
    const shadowRef = useRef(null)
    const wrapperRef = useRef(null)
    const { contextSafe } = useGSAP({ scope: wrapperRef })

    useGSAP(() => {
        tl.current.to(cardRef.current, {
            y: "-=40px",
            duration: 0.5,
        })
        tl.current.to(
            shadowRef.current,
            {
                y: "-=40px",
                duration: 0.4,
            },
            "<+0.25",
        )

        tl.current.pause()
    }, [])

    const handleOnMouseEnter = contextSafe(() => {
        tl.current.play()
    })

    const handleOnMouseLeave = contextSafe(() => {
        tl.current.reverse()
    })

    return (
        <div className="project-card-wrapper" ref={wrapperRef}>
            <div className="rectangle-shadow" ref={shadowRef} />

            <div
                className="project-card"
                ref={cardRef}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
                onClick={() => router.push(`/projects/${project.id}`)}
            >
                <svg
                    className="card-border-svg"
                    width="435"
                    height="700"
                    viewBox="0 0 437 702"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        className="card-border-path"
                        x="0"
                        y="0"
                        width="436"
                        height="701"
                        rx="10"
                        stroke="#43FF3F"
                        strokeWidth="2"
                    />
                </svg>

                <img
                    className="project-card-image"
                    src={project.mainPicture}
                    alt={project.name + " image"}
                />
                <div className="card-text-area">
                    <div className="project-card-title-box">
                        <h2>{project.name}</h2>
                    </div>
                    <div className="project-card-description">
                        {project.shortDescription}
                    </div>
                </div>
                <div className="project-card-footer">
                    <Image
                        className="project-card-icon"
                        src={project.skills[0].image}
                        alt={project.skills[0].name + " icon"}
                        width={35}
                        height={35}
                    />
                    <Image
                        className="project-card-icon"
                        src={project.skills[1].image}
                        alt={project.skills[1].name + " icon"}
                        width={35}
                        height={35}
                    />
                    <Image
                        className="project-card-icon"
                        src={project.skills[2].image}
                        alt={project.skills[2].name + " icon"}
                        width={35}
                        height={35}
                    />
                </div>
            </div>
        </div>
    )
}
