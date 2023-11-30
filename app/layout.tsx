import "./globals.css"
import type { Metadata } from 'next'
import { Inter as FontSans } from "next/font/google"
import Header from "./header"
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
})
export const metadata: Metadata = {
  title: 'MasterDex',
  description: 'Powered by me',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="dark"
      suppressHydrationWarning>
      <body className={`min-h-screen bg-background font-sans antialiased ${fontSans.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
