import { Plus, TrendingUp, Users, Heart, Bell } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BottomNavOrg } from "@/components/bottom-nav-org"
import { CampaignCard } from "@/components/campaign-card"

// Mock data for organization
const organization = {
  name: "Помощь детям",
  verified: true,
  totalRaised: 1250000,
  totalDonors: 342,
  activeCampaigns: 3,
}

const campaigns = [
  {
    id: 1,
    title: "Операция для Маши",
    goal: 500000,
    raised: 320000,
    donors: 89,
    daysLeft: 15,
    status: "active",
  },
  {
    id: 2,
    title: "Реабилитационный центр",
    goal: 2000000,
    raised: 850000,
    donors: 203,
    daysLeft: 45,
    status: "active",
  },
  {
    id: 3,
    title: "Новогодние подарки",
    goal: 300000,
    raised: 80000,
    donors: 50,
    daysLeft: 8,
    status: "active",
  },
]

const recentActivity = [
  { type: "donation", donor: "Анна К.", amount: 5000, time: "2 часа назад" },
  { type: "donation", donor: "Дмитрий М.", amount: 10000, time: "5 часов назад" },
  { type: "comment", donor: "Мария С.", message: "Держитесь!", time: "1 день назад" },
]

export default function OrgDashboardPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Organization info - компактная шапка */}
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h1 className="text-xl font-bold text-balance">{organization.name}</h1>
            <p className="text-xs text-muted-foreground mt-0.5">Панель управления</p>
          </div>
          <Button size="icon" variant="ghost" className="rounded-full">
            <Bell className="w-5 h-5" />
          </Button>
        </div>

        {/* Статистика организации - карточки */}
        <div className="grid grid-cols-3 gap-2.5 mb-5">
          <div className="bg-card rounded-xl p-3 shadow-sm">
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <TrendingUp className="w-4 h-4 text-primary" />
            </div>
            <p className="text-lg font-bold mb-0.5">{(organization.totalRaised / 1000).toFixed(0)}K</p>
            <p className="text-xs text-muted-foreground">Собрано ₽</p>
          </div>
          <div className="bg-card rounded-xl p-3 shadow-sm">
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <Users className="w-4 h-4 text-primary" />
            </div>
            <p className="text-lg font-bold mb-0.5">{organization.totalDonors}</p>
            <p className="text-xs text-muted-foreground">Доноров</p>
          </div>
          <div className="bg-card rounded-xl p-3 shadow-sm">
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <Heart className="w-4 h-4 text-primary" />
            </div>
            <p className="text-lg font-bold mb-0.5">{organization.activeCampaigns}</p>
            <p className="text-xs text-muted-foreground">Кампаний</p>
          </div>
        </div>

        {/* Активные кампании */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-semibold">Активные кампании</h2>
            <Link href="/org/campaign/new">
              <Button size="sm" className="rounded-full h-8">
                <Plus className="w-4 h-4 mr-1.5" />
                Создать
              </Button>
            </Link>
          </div>

          <div className="space-y-2.5">
            {campaigns.map((campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
        </div>

        {/* Недавняя активность */}
        <div>
          <h2 className="text-base font-semibold mb-3">Недавняя активность</h2>
          <div className="space-y-2.5">
            {recentActivity.map((activity, index) => (
              <div key={index} className="bg-card rounded-xl p-3.5 shadow-sm">
                {activity.type === "donation" ? (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                        <Heart className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{activity.donor}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                    <span className="font-bold text-primary text-sm">+{activity.amount.toLocaleString()} ₽</span>
                  </div>
                ) : (
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center shrink-0">
                      <span className="text-sm font-semibold">{activity.donor[0]}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-2 mb-1">
                        <p className="font-semibold text-sm">{activity.donor}</p>
                        <p className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">"{activity.message}"</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNavOrg active="home" />
    </div>
  )
}
