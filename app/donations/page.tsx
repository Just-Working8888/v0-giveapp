import { ArrowLeft, Filter } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BottomNav } from "@/components/bottom-nav"
import { DonationHistoryCard } from "@/components/donation-history-card"

const donations = [
  {
    id: 1,
    organization: "Помощь детям",
    amount: 5000,
    date: "20 декабря 2024",
    status: "completed",
    category: "Дети",
  },
  {
    id: 2,
    organization: "Приют для животных",
    amount: 3000,
    date: "15 декабря 2024",
    status: "completed",
    category: "Животные",
  },
  {
    id: 3,
    organization: "Экология и природа",
    amount: 10000,
    date: "10 декабря 2024",
    status: "completed",
    category: "Экология",
  },
  {
    id: 4,
    organization: "Поддержка пожилых",
    amount: 2500,
    date: "5 декабря 2024",
    status: "completed",
    category: "Пожилые",
  },
]

const totalDonated = donations.reduce((sum, d) => sum + d.amount, 0)

export default function DonationsPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/">
                <Button size="icon" variant="ghost">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <h1 className="text-xl font-bold">Мои пожертвования</h1>
            </div>
            <Button size="icon" variant="ghost">
              <Filter className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Summary card */}
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-6 mb-6 text-primary-foreground">
          <p className="text-sm opacity-90 mb-1">Всего пожертвовано</p>
          <p className="text-4xl font-bold mb-4">{totalDonated.toLocaleString()} ₽</p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="opacity-90">Организаций</p>
              <p className="text-xl font-semibold">{donations.length}</p>
            </div>
            <div>
              <p className="opacity-90">В этом месяце</p>
              <p className="text-xl font-semibold">{totalDonated.toLocaleString()} ₽</p>
            </div>
          </div>
        </div>

        {/* Donations list */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-muted-foreground mb-3">ИСТОРИЯ</h2>
          {donations.map((donation) => (
            <DonationHistoryCard key={donation.id} donation={donation} />
          ))}
        </div>
      </div>

      <BottomNav active="donations" />
    </div>
  )
}
