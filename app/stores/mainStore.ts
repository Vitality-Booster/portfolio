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
