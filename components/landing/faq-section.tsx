"use client"

import { useLocale } from "@/lib/locale-context"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    q: "Обязательно ли учить турецкий язык?",
    a: "Хоть люди здесь очень отзывчивые, но на русском с вами никто не заговорит. Со знанием английского уже больший шанс найти язык с местными жителями. Поэтому целесообразно использовать голосовой переводчик, например, Google Translate.",
  },
  {
    q: "Какова система здравоохранения в Турции?",
    a: "Медицина в Турции отличается прежде всего высоким качеством предоставляемых услуг. Турецкие больницы делятся на государственные, университетские и частные. Высококвалифицированный персонал, новейшее медицинское оборудование — все это делает Турцию одним из мировых лидеров в области здравоохранения. Большинство больниц имеют соглашения с международными страховыми компаниями.",
  },
  {
    q: "Есть ли международные банки в Турции?",
    a: "В Турции много международных банков (HSBC, Fortis), а также существует выбор турецких банков, которые имеют офисы в Европе (Is Bank, Garanti, Akbank).",
  },
  {
    q: "Можно ли получить ВНЖ при покупке недвижимости?",
    a: "Да, покупка недвижимости в Турции дает право на получение вида на жительство. Наша компания помогает с полным оформлением документов.",
  },
  {
    q: "Какие документы нужны для покупки?",
    a: "Для покупки недвижимости в Турции вам понадобится загранпаспорт, ИНН (налоговый номер), который мы поможем вам оформить, и банковский счет в турецком банке.",
  },
  {
    q: "Есть ли рассрочка при покупке недвижимости?",
    a: "Да, многие застройщики предлагают рассрочку. Условия зависят от конкретного объекта и застройщика. Мы подберем наиболее выгодный вариант для вас.",
  },
]

export function FaqSection() {
  const { t } = useLocale()

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
          {t("faq.title")}
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-foreground hover:text-primary">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
