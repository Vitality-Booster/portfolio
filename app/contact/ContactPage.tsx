"use client"

import "./contactPage.css"
import PersonalInfoCard from "./personal_info_card/PersonalInfoCard"

import EmailIcon from "@/public/contact_page/email.png"
import PhoneIcon from "@/public/contact_page/call-phone.png"
import AddressIcon from "@/public/contact_page/location.png"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef, useState } from "react"
import { format } from "path"

gsap.registerPlugin(useGSAP)

export default function ContactPage() {
    const buttonRef = useRef(null)
    const buttonContRef = useRef(null)
    const extraTextRef = useRef(null)
    const buttonEffectTl = useRef(gsap.timeline())
    const { contextSafe } = useGSAP({ scope: buttonContRef })

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        message: "",
        subject: "",
    })
    const [status, setStatus] = useState("")

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

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("Sending...")

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })

        console.log("The response is:", response)

        if (response.ok) {
            setStatus("Email sent successfully!")
            setFormData({ fullName: "", email: "", message: "", subject: "" })
        } else {
            setStatus("Error sending email.")
        }
    }

    return (
        <div id="contact" className="contact-main-container">
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
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-details-container">
                    <div className="contact-input-container">
                        <label className="contact-input-label">Full Name</label>
                        <input
                            className="contact-input"
                            name="fullName"
                            type="text"
                            placeholder="Elon Musk"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="contact-input-container">
                        <label className="contact-input-label">Email</label>
                        <input
                            className="contact-input"
                            name="email"
                            type="email"
                            placeholder="elonmusk@tesla.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="contact-input-container">
                        <label className="contact-input-label">Subject</label>
                        <input
                            className="contact-input"
                            type="text"
                            name="subject"
                            placeholder="Job Opportynity"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="contact-message-container">
                        <label className="contact-input-label">Message</label>
                        <textarea
                            className="contact-message"
                            name="message"
                            placeholder="Your text here"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="button-container" ref={buttonContRef}>
                    <div className="button-wrapper">
                        <button
                            className="contact-submit-button"
                            type="submit"
                            ref={buttonRef}
                            onMouseEnter={buttonHoverHandler}
                            onMouseLeave={buttonLeaveHandler}
                            // onClick={() => {
                            //     fetch("/api/projects").then((res) =>
                            //         console.log(
                            //             "Here is the response from the projects endpoint: " +
                            //                 res.json(),
                            //         ),
                            //     )
                            // }}
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
