import "./descriptionCard.css"

export default function DescriptionCard({
    description,
    link,
}: {
    description: string
    link: string
}) {
    return (
        <div className="description-card-container">
            <div className="description-project-card">
                <div className="description-text">{description}</div>
                <div className="view-more-button-container"><button
                    className="view-more-button"
                    onClick={() => window.open(link, "_blank")}
                >
                    Source
                </button></div>
                
            </div>
            <div className="description-card-shadow" />
        </div>
    )
}
