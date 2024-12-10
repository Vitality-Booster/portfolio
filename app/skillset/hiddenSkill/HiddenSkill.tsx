import { SkillData } from "@/app/types/SkillTypes"
import "./hiddenSkill.css"

export default function HiddenSkill(skillData: SkillData) {
    return (
        <div className="hidden-skill-card">
            <div
                className="hidden-skill-number"
                style={
                    skillData.skillNumber % 2 === 1
                        ? skillData.skillNumber === 1
                            ? { left: "-4rem" }
                            : { left: "-5rem" }
                        : { left: "70%" }
                }
            >
                {skillData.skillNumber}
            </div>
            <div className="hidden-skill-name-wrapper">
                <a className="skill-name">{skillData.skillName}</a>
            </div>
            <div className="hidden-skill-year-experience">
                Experience: {skillData.expYears} years
            </div>
        </div>
    )
}
