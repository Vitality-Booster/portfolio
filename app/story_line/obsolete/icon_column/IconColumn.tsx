import "./iconColumn.css"
import Image from "next/image"

export default function IconColumn({
    iconSrc,
    duration,
    imageMarginBottom = "30px",
}: {
    iconSrc: string
    duration: string
    imageMarginBottom?: string
}) {
    return (
        <div className="icon-column">
            <div
                className="image-container"
                style={{ marginBottom: imageMarginBottom }}
            >
                <Image
                    src={iconSrc}
                    alt="Artificial Intelligence image"
                    width={200}
                    height={200}
                />
            </div>
            <h2 className="story-line-duration">{duration}</h2>
        </div>
    )
}
