"use client"

import { useRef, useState } from "react"
import "./cursor.css"

export default function Cursor() {
    // const cursor = document.querySelector('.custom-cursor');
    const cursorRef = useRef(null)
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 })

    const positionElement = (e) => {
        console.log("The new values are going to be: ", e.clientX, e.clientY)
        const mouseY = e.clientY
        const mouseX = e.clientX
        setCoordinates({ x: mouseX, y: mouseY })
        // if (cursorRef.current) {
        //     cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
        // }
    }

    //   window.addEventListener('mousemove', )

    return (
        <div
            className="custom-cursor"
            ref={cursorRef}
            onMouseMove={positionElement}
            style={{background: `radial-gradient(600px at ${coordinates.x}px ${coordinates.y}px, rgba(29, 78, 216), transparent 100%)`}}
        ></div>
    )
}
