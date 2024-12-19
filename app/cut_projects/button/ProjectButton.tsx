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
            <h2 className="project-index">0{index}</h2>
            <button
                className={
                    active
                        ? "project-button project-button-active"
                        : "project-button"
                }
                onClick={() => callback(index)}
            >
                {projectName}
            </button>
        </div>
    )
}
