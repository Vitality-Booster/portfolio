import StatisticsDiagram from "../statistics_diagram/StatisticsDiagram"
import "./statisticsCard.css"

export type StatisticsType = {
    Fun: string
    Stress: string
    Learning: string
    Complexity: string
    Creativity: string
    Innovation: string
}

export default function StatisticsCard({
    stats,
    tags,
}: {
    stats: StatisticsType
    tags: string[]
}) {
    return (
        <div className="statistics-card-container">
            <div className="statistics-card">
                <div className="statistics-container">
                    <StatisticsDiagram stats={stats} />
                </div>
                <div className="statistics-text">
                    <a className="single-statistics-text">
                        Complexity: <strong>{stats.Complexity}</strong>
                    </a>
                    <a className="single-statistics-text">
                        Innovation: <strong>{stats.Innovation}</strong>
                    </a>
                    <a className="single-statistics-text">
                        Learning: <strong>{stats.Learning}</strong>
                    </a>
                    <a className="single-statistics-text">
                        Fun: <strong>{stats.Fun}</strong>
                    </a>
                    <a className="single-statistics-text">
                        Creativity: <strong>{stats.Creativity}</strong>
                    </a>
                    <a className="single-statistics-text">
                        Stress: <strong>{stats.Stress}</strong>
                    </a>
                </div>
            </div>
            <div className="project-tags-wrapper">
                {tags.map((tag, index) => (
                    <div
                        className="project-tag"
                        key={index}
                        style={tag === "AI" ? { marginRight: "50px" } : {}}
                    >
                        {tag}
                    </div>
                ))}
            </div>
            <div className="statistics-card-shadow" />
        </div>
    )
}
