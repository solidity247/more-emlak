"use client"

import React from "react"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Lock,
  LogOut,
  Plus,
  Pencil,
  Trash2,
  Building2,
  Eye,
  LayoutDashboard,
} from "lucide-react"
import type { Property } from "@/lib/sample-data"
import { properties as initialProperties } from "@/lib/sample-data"

export default function AdminPortal() {
  const [authenticated, setAuthenticated] = useState(false)
  const [checking, setChecking] = useState(true)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loginError, setLoginError] = useState("")
  const [properties, setProperties] = useState<Property[]>(initialProperties)
  const [editingProperty, setEditingProperty] = useState<Property | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [isCreating, setIsCreating] = useState(false)

  const checkSession = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/session")
      if (res.ok) {
        setAuthenticated(true)
      }
    } catch {
      // not authenticated
    } finally {
      setChecking(false)
    }
  }, [])

  useEffect(() => {
    checkSession()
  }, [checkSession])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoginError("")
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      })
      if (res.ok) {
        setAuthenticated(true)
      } else {
        setLoginError("Неверный логин или пароль")
      }
    } catch {
      setLoginError("Ошибка при входе")
    }
  }

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" })
    setAuthenticated(false)
    setUsername("")
    setPassword("")
  }

  const openCreate = () => {
    setEditingProperty({
      id: Date.now(),
      title: "",
      district: "Mezitli",
      rooms: "1+1",
      area: 60,
      price: 50000,
      image: "",
      type: "sale",
      description: "",
      features: [],
    })
    setIsCreating(true)
    setDialogOpen(true)
  }

  const openEdit = (property: Property) => {
    setEditingProperty({ ...property })
    setIsCreating(false)
    setDialogOpen(true)
  }

  const handleSave = () => {
    if (!editingProperty) return
    if (isCreating) {
      setProperties((prev) => [...prev, editingProperty])
    } else {
      setProperties((prev) =>
        prev.map((p) => (p.id === editingProperty.id ? editingProperty : p))
      )
    }
    setDialogOpen(false)
    setEditingProperty(null)
  }

  const handleDelete = (id: number) => {
    setProperties((prev) => prev.filter((p) => p.id !== id))
  }

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  if (!authenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md border-border bg-card">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Lock className="h-7 w-7 text-primary" />
            </div>
            <CardTitle className="text-card-foreground">Admin Portal</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="admin-user" className="text-card-foreground">
                  Логин
                </Label>
                <Input
                  id="admin-user"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="bg-background text-foreground"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="admin-pass" className="text-card-foreground">
                  Пароль
                </Label>
                <Input
                  id="admin-pass"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-background text-foreground"
                />
              </div>
              {loginError && (
                <p className="text-sm text-destructive">{loginError}</p>
              )}
              <Button
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Войти
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Dashboard
  const saleCount = properties.filter((p) => p.type === "sale").length
  const rentCount = properties.filter((p) => p.type === "rent").length
  const hotCount = properties.filter((p) => p.hot).length

  return (
    <div className="min-h-screen bg-background">
      {/* Admin header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="h-6 w-6 text-primary" />
            <h1 className="text-lg font-bold text-card-foreground">
              Admin Dashboard
            </h1>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="border-border text-foreground bg-transparent"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Выйти
          </Button>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-4">
          <Card className="border-border bg-card">
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">Всего объектов</p>
              <p className="text-3xl font-bold text-primary">
                {properties.length}
              </p>
            </CardContent>
          </Card>
          <Card className="border-border bg-card">
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">Продажа</p>
              <p className="text-3xl font-bold text-card-foreground">
                {saleCount}
              </p>
            </CardContent>
          </Card>
          <Card className="border-border bg-card">
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">Аренда</p>
              <p className="text-3xl font-bold text-card-foreground">
                {rentCount}
              </p>
            </CardContent>
          </Card>
          <Card className="border-border bg-card">
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">Горячие</p>
              <p className="text-3xl font-bold text-destructive">{hotCount}</p>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-foreground">
            Управление объектами
          </h2>
          <Button
            onClick={openCreate}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Plus className="mr-2 h-4 w-4" />
            Добавить объект
          </Button>
        </div>

        {/* Property list */}
        <div className="space-y-3">
          {properties.map((property) => (
            <Card key={property.id} className="border-border bg-card">
              <CardContent className="flex items-center gap-4 p-4">
                <img
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  className="h-16 w-24 rounded-lg object-cover"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="truncate font-semibold text-card-foreground">
                      {property.title}
                    </h3>
                    {property.hot && (
                      <Badge className="bg-destructive text-destructive-foreground">
                        Hot
                      </Badge>
                    )}
                    <Badge
                      variant="secondary"
                      className="bg-secondary text-secondary-foreground"
                    >
                      {property.type === "sale" ? "Продажа" : "Аренда"}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {property.district} | {property.rooms} |{" "}
                    {property.area} m&sup2; | $
                    {property.price.toLocaleString()}
                    {property.type === "rent" ? "/mo" : ""}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-foreground"
                    onClick={() => openEdit(property)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-destructive"
                    onClick={() => handleDelete(property.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Edit/Create dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto bg-card text-card-foreground">
          <DialogHeader>
            <DialogTitle className="text-foreground">
              {isCreating ? "Добавить объект" : "Редактировать объект"}
            </DialogTitle>
          </DialogHeader>
          {editingProperty && (
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault()
                handleSave()
              }}
            >
              <div className="flex flex-col gap-2">
                <Label className="text-foreground">Название</Label>
                <Input
                  value={editingProperty.title}
                  onChange={(e) =>
                    setEditingProperty({
                      ...editingProperty,
                      title: e.target.value,
                    })
                  }
                  required
                  className="bg-background text-foreground"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label className="text-foreground">Тип</Label>
                  <Select
                    value={editingProperty.type}
                    onValueChange={(v) =>
                      setEditingProperty({
                        ...editingProperty,
                        type: v as "sale" | "rent",
                      })
                    }
                  >
                    <SelectTrigger className="bg-background text-foreground">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sale">Продажа</SelectItem>
                      <SelectItem value="rent">Аренда</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-foreground">Район</Label>
                  <Select
                    value={editingProperty.district}
                    onValueChange={(v) =>
                      setEditingProperty({
                        ...editingProperty,
                        district: v,
                      })
                    }
                  >
                    <SelectTrigger className="bg-background text-foreground">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Mezitli">Mezitli</SelectItem>
                      <SelectItem value="Yenisehir">Yenisehir</SelectItem>
                      <SelectItem value="Tomuk">Tomuk</SelectItem>
                      <SelectItem value="Erdemli">Erdemli</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <Label className="text-foreground">Комнаты</Label>
                  <Select
                    value={editingProperty.rooms}
                    onValueChange={(v) =>
                      setEditingProperty({
                        ...editingProperty,
                        rooms: v,
                      })
                    }
                  >
                    <SelectTrigger className="bg-background text-foreground">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1+0">1+0</SelectItem>
                      <SelectItem value="1+1">1+1</SelectItem>
                      <SelectItem value="2+1">2+1</SelectItem>
                      <SelectItem value="3+1">3+1</SelectItem>
                      <SelectItem value="4+1">4+1</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-foreground">Площадь (m2)</Label>
                  <Input
                    type="number"
                    value={editingProperty.area}
                    onChange={(e) =>
                      setEditingProperty({
                        ...editingProperty,
                        area: Number(e.target.value),
                      })
                    }
                    required
                    className="bg-background text-foreground"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-foreground">Цена ($)</Label>
                  <Input
                    type="number"
                    value={editingProperty.price}
                    onChange={(e) =>
                      setEditingProperty({
                        ...editingProperty,
                        price: Number(e.target.value),
                      })
                    }
                    required
                    className="bg-background text-foreground"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-foreground">URL изображения</Label>
                <Input
                  value={editingProperty.image}
                  onChange={(e) =>
                    setEditingProperty({
                      ...editingProperty,
                      image: e.target.value,
                    })
                  }
                  placeholder="https://..."
                  className="bg-background text-foreground"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-foreground">Описание</Label>
                <Textarea
                  value={editingProperty.description}
                  onChange={(e) =>
                    setEditingProperty({
                      ...editingProperty,
                      description: e.target.value,
                    })
                  }
                  rows={3}
                  className="bg-background text-foreground"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-foreground">
                  Особенности (через запятую)
                </Label>
                <Input
                  value={editingProperty.features.join(", ")}
                  onChange={(e) =>
                    setEditingProperty({
                      ...editingProperty,
                      features: e.target.value
                        .split(",")
                        .map((f) => f.trim())
                        .filter(Boolean),
                    })
                  }
                  placeholder="Бассейн, Парковка, Вид на море"
                  className="bg-background text-foreground"
                />
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="hot-check"
                  checked={editingProperty.hot || false}
                  onChange={(e) =>
                    setEditingProperty({
                      ...editingProperty,
                      hot: e.target.checked,
                    })
                  }
                  className="h-4 w-4 rounded border-border"
                />
                <Label htmlFor="hot-check" className="text-foreground">
                  Горячее предложение
                </Label>
              </div>
              <div className="flex gap-3">
                <Button
                  type="submit"
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {isCreating ? "Создать" : "Сохранить"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setDialogOpen(false)}
                  className="border-border text-foreground"
                >
                  Отмена
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
