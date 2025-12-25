import type React from "react"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const nunito = Nunito({ subsets: ["latin", "cyrillic"], weight: ["400", "600", "700", "800"] })

export const metadata: Metadata = {
  title: "Благотворительность - Помогайте тем, кто нуждается",
  description:
    "Мобильная платформа для благотворительности. Поддержите проверенные организации и следите за влиянием ваших пожертвований.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${nunito.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
