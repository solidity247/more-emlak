import React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Providers } from "@/components/providers"

import "./globals.css"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "cyrillic-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
})

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
      <body className={`${plusJakarta.variable} font-sans antialiased`}>
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
