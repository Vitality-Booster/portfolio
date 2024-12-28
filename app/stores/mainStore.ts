import { create } from "zustand"
import { ProjectWithSkills } from "../types/Project"
import {
    HiddenSkillWithProjectNames,
    SkillWithProjectNames,
} from "../types/SkillTypes"
import { StoryPart } from "@prisma/client"

export interface StoreState {
    projects: ProjectWithSkills[]
    skills: SkillWithProjectNames[]
    setProjects: (projects: ProjectWithSkills[]) => void
    setSkills: (skills: SkillWithProjectNames[]) => void
    hiddenSkills: HiddenSkillWithProjectNames[]
    setHiddenSkills: (storyParts: HiddenSkillWithProjectNames[]) => void
    storyParts: StoryPart[]
    setStoryParts: (storyParts: StoryPart[]) => void
}

export const useMainStore = create<StoreState>((set) => ({
    projects: [],
    skills: [],
    setProjects: (projects: ProjectWithSkills[]) => {
        set({ projects })
    },
    setSkills: (skills: SkillWithProjectNames[]) => {
        set({ skills })
    },
    hiddenSkills: [],
    setHiddenSkills: (hiddenSkills: HiddenSkillWithProjectNames[]) =>
        set({ hiddenSkills }),
    storyParts: [],
    setStoryParts: (storyParts: StoryPart[]) => set({ storyParts }),
}))

// OBSOLETE

// const updateProjectsSkills = (
//     projects: ProjectWithSkills[],
//     skills: SkillWithProjectNames[],
// ): ProjectWithSkills[] => {
//     for (let i = 0; i < projects.length; i++) {
//         for (let j = 0; j < projects[i].skills.length; j++) {
//             const skillPosition = projects[i].skills[j].id - 1 // Because, all the skills that I get from the DB are sorted by ID by default. So, their placement in an array will skill.id - 1.
//             projects[i].skills[j].image = skills[skillPosition].image
//         }
//     }
//     return projects
// }
