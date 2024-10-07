import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Navbar from "./components/navbar/Navbar"

// const geistSans = localFont({
//     src: "./fonts/GeistVF.woff",
//     variable: "--font-geist-sans",
//     weight: "100 900",
// })
// const geistMono = localFont({
//     src: "./fonts/GeistMonoVF.woff",
//     variable: "--font-geist-mono",
//     weight: "100 900",
// })

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
                {children}
            </body>
        </html>
    )
}
