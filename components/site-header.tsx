"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Sun, Moon, Monitor, Phone, Globe } from "lucide-react"
import { useLocale } from "@/lib/locale-context"
import { useAutoTheme } from "@/lib/auto-theme-provider"
import { type Locale, localeNames } from "@/lib/i18n"
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

  const themeIcon = mode === "light" ? <Sun className="h-4 w-4" /> : mode === "dark" ? <Moon className="h-4 w-4" /> : <Monitor className="h-4 w-4" />

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <img
              src="https://static.tildacdn.com/tild6437-3362-4437-a137-303535643562/_.png"
              alt="More Emlak Group"
              className="h-10 w-auto"
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
                <Button variant="ghost" size="sm" className="gap-1 text-foreground">
                  <Globe className="h-4 w-4" />
                  <span className="text-xs">{localeNames[locale]}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {(Object.keys(localeNames) as Locale[]).map((l) => (
                  <DropdownMenuItem key={l} onClick={() => setLocale(l)}>
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
                  <Monitor className="mr-2 h-4 w-4" />
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
