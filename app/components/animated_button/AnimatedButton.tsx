import "./animatedButton.css"

interface CustomCSSProperties extends React.CSSProperties {
    '--primary-color'?: string;
    '--secondary-color'?: string;
    '--borderSize'?: string;
}

export default function AnimatedButton({
    text,
    includeArrows,
    type = undefined,
    primaryColor = "light-background",
    secondaryColor = "green",
    onClickCallback,
    borderWidth = 3,
}: {
    text: string
    includeArrows: boolean
    type?: "submit" | "reset" | "button" | undefined
    primaryColor?: "background" | "green" | "light-background"
    secondaryColor?: "background" | "green" | "light-background"
    onClickCallback?: () => void
    borderWidth?: number
}) {
    return (
        <button
            className="animated-button"
            style={{
                "--primary-color": `var(--${primaryColor})`,
                "--secondary-color": `var(--${secondaryColor})`,
                "--borderSize": "" + borderWidth + "px",
            } as CustomCSSProperties}
            type={type}
            onClick={onClickCallback && onClickCallback}
        >
            {includeArrows && (
                <svg
                    viewBox="0 0 24 24"
                    className="arr-2"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
            )}
            <span className="text">{text}</span>
            <span className="circle"></span>
            {includeArrows && (
                <svg
                    viewBox="0 0 24 24"
                    className="arr-1"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
            )}
        </button>
    )
}
