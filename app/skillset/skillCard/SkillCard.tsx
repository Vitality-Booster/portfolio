import { SkillCardDataType } from "@/app/types/SkillTypes"
import "./skillCard.css"
import Image, { StaticImageData } from "next/image"

export default function SkillCard(skillCardData: SkillCardDataType) {
    // skillNumber % 2 === 0 &&
    return (
        <div className="skill-card">
            <div
                className="skill-number"
                style={
                    skillCardData.skillNumber % 2 === 1
                        ? skillCardData.skillNumber === 1 ? { left: "-4rem"}
                        : { left: "-5rem" }
                        : { left: "70%" }
                }
            >
                {skillCardData.skillNumber}
            </div>
            <Image
                className="skill-card-icon"
                src={skillCardData.icon}
                alt={skillCardData.skillName + " icon"}
                height={skillCardData.iconHeight}
                width={skillCardData.iconWidth ? skillCardData.iconWidth : skillCardData.iconHeight}
            />
            <div className="skill-icon-with-name">
                <a className="skill-name">{skillCardData.skillName}</a>
            </div>
            <div className="skill-year-experience">
                Experience: {skillCardData.expYears} years
            </div>
        </div>
    )
}
