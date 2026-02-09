"use client"

import { useState, useMemo } from "react"
import { useLocale } from "@/lib/locale-context"
import { properties } from "@/lib/sample-data"
import { PropertyCard } from "@/components/property-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SlidersHorizontal, X } from "lucide-react"

const districts = ["Mezitli", "Yenisehir", "Tomuk", "Erdemli"]
const roomOptions = ["1+0", "1+1", "2+1", "3+1", "4+1"]

export default function CatalogPage() {
  const { t } = useLocale()
  const [district, setDistrict] = useState<string>("all")
  const [rooms, setRooms] = useState<string>("all")
  const [showFilters, setShowFilters] = useState(false)

  const saleProperties = useMemo(() => {
    return properties
      .filter((p) => p.type === "sale")
      .filter((p) => district === "all" || p.district === district)
      .filter((p) => rooms === "all" || p.rooms === rooms)
  }, [district, rooms])

  const resetFilters = () => {
    setDistrict("all")
    setRooms("all")
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">{t("catalog.title")}</h1>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="border-border text-foreground md:hidden"
          >
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            {t("catalog.filter")}
          </Button>
        </div>

        {/* Filters */}
        <div className={`mb-8 flex flex-wrap items-end gap-4 rounded-xl border border-border bg-card p-4 ${showFilters ? "" : "hidden md:flex"}`}>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground">{t("catalog.district")}</label>
            <Select value={district} onValueChange={setDistrict}>
              <SelectTrigger className="w-48 bg-background text-foreground">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                {districts.map((d) => (
                  <SelectItem key={d} value={d}>{d}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground">{t("catalog.rooms")}</label>
            <Select value={rooms} onValueChange={setRooms}>
              <SelectTrigger className="w-48 bg-background text-foreground">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                {roomOptions.map((r) => (
                  <SelectItem key={r} value={r}>{r}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button variant="ghost" onClick={resetFilters} className="text-muted-foreground">
            <X className="mr-1 h-4 w-4" />
            {t("catalog.reset")}
          </Button>
        </div>

        {/* Results */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {saleProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {saleProperties.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-muted-foreground">No properties found matching your criteria.</p>
            <Button onClick={resetFilters} className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
              {t("catalog.reset")}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
