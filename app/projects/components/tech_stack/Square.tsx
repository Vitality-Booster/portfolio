// "use client"

import "./square.css"
import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export default function Square({
    icon,
    type,
    name,
    id,
    active,
    onClickCallback,
}: {
    icon: string
    type: string
    name: string
    id: string
    active: boolean
    onClickCallback: (type: string) => void
}) {
    const formattedType = type
        .toLowerCase()
        .replaceAll(" ", "-")
        .replace("/", "")
    const squareType = `${formattedType}-square`
    const nameType = `${formattedType}-name`

    const { contextSafe } = useGSAP()

    const handleHoverOn = contextSafe(() => {
        gsap.to(`#${formattedType}-${id}`, {
            borderColor: "#43FF3F",
            duration: 0.5,
            ease: "power1.out",
        })
    })

    const handleHoverOff = contextSafe(() => {
        if (active) return

        gsap.to(`#${formattedType}-${id}`, {
            borderColor: "#5e5e5e94",
            duration: 0.5,
            ease: "power1.out",
        })
    })

    return (
        <div id={id} className="tech-square-wrapper">
            <div
                className={`tech-square glassmorphism ${squareType}`}
                id={`${formattedType}-${id}`}
                onClick={() => onClickCallback(type)}
                onMouseEnter={handleHoverOn}
                onMouseLeave={handleHoverOff}
            >
                <Image
                    className="tech-square-icon"
                    src={icon}
                    alt={name}
                    width={60}
                    height={60}
                />
            </div>
            <h3 className={`tech-square-name ${nameType}`}>{name}</h3>
        </div>
    )
}
