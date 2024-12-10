"use client"

import "./landingPage.css"
import Image from "next/image"

import { useEffect, useRef, useState } from "react"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import TextPlugin from "gsap/TextPlugin"

gsap.registerPlugin(useGSAP, TextPlugin)

export default function LandingPage() {
    const bestRectRef = useRef(null)
    const tl = useRef(gsap.timeline())
    const [pics, setPics] = useState<string[]>([])

    useGSAP(() => {
        tl.current.from(
            bestRectRef.current,
            {
                width: 0,
                duration: 1,
                ease: "elastic.out",
            },
            "+=0.8",
        )
        tl.current.from(".description-word", {
            opacity: 0,
            duration: 0.5,
            stagger: 0.15,
            ease: "power1.in",
        })
    }, [bestRectRef, tl])

    // TODO: Finish later
    useEffect(() => {
        async function fetchPics() {
            const res = await fetch("/api/images/line_face.png")
            const data = await res.json()
            console.log("Data:", data)
            setPics([data.imageUrl])
        }

        fetchPics()
      }, []);

    return (
        <div className="landing-container">
            <div className="line-face-container">
                {/* <Image src={LineFace} alt="Line Face" width={800} />
                <Image src={"s3://profile-website-bucket/line_face.png"} alt="Face" width={800}/> */}
                {/* <div>{pics[0]?.Key}</div> */}
                {(pics && pics[0]) && (<Image src={"https://profile-website-bucket.s3.us-east-1.amazonaws.com/line_face.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAVVZPCK2I66V5A4HE%2F20241205%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241205T092628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLWVhc3QtMSJGMEQCIFixwrFDrhem%2FAW9sUDgavg0GfKfdZPWrrFbv16%2F%2BNj3AiBAa%2BuZWKyijYQDmcodPGWM8LTxZGq7zUxGqrMdLYuUpiqvBQgTEAAaDDM5MDQwMzg3MjQwMSIMKqDMK3eRyM%2FyoF1kKowFWdC%2BLyIgV6I4lGPVMWusZCSQGBGsfthA%2Bkquxx2hHEXsadaQtUvZq7BVpNOkFyzET4lUL92ORjdtgsBVR9XYMJ2s235mH%2B%2BPoFhVcrF0N98F3qNtSGa%2B2cXfW4iFG%2FhE1mOjd4z7GHL7w62RS5zOnGrOqzHgT30bLo2sBD1ScKZVg0A63vUBOhMJxoyz%2F2aCYeIVGkIl3MK1EyUzGz6esYcJCyD%2Fk0GIJW0P1OweBdBlPtADO7N1HtEWzPaz5rTuFHXdVgGzl%2BXZN57m1Mz4iv0MYg8v36qlPwFM%2FFsBsu21%2FJnCWqx%2FpFXmicyfY7L%2F0YRueOtCruwItdmGtEKE%2FJGEslmrCnh8xc0QTMi5%2BVaYOGWEVPTn5I7bufE2pJCR%2F%2FehzBwZZppXKPRuVQAf%2F9%2BpuI%2FNKFDcRs8ZHrsdqzBHVZXmDWZQvii1Jd537X%2BsbarTSc47yHMdTfC7Bro09E%2FX4XTTaovpnYWeBHg%2Fw96raxcEU%2FSWT%2BSiVPpLF0J3yH3g1u2FBjL%2F2haSOmfsra9D8GCo3gn8BrL7Dw2YY1I4dgyr17x%2BY8UtQ6fNP0e%2FfbcFciCamgeeu3xkG8KxzvvdhznR54rNmzx5FC1877jXdUXBL0zQhqODIpJamh4gqIba9EtOiKYMXLVtgvWNKr0cU6J1YOzHUMiNvXN4%2BP2WwEqARySJezN0dt1u3FzrQlRPjzQxDmeJmfDmwP2waF3GLa7OW4zXNH1Fya7xmMoQgmQG6sXbn1nOZZ9L4WBGidLQuKgoanMI%2BphERxJkMXNcnblgevSTXzHBN72Mb40EphY0FvvRVwIYeUNPTPcJc4elsQV5fQKE06dXFYdeY0GkSgn6oY1B5QBVejDE48W6BjrgAjqnwk6aNiMoeM%2BTX8DSUE1RJV1nXB2vZswdAXuQ6DExzjW0rXIxzjusIyLoC5ZBsJbcVzYkesfcZyVtZsDeqRUVQ6qbDBJcUZsJvSGpbVFMwY9iRFMpF9jfGIpNHSUggCG7N0Z249cKzQMjH3QZQaeGW6jsngKpKU3HVa86u07JfIMCycrgflpcFnhJKXfU3RuTC4vvEAisO3xkpZjZRiiaj2qa7AI2awYsESfg%2FlR4%2FiQOYxqymyDBYEMI%2F05P%2B25y2oAMp%2FXJMRIEmlshdItO0tZ%2FXQj%2Bv01AqIqLKm%2BFcu0pkZJVYKwNGMvnb5PvARe1spjE7nFmpL28F1yU6Yn%2BTqHt91yGdPbbUdR%2BlYh%2FiTzSV%2FkRo6Y17TE4C2fWOqPTTpM0ojD2btWkcwZJN1SyzmOsT3acBjvCg7FFUIqoc55K%2FuEY%2B1aTdSNu7%2F7QKk7gN4QBqi%2BTFPcstTt6JmM%3D&X-Amz-Signature=1c14aa8c231a9ff1dfdef6fa9cc41750eb3d78cdb4b397359d05f6efa6beff1b&X-Amz-SignedHeaders=host&x-id=GetObject"} className="line-face-picture" alt="Face" width={800} height={800}/>)}
            </div>
            <div className="text-container">
                <div className="name-container">
                    <h1 className="full-name first-name">VITALI</h1>
                    <h1 className="full-name last-name">
                        <div
                            className="last-name-rectangle"
                            ref={bestRectRef}
                        />
                        BESTOLKAU
                    </h1>
                </div>
                <div className="home-descriptions">
                    <div className="home-description-line">
                        <p className="hidden-home-description">Team Player</p>
                        <p className="home-description">Developer</p>
                    </div>
                    <div className="home-description-line">
                        <p className="hidden-home-description">Innovator</p>
                        
                        <p className="home-description">Enthusiast</p>
                    </div>
                    <div className="home-description-line">
                        <p className="hidden-home-description">Problem Solver</p>
                        <p className="home-description">Challenger</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
