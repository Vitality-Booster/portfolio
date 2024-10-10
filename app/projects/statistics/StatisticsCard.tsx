import StatisticsDiagram from "../statistics_diagram/StatisticsDiagram"
import "./statisticsCard.css"

export default function StatisticsCard() {
    return (
        <div className="statistics-card-container">
            <div className="statistics-card">
                <div className="statistics-container">
                    <StatisticsDiagram />
                </div>
                <div className="statistics-text">
                    <h3>Power: A</h3>
                    <h3>Dex: D</h3>
                    <h3>Stress: S</h3>
                    <h3>INT: E</h3>
                    <h3>LWP: B</h3>
                    <h3>Health: B</h3>
                </div>
            </div>
            <div className="project-tags-wrapper">
                <div className="project-tag">Web Development</div>
                <div className="project-tag">Animals</div>
                <div className="project-tag">Personal Project</div>
            </div>
            <div className="statistics-card-shadow" />
        </div>
    )
}
