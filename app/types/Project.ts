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

const projectWithSkills = Prisma.validator<Prisma.ProjectDefaultArgs>()({
    include: { skills: true },
})

export type ProjectWithSkills = Prisma.ProjectGetPayload<
    typeof projectWithSkills
>

export interface ProjectStats {
    [key: string]: string
}
