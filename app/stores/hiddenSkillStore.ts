import { create } from "zustand"
import { HiddenSkillWithProjectNames } from "../types/SkillTypes"

export interface StoreState {
    hiddenSkills: HiddenSkillWithProjectNames[]
    setHiddenSkills: (storyParts: HiddenSkillWithProjectNames[]) => void
}

export const useHiddenSkillStore = create<StoreState>((set) => ({
    hiddenSkills: [],
    setHiddenSkills: (hiddenSkills: HiddenSkillWithProjectNames[]) =>
        set({ hiddenSkills }),
}))
