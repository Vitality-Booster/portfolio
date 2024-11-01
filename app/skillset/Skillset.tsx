import Skill from "./skill/Skill"
import "./skillset.css"

export default function Skillset() {
    return (
        <div className="skillset-container">
            <div className="skillset-section">
                <h2>Frontend</h2>
                <div className="skills-container">
                    <Skill />
                </div>
            </div>
        </div>
    )
}
