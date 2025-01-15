"use client"

import useWindowSize from "@/app/utils/windowSize"
import "./navbar.css"
import NavLink from "./navlink/NavLink"
import { useEffect, useState, useRef } from "react"
import BurgerMenu from "./burger_menu/BurgerMenu"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export default function Navbar() {
    const [activeSection, setActiveSection] = useState<string>("")
    const [prevActiveSection, setPrevActiveSection] = useState<string>("")

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

    const { width: windowWidth } = useWindowSize()
    const refMenuContainer = useRef(null)
    const refWrapper = useRef(null)
    const refNav = useRef(null)
    const tl = useRef(gsap.timeline())

    // tl.current.to(refMenuContainer.current, {
    //     width: "150px",
    //     height: "100vh",
    //     // borderBottomRightRadius: "0px",
    //     duration: 1,
    //     ease: "power2.in",
    // }).to(refMenuContainer.current, {
    //     // width: "150px",
    //     // height: "100vh",
    //     borderBottomRightRadius: "0px",
    //     duration: 0.01,
    //     ease: "power1.in",
    // }, ">-0.01").from(
    //     refNav.current,
    //     {
    //         opacity: 0,
    //         zIndex: 10,
    //         width: "150px",
    //         duration: 0.3,
    //         ease: "power2.out",
    //     },
    //     ">-0.1",
    // )
    const { contextSafe } = useGSAP({ scope: refWrapper })

    useGSAP(() => {
        if (windowWidth !== 0 && windowWidth <= 768) {
            console.log(`The values of the windowWidth is: ${windowWidth}`)
            tl.current.to(refMenuContainer.current, {
                width: "150px",
                height: "100vh",
                duration: 1,
                ease: "power2.in",
            })
            tl.current.to(
                refMenuContainer.current,
                {
                    borderBottomRightRadius: "0px",
                    duration: 0.01,
                    ease: "power1.in",
                },
                ">-0.01",
            )

            tl.current.to(
                refNav.current,
                {
                    opacity: 1,
                    duration: 0.3,
                    ease: "power2.out",
                },
                ">-0.1",
            )

            tl.current.pause()
        }
    }, [windowWidth])

    const handleTabChange = (tab: string) => {
        setPrevActiveSection(activeSection)
        setActiveSection(tab)
    }

    const handleMenuToggle = contextSafe((menuOpen: boolean) => {
        if (menuOpen) tl.current.play()
        else tl.current.reverse()
    })

    return (
        <div className="navbar-wrapper">
            {windowWidth <= 768 && (
                <div className="menu-container" ref={refMenuContainer} />
            )}
            {windowWidth <= 768 && (
                <BurgerMenu toggleHandler={handleMenuToggle} />
            )}
            <div
                className={windowWidth > 768 ? "navbar" : "sm-navbar"}
                ref={refNav}
            >
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
        </div>
    )
}
