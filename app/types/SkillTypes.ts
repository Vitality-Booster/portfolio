import { HiddenSkill, Prisma, Skill } from "@prisma/client"

export type SkillWithProjects = Prisma.SkillGetPayload<{
    include: { projects: true }
}>

export type SkillWithProjectNames = Skill & {
    projects: string[]
}

export type HiddenSkillWithProjectNames = HiddenSkill & {
    projects: string[]
}
