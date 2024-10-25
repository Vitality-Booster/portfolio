"use client"

import "./landingPage.css"
import Image from "next/image"
import { StaticImageData } from "next/image"
import LineFace from "@/public/home/line_face.png"

import { useRef } from "react"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import TextPlugin from "gsap/TextPlugin"

gsap.registerPlugin(useGSAP, TextPlugin)

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
        <div className="landing-container">
            <div className="line-face-container">
                <Image src={LineFace} alt="Line Face" width={800} />
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
                <div className="descriptions-container">
                    <p className="description-word">Developer</p>
                    <p className="description-word">Enthusiast</p>
                    <p className="description-word">Challenger</p>
                    <p className="hidden-word">Team Pla</p>
                    {/* <p className="hidden-word">Innovator</p> */}
                </div>
            </div>
        </div>
    )
}
