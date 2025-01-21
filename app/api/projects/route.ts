"use server"

import { ProjectWithSkills } from "@/app/types/Project"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET() {
    const projects: ProjectWithSkills[] = await prisma.project.findMany({
        include: { skills: true },
        orderBy: { id: "asc" },
    })

    return Response.json({ projects: projects }, { status: 200 })
}
