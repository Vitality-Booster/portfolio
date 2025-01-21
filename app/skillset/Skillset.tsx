"use client"

import SkillsetFrame from "./frame/SkillsetFrame"
import SkillCard from "./skillCard/SkillCard"
import "./skillset.css"
import SkillsetTab from "./tab/SkillsetTab"
import HiddenSkillCard from "./hiddenSkill/HiddenSkill"
import { SkillWithProjectNames } from "../types/SkillTypes"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

import { useEffect, useRef, useState } from "react"
import { useMainStore } from "../stores/mainStore"
import useWindowSize from "../utils/windowSize"

const tabs = ["Front-end", "Back-end", "CI/CD", "Data Science", "Blockchain"]

export default function Skillset() {
    const { skills, hiddenSkills } = useMainStore()
    const [currentTab, setCurrentTab] = useState("Back-end")
    const [prevTab, setPrevTab] = useState("Back-end")
    const [skillset, setSkillset] = useState<SkillWithProjectNames[]>(
        skills.filter((skill) => skill.tags.includes(currentTab)),
    )

    const skillsetCardsRef = useRef(null)
    const tl = useRef(gsap.timeline())
    const { contextSafe } = useGSAP({ scope: skillsetCardsRef })
    const { width: windowWidth } = useWindowSize()

    useEffect(() => {
        if (
            skills &&
            skills.length > 0 &&
            (!skillset || skillset.length === 0)
        ) {
            setSkillset(
                skills.filter((skill) => skill.tags.includes(currentTab)),
            )
        }
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
        <div id="skills" className="full-page-section">
            <h1 className="section-heading">Expertiese</h1>
            <div className="skillset-main-container">
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
                {windowWidth <= 650 && (
                    <div className="scroll-indicator">{">>>"}</div>
                )}
                <SkillsetFrame />
                <div className="skillset-all-card" ref={skillsetCardsRef}>
                    {skillset.map((skill, index) => {
                        return (
                            <div className="skill-line" key={skill.image}>
                                <SkillCard
                                    skillData={skill}
                                    skillIndex={index + 1}
                                    windowWidth={windowWidth}
                                />
                                {windowWidth > 768 && (
                                    <HiddenSkillCard
                                        hiddenSkill={hiddenSkills[index]}
                                        index={index + 1}
                                    />
                                )}
                            </div>
                        )
                    })}
                </div>
                <SkillsetFrame />
            </div>
        </div>
    )
}
