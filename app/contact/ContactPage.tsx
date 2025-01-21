"use client"

import "./contactPage.css"
import PersonalInfoCard from "./personal_info_card/PersonalInfoCard"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useState } from "react"
import Modal from "./modal/Modal"
import AnimatedButton from "../components/animated_button/AnimatedButton"

gsap.registerPlugin(useGSAP)

const EMAIL_ICON =
    "https://profile-website-bucket.s3.us-east-1.amazonaws.com/contact_page/email.png"
const PHONE_ICON =
    "https://profile-website-bucket.s3.us-east-1.amazonaws.com/contact_page/call-phone.png"
const ADDRESS_ICON =
    "https://profile-website-bucket.s3.us-east-1.amazonaws.com/contact_page/location.png"

const EMAIL_ICON_DARK =
    "https://profile-website-bucket.s3.us-east-1.amazonaws.com/contact_page/dark/email.png"
const PHONE_ICON_DARK =
    "https://profile-website-bucket.s3.us-east-1.amazonaws.com/contact_page/dark/phone-call.png"
const ADDRESS_ICON_DARK =
    "https://profile-website-bucket.s3.us-east-1.amazonaws.com/contact_page/dark/location.png"

export default function ContactPage() {
    const [showModal, setShowModal] = useState(false)

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        message: "",
        subject: "",
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })

        if (response.ok) {
            setShowModal(true)
            setFormData({ fullName: "", email: "", message: "", subject: "" })
        }
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (
        <div id="contact" className="full-page-section">
            <h1 className="section-heading">Contact Me</h1>
            <div className="contact-main-container">
                <div className="contact-information-container">
                    <a className="contact-main-text">
                        Looking for a {``}
                        <span className="contact-main-text-highlighted">
                            professional
                            <div className="highlighted-rectangle" />
                        </span>
                        ? You found him
                    </a>
                    {/**
                     * Be careful: this margin only works with "PersonalInfoCrad element".
                     * For more check the CSS code.
                     */}
                    <div className="personal-information-container">
                        <PersonalInfoCard
                            icon={ADDRESS_ICON}
                            darkIcon={ADDRESS_ICON_DARK}
                            title="Address"
                            value="Amsterdam, Netherlands"
                            link={"https://maps.app.goo.gl/QVbS2Hru3sUjAPRY9"}
                        />

                        <PersonalInfoCard
                            icon={EMAIL_ICON}
                            darkIcon={EMAIL_ICON_DARK}
                            title="Email"
                            value="bestolkovv@gmail.com"
                            link={"mailto:bestolkovv@gmail.com"}
                        />
                        <PersonalInfoCard
                            icon={PHONE_ICON}
                            darkIcon={PHONE_ICON_DARK}
                            title="Phone"
                            value="+31 6 51394215"
                            boxPadding={12}
                            link={"tel:+31651394215"}
                        />
                    </div>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="contact-details-container">
                        <div className="contact-input-container">
                            <label className="contact-input-label">
                                Full Name
                            </label>
                            <input
                                className="contact-input"
                                name="fullName"
                                type="text"
                                placeholder="John Smith"
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
                                placeholder="jsmith@company.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="contact-input-container">
                            <label className="contact-input-label">
                                Subject
                            </label>
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
                            <label className="contact-input-label">
                                Message
                            </label>
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
                    <div className="button-container">
                        <AnimatedButton
                            text={"Send email"}
                            includeArrows={true}
                        />
                    </div>
                </form>
                {showModal && <Modal closeCallback={handleCloseModal} />}
            </div>
        </div>
    )
}
