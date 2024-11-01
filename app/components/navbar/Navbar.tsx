"use client"

import { usePathname } from "next/navigation"
import "./navbar.css"
import NavLink from "./navlink/NavLink"

export default function Page() {
    const path = usePathname()
    console.log(path)

    return (
        <div className="navbar">
            <ul>
                <li>
                    <NavLink text="Home" link="/" active={path === "/"} />
                </li>
                <li>
                    <NavLink
                        text="Projects"
                        link="/projects"
                        active={path === "/projects"}
                    />
                </li>
                <li>
                    <NavLink
                        text="Story Line"
                        link="/story_line"
                        active={path === "/story_line"}
                    />
                </li>
                <li>
                    <NavLink
                        text="Expertise"
                        link="/cut_projects"
                        active={path === "/cut_projects"}
                    />
                </li>
                <li>
                    <NavLink
                        text="Contact"
                        link="/contact-page"
                        active={false}
                    />{" "}
                    {/* TODO: Change later */}
                </li>
            </ul>
        </div>
    )
}
