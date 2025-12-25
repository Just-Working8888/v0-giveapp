"use client"

import Link from "next/link"
import { Home, Heart, BarChart3, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface BottomNavProps {
  active: "home" | "donations" | "stats" | "profile"
}

export function BottomNav({ active }: BottomNavProps) {
  const items = [
    { href: "/", icon: Home, label: "Главная", key: "home" },
    { href: "/donations", icon: Heart, label: "Пожертвования", key: "donations" },
    { href: "/stats", icon: BarChart3, label: "Статистика", key: "stats" },
    { href: "/profile", icon: User, label: "Профиль", key: "profile" },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card z-50 shadow-lg">
      <div className="px-2 py-1.5">
        <div className="flex items-center justify-around">
          {items.map((item) => {
            const isActive = active === item.key
            return (
              <Link
                key={item.key}
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground",
                )}
              >
                <item.icon className={cn("w-5 h-5", isActive && "fill-primary/20")} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
