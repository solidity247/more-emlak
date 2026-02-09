"use client"

import { useLocale } from "@/lib/locale-context"
import { Play } from "lucide-react"

const videoIds = [
  "dQw4w9WgXcQ",
  "jNQXAC9IVRw",
  "9bZkp7q19f0",
]

export function VideosSection() {
  const { t } = useLocale()

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <Play className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">{t("videos.title")}</h2>
          </div>
          <p className="text-lg text-muted-foreground">{t("videos.subtitle")}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {videoIds.map((id) => (
            <div key={id} className="overflow-hidden rounded-xl shadow-lg">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  title="Mersin video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
