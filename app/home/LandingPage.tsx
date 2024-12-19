"use client"

import "./landingPage.css"
import Image from "next/image"

import { useEffect, useRef, useState } from "react"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import TextPlugin from "gsap/TextPlugin"

gsap.registerPlugin(useGSAP, TextPlugin)

export default function LandingPage() {
    const bestRectRef = useRef(null)
    const tl = useRef(gsap.timeline())
    const [pics, setPics] = useState<string[]>([])

    useGSAP(() => {
        tl.current.from(
            bestRectRef.current,
            {
                width: 0,
                duration: 1,
                ease: "elastic.out",
            },
            "+=0.8",
        )
        tl.current.from(".description-word", {
            opacity: 0,
            duration: 0.5,
            stagger: 0.15,
            ease: "power1.in",
        })
    }, [bestRectRef, tl])

    // TODO: Finish later
    useEffect(() => {
        async function fetchPics() {
            const res = await fetch(
                "/api/images?path=welcome_page/line_face.png",
                {
                    cache: "force-cache",
                }
            )
            // const res = await fetch("/api/images?path=react.png&type=skill")
            const data = await res.json()
            console.log("Data:", data)
            setPics([data.imageUrl])
        }

        fetchPics()
    }, [])

    return (
        <div className="landing-container">
            <div className="line-face-container">
                {/* <Image src={LineFace} alt="Line Face" width={800} />
                <Image src={"s3://profile-website-bucket/line_face.png"} alt="Face" width={800}/> */}
                {/* <div>{pics[0]?.Key}</div> */}
                {pics && pics[0] && (
                    <Image
                        src={pics[0]}
                        className="line-face-picture"
                        alt="Face"
                        width={800}
                        height={800}
                    />
                )}
            </div>
            <div className="text-container">
                <div className="name-container">
                    <h1 className="full-name first-name">VITALI</h1>
                    <h1 className="full-name last-name">
                        <div
                            className="last-name-rectangle"
                            ref={bestRectRef}
                        />
                        BESTOLKAU
                    </h1>
                </div>
                <div className="home-descriptions">
                    <div className="home-description-line">
                        <p className="hidden-home-description">Team Player</p>
                        <p className="home-description">Developer</p>
                    </div>
                    <div className="home-description-line">
                        <p className="hidden-home-description">Innovator</p>

                        <p className="home-description">Enthusiast</p>
                    </div>
                    <div className="home-description-line">
                        <p className="hidden-home-description">
                            Problem Solver
                        </p>
                        <p className="home-description">Challenger</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
