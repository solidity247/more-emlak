"use client"

import type { ReactNode } from "react"
import { LocaleProvider } from "@/lib/locale-context"
import { AutoThemeProvider } from "@/lib/auto-theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <AutoThemeProvider>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </AutoThemeProvider>
    </LocaleProvider>
  )
}
