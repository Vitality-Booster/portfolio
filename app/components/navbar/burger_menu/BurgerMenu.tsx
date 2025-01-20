"use client"

import { useState } from "react"
import "./burgerMenu.css"

export default function BurgerMenu({
    toggleHandler,
}: {
    toggleHandler: (menuOpen: boolean) => void
}) {
    const [active, setActive] = useState<boolean>(false)

    return (
        <svg
            className={
                !active ? "ham hamRotate ham7" : "ham hamRotate ham7 active"
            }
            viewBox="0 0 100 100"
            width="70"
            onClick={() => {
                toggleHandler(!active)
                setActive(!active)
            }}
        >
            <path
                className="line top"
                d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013"
            />
            <path className="line middle" d="m 70,50 h -40" />
            <path
                className="line bottom"
                d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40"
            />
        </svg>
    )
}
