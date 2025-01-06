"use client"

import "./navbar.css"
import NavLink from "./navlink/NavLink"
import { useEffect, useState } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// const ALL_SECTIONS = ["home", "story-line", "projects", "skills", "contact"]

export default function Navbar() {
    const [activeSection, setActiveSection] = useState<string>(
        // window ? window.location.hash.split("#")[1] : "",
        "",
    )
    const [prevActiveSection, setPrevActiveSection] = useState<string>(
        // window ? window.location.hash.split("#")[1] : "",
        "",
    )

    useEffect(() => {
        if (typeof window !== "undefined") {
            const currentSection = window.location.hash.split("#")[1] || ""
            setActiveSection(currentSection)
            setPrevActiveSection(currentSection)
        }
    }, [])

    // useEffect(() => {
    //     if (sections[0] === null){
    //         setSections(ALL_SECTIONS.map(section => document.getElementById(section)));
    //     }

    //     const observerOptions = {
    //         root: document.querySelector("#root"),
    //         rootMargin: '0px',
    //         threshold: 0.3,
    //       };

    // //       if (sections[0] !== null){
    // //         console.log("I have reached the non-null statenet")
    // //     const observer = new IntersectionObserver(entries => {

    // //       entries.forEach(entry => {
    // //           if(entry.isIntersecting){
    // //             console.log("entry target is", entry.target.id)
    // //             setPrevActiveSection(activeSection)
    // //             setActiveSection(entry.target.id)
    // //             //   if (entry.target.id == 'home'){
    // //             //     setActiveSection('about')
    // //             //   }
    // //             //   if (entry.target.id == 'projects'){
    // //             //     setActiveSection('projects')
    // //             //   }
    // //             //   if (entry.target.id == 'skills'){
    // //             //     setActiveSection('skills')
    // //             //   }
    // //             //   if (entry.target.id == 'articles'){
    // //             //     setActiveSection('articles')
    // //             //   }
    // //           }
    // //       })
    // //   }, observerOptions)

    // //   sections?.forEach(section => {
    // //     section && observer.observe(section)
    // //   })
    // // }

    // if (sections[0] !== null) {
    //     const observer = new IntersectionObserver(entries => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 setPrevActiveSection(activeSection);
    //                 setActiveSection(entry.target.id);
    //             }
    //         });
    //     }, observerOptions);

    //     sections.forEach(section => {
    //         if (section) observer.observe(section);
    //     });

    //     return () => {
    //         sections.forEach(section => {
    //             if (section) observer.unobserve(section);
    //         });
    //     };
    // }

    // }, [sections, activeSection]);

    // ScrollTrigger.create({
    //     trigger: "#home",
    //     start: "top 80%",
    //     end: "top 20%",
    //     onToggle: () => {
    //         setPrevActiveSection(activeSection)
    //         setActiveSection("home")
    //     },
    // })

    // useGSAP(() => {
    //     // ScrollTrigger.create({
    //     //     trigger: "#story-line",
    //     //     start: "top 80%",
    //     //     end: "top 20%",
    //     //     markers: true,
    //     //     onEnter: () => {
    //     //         setPrevActiveSection(activeSection)
    //     //         setActiveSection("story-line")
    //     //     },
    //     //     onEnterBack: () => {
    //     //         setPrevActiveSection(activeSection)
    //     //         setActiveSection("story-line")
    //     //     }
    //     // })

    //     // ScrollTrigger.create({
    //     //     trigger: "#projects",
    //     //     start: "top 80%",
    //     //     end: "top 20%",
    //     //     markers: true,
    //     //     onEnter: () => {
    //     //         setPrevActiveSection(activeSection)
    //     //         setActiveSection("projects")
    //     //     },
    //     //     onEnterBack: () => {
    //     //         setPrevActiveSection(activeSection)
    //     //         setActiveSection("projects")
    //     //     }
    //     // })

    //     if (skills.length > 0){
    //     ALL_SECTIONS.forEach((section) => ScrollTrigger.create({
    //         trigger: `#${section}`,
    //         start: section === "home" ? "top 80%" : "top 80%",
    //         markers: section === "contact" || section === "home" || section === "story-line",
    //         end: section === "home" ? "50% 20%" : "80% 20%",
    //         onEnter: () => {
    //             setPrevActiveSection(activeSection)
    //             setActiveSection(section)
    //         },
    //         onEnterBack: () => {
    //             setPrevActiveSection(activeSection)
    //             setActiveSection(section)
    //         },
    //     }))}
    // }, [activeSection, prevActiveSection, skills])

    // ALL_SECTIONS.forEach((section) => ScrollTrigger.create({
    //     trigger: `#${section}`,
    //     start: "top 80%",
    //     // markers: true,
    //     end: "top 20%",
    //     onToggle: () => {
    //         setPrevActiveSection(activeSection)
    //         setActiveSection(section)
    //     },
    // }))

    // ALL_SECTIONS.forEach((section) => ScrollTrigger.create({
    //     trigger: `#${section}`,
    //     start: "top 80%",
    //     // markers: true,
    //     end: "top 20%",
    //     onToggle: () => {
    //         setPrevActiveSection(activeSection)
    //         setActiveSection(section)
    //     },
    // }))

    // useEffect(() => {
    //     const sections = document.querySelectorAll("section");
    //     const observer = new IntersectionObserver(
    //       (entries) => {
    //         entries.forEach((entry) => {
    //           if (entry.isIntersecting) {
    //             setActiveSection(entry.target.id);
    //           }
    //         });
    //       },
    //       { threshold: 0.5 } // Adjust for when sections are "active"
    //     );

    //     ALL_SECTIONS.forEach((section) => {
    //         const htmlSection = document.querySelector(`#${section}`)
    //         htmlSection && observer.observe(htmlSection)
    // });

    //     return () => {
    //         ALL_SECTIONS.forEach((section) => {
    //             const htmlSection = document.querySelector(`#${section}`)
    //             htmlSection && observer.unobserve(htmlSection)
    //     });
    //     };
    //   }, []);

    const handleTabChange = (tab: string) => {
        setPrevActiveSection(activeSection)
        setActiveSection(tab)
    }

    return (
        <div className="navbar">
            <ul>
                <li>
                    <NavLink
                        text="Home"
                        link="home"
                        active={
                            activeSection === "" || activeSection === "home"
                        }
                        wasActive={
                            prevActiveSection === "" ||
                            prevActiveSection === "home"
                        }
                        onClickCallback={handleTabChange}
                    />
                </li>
                <li>
                    <NavLink
                        text="Story Line"
                        link="story-line"
                        active={activeSection === "story-line"}
                        wasActive={prevActiveSection === "story-line"}
                        onClickCallback={handleTabChange}
                    />
                </li>
                <li>
                    <NavLink
                        text="Projects"
                        link="projects"
                        active={activeSection === "projects"}
                        wasActive={prevActiveSection === "projects"}
                        onClickCallback={handleTabChange}
                    />
                </li>
                <li>
                    <NavLink
                        text="Skills"
                        link="skills"
                        active={activeSection === "skills"}
                        wasActive={prevActiveSection === "skills"}
                        onClickCallback={handleTabChange}
                    />
                </li>
                <li>
                    <NavLink
                        text="Contact"
                        link="contact"
                        active={activeSection === "contact"}
                        wasActive={prevActiveSection === "contact"}
                        onClickCallback={handleTabChange}
                    />
                </li>
            </ul>
        </div>
    )
}
