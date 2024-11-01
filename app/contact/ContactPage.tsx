import "./contactPage.css"
import PersonalInfoCard from "./personal_info_card/PersonalInfoCard"

import EmailIcon from "@/public/contact_page/email.png"
import PhoneIcon from "@/public/contact_page/call-phone.png"
import AddressIcon from "@/public/contact_page/location.png"

export default function ContactPage() {
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
                            placeholder="Full Name"
                            required
                        />
                    </div>
                    <div className="contact-input-container">
                        <input
                            className="contact-input"
                            type="email"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="contact-input-container">
                        <input
                            className="contact-input"
                            type="text"
                            placeholder="Subject"
                        />
                    </div>
                <div className="contact-message-container">
                    <textarea
                        className="contact-message"
                        placeholder="Message"
                        required
                    />
                    <button className="contact-submit-button">Submit</button>
                    {/* <div className="contact-messaage-box"/> */}
                </div>
                </div>
            </form>
        </div>
    )
}
