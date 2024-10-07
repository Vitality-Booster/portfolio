import Image from "next/image"
import "./page.css"
import Smilo from "./components/smilo/Smilo"
import Point from "./components/timeline/Point"
import Line from "./components/timeline/Line"

export default function Home() {
    return (
        <div>
            <div className="main-container">
                <div className="content">
                    <div className="about-box">
                        <p>About myself, shortly</p>
                    </div>
                    <div className="stick-figure">
                        <div className="head-f"></div>
                        <div className="body-f"></div>
                        <div className="arm-left"></div>
                        <div className="arm-right"></div>
                        <div className="leg-left"></div>
                        <div className="leg-right"></div>
                    </div>
                </div>
            </div>

            <div className="extra" />
        </div>
    )
}
