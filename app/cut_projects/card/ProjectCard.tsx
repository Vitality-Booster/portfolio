"use client"

import "./projectCard.css"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ProjectWithSkills } from "@/app/types/Project"
import Image from "next/image"
import { useRouter } from "next/navigation"
import useWindowSize from "@/app/utils/windowSize"

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
    const {width: windowWidth} = useWindowSize()

    useGSAP(() => {
        tl.current.to(cardRef.current, {
            y: "-=40px",
            duration: 0.5,
        })
        tl.current.to(".project-card-view-more-button", {
            backgroundColor: "#43ff3f",
            color: "#1f2133",
            duration: 0.5,
            ease: "power1.out",
        }, "<")
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
                {windowWidth > 550 && (<svg
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
                </svg>)}
                

                <img
                    className="project-card-image"
                    src={project.mainPicture}
                    alt={project.name + " image"}
                />
                <div className="card-text-area">
                    <h2 className="project-card-title">{project.name}</h2>
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
                <button className="project-card-view-more-button" onClick={() => router.push(`/projects/${project.id}`)}>
                    View more
                </button>
            </div>
        </div>
    )
}
