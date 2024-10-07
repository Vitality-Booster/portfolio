import "./textColumn.css"

export default function TextColumn({
    header,
    text,
}: {
    header: string
    text: string
}) {
    return (
        <div className="text-column">
            <h2 className="main-header">{header}</h2>
            <div className="description-card">
                <p>{text}</p>
            </div>
        </div>
    )
}
