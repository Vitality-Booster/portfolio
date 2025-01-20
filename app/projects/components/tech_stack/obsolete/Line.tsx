"use client"

import "./line.css"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { LineDataType } from "@/app/types/TechCircle"

gsap.registerPlugin(useGSAP)

export default function Line({ lineData }: { lineData: LineDataType }) {
    const formattedType = lineData.type
        .toLowerCase()
        .replaceAll(" ", "-")
        .replace("/", "")
    const lineType = `${formattedType}-line`

    useGSAP(() => {
        gsap.to(`#${lineData.id}`, {
            x: lineData.x,
            y: lineData.y,
        })
    })

    return (
        <div
            id={lineData.id}
            className={`attachment-line ${lineType}`}
            style={{
                rotate: `${lineData.angle}rad`,
                width: `${lineData.length}px`,
            }}
        />
    )
}
