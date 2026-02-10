"use client"

import { useLocale } from "@/lib/locale-context"
import { Button } from "@/components/ui/button"
import { MessageCircle, Play } from "lucide-react"

const reviewVideoIds = [
  "_UU6eWtXhjU",
  "j51HvgS3JTs",
  "qpVfPSL4UHY",
  "mh10YjC4dCc",
  "0LzbxueIV34",
  "8VUTk9MLdJg",
  "Cs3ic4ExoiQ",
  "28l9GneebyY",
  "ZcJTuGIG0Oo",
  "81YiPpH1FEk",
  "HV7kOcW5wDk",
]

export default function FeedbackPage() {
  const { t } = useLocale()

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-primary/5 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <Play className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground md:text-5xl">{t("nav.feedback")}</h1>
          </div>
          <img src="/separator-ltl.svg" alt="" className="mx-auto h-10 w-auto" />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
            {"Видео отзывы наших клиентов"}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviewVideoIds.map((id) => (
              <div key={id} className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  title="Отзыв клиента More Emlak"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="aspect-video w-full"
                />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="https://wa.me/905010031633" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                {t("founder.cta")}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
