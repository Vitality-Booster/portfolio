import type { Metadata } from "next"
import "./globals.css"
import Navbar from "./components/navbar/Navbar"

export const metadata: Metadata = {
    title: "Portfolio",
    description: "My portfolio",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>
                <div className="navbar-container">
                    <Navbar />
                </div>

                {children}
            </body>
        </html>
    )
}
