import React from "react"
import "./loader.css" // Assuming you have a CSS file for styling

const Loader = () => {
    const boxes = Array.from({ length: 8 }, (_, i) => (
        <div key={i} className={`box box${i}`}>
            <div></div>
        </div>
    ))

    return (
        <figure className="loader-container">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </figure>
    )
}

export default Loader
