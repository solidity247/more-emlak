"use client"

import { useLocale } from "@/lib/locale-context"
import { MapPin, Thermometer, Users, Building2, Plane, Waves, Home, Sun, DollarSign, Clock } from "lucide-react"

const facts = [
  { icon: Users, label: "1.8 млн", desc: "Население" },
  { icon: Thermometer, label: "+18\u00B0C", desc: "Средняя температура" },
  { icon: Waves, label: "321 км", desc: "Береговая линия" },
  { icon: Building2, label: "13", desc: "Районов" },
  { icon: Plane, label: "Adana", desc: "Ближайший аэропорт" },
  { icon: MapPin, label: "Akdeniz", desc: "Побережье" },
]

const buyingAdvantages = [
  {
    icon: Waves,
    title: "Чистое море и пляжи",
    text: "Власти прикладывают не малые усилия для развития привлекательности города, поэтому береговые линии убирают ежедневно.",
  },
  {
    icon: Sun,
    title: "Мягкий климат",
    text: "Летом температура воздуха в Мерсине поднимается не выше +30\u00B0C, а зимой редко бывает холоднее +12\u00B0C. Влажность воздуха низкая, и это позволяет переносить полуденный зной легче, чем в менее сухих районах. Купальный сезон в Мерсине длится не менее восьми месяцев в году.",
  },
  {
    icon: DollarSign,
    title: "Сдача недвижимости в аренду",
    text: "Вы имеете возможность на время вашего отсутствия, сдавать свою недвижимость в аренду. Так, двухкомнатные апартаменты поблизости от пляжа можно сдавать за 250 – 400 долларов в месяц.",
  },
  {
    icon: Clock,
    title: "Длительное нахождение в стране",
    text: "Покупатели недвижимости почти из всех стран мира, кроме Армении, могут жить на территории Турецкой Республики до трех месяцев. Покупка жилья позволяет оформить вид на жительство на пять лет.",
  },
]

export default function AboutCityPage() {
  const { t } = useLocale()

  return (
    <div className="min-h-screen bg-background">
      {/* Hero - Magazine style */}
      <section className="relative overflow-hidden bg-primary/5 py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/mersin-panorama.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 text-3xl font-extrabold text-foreground md:text-5xl lg:text-6xl text-balance">
            {"Для нас это город мечты, а для вас?"}
          </h1>
          <img src="/separator-ltl.svg" alt="" className="mx-auto mb-6 h-10 w-auto" />
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {"Мерсин - это теплая провинция Турции на побережье Средиземного моря. Здесь спокойствие гармонирует с индустрией"}
          </p>
        </div>
      </section>

      {/* Fact cards */}
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
        </div>
      </section>

      {/* Magazine image + text block */}
      <section className="bg-card py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/images/mersin-sunrise.jpg"
                alt="Рассвет в Мерсине, крепость Кызкалеси"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                {"Мерсин расположен на побережье Средиземного моря, в юго-восточной части Турции. Город является крупнейшим портом страны и важным экономическим центром региона. Благодаря мягкому средиземноморскому климату, температура воздуха здесь редко опускается ниже +10 градусов даже зимой."}
              </p>
              <p>
                {"Город привлекает инвесторов со всего мира благодаря доступным ценам на недвижимость, развитой инфраструктуре и высокому качеству жизни. Ежегодный рост стоимости недвижимости составляет около 30%, что делает инвестиции в Мерсин особенно привлекательными."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second magazine block - reversed */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="order-2 md:order-1 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                {"В Мерсине есть все для комфортной жизни: современные торговые центры, больницы мирового уровня, международные школы и университеты. Город гордится своими широкими песчаными пляжами, протянувшимися на десятки километров вдоль побережья."}
              </p>
              <p>
                {"Культурная жизнь города также богата и разнообразна. Здесь проводятся музыкальные фестивали, художественные выставки и спортивные мероприятия. Исторические достопримечательности, такие как античный город Солы-Помпейополис и крепость Кызкалеси, привлекают туристов со всего мира."}
              </p>
            </div>
            <div className="order-1 md:order-2 overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/images/mersin-beach.jpg"
                alt="Пляж в Мерсине"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Buying advantages */}
      <section className="bg-card py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-2 text-center text-2xl font-extrabold text-foreground md:text-3xl text-balance">
            {"ПЛЮСЫ ПОКУПКИ ДОМА НА ПОБЕРЕЖЬЕ МЕРСИНА"}
          </h2>
          <img src="/separator-ltl.svg" alt="" className="mx-auto mb-12 h-10 w-auto" />

          <div className="grid gap-6 sm:grid-cols-2">
            {buyingAdvantages.map((adv) => (
              <div
                key={adv.title}
                className="flex gap-4 rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <adv.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">{adv.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{adv.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width image divider */}
      <section className="relative h-64 md:h-80">
        <img
          src="/images/mersin-panorama.jpg"
          alt="Панорама Мерсина"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/30" />
      </section>

      {/* Life advantages */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-2 text-center text-2xl font-extrabold text-foreground md:text-3xl text-balance">
            {"ПРЕИМУЩЕСТВА ЖИЗНИ В МЕРСИНЕ"}
          </h2>
          <img src="/separator-ltl.svg" alt="" className="mx-auto mb-12 h-10 w-auto" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Home, title: "Доступное жилье", text: "Цены на недвижимость в Мерсине значительно ниже, чем в Стамбуле или Анталии, при сопоставимом качестве жизни." },
              { icon: Thermometer, title: "Комфортный климат", text: "Средиземноморский климат с мягкой зимой и теплым летом. Купальный сезон длится более 8 месяцев." },
              { icon: Building2, title: "Развитая инфраструктура", text: "Современные больницы, торговые центры, международные школы и университеты." },
              { icon: Waves, title: "Чистые пляжи", text: "Широкие песчаные пляжи протяженностью десятки километров с чистой водой Средиземного моря." },
              { icon: Users, title: "Дружелюбное население", text: "Местные жители известны своим гостеприимством и открытостью к иностранцам." },
              { icon: Plane, title: "Удобное расположение", text: "Международный аэропорт Адана в 70 км. Удобное транспортное сообщение по всей Турции." },
            ].map((card) => (
              <div
                key={card.title}
                className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <card.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-card-foreground">{card.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
