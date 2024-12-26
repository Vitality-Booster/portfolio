import { useState, useEffect } from "react"

function useWindowSize() {
    const [size, setSize] = useState({ width: 0, height: 0 })

    useEffect(() => {
        function handleResize() {
            setSize({ width: window.innerWidth, height: window.innerHeight })
        }

        window.addEventListener("resize", handleResize)
        handleResize()

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return size
}

export default useWindowSize
