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
            <h1 className="main-header">{header}</h1>
            <div className="description-card">
                <p>{text}</p>
            </div>
        </div>
    )
}
