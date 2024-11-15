"use client"

import { ImageType } from "@/app/types/ImageType"
import "./projectCard.css"

import Image, { StaticImageData } from "next/image"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ProjectCardInfo } from "@/app/types/Project"

gsap.registerPlugin(useGSAP)

export default function ProjectCard({
    projectCardInfo,
}: {
    projectCardInfo: ProjectCardInfo
}) {
    const cardRef = useRef(null)
    const shadowRef = useRef(null)

    useGSAP(() => {
        const cardTween = gsap.to(cardRef.current, {
            y: "-=20px",
            duration: 0.5,
            paused: true,
        })

        const shadowTween = gsap.to(shadowRef.current, {
            y: "-=20px",
            duration: 0.2,
            paused: true,
        })

        cardRef.current.addEventListener("mouseenter", () => {
            cardTween.play()
            shadowTween.play()
        })

        cardRef.current.addEventListener("mouseleave", () => {
            cardTween.reverse()
            shadowTween.reverse()
        })
    }, [cardRef, shadowRef])

    return (
        <div className="project-card-wrapper">
            <div className="rectangle-shadow" ref={shadowRef} />
            
            
            <div className="project-card" ref={cardRef}>

            <svg className="card-border-svg" width="435" height="700" viewBox="0 0 437 702" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect className="card-border-path" x="0" y="0" width="436" height="701" rx="10" stroke="#43FF3F" stroke-width="1.5"/>
            </svg>

            {/* <svg
                className="card-border-svg"
                width="354"
                height="512"
                viewBox="0 0 352 502"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    className="card-border-path"
                    fill="none"
                    d="M341 1H11C5.47715 1 1 5.47714 1 11V491C1 496.523 5.47715 501 11 501H341C346.523 501 351 496.523 351 491V11C351 5.47715 346.523 1 341 1Z"
                    stroke="#43FF3F"
                />
            </svg> */}
            
                {/* <div className="card-border-svg-container"> */}

                {/* </div> */}

                <img
                    className="project-card-image"
                    src={
                        typeof projectCardInfo.mainImage.src === "string"
                            ? projectCardInfo.mainImage.src
                            : ""
                    }
                    alt={projectCardInfo.mainImage.alt}
                />
                <div className="card-text-area">
                    <div className="project-card-title-box">
                        <h2>{projectCardInfo.projectName}</h2>
                    </div>
                    <div className="project-card-description">
                        {projectCardInfo.projectDescription}
                    </div>
                </div>
                <div className="project-card-footer">
                    <Image
                        className="project-card-icon"
                        src={projectCardInfo.iconImage1.src}
                        alt={projectCardInfo.iconImage1.alt}
                        width={
                            projectCardInfo.iconImage1.width
                                ? projectCardInfo.iconImage1.width
                                : 35
                        }
                    />
                    <Image
                        className="project-card-icon"
                        src={projectCardInfo.iconImage2.src}
                        alt={projectCardInfo.iconImage2.alt}
                        width={
                            projectCardInfo.iconImage2.width
                                ? projectCardInfo.iconImage2.width
                                : 35
                        }
                    />
                    <Image
                        className="project-card-icon"
                        src={projectCardInfo.iconImage3.src}
                        alt={projectCardInfo.iconImage3.alt}
                        width={
                            projectCardInfo.iconImage3.width
                                ? projectCardInfo.iconImage3.width
                                : 35
                        }
                    />
                </div>
            </div>
        </div>
    )
}
