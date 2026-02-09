"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"
import { useTheme } from "next-themes"

type ThemeMode = "auto" | "light" | "dark"

interface AutoThemeContextType {
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
}

const AutoThemeContext = createContext<AutoThemeContextType>({
  mode: "auto",
  setMode: () => {},
})

function getAutoTheme(): "light" | "dark" {
  const hour = new Date().getHours()
  return hour >= 7 && hour < 23 ? "light" : "dark"
}

export function AutoThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>("auto")
  const { setTheme } = useTheme()

  const applyTheme = useCallback(
    (m: ThemeMode) => {
      if (m === "auto") {
        setTheme(getAutoTheme())
      } else {
        setTheme(m)
      }
    },
    [setTheme]
  )

  const setMode = useCallback(
    (m: ThemeMode) => {
      setModeState(m)
      if (typeof window !== "undefined") {
        localStorage.setItem("theme-mode", m)
      }
      applyTheme(m)
    },
    [applyTheme]
  )

  useEffect(() => {
    const saved = localStorage.getItem("theme-mode") as ThemeMode | null
    const initialMode = saved || "auto"
    setModeState(initialMode)
    applyTheme(initialMode)
  }, [applyTheme])

  useEffect(() => {
    if (mode !== "auto") return
    const interval = setInterval(() => {
      applyTheme("auto")
    }, 60_000)
    return () => clearInterval(interval)
  }, [mode, applyTheme])

  return (
    <AutoThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </AutoThemeContext.Provider>
  )
}

export function useAutoTheme() {
  return useContext(AutoThemeContext)
}
