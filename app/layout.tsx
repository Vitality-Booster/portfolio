import type { Metadata } from "next"
import "./globals.css"
import Navbar from "./components/navbar/Navbar"
import Cursor from "./components/cursor/Cursor"

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
            {/* <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> */}
            {/* <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet"> */}
            {/* <body className={`${geistSans.variable} ${geistMono.variable}`}> */}
            <body>
                <Navbar />
                <Cursor />
                {children}
            </body>
        </html>
    )
}
