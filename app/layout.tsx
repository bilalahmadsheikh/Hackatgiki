import type { Metadata } from "next"
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
  weight: ["500", "600", "700"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: {
    default: "Hack-Nation | Global AI Hackathon",
    template: "%s | Hack-Nation",
  },
  description:
    "The world's premier AI innovation challenge. Build groundbreaking solutions, compete globally, and shape the future of artificial intelligence.",
  keywords: [
    "AI hackathon",
    "artificial intelligence",
    "hackathon",
    "global competition",
    "MIT",
    "startup",
    "HackatGIKI",
  ],
  authors: [{ name: "Hack-Nation" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hack-nation.ai",
    siteName: "Hack-Nation",
    title: "Hack-Nation | Global AI Hackathon",
    description: "The world's premier AI innovation challenge.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hack-Nation | Global AI Hackathon",
    description: "The world's premier AI innovation challenge.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-purple-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
