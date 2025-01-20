import AnimatedButton from "@/app/components/animated_button/AnimatedButton"
import "./descriptionCard.css"

export default function DescriptionCard({
    description,
    link,
}: {
    description: string
    link: string
}) {
    const onButtonClickHandler = () => {
        window.open(link, "_blank")
    }

    return (
        <div className="description-card-container">
            <div className="description-project-card">
                <div className="description-text">{description}</div>
                <div className="view-more-button-container">
                    {/* <button
                        className="view-more-button"
                        onClick={() => window.open(link, "_blank")}
                    >
                        Source
                    </button> */}
                    <AnimatedButton
                        text={"Source link"}
                        includeArrows={true}
                        borderWidth={1}
                        onClickCallback={onButtonClickHandler}
                        primaryColor="green"
                        secondaryColor="background"
                    />
                </div>
            </div>
            <div className="description-card-shadow" />
        </div>
    )
}
