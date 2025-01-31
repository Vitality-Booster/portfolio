import { ImageType } from "./ImageType"
import { Prisma } from "@prisma/client"

export type ProjectCardInfo = {
    mainImage: ImageType
    projectName: string
    projectDescription: string
    iconImage1: ImageType
    iconImage2: ImageType
    iconImage3: ImageType
}

// Define the type alias directly
export type ProjectWithSkills = Prisma.ProjectGetPayload<{
    include: { skills: true }
}>

export interface ProjectStats {
    [key: string]: string
}
