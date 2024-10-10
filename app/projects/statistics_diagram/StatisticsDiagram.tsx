"use client"

import "./statisticsDiagram.css"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { stat } from "fs/promises"

gsap.registerPlugin(useGSAP)

const Stat1Map = {
    S: "50% 0%",
    A: "50% 10%",
    B: "50% 17%",
    C: "50% 25%",
    D: "50% 32%",
    E: "50% 40%",
}

const Stat2Map = {
    S: "93% 25%",
    A: "86% 29%",
    B: "81% 32%",
    C: "75% 35.5%",
    D: "67.5% 40%",
    E: "58% 45.5%",
}

const Stat3Map = {
    S: "93% 75%",
    A: "86% 71%",
    B: "81% 68%",
    C: "75% 64.5%",
    D: "67.5% 60%",
    E: "58% 54.5%",
}

const Stat4Map = {
    S: "50% 100%",
    A: "50% 90%",
    B: "50% 83%",
    C: "50% 75%",
    D: "50% 68%",
    E: "50% 60%",
}

const Stat5Map = {
    S: "7% 75%",
    A: "14% 71%",
    B: "19% 68%",
    C: "25% 64.5%",
    D: "32.5% 60%",
    E: "42.5% 54.5%",
}

const Stat6Map = {
    S: "7% 25%",
    A: "14% 29%",
    B: "19% 32%",
    C: "25% 35.5%",
    D: "32.5% 40%",
    E: "42.5% 45.5%",
}

const statArray = ["A", "D", "S", "E", "B", "B"]

export default function StatisticsDiagram() {
    const figureRef = useRef(null)

    useGSAP(() => {
        gsap.to(figureRef.current, {
            "--stat1": Stat1Map[statArray[0]],
            "--stat2": Stat2Map[statArray[1]],
            "--stat3": Stat3Map[statArray[2]],
            "--stat4": Stat4Map[statArray[3]],
            "--stat5": Stat5Map[statArray[4]],
            "--stat6": Stat6Map[statArray[5]],
            duration: 2,
            ease: "power2.out",
        })
    }, [figureRef])

    return (
        <div className="statistics-diagram">
            <div className="statistics-base">
                <div className="vertical-line" />
                <div className="diagonal-line-1" />
                <div className="diagonal-line-2" />
                <div className="statistics-figure" ref={figureRef} />
            </div>
        </div>
    )
}
