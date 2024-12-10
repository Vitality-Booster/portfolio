import { StaticImageData } from "next/image"

export type SkillData = {
    skillName: string
    expYears: number
    skillNumber: number
    type: string
}
export type SkillCardDataType = SkillData & {
    icon: StaticImageData
    iconHeight: number
    iconWidth?: number
}
