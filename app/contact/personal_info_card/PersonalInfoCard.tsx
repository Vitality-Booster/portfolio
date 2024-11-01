import "./personalInfoCard.css"
import Image, { StaticImageData } from "next/image"

export default function PersonalInfoCard({
    icon,
    title,
    value,
}: {
    icon: StaticImageData
    title: string
    value: string
}) {
    return (
        <div className="personal-info-card">
            <div className="personal-info-image-container">
                <Image
                    className="personal-info-icon"
                    src={icon}
                    alt="Email icon"
                    width={70}
                />
            </div>
            <div className="personal-info-text-container">
                <a className="personal-info-title">{title}</a>
                <a className="personal-info-value">{value}</a>
            </div>
        </div>
    )
}
