import "./hiddenSkill.css"

export default function HiddenSkill({skillNumber, skillName, expYears}: {skillNumber: number, skillName: string, expYears: number}) {
    return (
        <div className="hidden-skill-card">
            <div
                className="hidden-skill-number"
                style={
                    skillNumber % 2 === 1
                        ? skillNumber === 1 ? { left: "-4rem"}
                        : { left: "-5rem" }
                        : { left: "70%" }
                }
            >{skillNumber}</div>
            <div className="hidden-skill-name-wrapper">
                <a className="skill-name">{skillName}</a>
            </div>
            <div className="hidden-skill-year-experience">
                Experience: {expYears} years
            </div>
        </div>
    )
}