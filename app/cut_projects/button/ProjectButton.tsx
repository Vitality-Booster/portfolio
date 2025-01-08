import "./projectButton.css"

export default function ProjectButton({
    index,
    projectName,
    active = false,
    callback,
}: {
    index: number
    projectName: string
    active?: boolean
    callback: (index: number) => void
}) {
    return (
        <div className="button-with-index">
            <a className="project-index">0{index}</a>
            <button
                className={
                    active
                        ? "project-button project-button-active"
                        : "project-button"
                }
                onClick={() => callback(index)}
            >
                <h3>{projectName}</h3>
            </button>
        </div>
    )
}
