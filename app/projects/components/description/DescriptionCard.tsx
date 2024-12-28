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
            <div className="description-card">
                <div className="description-text">{description}</div>
                <button
                    className="view-more-button"
                    onClick={() => window.open(link, "_blank")}
                >
                    View
                </button>
            </div>
            <div className="description-card-shadow" />
        </div>
    )
}
