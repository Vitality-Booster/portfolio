import { StaticImageData } from "next/image"

export type ImageType = {
    src: StaticImageData | string
    alt: string
    width?: number
    height?: number
}
