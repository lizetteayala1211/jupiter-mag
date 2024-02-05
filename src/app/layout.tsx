import type { Metadata } from "next"
import {
  Darker_Grotesque,
  Abhaya_Libre,
  Playfair_Display,
} from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"

const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  variable: "--font-darker-grotesque",
})
const abhayaLibre = Abhaya_Libre({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-abhaya-libre",
})
const playfairDisplay = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-playfair-display",
})

export const metadata: Metadata = {
  title: "Jupiter",
  description: "Magazine",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${darkerGrotesque.variable} ${abhayaLibre.variable} ${playfairDisplay.variable}`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
