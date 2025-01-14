import { StoryPart } from "@prisma/client"
import "./combinedColumn.css"

import Image from "next/image"

export default function CombinedColumn({
    storyParts,
}: {
    storyParts: StoryPart[]
}) {
    return (
        <div className="combined-story-line-wrapper">
            {storyParts.length > 0 &&
                storyParts.map((storyPart) => (
                    <div className="content-row" key={storyPart.id}>
                        <div className="combined-text-column">
                            <div className="combined-header-full">
                                {/* {windowWidth < 768 && <h2 className="combined-story-line-duration">{storyPart.date}</h2>} */}
                                <h2 className="combined-story-line-duration">
                                    {storyPart.date}
                                </h2>
                                <h1 className="combined-main-header">
                                    {storyPart.title}
                                </h1>
                            </div>
                            <div className="combined-description-card">
                                <p>{storyPart.description}</p>
                            </div>
                            <div
                                className="combined-image-container"
                                // style={{ marginBottom: imageMarginBottom }}
                            >
                                <Image
                                    className="combined-icon-image"
                                    src={storyPart.icon}
                                    alt={`${storyPart.title} image`}
                                    width={150}
                                    height={150}
                                />
                            </div>
                        </div>
                        {/* <div className="combined-icon-column">
                            <div
                                className="combined-image-container"
                                // style={{ marginBottom: imageMarginBottom }}
                            >
                                <Image
                                    className="combined-icon-image"
                                    src={storyPart.icon}
                                    alt={`${storyPart.title} image`}
                                    width={150}
                                    height={150}
                                />
                            </div>
                            {windowWidth >= 768 && <h2 className="combined-story-line-duration">{storyPart.date}</h2>}
                        </div> */}
                    </div>
                ))}
        </div>
    )
}
