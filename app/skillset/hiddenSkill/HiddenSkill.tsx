import { HiddenSkillWithProjectNames } from "@/app/types/SkillTypes"
import "./hiddenSkill.css"

export default function HiddenSkillCard({
    hiddenSkill,
    index,
}: {
    hiddenSkill: HiddenSkillWithProjectNames
    index: number
}) {
    return (
        <div className="hidden-skill-card">
            <div
                className="hidden-skill-number"
                style={
                    index % 2 === 1
                        ? index === 1
                            ? { left: "-4rem" }
                            : { left: "-5rem" }
                        : { left: "70%" }
                }
            >
                {index}
            </div>
            <div className="hidden-skill-name-wrapper">
                <a className="skill-name">{hiddenSkill.name}</a>
            </div>
            <div className="hidden-main-skill-text">
                <div className="hidden-skill-year-experience">
                    <strong>Experience</strong>: {hiddenSkill.experience} years
                </div>
                <div className="hidden-skill-year-experience">
                    <strong>Projects</strong>:{" "}
                    {hiddenSkill.projects.slice(0, 3).join(", ")}
                </div>
            </div>
        </div>
    )
}
