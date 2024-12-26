"use client"

import SkillsetFrame from "./frame/SkillsetFrame"
import SkillCard from "./skillCard/SkillCard"
import "./skillset.css"
import SkillsetTab from "./tab/SkillsetTab"
import HiddenSkillCard from "./hiddenSkill/HiddenSkill"
import {
    HiddenSkillWithProjectNames,
    SkillWithProjectNames,
} from "../types/SkillTypes"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

// Skill Icons imports
import Java from "../../public/tech_stack/java.png"
import PostgreSQL from "../../public/tech_stack/postgre.png"
import React from "../../public/tech_stack/react.png"
import Spring from "../../public/tech_stack/spring.png"
import Docker from "../../public/tech_stack/docker.png"
import GsapIcon from "../../public/tech_stack/gsap.png"
import NextJS from "../../public/tech_stack/nextjs.png"
import { useEffect, useRef, useState } from "react"
import { useMainStore } from "../stores/mainStore"
import { HiddenSkill, Skill } from "@prisma/client"

const tabs = ["Front-end", "Back-end", "CI/CD", "Data Science", "Blockchain"]

export default function Skillset() {
    const { skills, projects, hiddenSkills } = useMainStore()
    const [currentTab, setCurrentTab] = useState("Back-end")
    const [prevTab, setPrevTab] = useState("Back-end")
    // const [hiddenSkills, setHiddenSkills] = useState<HiddenSkillWithProjectNames[]>([])
    const [skillset, setSkillset] = useState<SkillWithProjectNames[]>(
        skills.filter((skill) => skill.tags.includes(currentTab)),
    )

    const skillsetCardsRef = useRef(null)
    const tl = useRef(gsap.timeline())
    const { contextSafe } = useGSAP({ scope: skillsetCardsRef })
    console.log("The number of normal skills that I have:", skills.length)
    console.log("The number of normal projects that I have:", projects.length)

    useEffect(() => {
        // const fetchHiddenSkills = async () => {
        //     const response = await fetch("/api/hidden-skills", {
        //         cache: "force-cache"
        //     })
        //     const data = await response.json()
        //     setHiddenSkills(data.hiddenSkills)
        // }

        if (
            skills &&
            skills.length > 0 &&
            (!skillset || skillset.length === 0)
        ) {
            setSkillset(
                skills.filter((skill) => skill.tags.includes(currentTab)),
            )
        }
        // if (hiddenSkills.length <= 0) {
        //     fetchHiddenSkills()
        // }
    }, [skills])

    const handleTabChange = contextSafe((tab: string) => {
        setPrevTab(currentTab)
        setCurrentTab(tab)

        tl.current
            .to(skillsetCardsRef.current, {
                duration: 1,
                opacity: 0,
                y: "+=200px",
            })
            .then(() => {
                setSkillset(skills.filter((skill) => skill.tags.includes(tab)))
            })
            .then(() =>
                tl.current.to(skillsetCardsRef.current, {
                    duration: 1,
                    opacity: 1,
                    y: "-=200px",
                }),
            )
    })

    if (
        !skills ||
        !hiddenSkills ||
        skills.length === 0 ||
        hiddenSkills.length === 0
    ) {
        return <div>Loading...</div>
    }

    return (
        <div id="skills" className="skillset-main-container">
            <div className="skillset-all-tabs">
                {tabs.map((tab, index) => {
                    return (
                        <SkillsetTab
                            tabText={tab}
                            active={currentTab === tab}
                            wasActive={prevTab === tab}
                            onClickCallback={handleTabChange}
                            key={index}
                        />
                    )
                })}
            </div>
            <SkillsetFrame />
            <div className="skillset-all-card" ref={skillsetCardsRef}>
                {skillset.map((skill, index) => {
                    return (
                        <div className="skill-line" key={skill.image}>
                            <SkillCard
                                skillData={skill}
                                skillIndex={index + 1}
                            />
                            <HiddenSkillCard
                                hiddenSkill={hiddenSkills[index]}
                                index={index + 1}
                            />
                        </div>
                    )
                })}
            </div>
            <SkillsetFrame />
        </div>
    )
}

// TODO: Previous version, check later if needed for the cool animation of the Skill Years
// may need to look for that in the "Check Later" folder as well!

// export default function Skillset() {
//     return (
//         <div className="skillset-container">
//             <div className="skillset-section">
//                 <h2>Frontend</h2>
//                 <div className="skills-container">
//                     <Skill />
//                 </div>
//             </div>
//         </div>
//     )
// }
