"use client"

import { useLocale } from "@/lib/locale-context"
import type { Property } from "@/lib/sample-data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BedDouble, Maximize, MapPin, ArrowRight } from "lucide-react"

export function PropertyCard({ property }: { property: Property }) {
  const { t } = useLocale()

  return (
    <Card className="group overflow-hidden border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img
          src={property.image || "/placeholder.svg"}
          alt={property.title}
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {property.hot && (
          <Badge className="absolute left-3 top-3 bg-destructive text-destructive-foreground">
            {t("hot.badge")}
          </Badge>
        )}
        <div className="absolute bottom-3 right-3 rounded-lg bg-background/90 px-3 py-1 backdrop-blur">
          <p className="text-lg font-bold text-primary">
            ${property.price.toLocaleString()}
            {property.type === "rent" && "/mo"}
          </p>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="mb-1 text-lg font-semibold text-card-foreground">{property.title}</h3>
        <div className="mb-3 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-3 w-3" />
          {property.district}
        </div>
        <div className="mb-3 flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <BedDouble className="h-4 w-4" />
            {property.rooms}
          </span>
          <span className="flex items-center gap-1">
            <Maximize className="h-4 w-4" />
            {property.area} {t("catalog.sqm")}
          </span>
        </div>
        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{property.description}</p>
        <div className="mb-4 flex flex-wrap gap-1">
          {property.features.slice(0, 3).map((f) => (
            <Badge key={f} variant="secondary" className="bg-secondary text-secondary-foreground">
              {f}
            </Badge>
          ))}
        </div>
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          {t("catalog.details")}
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}
