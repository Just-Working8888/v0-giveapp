import { ArrowLeft, TrendingUp, Heart, Award } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BottomNav } from "@/components/bottom-nav"
import { ImpactCard } from "@/components/impact-card"

const stats = {
  totalDonated: 20500,
  organizations: 4,
  rank: "Золотой донор",
  impactPoints: 2050,
}

const monthlyData = [
  { month: "Янв", amount: 2000 },
  { month: "Фев", amount: 3500 },
  { month: "Мар", amount: 1500 },
  { month: "Апр", amount: 4000 },
  { month: "Май", amount: 2500 },
  { month: "Июн", amount: 3000 },
]

const impacts = [
  {
    icon: "🏥",
    title: "Операции профинансированы",
    value: "3",
    description: "Ваша помощь спасла жизни",
  },
  {
    icon: "🐕",
    title: "Животных спасено",
    value: "12",
    description: "Нашли новый дом",
  },
  {
    icon: "🌳",
    title: "Деревьев посажено",
    value: "50",
    description: "Вклад в экологию",
  },
]

const maxAmount = Math.max(...monthlyData.map((d) => d.amount))

export default function StatsPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Button size="icon" variant="ghost">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold">Статистика и влияние</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Rank card */}
        <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-6 mb-6 text-white">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm opacity-90 mb-1">Ваш статус</p>
              <h2 className="text-2xl font-bold">{stats.rank}</h2>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Award className="w-7 h-7" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm opacity-90">Баллы влияния</p>
              <p className="text-xl font-semibold">{stats.impactPoints}</p>
            </div>
            <div>
              <p className="text-sm opacity-90">Организаций</p>
              <p className="text-xl font-semibold">{stats.organizations}</p>
            </div>
          </div>
        </div>

        {/* Monthly chart */}
        <div className="bg-card rounded-xl p-6 border mb-6">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Активность по месяцам</h3>
          </div>

          <div className="flex items-end justify-between gap-2 h-40 mb-4">
            {monthlyData.map((data) => {
              const height = (data.amount / maxAmount) * 100
              return (
                <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex items-end justify-center h-32">
                    <div
                      className="w-full bg-primary/20 rounded-t hover:bg-primary/30 transition-colors"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">{data.month}</span>
                </div>
              )
            })}
          </div>

          <p className="text-sm text-muted-foreground text-center">
            Всего за период: {stats.totalDonated.toLocaleString()} ₽
          </p>
        </div>

        {/* Impact section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Ваше влияние</h3>
          </div>
          <div className="space-y-3">
            {impacts.map((impact, index) => (
              <ImpactCard key={index} impact={impact} />
            ))}
          </div>
        </div>
      </div>

      <BottomNav active="stats" />
    </div>
  )
}
