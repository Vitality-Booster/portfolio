import { SkillCardDataType } from "@/app/types/SkillTypes"
import "./skillCard.css"
import Image from "next/image"
import { Skill } from "@prisma/client"

export default function SkillCard({skillData, skillIndex}: {skillData: Skill, skillIndex: number}) {
    // skillNumber % 2 === 0 &&
    return (
        <div className="skill-card">
            <div
                className="skill-number"
                style={
                    skillIndex % 2 === 1
                        ? skillIndex === 1
                            ? { left: "-4rem" }
                            : { left: "-5rem" }
                        : { left: "70%" }
                }
            >
                {skillIndex}
            </div>
            <Image
                className="skill-card-icon"
                src={skillData.image}
                alt={skillData.name + " icon"}
                height={60}
                width={60}
                // width={
                //     skillCardData.iconWidth
                //         ? skillCardData.iconWidth
                //         : skillCardData.iconHeight
                // }
            />
            <div className="skill-icon-with-name">
                <a className="skill-name">{skillData.name}</a>
            </div>
            <div className="skill-year-experience">
                Experience: {skillData.experience} years
            </div>
        </div>
    )
}
