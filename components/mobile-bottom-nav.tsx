"use client"

import { useState, useEffect } from "react"
import { Home, Info, BedDouble, MapPin, Phone } from "lucide-react"

const tabs = [
  { id: "home",     label: "Ana Sayfa",  icon: Home       },
  { id: "about",    label: "Hakkında",   icon: Info       },
  { id: "services", label: "Odalar",     icon: BedDouble  },
  { id: "konum",    label: "Konum",      icon: MapPin     },
  { id: "contact",  label: "İletişim",   icon: Phone      },
]

export function MobileBottomNav() {
  const [active, setActive] = useState("home")

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    tabs.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
      setActive(id)
    }
  }

  return (
    <nav
      aria-label="Mobil alt gezinme"
      className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-gray-900/95 backdrop-blur-md border-t border-white/10 shadow-[0_-4px_32px_rgba(0,0,0,0.4)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)", background: "var(--header-bg)" }}
    >
      <div className="grid grid-cols-5">
        {tabs.map(({ id, label, icon: Icon }) => {
          const isActive = active === id
          return (
            <button
              key={id}
              id={`mobile-nav-${id}`}
              onClick={() => handleClick(id)}
              className={`flex flex-col items-center justify-center gap-0.5 py-2.5 px-1 text-[10px] font-medium transition-all duration-200 relative
                ${isActive
                  ? "text-cyan-400"
                  : "text-gray-500 hover:text-gray-300"
                }`}
            >
              {/* Active indicator pill */}
              {isActive && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-cyan-400" />
              )}
              <span
                className={`w-9 h-9 flex items-center justify-center rounded-xl transition-all duration-200
                  ${isActive ? "bg-cyan-400/15 scale-110" : ""}`}
              >
                <Icon className={`transition-all duration-200 ${isActive ? "w-5 h-5" : "w-5 h-5"}`} />
              </span>
              <span className={`transition-all duration-200 ${isActive ? "font-semibold" : ""}`}>
                {label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
