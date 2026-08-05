"use client"

import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [isDark, setIsDark] = useState(false)

  // On mount, read saved preference
  useEffect(() => {
    const saved = localStorage.getItem("theme")
    if (saved === "dark") {
      document.documentElement.classList.add("dark")
      setIsDark(true)
    }
  }, [])

  const toggle = () => {
    const html = document.documentElement
    if (isDark) {
      html.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setIsDark(false)
    } else {
      html.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setIsDark(true)
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Aydınlık moda geç" : "Karanlık moda geç"}
      className={`p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-all duration-200 ${className}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </button>
  )
}
