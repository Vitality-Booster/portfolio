import { ProjectWithSkills } from "@/app/types/Project"
import { imagePathToUrl, ImageType } from "@/app/utils/imagePathConverter"
import { PrismaClient, Project, Skill } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET() {
    const projects: ProjectWithSkills[] = await prisma.project.findMany({
        include: { skills: true },
        orderBy: {id: "asc"}
    })

    for (let i = 0; i < projects.length; i++) {
        const newImage = await imagePathToUrl(projects[i].mainPicture, ImageType.Project)
        projects[i].mainPicture = newImage
    }

    return Response.json({ projects: projects })
}




