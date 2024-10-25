import Image from "next/image"
import "./page.css"
import Point from "./components/timeline/Point"
import Line from "./components/timeline/Line"
import LandingPage from "./home/LandingPage"
import StoryLine from "./story_line/page"
import Projects from "./cut_projects/page"

export default function Home() {
    return (
        <div className="main-container">
            <LandingPage />
            <StoryLine />
            <Projects />
        </div>
    )
}
