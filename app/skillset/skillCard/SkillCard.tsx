import "./skillCard.css"
import Image, { StaticImageData } from "next/image"

export default function SkillCard({
    icon,
    skillName,
    expYears,
    skillNumber,
    iconHeight,
    iconWidth = iconHeight,
}: {
    icon: StaticImageData
    skillName: string
    expYears: number
    skillNumber: number
    iconHeight: number
    iconWidth?: number
}) {
    // skillNumber % 2 === 0 &&
    return (
        <div className="skill-card">
            <div
                className="skill-number"
                style={
                    skillNumber % 2 === 1
                        ? skillNumber === 1 ? { left: "-4rem"}
                        : { left: "-5rem" }
                        : { left: "70%" }
                }
            >
                {skillNumber}
            </div>
            <Image
                className="skill-card-icon"
                src={icon}
                alt={skillName + " icon"}
                height={iconHeight}
                width={iconWidth}
            />
            <div className="skill-icon-with-name">
                <a className="skill-name">{skillName}</a>
            </div>
            <div className="skill-year-experience">
                Experience: {expYears} years
            </div>
        </div>
    )
}
