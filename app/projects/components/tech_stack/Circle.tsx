import { TechCircleType } from "@/app/types/TechCircle"
import "./circle.css"
import Image from "next/image"

export default function Circle({
    techCircle,
    src,
    alt,
    iconSize,
    onClickCallback
}: {
    techCircle: TechCircleType
    src: string
    alt: string
    iconSize: number
    onClickCallback: (type: string) => void
}) {
    const formattedType = techCircle.type
        .toLowerCase()
        .replaceAll(" ", "-")
        .replace("/", "")
    const circleType = `${formattedType}-circle`
    const nameType = `${formattedType}-name`
    const iconType = `${formattedType}-icon`

    return (
        <div id={techCircle.id} className="tech-circle-wrapper">

        
        <div
            className={`tech-circle ${circleType}`}
            onClick={() => onClickCallback(techCircle.type)}
            style={{ padding: `${(techCircle.size - iconSize) / 2}px` }}
        >
            <Image
                className={iconType}
                src={src}
                alt={alt}
                width={iconSize}
                height={iconSize}
            />
            
        </div>
        <h3 className={`tech-circle-name ${nameType}`}>
                {techCircle.name}
            </h3>
        </div>
    )
}
