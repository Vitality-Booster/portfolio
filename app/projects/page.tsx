import DescriptionCard from "./description/DescriptionCard"
import "./page.css"
import StatisticsCard from "./statistics/StatisticsCard"
import TechStack from "./tech_stack/TechStack"

export default function ProjectsPage() {
    return (
        <div className="all-projects-container">
            <div className="main-image-container">
                <img
                    className="project-main-image"
                    src="https://cdn.pixabay.com/photo/2024/02/05/16/23/labrador-8554882_640.jpg"
                />
                <div className="project-name-label">Good Boy Project</div>
            </div>
            <div className="description-with-stats-container">
                <DescriptionCard />
                <StatisticsCard />
            </div>
            <div className="project-tech-stack">
                <TechStack />
            </div>
        </div>
    )
}
