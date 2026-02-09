"use client"

import { useLocale } from "@/lib/locale-context"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function GuideSection() {
  const { t } = useLocale()

  return (
    <section className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="shrink-0">
            <img
              src="https://static.tildacdn.com/tild6333-6337-4233-b263-343633316162/Free-Magazine-Title-.png"
              alt="Checklist guide"
              className="h-56 w-auto rounded-xl shadow-lg md:h-72"
            />
          </div>
          <div className="flex flex-col gap-6 text-center md:text-left">
            <p className="text-xl font-medium leading-relaxed text-foreground md:text-2xl">
              {t("guide.title")}
            </p>
            <Button
              asChild
              size="lg"
              className="self-center bg-primary text-primary-foreground hover:bg-primary/90 md:self-start"
            >
              <a
                href="https://drive.google.com/uc?export=download&id=17fn9EGy_v6UkMo_s7ePzuXjQ_S8ge5Ow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                {t("guide.cta")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
