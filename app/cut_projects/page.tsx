"use client"

import ProjectButton from "./button/ProjectButton"
import ProjectCard from "./card/ProjectCard"
import "./projects.css"

import PostgreIcon from "../../public/tech_stack/postgre.png"
import JavaIcon from "../../public/tech_stack/java.png"
import ReactIcon from "../../public/tech_stack/react.png"
import { ImageType } from "../types/ImageType"
import { useEffect, useRef, useState } from "react"
import { ProjectCardInfo, ProjectWithSkills } from "../types/Project"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useMainStore } from "../stores/mainStore"

gsap.registerPlugin(useGSAP)

// TODO: Rename the file to the Projects.tsx later! So that
// it behaved like a component rather than a page. Because,
// these projects are only a component of the main page.

const cardAppear = {
    y: "+=200px",
    opacity: 0,
    duration: 2,
    ease: "elastic.out(0.5,0.4)",
}

const cardReappear = {
    y: "-=200px",
    opacity: 1,
    duration: 2,
    ease: "elastic.out(0.5,0.4)",
}

const cardFadeOut = {
    y: "+=200px",
    opacity: 0,
    ease: "power2.in",
    duration: 1,
}

export default function Projects() {
    const {projects: allProjects, setProjects, setSkills, skills} = useMainStore()
    const [activeProjectId, setActiveProjectId] = useState<number>(1)
    const projectsRef = useRef(null)
    const { contextSafe } = useGSAP({ scope: projectsRef })
    const tl = useRef(gsap.timeline())

    const getProjectCardId = (project: ProjectWithSkills) => {
        const formattedName = project.name.trim().replaceAll(" ", "-")

        return formattedName
    }

    useGSAP(() => {
        if (allProjects.length > 0) {
            for (let i = 1; i < allProjects.length; i++) {
                gsap.to(`#${getProjectCardId(allProjects[i])}`, {
                    ...cardFadeOut,
                })
            }
            gsap.from(`#${getProjectCardId(allProjects[0])}`, {
                opacity: 0,
                duration: 0.01,
            })
        }
    }, [allProjects])

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
            setProjects(data.projects)
        }

        if (skills.length === 0){ 
            fetchSkills()
        }
        if (skills.length > 0 && allProjects.length === 0) {
            fetchProjects()
        }
    }, [skills, allProjects])

    /**
     * Handles card animation and changes the active button
     */
    const handleButtonClick = contextSafe((index: number) => {
        if (activeProjectId !== index) {
            const currProjectCardId = `#${getProjectCardId(allProjects[activeProjectId - 1])}`
            const newProjectCardId = `#${getProjectCardId(allProjects[index - 1])}`

            tl.current.to(currProjectCardId, {
                ...cardFadeOut,
            })
            tl.current.to(
                newProjectCardId,
                {
                    ...cardReappear,
                },
                ">",
            )
            // .then(() => )
            setActiveProjectId(index)
            
        }
    })

    return (
        <div className="main-projects" ref={projectsRef}>
            <div className="all-project-buttons">
                {allProjects.length > 0 &&
                    allProjects.map((project, index) => {
                        return (
                            <ProjectButton
                                index={project.id}
                                projectName={project.name}
                                active={activeProjectId === project.id}
                                callback={handleButtonClick}
                                key={project.id}
                            />
                        )
                    })}
            </div>
            <div className="card-wrapper">
                {allProjects.length > 0 &&
                    allProjects.map((project, index) => {
                        return (
                            <div
                                key={project.id}
                                id={getProjectCardId(project)}
                                className={
                                    activeProjectId !== project.id
                                        ? "card-hidden"
                                        : ""
                                }
                            >
                                <ProjectCard project={project} />
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}
