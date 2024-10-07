import "./page.css"

export default function Page() {
    return (
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
    )
}
