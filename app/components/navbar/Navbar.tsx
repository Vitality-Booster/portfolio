"use client"

import useWindowSize from "@/app/utils/windowSize"
import "./navbar.css"
import NavLink from "./navlink/NavLink"
import { useEffect, useState, useRef } from "react"
import BurgerMenu from "./burger_menu/BurgerMenu"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { usePathname } from "next/navigation"

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

    const { width: windowWidth } = useWindowSize()
    const refMenuContainer = useRef(null)
    const refWrapper = useRef(null)
    const refNav = useRef(null)
    const tl = useRef(gsap.timeline())

    const { contextSafe } = useGSAP({ scope: refWrapper })
    const pathname = usePathname()

    useEffect(() => {
        if (pathname.indexOf("projects/") !== -1) {
            setPrevActiveSection(activeSection)
            setActiveSection("single-project")
        }
    }, [pathname])

    useGSAP(() => {
        if (windowWidth !== 0 && windowWidth <= 768) {
            tl.current.to(refMenuContainer.current, {
                width: "165px",
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
                    left: "0%",
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
        if (menuOpen) {
            tl.current.play()
        } else {
            tl.current.reverse()
        }
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
                                (activeSection === "" ||
                                    activeSection === "home") &&
                                typeof window !== "undefined" &&
                                window.location.href.indexOf("projects/") === -1
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
                            active={
                                activeSection === "story-line" &&
                                typeof window !== "undefined" &&
                                window.location.href.indexOf("projects/") === -1
                            }
                            wasActive={prevActiveSection === "story-line"}
                            onClickCallback={handleTabChange}
                        />
                    </li>
                    <li>
                        <NavLink
                            text="Projects"
                            link="projects"
                            active={
                                activeSection === "projects" &&
                                typeof window !== "undefined" &&
                                window.location.href.indexOf("projects/") === -1
                            }
                            wasActive={prevActiveSection === "projects"}
                            onClickCallback={handleTabChange}
                        />
                    </li>
                    <li>
                        <NavLink
                            text="Skills"
                            link="skills"
                            active={
                                activeSection === "skills" &&
                                typeof window !== "undefined" &&
                                window.location.href.indexOf("projects/") === -1
                            }
                            wasActive={prevActiveSection === "skills"}
                            onClickCallback={handleTabChange}
                        />
                    </li>
                    <li>
                        <NavLink
                            text="Contact"
                            link="contact"
                            active={
                                activeSection === "contact" &&
                                typeof window !== "undefined" &&
                                window.location.href.indexOf("projects/") === -1
                            }
                            wasActive={prevActiveSection === "contact"}
                            onClickCallback={handleTabChange}
                        />
                    </li>
                </ul>
            </div>
        </div>
    )
}
