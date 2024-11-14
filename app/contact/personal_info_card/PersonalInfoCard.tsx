import "./personalInfoCard.css"
import Image, { StaticImageData } from "next/image"

export default function PersonalInfoCard({
    icon,
    title,
    value,
    size = 80,
    boxPadding = 8,
}: {
    icon: StaticImageData
    title: string
    value: string
    size?: number
    boxPadding?: number
}) {
    return (
        <div className="personal-info-card">
            <div className="personal-info-image-container">
                <Image
                    className="personal-info-icon"
                    src={icon}
                    alt="Email icon"
                    width={size}
                    style={{ padding: boxPadding }}
                />
            </div>
            <div className="personal-info-text-container">
                <a className="personal-info-title">{title}</a>
                <a className="personal-info-value">{value}</a>
            </div>
        </div>
    )
}
