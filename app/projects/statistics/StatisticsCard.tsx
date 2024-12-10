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
                    <a className="single-statistics-text">
                        Complexity: <strong>B</strong>
                    </a>
                    <a className="single-statistics-text">
                        Innovation: <strong>B</strong>
                    </a>
                    <a className="single-statistics-text">
                        Learning: <strong>B</strong>
                    </a>
                    <a className="single-statistics-text">
                        Fun: <strong>B</strong>
                    </a>
                    <a className="single-statistics-text">
                        Creativity: <strong>B</strong>
                    </a>
                    <a className="single-statistics-text">
                        Stress: <strong>B</strong>
                    </a>
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
