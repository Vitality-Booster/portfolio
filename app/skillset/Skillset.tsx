import Skill from "./checkLater/Skill"
import SkillsetFrame from "./frame/SkillsetFrame"
import SkillCard from "./skillCard/SkillCard"
import "./skillset.css"
import SkillsetTab from "./tab/SkillsetTab"

// Skill Icons imports
import Java from "../../public/tech_stack/java.png"
import PostgreSQL from "../../public/tech_stack/postgre.png"
import React from "../../public/tech_stack/react.png"
import HiddenSkill from "./hiddenSkill/HiddenSkill"

export default function Skillset() {
    return (
        <div className="skillset-main-container">
            <div className="skillset-all-tabs">
                <SkillsetTab tabText="CI/CD" active={false} />
                <SkillsetTab tabText="Front-end" active />
                <SkillsetTab tabText="Back-end" active={false} />
            </div>
            <SkillsetFrame />
            <div className="skillset-all-card">
                <div className="skill-line">
                    <SkillCard
                        icon={Java}
                        skillName={"Java"}
                        expYears={2}
                        skillNumber={1}
                        iconHeight={60}
                        iconWidth={65}
                    />
                    <HiddenSkill skillNumber={1} skillName={"Team work"} expYears={3} />
                </div>
                <div className="skill-line">
                    <SkillCard
                        icon={PostgreSQL}
                        skillName={"PostgreSQL"}
                        expYears={1}
                        skillNumber={2}
                        iconHeight={55}
                    />
                    <HiddenSkill skillNumber={2} skillName={"Innovation"} expYears={3} />
                </div>
                <div className="skill-line">
                    <SkillCard
                        icon={React}
                        skillName={"React"}
                        expYears={2}
                        skillNumber={3}
                        iconHeight={60}
                    />
                    <HiddenSkill skillNumber={3} skillName={"Research & Development"} expYears={4} />
                </div>
            </div>
            <SkillsetFrame />
        </div>
    )
}

// TODO: Previous version, check later if needed for the cool animation of the Skill Years
// may need to look for that in the "Check Later" folder as well!

// export default function Skillset() {
//     return (
//         <div className="skillset-container">
//             <div className="skillset-section">
//                 <h2>Frontend</h2>
//                 <div className="skills-container">
//                     <Skill />
//                 </div>
//             </div>
//         </div>
//     )
// }
