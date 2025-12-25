import { ArrowLeft, TrendingUp, Users, Heart, Download } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BottomNavOrg } from "@/components/bottom-nav-org"

const monthlyData = [
  { month: "Июл", donations: 45, amount: 150000 },
  { month: "Авг", donations: 52, amount: 180000 },
  { month: "Сен", donations: 68, amount: 220000 },
  { month: "Окт", donations: 71, amount: 250000 },
  { month: "Ноя", donations: 89, amount: 320000 },
  { month: "Дек", donations: 102, amount: 420000 },
]

const topDonors = [
  { name: "Дмитрий М.", amount: 50000, donations: 5 },
  { name: "Анна К.", amount: 35000, donations: 7 },
  { name: "Сергей П.", amount: 30000, donations: 3 },
]

const maxAmount = Math.max(...monthlyData.map((d) => d.amount))

export default function OrgAnalyticsPage() {
  const totalAmount = monthlyData.reduce((sum, d) => sum + d.amount, 0)
  const totalDonations = monthlyData.reduce((sum, d) => sum + d.donations, 0)
  const avgDonation = totalAmount / totalDonations

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/org">
                <Button size="icon" variant="ghost">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <h1 className="text-xl font-bold">Аналитика</h1>
            </div>
            <Button size="sm" variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Экспорт
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Key metrics */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-card rounded-xl p-4 border">
            <TrendingUp className="w-5 h-5 text-primary mb-2" />
            <p className="text-xs text-muted-foreground">Всего</p>
            <p className="text-lg font-bold mt-1">{(totalAmount / 1000).toFixed(0)}K ₽</p>
          </div>
          <div className="bg-card rounded-xl p-4 border">
            <Heart className="w-5 h-5 text-primary mb-2" />
            <p className="text-xs text-muted-foreground">Донатов</p>
            <p className="text-lg font-bold mt-1">{totalDonations}</p>
          </div>
          <div className="bg-card rounded-xl p-4 border">
            <Users className="w-5 h-5 text-primary mb-2" />
            <p className="text-xs text-muted-foreground">Средний</p>
            <p className="text-lg font-bold mt-1">{(avgDonation / 1000).toFixed(1)}K ₽</p>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-card rounded-xl p-6 border mb-6">
          <h3 className="font-semibold mb-6">Динамика по месяцам</h3>

          <div className="flex items-end justify-between gap-2 h-48 mb-4">
            {monthlyData.map((data) => {
              const height = (data.amount / maxAmount) * 100
              return (
                <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex flex-col items-center justify-end h-40 gap-1">
                    <span className="text-xs text-muted-foreground">{(data.amount / 1000).toFixed(0)}K</span>
                    <div
                      className="w-full bg-primary/20 rounded-t hover:bg-primary/30 transition-colors cursor-pointer"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">{data.month}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Top donors */}
        <div className="bg-card rounded-xl p-6 border">
          <h3 className="font-semibold mb-4">Топ доноры</h3>
          <div className="space-y-3">
            {topDonors.map((donor, index) => (
              <div key={donor.name} className="flex items-center gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="font-medium">{donor.name}</p>
                  <p className="text-xs text-muted-foreground">{donor.donations} пожертвований</p>
                </div>
                <span className="font-bold">{donor.amount.toLocaleString()} ₽</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNavOrg active="analytics" />
    </div>
  )
}
