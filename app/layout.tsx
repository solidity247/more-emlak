import React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Providers } from "@/components/providers"

import "./globals.css"

const _inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "MORE EMLAK GROUP | Агентство недвижимости в Мерсине",
  description:
    "Агентство недвижимости MORE EMLAK GROUP — покупка, продажа и аренда недвижимости в Мерсине, Турция. Оформление ВНЖ.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}
