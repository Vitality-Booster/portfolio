"use client"

import DescriptionCard from "../components/description/DescriptionCard"
import "./page.css"
import StatisticsCard, {
    StatisticsType,
} from "../components/statistics/StatisticsCard"
import TechStack from "../components/tech_stack/TechStack"
import { useMainStore } from "@/app/stores/mainStore"
import { ProjectWithSkills } from "@/app/types/Project"
import { useEffect, useRef, useState } from "react"
import Cursor from "@/app/components/cursor/Cursor"
import Loader from "@/app/components/loader/Loader"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import useWindowSize from "@/app/utils/windowSize"

export default function ProjectsPage({ params }: { params: { id: number } }) {
    const { id } = params
    const { projects: allProjects, setProjects } = useMainStore()
    const [currentProject, setCurrentProject] =
        useState<ProjectWithSkills | null>(null)

    const tl = useRef(gsap.timeline())
    const { width: windowWidth } = useWindowSize()
    const [showLoader, setShowLoader] = useState(true)

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

    useGSAP(() => {
        gsap.to(".all-projects-container", {
            duration: 0,
            opacity: 0,
            overflow: "hidden",
        })

        if (currentProject && currentProject.skills.length > 0) {
            tl.current.to(".loader-root-container", {
                duration: 1,
                opacity: 0,
                // y: "-100%",
            })
            tl.current.to(".loader-figure", {
                duration: 1,
                opacity: 0,
                // y: "-100%",
            }, "<")
            tl.current.to(".all-projects-container", {
                duration: 0.5,
                opacity: 1,
            }).then(() => {
                setShowLoader(false)  
            })
        }
    }, [currentProject])

    return (
        <div className="root-container">
            {showLoader && <Loader />}
            <Cursor />
            {currentProject && (
                <div className="all-projects-container">
                    <div className="main-image-container">
                        <img
                            className="project-main-image"
                            src={currentProject.mainPicture}
                        />
                        <div className="project-name-label">
                            <h2>{currentProject.name}</h2>
                        </div>
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
                    {windowWidth > 0 && (
                        <div className="project-tech-stack">
                            <TechStack
                                skills={currentProject.skills}
                                windowWidth={windowWidth}
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
