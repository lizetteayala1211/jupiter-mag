import type { Metadata } from "next"
import { Darker_Grotesque, Abhaya_Libre } from "next/font/google"
import "./globals.css"

const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  variable: "--font-darker-grotesque",
})
const abhayaLibre = Abhaya_Libre({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-abhaya-libre",
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
      className={`${darkerGrotesque.variable} ${abhayaLibre.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
