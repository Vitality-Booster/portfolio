import "./cursor.css"

export default function Cursor({position}: {position: {x: number, y: number}}) {

    return (
        <div
            className="custom-cursor"
            style={{background: `radial-gradient(450px at ${position.x}px ${position.y}px, #43ff3f2F, transparent 80%)`}}
        ></div>
    )
}
