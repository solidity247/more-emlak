"use client"

import { useState } from "react"
import { useLocale } from "@/lib/locale-context"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Plane, Hotel, MapPin, Building2, MessageCircle, ChevronLeft, ChevronRight, X } from "lucide-react"

const tourImages = [
  "https://static.tildacdn.com/tild6666-3265-4461-b463-666634663439/noroot.jpg",
  "https://attaches.1001tur.ru/hotels/gallery/461585/1024-0__use_origin_data_73541498168078.jpg?q=70",
  "https://i.pinimg.com/736x/c9/f6/ae/c9f6aef74bd75a6a0b7afdae0652e124.jpg",
  "https://i.pinimg.com/736x/df/4e/25/df4e258f923608629bdd075caf2044fa.jpg",
  "https://i.pinimg.com/736x/e0/13/c2/e013c213a5219615e1fc36464d1ed71d.jpg",
]

export function TourSection() {
  const { t } = useLocale()
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const tourIncludes = [
    { icon: Plane, text: t("tour.airport") },
    { icon: Hotel, text: t("tour.hotel") },
    { icon: MapPin, text: t("tour.city") },
    { icon: Building2, text: t("tour.property") },
  ]

  return (
    <section className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-2 flex items-center justify-center gap-2">
          <div className="h-1 w-6 rounded-full bg-warm/50" />
          <div className="h-1.5 w-10 rounded-full bg-warm" />
          <div className="h-1 w-6 rounded-full bg-warm/50" />
        </div>
        <h2 className="mb-4 text-center text-3xl font-extrabold text-foreground md:text-4xl">
          {t("tour.title")}
        </h2>

        {/* Image carousel / gallery */}
        <div className="mb-12 mt-8 flex gap-3 overflow-x-auto pb-4">
          {tourImages.map((img, i) => (
            <button
              type="button"
              key={i}
              className="shrink-0 cursor-pointer overflow-hidden rounded-xl transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={() => setSelectedImage(i)}
            >
              <img
                src={img || "/placeholder.svg"}
                alt={`Mersin tour photo ${i + 1}`}
                className="h-48 w-72 object-cover md:h-56 md:w-80"
              />
            </button>
          ))}
        </div>

        {/* Creative text */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
            {t("tour.question1")}{" "}
            <span className="relative inline-block">
              <span className="relative z-10 italic text-primary">{t("tour.not")}</span>
              <span className="absolute bottom-0 left-0 h-2 w-full bg-primary/20" />
            </span>
            {t("tour.question2")}
          </p>
          <p className="mb-4 text-lg text-muted-foreground">{t("tour.question3")}</p>
          <p className="mb-4 text-lg font-medium text-foreground">{t("tour.invite")}</p>
          <p className="text-muted-foreground">{t("tour.discover")}</p>
        </div>

        {/* Tour includes */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {tourIncludes.map((item) => (
            <div
              key={item.text}
              className="flex flex-col items-center gap-3 rounded-xl border border-border bg-background p-6 text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-warm/10">
                <item.icon className="h-7 w-7 text-warm" />
              </div>
              <span className="text-sm font-medium text-foreground">{item.text}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="animate-pulse-glow bg-primary px-10 py-6 text-lg font-bold text-primary-foreground hover:bg-primary/90"
          >
            <a href="https://wa.me/905010031633" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              {t("tour.cta")}
            </a>
          </Button>
        </div>
      </div>

      {/* Image modal */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
          {selectedImage !== null && (
            <div className="relative">
              <img
                src={tourImages[selectedImage] || "/placeholder.svg"}
                alt={`Mersin tour photo ${selectedImage + 1}`}
                className="w-full rounded-lg object-contain"
              />
              <button
                type="button"
                className="absolute right-2 top-2 rounded-full bg-background/80 p-2 text-foreground backdrop-blur"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-5 w-5" />
              </button>
              {selectedImage > 0 && (
                <button
                  type="button"
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground backdrop-blur"
                  onClick={() => setSelectedImage(selectedImage - 1)}
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              )}
              {selectedImage < tourImages.length - 1 && (
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground backdrop-blur"
                  onClick={() => setSelectedImage(selectedImage + 1)}
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
