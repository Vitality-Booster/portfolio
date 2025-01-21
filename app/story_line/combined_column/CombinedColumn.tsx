import { StoryPart } from "@prisma/client"
import "./combinedColumn.css"

import Image from "next/image"

export default function CombinedColumn({
    storyParts,
    windowWidth,
}: {
    storyParts: StoryPart[]
    windowWidth: number
}) {
    return (
        <div className="combined-story-line-wrapper">
            {storyParts.length > 0 &&
                storyParts.map((storyPart) => (
                    <div className="content-row" key={storyPart.id}>
                        <div className="combined-text-column">
                            <div className="combined-header-full">
                                {windowWidth <= 1024 && <h2 className="combined-story-line-duration">
                                    {storyPart.date}
                                </h2>}
                                <h1 className="combined-main-header">
                                    {storyPart.title}
                                </h1>
                            </div>
                            <div className="combined-description-card">
                                <p>{storyPart.description}</p>
                            </div>
                            </div>
                            <div
                                className="combined-image-container"
                            >
                                <Image
                                    className="combined-icon-image"
                                    src={storyPart.icon}
                                    alt={`${storyPart.title} image`}
                                    width={200}
                                    height={200}
                                />
                                {windowWidth > 1024 && <h2 className="combined-story-line-duration">
                                    {storyPart.date}
                                </h2>}
                            </div>
                            
                        </div>
                    // </div>
                ))}
        </div>
    )
}
