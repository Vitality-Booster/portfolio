import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET() {
    const storyParts = await prisma.storyPart.findMany({
        orderBy: { id: "asc" },
    })

    return Response.json({ storyParts: storyParts })
}
