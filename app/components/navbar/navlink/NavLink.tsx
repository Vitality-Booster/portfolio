// "use client"

import "./navlink.css"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

gsap.registerPlugin(useGSAP)

export default function NavLink({
    text,
    link,
    active,
}: {
    text: string
    link: string
    active: boolean
}) {
    const leftBorder = useRef(null)
    const rightBorder = useRef(null)
    const navLink = useRef(null)

    const bordersTL = useRef(gsap.timeline())

    const { contextSafe } = useGSAP({ scope: navLink })

    useGSAP(() => {
        if (active) {
            // gsap.from(leftBorder.current, {
            //     opacity: 0,
            //     width: 0,
            //     duration: 1,
            //     ease: "power1.in",
            // })
            // gsap.from(rightBorder.current, {
            //     opacity: 0,
            //     width: 0,
            //     duration: 1,
            //     ease: "power1.in",
            // })
            // gsap.from(navLink.current, {
            //     color: "#fff",
            //     duration: 0.4,
            //     ease: "power1.in",
            // })
        } else {
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
        }
    }, [bordersTL])

    const onHoverHandler = contextSafe(() => {
        if (!active) bordersTL.current.restart()
    })

    const onLeaveHandler = contextSafe(() => {
        if (!active) bordersTL.current.reverse()
    })

    return (
        <a
            className={active ? "navbar-link-active" : "navbar-link"}
            href={link}
            ref={navLink}
            onMouseEnter={onHoverHandler}
            onMouseLeave={onLeaveHandler}
        >
            <div
                className={active ? "left-border-active" : "left-border"}
                ref={leftBorder}
            />
            {text}
            <div
                className={active ? "right-border-active" : "right-border"}
                ref={rightBorder}
            />
        </a>
    )
}
