"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const categories = ["Все", "Дети", "Животные", "Экология", "Пожилые", "Образование", "Здоровье"]

export function CategoryFilter() {
  const [selected, setSelected] = useState("Все")

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelected(category)}
          className={cn(
            "px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all",
            selected === category
              ? "bg-primary text-primary-foreground shadow-sm"
              : "bg-card text-foreground hover:bg-card/80 shadow-sm",
          )}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
