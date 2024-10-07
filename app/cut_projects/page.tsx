"use client"

import ProjectButton from "./button/ProjectButton"
import ProjectCard from "./card/ProjectCard"
import "./projects.css"

import PostgreIcon from "../../public/tech_stack/postgre.png"
import JavaIcon from "../../public/tech_stack/java.png"
import ReactIcon from "../../public/tech_stack/science.png"
import { ImageType } from "../types/ImageType"
import { use, useRef, useState } from "react"
import { ProjectCardInfo } from "../types/Project"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

// TODO: Rename the file to the Projects.tsx later! So that
// it behaved like a component rather than a page. Because,
// these projects are only a component of the main page.

const mainImage1: ImageType = {
    src: "https://img.freepik.com/free-photo/global-business-internet-network-connection-iot-internet-things-business-intelligence-concept-busines-global-network-futuristic-technology-background-ai-generative_1258-176818.jpg",
    alt: "Project image",
}

const projectName1 = "Hello World!"
const projectDescription1 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptate distinctio rem ea culpa architecto ullam, animi eum incidunt consequuntur est praesentium, voluptatem facilis accusamus possimus! Quo sequi ex consequuntur!"

const postgreIcon: ImageType = {
    src: PostgreIcon,
    alt: "PostgreSQL logo",
    width: 35,
    height: 35,
}

const javaIcon: ImageType = {
    src: JavaIcon,
    alt: "Java logo",
    width: 35,
    height: 35,
}

const reactIcon: ImageType = {
    src: ReactIcon,
    alt: "React logo",
    width: 35,
    height: 35,
}

const helloWorldProject: ProjectCardInfo = {
    mainImage: mainImage1,
    projectName: projectName1,
    projectDescription: projectDescription1,
    iconImage1: postgreIcon,
    iconImage2: javaIcon,
    iconImage3: reactIcon,
}

const mainImage2: ImageType = {
    src: "https://cdn.pixabay.com/photo/2024/02/05/16/23/labrador-8554882_640.jpg",
    alt: "Project image"
}

const projectName2 = "Good Boy Project"
const projectDescription2 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptate distinctio rem ea culpa architecto ullam, animi eum incidunt consequuntur est praesentium, voluptatem facilis accusamus possimus! Quo sequi ex consequuntur!"


const secondProject: ProjectCardInfo = {
    mainImage: mainImage2,
    projectName: projectName2,
    projectDescription: projectDescription2,
    iconImage1: reactIcon,
    iconImage2: postgreIcon,
    iconImage3: javaIcon,
}

const buttonProjectMap = {
    "01": helloWorldProject,
    "02": secondProject,
}

export default function Projects() {
    const [activeButton, setActiveButton] = useState<string>("01")
    const projectsRef = useRef(null)
    const { contextSafe } = useGSAP({ scope: projectsRef });
    const tl = useRef(gsap.timeline())

    useGSAP(() => {
        gsap.from(".card-wrapper", {
            y: "+=200px",
            opacity: 0,
            duration: 2,
            ease: "elastic.out(0.5,0.4)",
        })
    }, [])

    const handleButtonClick = contextSafe((index: string) => {
        tl.current.to(".card-wrapper", {
            y: "+=200px",
            opacity: 0,
            ease: "power2.in",
            duration: 1
        }).then(() => setActiveButton(index))

    //     tl.current.from(".card-wrapper", {
    //         y: "+=200px",
    //         opacity: 0,
    //         duration: 2,
    //         ease: "elastic.out(0.5,0.4)",
    // }, "+=1")

    })

    return (
        <div className="main-projects" ref={projectsRef}>
            <div className="all-project-buttons">
                <ProjectButton index="01" projectName="Project name" active={activeButton === "01"} callback={handleButtonClick} />
                <ProjectButton index="02" projectName="Another project" active={activeButton === "02"} callback={handleButtonClick} />
                <ProjectButton index="03" projectName="Yet another project" active={activeButton === "03"} callback={handleButtonClick} />
            </div>
            <div className="card-wrapper">
                <ProjectCard
                    projectCardInfo={buttonProjectMap[activeButton]}
                />
            </div>
        </div>
    )
}
