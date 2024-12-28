import { HiddenSkill, Prisma, Skill } from "@prisma/client"

export type SkillWithProjects = Prisma.SkillGetPayload<{
    include: { projects: true }
}>

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
