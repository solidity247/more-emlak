"use client"

import Link from "next/link"
import { useLocale } from "@/lib/locale-context"
import { MessageCircle, Send } from "lucide-react"

export function SiteFooter() {
  const { t } = useLocale()

  return (
    <footer className="relative border-t border-border bg-card text-card-foreground">
      {/* Warm accent strip at top of footer */}
      <div className="absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-warm/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <img
              src="/images/moreemlak-logo-clean-20.png"
              alt="More Emlak Group"
              className="h-14 w-14 rounded-full self-start"
            />
            <p className="text-sm text-muted-foreground">MORE EMLAK GROUP</p>
            <p className="text-xs text-muted-foreground">{t("hero.subtitle")}</p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-2">
            <h4 className="mb-2 text-sm font-bold text-foreground">{t("nav.catalog")}</h4>
            <Link href="/catalog" className="text-sm text-muted-foreground hover:text-primary">{t("nav.catalog")}</Link>
            <Link href="/rent" className="text-sm text-muted-foreground hover:text-primary">{t("nav.rent")}</Link>
            <Link href="/resident-card" className="text-sm text-muted-foreground hover:text-primary">{t("nav.resident")}</Link>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="mb-2 text-sm font-bold text-foreground">{t("nav.about")}</h4>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">{t("nav.about.company")}</Link>
            <Link href="/about/whyus" className="text-sm text-muted-foreground hover:text-primary">{t("nav.about.whyus")}</Link>
            <Link href="/feedback" className="text-sm text-muted-foreground hover:text-primary">{t("nav.feedback")}</Link>
            <Link href="/contacts" className="text-sm text-muted-foreground hover:text-primary">{t("nav.contacts")}</Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="mb-2 text-sm font-bold text-foreground">{t("nav.contacts")}</h4>
            <a
              href="https://wa.me/905010031633"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href="https://t.me/ArinaMoreEmlak"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
            >
              <Send className="h-4 w-4" />
              Telegram
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} MORE EMLAK GROUP. {t("footer.rights")}
        </div>
      </div>
    </footer>
  )
}
