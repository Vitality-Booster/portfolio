"use client"

import SkillsetFrame from "./frame/SkillsetFrame"
import SkillCard from "./skillCard/SkillCard"
import "./skillset.css"
import SkillsetTab from "./tab/SkillsetTab"
import HiddenSkill from "./hiddenSkill/HiddenSkill"
import { SkillCardDataType, SkillData } from "../types/SkillTypes"
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
import { useRef, useState } from "react"

const testSkillsData: SkillCardDataType[] = [
    {
        icon: Java,
        skillName: "Java",
        expYears: 3,
        skillNumber: 1,
        iconHeight: 60,
        iconWidth: 65,
        type: "Back-end",
    },
    {
        icon: PostgreSQL,
        skillName: "PostgreSQL",
        expYears: 1,
        skillNumber: 2,
        iconHeight: 55,
        type: "Back-end",
    },
    {
        icon: Spring,
        skillName: "Spring",
        expYears: 2,
        skillNumber: 3,
        iconHeight: 55,
        iconWidth: 70,
        type: "Back-end",
    },
    {
        icon: Docker,
        skillName: "Docker",
        expYears: 2,
        skillNumber: 4,
        iconHeight: 55,
        type: "Back-end",
    },
    {
        icon: React,
        skillName: "React",
        expYears: 2,
        skillNumber: 1,
        iconHeight: 60,
        type: "Front-end",
    },
    {
        icon: GsapIcon,
        skillName: "GSAP",
        expYears: 1,
        skillNumber: 2,
        iconHeight: 55,
        type: "Front-end",
    },
    {
        icon: NextJS,
        skillName: "NextJS",
        expYears: 2,
        skillNumber: 3,
        iconHeight: 55,
        type: "Front-end",
    },
]

const testHiddenSkills: SkillData[] = [
    {
        skillName: "Team work",
        expYears: 3,
        skillNumber: 1,
        type: "Front-end",
    },
    {
        skillName: "Innovation",
        expYears: 3,
        skillNumber: 2,
        type: "Front-end",
    },
    {
        skillName: "Research & Development",
        expYears: 4,
        skillNumber: 3,
        type: "Front-end",
    },
    {
        skillName: "Team work",
        expYears: 3,
        skillNumber: 1,
        type: "Back-end",
    },
    {
        skillName: "Innovation",
        expYears: 3,
        skillNumber: 2,
        type: "Back-end",
    },
    {
        skillName: "Research & Development",
        expYears: 4,
        skillNumber: 3,
        type: "Back-end",
    },
    {
        skillName: "Time management",
        expYears: 4,
        skillNumber: 4,
        type: "Back-end",
    },
]

const tabs = ["CI/CD", "Front-end", "Back-end"]

export default function Skillset() {
    const [prevTab, setPrevTab] = useState("Front-end")
    const [currentTab, setCurrentTab] = useState("Front-end")
    // const [skillNumber, setSkillNumber] = useState(1)
    const [skillset, setSkillset] = useState<SkillCardDataType[]>(
        testSkillsData.filter((skill) => skill.type === currentTab),
    )
    const [hiddenSkillset, setHiddenSkillset] = useState<SkillData[]>(
        testHiddenSkills.filter((skill) => skill.type === currentTab),
    )

    const skillsetCardsRef = useRef(null)
    const tl = useRef(gsap.timeline())
    const { contextSafe } = useGSAP({ scope: skillsetCardsRef })

    const handleTabChange = contextSafe((tab: string) => {
        // setSkillNumber(1)
        setPrevTab(currentTab)
        setCurrentTab(tab)

        tl.current
            .to(skillsetCardsRef.current, {
                duration: 1,
                opacity: 0,
                y: "+=200px",
            })
            .then(() => {
                setSkillset(
                    testSkillsData.filter((skill) => skill.type === tab),
                )
                setHiddenSkillset(
                    testHiddenSkills.filter((skill) => skill.type === tab),
                )
            })
            .then(() =>
                tl.current.to(skillsetCardsRef.current, {
                    duration: 1,
                    opacity: 1,
                    y: "-=200px",
                }),
            )
    })

    return (
        <div className="skillset-main-container">
            <div className="skillset-all-tabs">
                <SkillsetTab
                    tabText={tabs[0]}
                    active={currentTab === tabs[0]}
                    wasActive={prevTab === tabs[0]}
                    onClickCallback={handleTabChange}
                />
                <SkillsetTab
                    tabText={tabs[1]}
                    active={currentTab === tabs[1]}
                    wasActive={prevTab === tabs[1]}
                    onClickCallback={handleTabChange}
                />
                <SkillsetTab
                    tabText={tabs[2]}
                    active={currentTab === tabs[2]}
                    wasActive={prevTab === tabs[2]}
                    onClickCallback={handleTabChange}
                />
            </div>
            <SkillsetFrame />
            <div className="skillset-all-card" ref={skillsetCardsRef}>
                {skillset.map((skill) => {
                    return (
                        <div
                            className="skill-line"
                            key={skill.type + "-" + skill.skillNumber}
                        >
                            <SkillCard {...skill} />
                            <HiddenSkill
                                {...hiddenSkillset[skill.skillNumber - 1]}
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
