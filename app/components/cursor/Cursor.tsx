import { useEffect, useState } from "react"
import "./cursor.css"

export default function Cursor() {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setCursorPosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    return (
        <div className="custom-cursor-container">
            <div
                className="custom-cursor"
                style={{
                    background: `radial-gradient(450px at ${cursorPosition.x}px ${cursorPosition.y}px, #43ff3f2F, transparent 80%)`,
                }}
            ></div>
        </div>
    )
}
