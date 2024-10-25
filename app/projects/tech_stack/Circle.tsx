import { TechCircleType } from "@/app/types/TechCircle"
import "./circle.css"
import Image, { StaticImageData } from "next/image"

export default function Circle({
    techCircle,
    src,
    alt,
    iconSize,
    onHoverCallback,
    onLeaveCallback,
}: {
    techCircle: TechCircleType
    src: StaticImageData
    alt: string
    iconSize: number
    onHoverCallback: (type: string) => void
    onLeaveCallback: () => void
}) {
    const formattedType = techCircle.type
        .toLowerCase()
        .replaceAll(" ", "-")
        .replace("/", "")
    const circleType = `${formattedType}-circle`
    const nameType = `${formattedType}-name`
    const iconType = `${formattedType}-icon`

    return (
        <div
            className={`tech-circle ${circleType}`}
            id={techCircle.id}
            onMouseEnter={() => onHoverCallback(techCircle.type)}
            onMouseLeave={() => onLeaveCallback()}
            style={{ padding: `${(techCircle.size - iconSize) / 2}px` }}
        >
            <Image className={iconType} src={src} alt={alt} width={iconSize} />
            <h3 className={`tech-circle-name ${nameType}`}>
                {techCircle.name}
            </h3>
        </div>
    )
}
