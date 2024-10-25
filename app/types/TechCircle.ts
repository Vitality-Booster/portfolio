import { StaticImageData } from "next/image"

export type TechCircleType = {
    id: string
    newX: number
    newY: number
    src?: StaticImageData
    type: string
    name: string
    size: number
}

export type RawCircleType = {
    id: string
    type: string
    name: string
}

export type LineDataType = {
    id: string
    x: number
    y: number
    length: number
    angle: number
    type: string
}
