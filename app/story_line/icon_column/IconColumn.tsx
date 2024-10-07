import "./iconColumn.css"
import Image, { StaticImageData } from "next/image"

export default function IconColumn({
    iconSrc,
    duration,
    imageMarginBottom = "0px",
}: {
    iconSrc: StaticImageData
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
                    width={100}
                />
            </div>
            <h2>{duration}</h2>
        </div>
    )
}
