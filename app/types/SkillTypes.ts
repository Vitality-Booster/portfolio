import { StaticImageData } from "next/image"
import { Prisma } from "@prisma/client"

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

const skillWithProjects = Prisma.validator<Prisma.SkillDefaultArgs>()({
    include: { projects: true },
})

export type SkillWithProjects = Prisma.SkillGetPayload<typeof skillWithProjects>
