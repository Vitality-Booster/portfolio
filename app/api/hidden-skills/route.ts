import { HiddenSkillWithProjectNames } from "@/app/types/SkillTypes"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET() {
    const hiddenSkills = await prisma.hiddenSkill.findMany({
        select: {
            id: true,
            name: true,
            tags: true,
            experience: true,
            projects: {
                select: {
                    name: true, // Only fetch the 'name' of each related Project
                },
            },
        },
        orderBy: { id: "asc" },
    })

    // Map the result to convert `projects` from an array of objects to an array of strings
    const formattedHiddenSkills: HiddenSkillWithProjectNames[] =
        hiddenSkills.map((hiddenSkill) => ({
            ...hiddenSkill,
            projects: hiddenSkill.projects.map((project) => project.name),
        }))

    return Response.json({ hiddenSkills: formattedHiddenSkills })
}
