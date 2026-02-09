"use client"

import { useLocale } from "@/lib/locale-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, MessageCircle } from "lucide-react"

const reviews = [
  {
    name: "Анна К.",
    date: "Март 2024",
    text: "Огромное спасибо команде More Emlak! Купили квартиру в Мезитли с видом на море. Юлия и её команда помогли на каждом этапе - от подбора объекта до оформления ВНЖ. Все прошло гладко и профессионально.",
    rating: 5,
  },
  {
    name: "Дмитрий П.",
    date: "Январь 2024",
    text: "Приехали на смотровой тур и влюбились в Мерсин. За 3 дня посмотрели множество объектов, и нашли идеальную квартиру для нашей семьи. Отдельное спасибо за постпродажный сервис!",
    rating: 5,
  },
  {
    name: "Елена и Сергей",
    date: "Декабрь 2023",
    text: "Искали недвижимость для инвестиций. More Emlak предложили несколько вариантов с хорошей доходностью от аренды. Уже через год квартира подорожала на 25%. Очень довольны!",
    rating: 5,
  },
  {
    name: "Ольга М.",
    date: "Октябрь 2023",
    text: "Долго выбирали между Антальей и Мерсином. После консультации с Юлией выбрали Мерсин и не пожалели! Цены здесь действительно ниже, а качество жизни на высоте.",
    rating: 5,
  },
  {
    name: "Рустам А.",
    date: "Август 2023",
    text: "Профессиональный подход к делу. Все документы оформили быстро и без лишних хлопот. Команда всегда на связи и готова помочь. Рекомендую!",
    rating: 5,
  },
  {
    name: "Марина В.",
    date: "Июнь 2023",
    text: "Купили студию в новостройке для сдачи в аренду. Весь процесс занял буквально пару дней. Сейчас стабильно получаем доход от аренды. Спасибо More Emlak!",
    rating: 4,
  },
]

export default function FeedbackPage() {
  const { t } = useLocale()

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-primary/5 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">{t("nav.feedback")}</h1>
          <p className="text-lg text-muted-foreground">
            Отзывы наших клиентов о работе с More Emlak Group
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <Card key={review.name} className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={`${review.name}-star-${i}`}
                        className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
                      />
                    ))}
                  </div>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{review.text}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-card-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="mb-4 text-muted-foreground">Хотите стать нашим следующим довольным клиентом?</p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="https://wa.me/905010031633" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Связаться с нами
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
