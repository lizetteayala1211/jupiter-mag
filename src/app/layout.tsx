import type { Metadata } from "next"
import { Darker_Grotesque } from "next/font/google"
import "./globals.css"

const darkerGrotesque = Darker_Grotesque({ subsets: ["latin"] })

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
    <html lang="en">
      <body className={`${darkerGrotesque.className}`}>{children}</body>
    </html>
  )
}
