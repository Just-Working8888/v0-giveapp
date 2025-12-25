"use client"

import Link from "next/link"
import { Home, FileText, BarChart3, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

interface BottomNavOrgProps {
  active: "home" | "reports" | "analytics" | "settings"
}

export function BottomNavOrg({ active }: BottomNavOrgProps) {
  const items = [
    { href: "/org", icon: Home, label: "Главная", key: "home" },
    { href: "/org/reports", icon: FileText, label: "Отчеты", key: "reports" },
    { href: "/org/analytics", icon: BarChart3, label: "Аналитика", key: "analytics" },
    { href: "/org/settings", icon: Settings, label: "Настройки", key: "settings" },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t z-50">
      <div className="container mx-auto px-2 py-2">
        <div className="flex items-center justify-around">
          {items.map((item) => {
            const isActive = active === item.key
            return (
              <Link
                key={item.key}
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground",
                )}
              >
                <item.icon className={cn("w-5 h-5", isActive && "fill-primary/20")} />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
