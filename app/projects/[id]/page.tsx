"use client"

import DescriptionCard from "../components/description/DescriptionCard"
import "./page.css"
import StatisticsCard, {
    StatisticsType,
} from "../components/statistics/StatisticsCard"
import TechStack from "../components/tech_stack/TechStack"
import { useMainStore } from "@/app/stores/mainStore"
import { ProjectWithSkills } from "@/app/types/Project"
import { useEffect, useState } from "react"

export default function ProjectsPage({ params }: { params: { id: number } }) {
    const { id } = params
    const { projects: allProjects, setProjects } = useMainStore()
    const [currentProject, setCurrentProject] =
        useState<ProjectWithSkills | null>(null)

    useEffect(() => {
        async function fetchProjects() {
            const res = await fetch("/api/projects", {
                // cache: "force-cache",
            })
            const data = await res.json()
            setProjects(data.projects)
            setCurrentProject(data.projects[id - 1])
        }

        if (allProjects.length === 0) {
            fetchProjects()
        } else {
            setCurrentProject(allProjects[id - 1])
        }
    }, [allProjects])

    if (!currentProject) {
        return <div>Loading...</div>
    }

    return (
        <div className="all-projects-container">
            <div className="main-image-container">
                <img
                    className="project-main-image"
                    src={currentProject.mainPicture}
                />
                <div className="project-name-label"><h2>{currentProject.name}</h2></div>
            </div>
            <div className="description-with-stats-container">
                <DescriptionCard
                    description={currentProject.fullDescription}
                    link={currentProject.mainLink}
                />
                <StatisticsCard
                    stats={currentProject.stats as StatisticsType}
                    tags={currentProject.tags}
                />
            </div>
            <div className="project-tech-stack">
                <TechStack
                    circleSize={100}
                    iconSize={40}
                    animationPadding={10}
                    skills={currentProject.skills}
                />
            </div>
        </div>
    )
}
