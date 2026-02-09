"use client"

import { useLocale } from "@/lib/locale-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Send, MapPin, Phone, Mail, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+90 501 003 16 33",
    href: "tel:+905010031633",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+90 501 003 16 33",
    href: "https://wa.me/905010031633",
  },
  {
    icon: Send,
    label: "Telegram",
    value: "@ArinaMoreEmlak",
    href: "https://t.me/ArinaMoreEmlak",
  },
  {
    icon: MapPin,
    label: "Адрес",
    value: "Mersin, Turkey",
    href: null,
  },
  {
    icon: Clock,
    label: "Режим работы",
    value: "Пн-Сб: 09:00 - 19:00",
    href: null,
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@moremlak.com",
    href: "mailto:info@moremlak.com",
  },
]

export default function ContactsPage() {
  const { t } = useLocale()

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-primary/5 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">{t("nav.contacts")}</h1>
          <p className="text-lg text-muted-foreground">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {contactInfo.map((item) => (
              <Card key={item.label} className="border-border bg-card transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-1 text-sm font-semibold text-card-foreground">{item.label}</h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204001.64064!2d34.4!3d36.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15275d21cf20e401%3A0xc5a2c1f25e27e9e!2sMersin%2C%20Turkey!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="More Emlak Group - Mersin, Turkey"
            />
          </div>

          {/* Quick contact buttons */}
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="bg-[#25D366] text-[#fff] hover:bg-[#25D366]/90">
              <a href="https://wa.me/905010031633" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                {t("cta.whatsapp")}
              </a>
            </Button>
            <Button asChild size="lg" className="bg-[#0088cc] text-[#fff] hover:bg-[#0088cc]/90">
              <a href="https://t.me/ArinaMoreEmlak" target="_blank" rel="noopener noreferrer">
                <Send className="mr-2 h-5 w-5" />
                {t("cta.telegram")}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
