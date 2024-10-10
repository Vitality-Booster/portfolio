import { TechCircleType } from "@/app/types/TechCircle"
import "./circle.css"
import Image, { StaticImageData } from "next/image"

export default function Circle(
    {
        techCircle,
        src,
        alt,
        size,
        onHoverCallback,
        onLeaveCallback,
    }: {
        techCircle: TechCircleType
        src: StaticImageData
        alt: string
        size: number
        onHoverCallback: (type: string) => void,
        onLeaveCallback: () => void,
    },
    
) {
    const formattedType = techCircle.type.toLowerCase().replaceAll(" ", "-").replace("/", "")
    const circleType = `${formattedType}-circle`

    return (
        <div
            className={`tech-circle ${circleType}`}
            id={techCircle.id}
            onMouseEnter={() => onHoverCallback(techCircle.type)}
            onMouseLeave={() => onLeaveCallback()}
        >
            <Image src={src} alt={alt} width={size} />
        </div>
    )
}
