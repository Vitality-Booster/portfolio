import { StoryPart } from "@prisma/client"
import { create } from "zustand"

export interface StoreState {
    storyParts: StoryPart[]
    setStoryParts: (storyParts: StoryPart[]) => void
}

export const useStorylineStore = create<StoreState>((set) => ({
    storyParts: [],
    setStoryParts: (storyParts: StoryPart[]) => set({ storyParts }),
}))
