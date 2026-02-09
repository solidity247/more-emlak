"use client"

import { useLocale } from "@/lib/locale-context"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function FounderSection() {
  const { t } = useLocale()

  const paragraphs = t("founder.text").split("\n\n").filter(Boolean)

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-2 text-center text-3xl font-extrabold text-foreground md:text-4xl">
          {t("founder.title")}
        </h2>
        <img src="/separator-ltl.svg" alt="" className="mx-auto mb-12 h-10 w-auto" />
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
            <div className="shrink-0">
              <div className="relative">
                <img
                  src="https://static.tildacdn.com/tild3832-6232-4131-b664-326638323165/_.png"
                  alt="Yulia - Founder"
                  className="h-64 w-64 rounded-2xl object-cover shadow-lg md:h-80 md:w-72"
                />
                {/* Warm decorative frame corner */}
                <div className="absolute -bottom-2 -right-2 h-16 w-16 rounded-br-2xl border-b-4 border-r-4 border-warm/40" />
                <div className="absolute -left-2 -top-2 h-16 w-16 rounded-tl-2xl border-l-4 border-t-4 border-warm/40" />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {paragraphs.map((p, i) => (
                <p key={i} className="leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
              <Button
                asChild
                size="lg"
                className="mt-4 self-start bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href="https://wa.me/905010031633" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {t("founder.cta")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
