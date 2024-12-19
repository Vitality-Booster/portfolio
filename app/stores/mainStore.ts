import { create } from "zustand"
import { ProjectWithSkills } from "../types/Project"
import { SkillWithProjects } from "../types/SkillTypes"
import { Skill } from "@prisma/client"

export interface StoreState {
    projects: ProjectWithSkills[]
    skills: SkillWithProjects[]
    setProjects: (projects: ProjectWithSkills[]) => void
    setSkills: (skills: SkillWithProjects[]) => void
}

export const useMainStore = create<StoreState>((set, get) => ({
    projects: [],
    skills: [],
    setProjects: (projects: ProjectWithSkills[]) => {
        if (get().skills.length > 0)
            set({ projects: updateProjectsSkills(projects, get().skills) })
        else set({ projects })
    },
    setSkills: (skills: SkillWithProjects[]) => {
        const currentProjects = get().projects
        // Check if the Projects have already been pulled from the Database
        if (currentProjects.length > 0) {
            const singleSkill = currentProjects[0].skills[0]
            // Check if the Skill images in Projects have already been updated with signed S3 urls.
            // If the "image" in Project Skill is not equal to the "image" from the Skill in "skills",
            // then Project Skill is not up-to-date.
            // Note: Skill images are assumed to already have their "image" property as a signed S3 url.
            if (singleSkill.image !== skills[singleSkill.id - 1].image)
                set({ projects: updateProjectsSkills(get().projects, skills) })
        }
        set({ skills })
    },
}))

export const updateProjectsSkills = (
    projects: ProjectWithSkills[],
    skills: SkillWithProjects[],
): ProjectWithSkills[] => {
    for (let i = 0; i < projects.length; i++) {
        for (let j = 0; j < projects[i].skills.length; j++) {
            const skillPosition = projects[i].skills[j].id - 1 // Because, all the skills that I get from the DB are sorted by ID by default. So, their placement in an array will skill.id - 1.
            projects[i].skills[j].image = skills[skillPosition].image
        }
    }
    return projects
}
