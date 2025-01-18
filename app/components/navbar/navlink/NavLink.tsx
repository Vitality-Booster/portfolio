// "use client"

import "./navlink.css"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef, useState } from "react"

gsap.registerPlugin(useGSAP)

export default function NavLink({
    text,
    link,
    active,
    wasActive,
    onClickCallback,
}: {
    text: string
    link: string
    active: boolean
    wasActive: boolean
    onClickCallback: (tab: string) => void
}) {
    const [animationComplete, setAnimationComplete] = useState(false)

    const leftBorder = useRef(null)
    const rightBorder = useRef(null)
    const navLink = useRef(null)

    const bordersTL = useRef(gsap.timeline())

    const { contextSafe } = useGSAP({ scope: navLink })

    useGSAP(() => {
        bordersTL.current.to(leftBorder.current, {
            keyframes: [
                {
                    top: "1.5rem",
                    height: "0",
                    width: "50%",
                    borderLeftColor: "transparent",
                },
                {
                    borderBottomColor: "#99ff55",
                    left: "50%",
                },
            ],
            duration: 0.4,
            ease: "power1.out",
        })

        bordersTL.current.to(
            rightBorder.current,
            {
                keyframes: [
                    {
                        top: "-0.5rem",
                        height: "0",
                        width: "50%",
                        borderRightColor: "transparent",
                    },
                    {
                        borderTopColor: "#99ff55",
                        left: "0%",
                    },
                ],
                duration: 0.4,
                ease: "power1.out",
            },
            "<+=0.1",
        )

        bordersTL.current.to(
            navLink.current,
            {
                color: "#99ff55",
                duration: 0.4,
                ease: "power1.in",
            },
            "<",
        )

        bordersTL.current.pause()

        if (wasActive && !active) {
            bordersTL.current.reverse()
            // setFinishedInitAnimation(true)
        } else if (wasActive && active) {
            bordersTL.current.play()
            // setFinishedInitAnimation(true)
        } else if (active && !wasActive) {
            bordersTL.current.play()
        }
    }, [active, animationComplete])

    const onHoverHandler = contextSafe(() => {
        // if (!active) bordersTL.current.play().then(() => setAnimationComplete(true))
        if (!active) bordersTL.current.play()
    })

    const onLeaveHandler = contextSafe(() => {
        if (!active)
            bordersTL.current.reverse().then(() => setAnimationComplete(false))
    })

    return (
        <a
            className={"navbar-link"}
            href={`${process.env.NEXT_PUBLIC_BASE_URL}#${link}`}
            ref={navLink}
            onMouseEnter={onHoverHandler}
            onMouseLeave={onLeaveHandler}
            onClick={() => onClickCallback(link)}
        >
            <div
                // className={active ? "left-border-active" : "left-border"}
                className={"left-border"}
                ref={leftBorder}
            />
            {text}
            <div className={"right-border"} ref={rightBorder} />
        </a>
    )
}
