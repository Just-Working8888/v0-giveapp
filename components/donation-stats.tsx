"use client"

import { TrendingUp, Wallet } from "lucide-react"

export function DonationStats() {
  return (
    <div className="px-4 pb-4">
      <div className="grid grid-cols-2 gap-3">
        {/* Monthly Donations */}
        <div className="bg-card rounded-2xl p-4 shadow-sm border border-border/50">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-primary" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground mb-1">За месяц</p>
          <p className="text-xl font-bold text-foreground">12,500₽</p>
          <p className="text-xs text-green-600 mt-1">+15% к прошлому</p>
        </div>

        {/* Daily Limit */}
        <div className="bg-card rounded-2xl p-4 shadow-sm border border-border/50">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center">
              <Wallet className="w-4 h-4 text-orange-600" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground mb-1">Дневной лимит</p>
          <p className="text-xl font-bold text-foreground">500₽</p>
          <p className="text-xs text-muted-foreground mt-1">Осталось: 350₽</p>
        </div>
      </div>
    </div>
  )
}
