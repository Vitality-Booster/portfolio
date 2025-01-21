"use client"

import "./point.css"
import { useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Point({ marginTop = "20px" }: { marginTop?: string }) {
    const [animationComplete, setAnimationComplete] = useState(false)
    const point = useRef(null)
    const littleCircle = useRef(null)
    const line = useRef(null)
    const tl = useRef(gsap.timeline())

    useGSAP(() => {
        tl.current.to(point.current, {
            scale: 1.3,
            skew: 20,
            duration: 1,
        })
        tl.current.to(line.current, {
            width: "+=150",
            duration: 1,
            ease: "power1.in",
        })
        tl.current.to(
            littleCircle.current,
            {
                backgroundColor: "#fff",
                duration: 1,
            },
            "<",
        )
        tl.current.pause()

        gsap.to(point.current, {
            scrollTrigger: {
                trigger: point.current,
                start: "center 80%",
                end: "center center",
                scrub: 0.5,
                onScrubComplete: (obj) => {
                    if (obj.progress === 1 && !animationComplete) {
                        gsap.to(point.current, {
                            "--lightning-opacity": 0,
                            duration: 2,
                        })
                        tl.current.play()
                    }
                    if (obj.direction === -1 && obj.progress <= 0.9) {
                        tl.current.reverse().then(() => {
                            gsap.to(point.current, {
                                "--lightning-opacity": 1,
                                duration: 2,
                            })
                        })

                    }
                },
            },
        })
    }, [point, littleCircle, tl, line, animationComplete, setAnimationComplete])

    return (
        <div className="wrap-everything" style={{ marginTop: marginTop }}>
            <div className="horizontal-line" ref={line} />
            <div className="main-circle-wrapper" ref={point}>
                <div className="main-circle">
                    <div className="little-circle" ref={littleCircle} />
                </div>
            </div>
        </div>
    )
}
