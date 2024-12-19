"use client"

import DescriptionCard from "../components/description/DescriptionCard"
import "./page.css"
import StatisticsCard, { StatisticsType } from "../components/statistics/StatisticsCard"
import TechStack from "../components/tech_stack/TechStack"
import { updateProjectsSkills, useMainStore } from "@/app/stores/mainStore"
import { ProjectWithSkills } from "@/app/types/Project"
import { useEffect, useState } from "react"

export default function ProjectsPage({params}: { params: { id: number } }) {
    const { id } = params
    const {projects: allProjects, skills, setSkills} = useMainStore()
    const [currentProject, setCurrentProject] = useState<ProjectWithSkills | null>(null)

    useEffect(() => {
        
        async function fetchSkills() {
            const res = await fetch("/api/skills", {
                cache: "force-cache",
            })
            const data = await res.json()
            setSkills(data.skills)    
        }

        async function fetchProjects() {
            const res = await fetch("/api/projects", {
                cache: "force-cache",
            })
            const data = await res.json()
            const projectsWithProperImages = await updateProjectsSkills([data.projects[id - 1]], skills)
            setCurrentProject(projectsWithProperImages[0])
        }

        if (skills.length === 0){ 
            fetchSkills()
        }
        if (skills.length > 0 && allProjects.length === 0) {
            fetchProjects()
        }
    }, [skills, allProjects, params])

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
                <div className="project-name-label">{currentProject.name}</div>
            </div>
            <div className="description-with-stats-container">
                <DescriptionCard description={currentProject.fullDescription} link={currentProject.mainLink} />
                <StatisticsCard stats={currentProject.stats as StatisticsType} tags={currentProject.tags}/>
            </div>
            <div className="project-tech-stack">
                <TechStack
                    circleSize={100}
                    iconSize={40}
                    animationPadding={10} skills={currentProject.skills}                />
            </div>
        </div>
    )
}
