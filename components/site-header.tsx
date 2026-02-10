"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Sun, Moon, Phone } from "lucide-react"
import { useLocale } from "@/lib/locale-context"
import { useAutoTheme } from "@/lib/auto-theme-provider"
import { type Locale, localeNames } from "@/lib/i18n"

const localeFlags: Record<Locale, string> = {
  ru: "\u{1F1F7}\u{1F1FA}",
  en: "\u{1F1EC}\u{1F1E7}",
  tr: "\u{1F1F9}\u{1F1F7}",
}

function AutoThemeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Left half: sun rays */}
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="12" y1="21" x2="12" y2="23" />
      {/* Circle with half fill */}
      <circle cx="12" cy="12" r="5" />
      {/* Dark half on the right */}
      <path d="M12 7a5 5 0 0 1 0 10" fill="currentColor" stroke="none" />
      {/* Right half: moon stars */}
      <circle cx="19" cy="6" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="21" cy="10" r="0.5" fill="currentColor" stroke="none" />
      <circle cx="20" cy="17" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function SiteHeader() {
  const { locale, setLocale, t } = useLocale()
  const { mode, setMode } = useAutoTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [callbackOpen, setCallbackOpen] = useState(false)
  const [callbackSent, setCallbackSent] = useState(false)

  const navItems = [
    { label: t("nav.catalog"), href: "/catalog" },
    { label: t("nav.rent"), href: "/rent" },
    { label: t("nav.resident"), href: "/resident-card" },
    {
      label: t("nav.mersin"),
      href: "/mersin",
      children: [
        { label: t("nav.mersin.about"), href: "/mersin/about-city" },
        { label: t("nav.mersin.prospect"), href: "/mersin/prospect" },
        { label: t("nav.mersin.ecology"), href: "/mersin/ecology" },
      ],
    },
    {
      label: t("nav.about"),
      href: "/about",
      children: [
        { label: t("nav.about.company"), href: "/about" },
        { label: t("nav.about.whyus"), href: "/about/whyus" },
      ],
    },
    { label: t("nav.feedback"), href: "/feedback" },
    { label: t("nav.contacts"), href: "/contacts" },
  ]

  const themeIcon = mode === "light" ? <Sun className="h-4 w-4" /> : mode === "dark" ? <Moon className="h-4 w-4" /> : <AutoThemeIcon className="h-4 w-4" />

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        {/* Warm accent strip at very top */}
        <div className="absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-primary via-warm to-primary" />
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <img
              src="/images/moreemlak-logo-clean-20.png"
              alt="More Emlak Group"
              className="h-10 w-10 rounded-full"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) =>
              item.children ? (
                <DropdownMenu key={item.href}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="gap-1 text-sm font-medium text-foreground">
                      {item.label}
                      <ChevronDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.href} asChild>
                        <Link href={child.href}>{child.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button key={item.href} variant="ghost" asChild className="text-sm font-medium text-foreground">
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              )
            )}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-1">
            {/* Language selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1.5 text-foreground">
                  <span className="text-base leading-none" aria-hidden="true" suppressHydrationWarning>{localeFlags[locale]}</span>
                  <span className="text-xs">{localeNames[locale]}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {(Object.keys(localeNames) as Locale[]).map((l) => (
                  <DropdownMenuItem key={l} onClick={() => setLocale(l)} className="gap-2">
                    <span className="text-base leading-none" aria-hidden="true" suppressHydrationWarning>{localeFlags[l]}</span>
                    {localeNames[l]}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-foreground">
                  {themeIcon}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setMode("auto")}>
                  <AutoThemeIcon className="mr-2 h-4 w-4" />
                  {t("theme.auto")}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setMode("light")}>
                  <Sun className="mr-2 h-4 w-4" />
                  {t("theme.light")}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setMode("dark")}>
                  <Moon className="mr-2 h-4 w-4" />
                  {t("theme.dark")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Callback button */}
            <Button
              size="sm"
              className="hidden bg-primary text-primary-foreground hover:bg-primary/90 md:flex"
              onClick={() => {
                setCallbackSent(false)
                setCallbackOpen(true)
              }}
            >
              <Phone className="mr-1 h-3 w-3" />
              {t("nav.callback")}
            </Button>

            {/* Mobile toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="text-foreground lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="border-t border-border bg-background px-4 py-4 lg:hidden">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.href}>
                    <p className="px-3 py-2 text-sm font-semibold text-foreground">{item.label}</p>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-md px-6 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Button
                className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => {
                  setMobileOpen(false)
                  setCallbackSent(false)
                  setCallbackOpen(true)
                }}
              >
                <Phone className="mr-2 h-4 w-4" />
                {t("nav.callback")}
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Callback dialog */}
      <Dialog open={callbackOpen} onOpenChange={setCallbackOpen}>
        <DialogContent className="bg-card text-card-foreground">
          <DialogHeader>
            <DialogTitle className="text-foreground">{t("callback.title")}</DialogTitle>
          </DialogHeader>
          {callbackSent ? (
            <p className="py-8 text-center text-lg font-medium text-primary">
              {t("callback.success")}
            </p>
          ) : (
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault()
                setCallbackSent(true)
              }}
            >
              <div className="flex flex-col gap-2">
                <Label htmlFor="cb-name" className="text-foreground">{t("callback.name")}</Label>
                <Input id="cb-name" required className="bg-background text-foreground" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="cb-phone" className="text-foreground">{t("callback.phone")}</Label>
                <Input id="cb-phone" type="tel" required className="bg-background text-foreground" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="cb-about" className="text-foreground">{t("callback.about")}</Label>
                <Textarea id="cb-about" rows={3} className="bg-background text-foreground" />
              </div>
              <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                {t("callback.send")}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
