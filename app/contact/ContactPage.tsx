"use client"

import "./contactPage.css"
import PersonalInfoCard from "./personal_info_card/PersonalInfoCard"

import EmailIcon from "@/public/contact_page/email.png"
import PhoneIcon from "@/public/contact_page/call-phone.png"
import AddressIcon from "@/public/contact_page/location.png"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

gsap.registerPlugin(useGSAP)

export default function ContactPage() {
    const buttonRef = useRef(null)
    const buttonContRef = useRef(null)
    const extraTextRef = useRef(null)
    const buttonEffectTl = useRef(gsap.timeline())
    const { contextSafe } = useGSAP({ scope: buttonContRef })

    useGSAP(() => {
        buttonEffectTl.current.to(buttonRef.current, {
            width: "+=2.5rem",
            color: "#fff",
            duration: 0.5,
            ease: "power1",
        })

        buttonEffectTl.current.to(
            extraTextRef.current,
            {
                opacity: 1,
                duration: 0.5,
                ease: "power1",
            },
            "<",
        )

        buttonEffectTl.current.pause()
    }, [buttonEffectTl])

    const buttonHoverHandler = contextSafe(() => {
        console.log("I am hjere!")
        buttonEffectTl.current.restart()
    })

    const buttonLeaveHandler = contextSafe(() => {
        buttonEffectTl.current.reverse()
    })

    return (
        <div className="contact-main-container">
            <div className="contact-information-container">
                <a className="cta-text-highlited">* Contact me *</a>
                <h1 className="contact-main-text">
                    Looking for a {``}
                    <span className="contact-main-text-highlighted">
                        professional
                        <div className="highlighted-rectangle" />
                    </span>
                    ? You found him
                </h1>
                {/**
                 * Be careful: this margin only works with "PersonalInfoCrad element".
                 * For more check the CSS code.
                 */}
                <div className="personal-information-container">
                    <PersonalInfoCard
                        icon={EmailIcon}
                        title="Email"
                        value="bestolkovv@gmail.com"
                    />
                    <PersonalInfoCard
                        icon={PhoneIcon}
                        title="Phone"
                        value="+31 6 51394215"
                        boxPadding={12}
                    />
                    <PersonalInfoCard
                        icon={AddressIcon}
                        title="Address"
                        value="Amsterdam, Netherlands"
                    />
                </div>
            </div>
            <form className="contact-form">
                <div className="contact-details-container">
                    <div className="contact-input-container">
                        <label className="contact-input-label">Full Name</label>
                        <input
                            className="contact-input"
                            type="text"
                            placeholder="Elon Musk"
                            required
                        />
                    </div>
                    <div className="contact-input-container">
                        <label className="contact-input-label">Email</label>
                        <input
                            className="contact-input"
                            type="email"
                            placeholder="elonmusk@tesla.com"
                            required
                        />
                    </div>
                    <div className="contact-input-container">
                        <label className="contact-input-label">Subject</label>
                        <input
                            className="contact-input"
                            type="text"
                            placeholder="Job Opportynity"
                        />
                    </div>
                    <div className="contact-message-container">
                        <label className="contact-input-label">Message</label>
                        <textarea
                            className="contact-message"
                            placeholder="Your text here"
                            required
                        />
                    </div>
                </div>
                <div className="button-container" ref={buttonContRef}>
                    <div className="button-wrapper">
                        <button
                            className="contact-submit-button"
                            ref={buttonRef}
                            onMouseEnter={buttonHoverHandler}
                            onMouseLeave={buttonLeaveHandler}
                        >
                            <a className="button-text" ref={buttonRef}>
                                Send email
                            </a>
                        </button>
                        <a className="extra-button-text" ref={extraTextRef}>
                            {"->"}
                        </a>
                    </div>
                </div>
            </form>
        </div>
    )
}
