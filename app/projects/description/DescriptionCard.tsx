import "./descriptionCard.css"
import Arrow from "../../../public/right-arrow.png"
import Image from "next/image"

export default function DescriptionCard() {
    return (
        <div className="description-card-container">
            <div className="description-card">
                <div className="description-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error commodi obcaecati, ab officia adipisci impedit iure
                    quia, aliquid perspiciatis perferendis provident itaque
                    deserunt, sed nisi assumenda non architecto mollitia
                    accusantium. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Error commodi obcaecati, ab officia
                    adipisci impedit iure quia, aliquid perspiciatis perferendis
                    provident itaque deserunt, sed nisi assumenda non architecto
                    mollitia accusantium. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Error commodi obcaecati, ab officia
                    adipisci impedit iure quia, aliquid perspiciatis perferendis
                    provident itaque deserunt, sed nisi assumenda non architecto
                    mollitia accusantium. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Error commodi obcaecati, ab officia
                    adipisci impedit iure quia, aliquid perspiciatis perferendis
                    provident itaque deserunt, sed nisi assumenda non architecto
                    mollitia accusantium.
                </div>
                <button className="view-more-button">
                    View <Image src={Arrow} width={18} alt="Arrow" />
                </button>
            </div>
            <div className="description-card-shadow" />
        </div>
    )
}
