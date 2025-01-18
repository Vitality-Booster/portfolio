"use client"

import "./page.css"
import LandingPage from "./home/LandingPage"
import StoryLine from "./story_line/StoryLine"
import Projects from "./cut_projects/CutProjects"
import Cursor from "./components/cursor/Cursor"
import { useEffect, useRef, useState } from "react"
import ContactPage from "./contact/ContactPage"
import Skillset from "./skillset/Skillset"
import { useMainStore } from "./stores/mainStore"
import useSWR from "swr"
import Loader from "./components/loader/Loader"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRouter } from "next/navigation"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Home() {
    const {
        skills,
        projects,
        setProjects,
        setSkills,
        hiddenSkills,
        setHiddenSkills,
        storyParts,
        setStoryParts,
    } = useMainStore()
    // const {storyParts, setStoryParts} = useStorylineStore()

    const { data: projectsData } = useSWR("/api/projects", fetcher)
    const { data: skillsData } = useSWR("/api/skills", fetcher)
    const { data: hiddenSkillsData } = useSWR("/api/skills/hidden", fetcher)
    const { data: storyPartsData } = useSWR("/api/storyline", fetcher)
    const tl = useRef(gsap.timeline())
    const router = useRouter()
    const [showLoader, setShowLoader] = useState<boolean>(true)

    useEffect(() => {
        if (projectsData) {
            setProjects(projectsData.projects)
            // console.log("Projects data is", projectsData.projects)
        }
    }, [projectsData, setProjects])

    useEffect(() => {
        if (skillsData) {
            setSkills(skillsData.skills)
            // console.log("Skill data is", skillsData.skills)
        }
    }, [skillsData, setSkills])

    useEffect(() => {
        if (hiddenSkillsData) {
            setHiddenSkills(hiddenSkillsData.hiddenSkills)
            // console.log("Hidden Skill data is", hiddenSkillsData.hiddenSkills)
        }
    }, [hiddenSkillsData, setHiddenSkills])

    useEffect(() => {
        if (storyPartsData) {
            setStoryParts(storyPartsData.storyParts)
            // console.log("Story parts data is", storyPartsData.storyParts)
        }
    }, [storyPartsData, setStoryParts])

    useGSAP(() => {
        // gsap.to(".main-container", {
        //     duration: 0,
        //     opacity: 0,
        //     // y: "100%",
        //     overflow: "hidden",
        // })

        if (
            skills.length > 0 &&
            projects.length > 0 &&
            hiddenSkills.length > 0 &&
            storyParts.length > 0
        ) {
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
            tl.current.to(".main-container", {
                duration: 0.5,
                opacity: 1,
            }).then(() => {
                router.push(window.location.href)
                setShowLoader(false)
            })
        }
    }, [skills, projects, hiddenSkills, storyParts])

    return (
        <div id="root" className="root-container">
            {showLoader && <Loader />}
            <Cursor />
            {skills.length > 0 &&
                projects.length > 0 &&
                hiddenSkills.length > 0 &&
                storyParts.length > 0 && (
                    <div className="main-container">
                        <LandingPage />
                        <StoryLine />
                        <Projects />
                        <Skillset />
                        <ContactPage />
                    </div>
                )}
        </div>
    )
}
