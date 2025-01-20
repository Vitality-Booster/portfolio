"use client"

import Image from "next/image"
import "./modal.css"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

const TICK_IMAGE_URL =
    "https://profile-website-bucket.s3.us-east-1.amazonaws.com/contact_page/tick-inside-circle.png"

export default function Modal({
    closeCallback,
}: {
    closeCallback: () => void
}) {
    const { contextSafe } = useGSAP()
    const tl = useRef(gsap.timeline())

    useGSAP(() => {
        tl.current.to(".message-received-modal-container", {
            opacity: 1,
            duration: 0.5,
        })
        tl.current.from(
            ".message-received-modal",
            {
                opacity: 0,
                y: "-=200",
                duration: 0.5,
            },
            "<+0.1",
        )
    })

    const onClickHandler = contextSafe(() => {
        tl.current.reverse().then(() => {
            closeCallback()
        })
    })

    return (
        <div
            className="message-received-modal-container"
            onClick={onClickHandler}
        >
            <div className="message-received-modal">
                <Image
                    src={TICK_IMAGE_URL}
                    alt={"'Message delivered' tick"}
                    width={100}
                    height={100}
                />
                <a>
                    Your message has been succesully received. Thank you for
                    your time. I will contact you as soon as I can!
                </a>
                <button className="close-modal-button" onClick={onClickHandler}>
                    Close
                </button>
            </div>
        </div>
    )
}
