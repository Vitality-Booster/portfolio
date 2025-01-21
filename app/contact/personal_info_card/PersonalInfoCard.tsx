import "./personalInfoCard.css"
import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef, useState } from "react"

export default function PersonalInfoCard({
    icon,
    darkIcon,
    title,
    value,
    size = 80,
    boxPadding = 8,
    link,
}: {
    icon: string
    darkIcon: string
    title: string
    value: string
    size?: number
    boxPadding?: number
    link: string
}) {
    const iconContainerRef = useRef(null)
    const [isDarkIcon, setIsDarkIcon] = useState(false)
    const { contextSafe } = useGSAP({ scope: iconContainerRef })


    const handleOnHover = contextSafe(() => {
        gsap.to(".icon-rectangle-fill", {
            top: "0%",
            duration: 0.4,
            ease: "power1.out",
        })
        setIsDarkIcon(true)
    })

    const handleOnLeave = contextSafe(() => {
        gsap.to(".icon-rectangle-fill", {
            top: "100%",
            duration: 0.4,
            ease: "power1.out",
        })
        setIsDarkIcon(false)
    })

    return (
        <div className="personal-info-card">
            <a
                href={link}
                className="personal-info-icon-container"
                ref={iconContainerRef}
                onMouseEnter={handleOnHover}
                onMouseLeave={handleOnLeave}
            >
                <Image
                    className="personal-info-icon"
                    src={isDarkIcon ? darkIcon : icon}
                    alt={`${title} icon`}
                    width={size}
                    height={size}
                    style={{ padding: boxPadding }}
                />
                <div className="icon-rectangle-fill" />
            </a>
            <div className="personal-info-text-container">
                <a className="personal-info-title">{title}</a>
                <a className="personal-info-value">{value}</a>
            </div>
        </div>
    )
}
