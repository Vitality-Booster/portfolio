"use client"

import "./page.css"
import LandingPage from "./home/LandingPage"
import StoryLine from "./story_line/page"
import Projects from "./cut_projects/page"
import Cursor from "./components/cursor/Cursor"
import { useState } from "react"
import ContactPage from "./contact/ContactPage"
import Skillset from "./skillset/Skillset"

export default function Home() {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

    return (
        <div
            className="root-container"
            onMouseMove={(e) =>
                setCursorPosition({ x: e.clientX, y: e.clientY })
            }
        >
            <Cursor position={cursorPosition} />
            <div className="main-container">
                <LandingPage />
                <StoryLine />
                <Projects />
                <Skillset />
                <ContactPage />
            </div>
        </div>
    )
}
