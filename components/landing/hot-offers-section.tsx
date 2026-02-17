"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Flame, BedDouble, Maximize } from "lucide-react";

const hotOffers = [
  {
    id: 1,
    title: "Prestige Residence",
    district: "Mezitli",
    rooms: "1+1",
    area: 65,
    price: 55000,
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Marina Tower",
    district: "Yenisehir",
    rooms: "2+1",
    area: 110,
    price: 95000,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Sea Breeze Apartments",
    district: "Tomuk",
    rooms: "3+1",
    area: 145,
    price: 130000,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    title: "Palm Garden",
    district: "Erdemli",
    rooms: "2+1",
    area: 90,
    price: 72000,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
  },
];

export function HotOffersSection() {
  const { t } = useLocale();

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <Flame className="h-8 w-8 text-warm" />
            <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
              {t("hot.title")}
            </h2>
          </div>
          <img
            src="/separator-ltl.svg"
            alt=""
            className="mt-2 h-10 w-auto"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hotOffers.map((offer, i) => (
            <Link href="/catalog" key={offer.id}>
              <Card
                className="group cursor-pointer overflow-hidden border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={offer.image || "/placeholder.svg"}
                    alt={offer.title}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <Badge className="absolute left-3 top-3 bg-warm text-warm-foreground">
                    {t("hot.badge")}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="mb-1 font-semibold text-card-foreground">
                    {offer.title}
                  </h3>
                  <p className="mb-3 text-sm text-muted-foreground">
                    {offer.district}
                  </p>
                  <div className="mb-3 flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <BedDouble className="h-4 w-4" />
                      {offer.rooms}
                    </span>
                    <span className="flex items-center gap-1">
                      <Maximize className="h-4 w-4" />
                      {offer.area} {t("catalog.sqm")}
                    </span>
                  </div>
                  <p className="text-lg font-bold text-primary">
                    {t("hot.from")} ${offer.price.toLocaleString("en-US")}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
