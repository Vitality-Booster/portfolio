import { SkillWithProjects } from "@/app/types/SkillTypes"
import { imagePathToUrl, ImageType } from "@/app/utils/imagePathConverter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET() {
    const skills = await prisma.skill.findMany({
        include: {projects: true},
        orderBy: {id: "asc"}
    })

    for (let i = 0; i < skills.length; i++) {
        const newImage = await imagePathToUrl(skills[i].image, ImageType.Skill)
        skills[i].image = newImage
    }


    return Response.json({skills: skills})
}