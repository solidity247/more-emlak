"use client"

import { useLocale } from "@/lib/locale-context"
import { MapPin, Thermometer, Users, Building2, Plane, Waves } from "lucide-react"

const facts = [
  { icon: Users, label: "1.8 млн", desc: "Население" },
  { icon: Thermometer, label: "+18\u00B0C", desc: "Средняя температура" },
  { icon: Waves, label: "321 км", desc: "Береговая линия" },
  { icon: Building2, label: "13", desc: "Районов" },
  { icon: Plane, label: "Adana", desc: "Ближайший аэропорт" },
  { icon: MapPin, label: "Akdeniz", desc: "Побережье" },
]

export default function AboutCityPage() {
  const { t } = useLocale()

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-primary/5 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">{t("nav.mersin.about")}</h1>
          <p className="text-lg text-muted-foreground">
            Мерсин - крупный портовый город на южном побережье Турции, омываемый Средиземным морем
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {facts.map((fact) => (
              <div key={fact.label} className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center">
                <fact.icon className="mb-3 h-8 w-8 text-primary" />
                <p className="text-xl font-bold text-card-foreground">{fact.label}</p>
                <p className="text-sm text-muted-foreground">{fact.desc}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto max-w-3xl space-y-6 text-muted-foreground">
            <p>
              Мерсин расположен на побережье Средиземного моря, в юго-восточной части Турции. Город является крупнейшим
              портом страны и важным экономическим центром региона. Благодаря мягкому средиземноморскому климату,
              температура воздуха здесь редко опускается ниже +10 градусов даже зимой.
            </p>
            <p>
              Город привлекает инвесторов со всего мира благодаря доступным ценам на недвижимость, развитой инфраструктуре
              и высокому качеству жизни. Ежегодный рост стоимости недвижимости составляет около 30%, что делает
              инвестиции в Мерсин особенно привлекательными.
            </p>
            <p>
              В Мерсине есть все для комфортной жизни: современные торговые центры, больницы мирового уровня,
              международные школы и университеты. Город гордится своими широкими песчаными пляжами, протянувшимися
              на десятки километров вдоль побережья.
            </p>
            <p>
              Культурная жизнь города также богата и разнообразна. Здесь проводятся музыкальные фестивали,
              художественные выставки и спортивные мероприятия. Исторические достопримечательности, такие как
              античный город Солы-Помпейополис и крепость Кызкалеси, привлекают туристов со всего мира.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
