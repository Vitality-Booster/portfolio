import { SkillWithProjectNames } from "@/app/types/SkillTypes"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET() {
    const skills = await prisma.skill.findMany({
        select: {
            id: true,
            name: true,
            tags: true,
            experience: true,
            image: true,
            projects: {
                select: {
                    name: true, // Only fetch the 'name' of each related Project
                },
            },
        },
        orderBy: { id: "asc" },
    })

    // Map the result to convert `projects` from an array of objects to an array of strings
    const formattedSkills: SkillWithProjectNames[] = skills.map((skill) => ({
        ...skill,
        projects: skill.projects.map((project) => project.name),
    }))

    // console.log("The project names of the skills that I get with a new approach:", skills[0].projects)
    return Response.json({ skills: formattedSkills })
}
