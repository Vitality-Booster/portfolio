import { StaticImageData } from "next/image"
import { HiddenSkill, Prisma, Skill } from "@prisma/client"

const skillWithProjects = Prisma.validator<Prisma.SkillDefaultArgs>()({
    include: { projects: true },
})

export type SkillWithProjects = Prisma.SkillGetPayload<typeof skillWithProjects>

export type SkillWithProjectNames = Skill & {
    projects: string[]
}

// const hiddenSkillWithProjects = Prisma.validator<Prisma.HiddenSkillDefaultArgs>()({
//     include: { projects: true },
// })

// export type HiddenSkillWithProjects = Prisma.HiddenSkillGetPayload<typeof hiddenSkillWithProjects>

export type HiddenSkillWithProjectNames = HiddenSkill & {
    projects: string[]
}
