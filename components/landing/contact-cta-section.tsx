"use client"

import { useLocale } from "@/lib/locale-context"
import { Button } from "@/components/ui/button"
import { MessageCircle, Send } from "lucide-react"

export function ContactCtaSection() {
  const { t } = useLocale()

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
          {t("cta.title")}
        </h2>
        <p className="mb-2 text-xl text-muted-foreground">{t("cta.subtitle")}</p>
        <p className="mb-8 text-muted-foreground">{t("cta.description")}</p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="w-full bg-[#25D366] px-8 text-lg font-semibold text-white hover:bg-[#20BD5A] sm:w-auto"
          >
            <a href="https://wa.me/905010031633" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              {t("cta.whatsapp")}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="w-full bg-[#0088cc] px-8 text-lg font-semibold text-white hover:bg-[#006699] sm:w-auto"
          >
            <a href="https://t.me/ArinaMoreEmlak" target="_blank" rel="noopener noreferrer">
              <Send className="mr-2 h-5 w-5" />
              {t("cta.telegram")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
