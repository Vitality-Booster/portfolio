"use client"

import "./page.css"
import LandingPage from "./home/LandingPage"
import StoryLine from "./story_line/StoryLine"
import Projects from "./cut_projects/CutProjects"
import Cursor from "./components/cursor/Cursor"
import { useEffect, useRef } from "react"
import ContactPage from "./contact/ContactPage"
import Skillset from "./skillset/Skillset"
import { useMainStore } from "./stores/mainStore"
import useSWR from "swr"
import Loader from "./components/loader/Loader"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

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

    useEffect(() => {
        if (projectsData) {
            setProjects(projectsData.projects)
        }
    }, [projectsData, setProjects])

    useEffect(() => {
        if (skillsData) {
            setSkills(skillsData.skills)
        }
    }, [skillsData, setSkills])

    useEffect(() => {
        if (hiddenSkillsData) {
            setHiddenSkills(hiddenSkillsData.hiddenSkills)
        }
    }, [hiddenSkillsData, setHiddenSkills])

    useEffect(() => {
        if (storyPartsData) {
            setStoryParts(storyPartsData.storyParts)
        }
    }, [storyPartsData, setStoryParts])

    // useEffect(() => {
    //     const fetchProjects = async () => {
    //         const response = await fetch("/api/projects", {
    //             // cache: "force-cache",
    //         })
    //         const data = await response.json()
    //         setProjects(data.projects)
    //     }

    //     const fetchSkills = async () => {
    //         const response = await fetch("/api/skills", {
    //             // cache: "force-cache",
    //         })
    //         const data = await response.json()
    //         setSkills(data.skills)
    //     }

    //     async function fetchStoryParts() {
    //         const res = await fetch("/api/storyline", {
    //             // cache: "force-cache",
    //         })
    //         const data = await res.json()
    //         setStoryParts(data.storyParts)
    //     }

    //     const fetchHiddenSkills = async () => {
    //         const response = await fetch("/api/hidden-skills", {
    //             // cache: "force-cache"
    //         })
    //         const data = await response.json()
    //         setHiddenSkills(data.hiddenSkills)
    //     }

    //     if (projects.length === 0) {
    //         fetchProjects()
    //     }

    //     if (skills.length === 0) {
    //         fetchSkills()
    //     }

    //     if (hiddenSkills.length === 0) {
    //         fetchHiddenSkills()
    //     }

    //     if (storyParts.length === 0) {
    //         fetchStoryParts()
    //     }
    // }, [])

    useGSAP(() => {
        gsap.to(".main-container", {
            duration: 0,
            opacity: 0,
            // y: "100%",
            overflow: "hidden",
        })

        if (
            skills.length > 0 &&
            projects.length > 0 &&
            hiddenSkills.length > 0 &&
            storyParts.length > 0
        ) {
            tl.current.to(".loader-container", {
                duration: 1,
                opacity: 0,
                y: "-100%",
            })
            tl.current.to(".main-container", {
                duration: 0.5,
                opacity: 1,
                // y: "0%",
            })
        }
    }, [skills, projects, hiddenSkills, storyParts])

    return (
        <div id="root" className="root-container">
            {/* {skills.length === 0 || projects.length === 0 || hiddenSkills.length === 0 || storyParts.length === 0 ? <Loader /> : (
            <div className="main-container">
                <LandingPage />
                <StoryLine />
                <Projects />
                <Skillset />
                <ContactPage />
            </div>)} */}
            <Loader />
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
