import { SkillWithProjectNames } from "@/app/types/SkillTypes"
import "./skillCard.css"
import Image from "next/image"

export default function SkillCard({
    skillData,
    skillIndex,
}: {
    skillData: SkillWithProjectNames
    skillIndex: number
}) {
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
            <div className="main-skill-text">
                <div className="skill-year-experience">
                    <strong>Experience</strong>: {skillData.experience} years
                </div>
                <div className="skill-year-experience">
                    <strong>Projects</strong>:{" "}
                    {skillData.projects.slice(0, 3).join(", ")}
                </div>
            </div>
        </div>
    )
}
