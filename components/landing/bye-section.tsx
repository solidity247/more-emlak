"use client"

import { useLocale } from "@/lib/locale-context"

export function ByeSection() {
  const { t } = useLocale()

  return (
    <section className="relative overflow-hidden bg-card py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <div className="mb-8 overflow-hidden rounded-2xl shadow-xl">
          <img
            src="https://static.tildacdn.com/tild3066-3330-4066-a366-323765346438/IMG_6665.JPG"
            alt="More Emlak Group team"
            className="aspect-[16/7] w-full object-cover"
          />
        </div>
        <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
          {t("bye.title")}
        </h2>
        {/* Warm decorative accent */}
        <div className="mx-auto mt-4 flex items-center justify-center gap-1">
          <div className="h-0.5 w-10 bg-warm/30" />
          <div className="h-1.5 w-1.5 rounded-full bg-warm" />
          <div className="h-0.5 w-10 bg-warm/30" />
        </div>
      </div>
    </section>
  )
}
