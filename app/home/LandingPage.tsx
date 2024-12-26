"use client"

import "./landingPage.css"
import Image from "next/image"

import { useEffect, useRef, useState } from "react"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import TextPlugin from "gsap/TextPlugin"

gsap.registerPlugin(useGSAP, TextPlugin)

const LINE_FACE_URL =
    "https://profile-website-bucket.s3.us-east-1.amazonaws.com/welcome_page/line_face.png"

export default function LandingPage() {
    const bestRectRef = useRef(null)
    const tl = useRef(gsap.timeline())

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

    return (
        <div id="home" className="landing-container">
            <div className="line-face-container">
                <Image
                    src={LINE_FACE_URL}
                    className="line-face-picture"
                    alt="Face"
                    width={800}
                    height={800}
                />
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
