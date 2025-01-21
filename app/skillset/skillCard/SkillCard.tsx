import { SkillWithProjectNames } from "@/app/types/SkillTypes"
import "./skillCard.css"
import Image from "next/image"

let LEFT_INDENT_1DIGIT = "70%"
let LEFT_INDENT_2DIGITS = "50%"

export default function SkillCard({
    skillData,
    skillIndex,
    windowWidth,
}: {
    skillData: SkillWithProjectNames
    skillIndex: number
    windowWidth: number
}) {
    if (windowWidth <= 1024) {
        LEFT_INDENT_2DIGITS = "40%"
    }

    if (windowWidth <= 900) {
        LEFT_INDENT_2DIGITS = "30%"
        LEFT_INDENT_1DIGIT = "60%"
    }

    if (windowWidth <= 768) {
        LEFT_INDENT_2DIGITS = "30%"
        LEFT_INDENT_1DIGIT = "70%"
    }

    if (windowWidth <= 400) {
        LEFT_INDENT_2DIGITS = "25%"
        LEFT_INDENT_1DIGIT = "65%"
    }

    let allProjects = ""

    if (windowWidth > 600) {
        allProjects = skillData.projects.slice(0, 3).join(", ")
    } else if (windowWidth > 450) {
        allProjects = skillData.projects.slice(0, 2).join(", ") + " & more"
    } else {
        allProjects = skillData.projects[0] + " & more"
    }

    return (
        <div className="skill-card">
            <div
                className="skill-number"
                style={
                    skillIndex % 2 === 1
                        ? skillIndex === 1
                            ? { left: "-4rem" }
                            : { left: "-5rem" }
                        : skillIndex < 10
                          ? { left: LEFT_INDENT_1DIGIT }
                          : { left: LEFT_INDENT_2DIGITS }
                }
            >
                {skillIndex}
            </div>
            <Image
                className="skill-card-icon"
                src={skillData.image}
                alt={skillData.name + " icon"}
                height={100}
                width={100}
            />
            <div className="skill-icon-with-name">
                <h2 className="skill-name">{skillData.name}</h2>
            </div>
            <div className="main-skill-text">
                <div className="skill-year-experience">
                    <strong>Experience</strong>: {skillData.experience} years
                </div>
                <a className="skill-year-experience">
                    <strong>Projects</strong>: {allProjects}
                </a>
            </div>
        </div>
    )
}
