import { ArrowLeft, Edit, Trash2, Users, TrendingUp, Clock, Share2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DonationCard } from "@/components/donation-card"

const campaign = {
  id: 1,
  title: "Операция для Маши",
  description:
    "Маше 7 лет, она нуждается в срочной операции на сердце. Помогите нам собрать необходимую сумму для спасения жизни этой девочки.",
  goal: 500000,
  raised: 320000,
  donors: 89,
  daysLeft: 15,
  status: "active",
  createdAt: "1 декабря 2024",
}

const recentDonations = [
  { id: 1, donor: "Анна К.", amount: 5000, date: "2 часа назад", message: "Здоровья Маше!" },
  { id: 2, donor: "Дмитрий М.", amount: 10000, date: "5 часов назад", message: "Держитесь!" },
  { id: 3, donor: "Анонимный", amount: 2500, date: "1 день назад", message: "" },
  { id: 4, donor: "Мария С.", amount: 3000, date: "1 день назад", message: "Выздоравливай скорее!" },
]

const progress = (campaign.raised / campaign.goal) * 100

export default function CampaignDetailPage() {
  return (
    <div className="min-h-screen bg-background pb-6">
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
              <h1 className="text-lg font-bold">Детали кампании</h1>
            </div>
            <div className="flex items-center gap-2">
              <Button size="icon" variant="ghost">
                <Share2 className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost">
                <Edit className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Campaign info */}
        <div className="bg-card rounded-xl p-6 border mb-6">
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-2xl font-bold text-balance flex-1">{campaign.title}</h2>
            <span
              className={`text-xs px-3 py-1 rounded-full flex-shrink-0 ${
                campaign.status === "active" ? "bg-green-500/10 text-green-500" : "bg-muted text-muted-foreground"
              }`}
            >
              {campaign.status === "active" ? "Активна" : "Завершена"}
            </span>
          </div>

          <p className="text-muted-foreground mb-6 leading-relaxed">{campaign.description}</p>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Собрано</span>
              <span className="text-2xl font-bold">{campaign.raised.toLocaleString()} ₽</span>
            </div>

            <Progress value={progress} className="h-3" />

            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Цель</span>
              <span className="font-semibold">{campaign.goal.toLocaleString()} ₽</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-card rounded-xl p-4 border text-center">
            <Users className="w-5 h-5 text-primary mx-auto mb-2" />
            <p className="text-xs text-muted-foreground">Доноров</p>
            <p className="text-lg font-bold">{campaign.donors}</p>
          </div>
          <div className="bg-card rounded-xl p-4 border text-center">
            <Clock className="w-5 h-5 text-primary mx-auto mb-2" />
            <p className="text-xs text-muted-foreground">Осталось</p>
            <p className="text-lg font-bold">{campaign.daysLeft}д</p>
          </div>
          <div className="bg-card rounded-xl p-4 border text-center">
            <TrendingUp className="w-5 h-5 text-primary mx-auto mb-2" />
            <p className="text-xs text-muted-foreground">Прогресс</p>
            <p className="text-lg font-bold">{progress.toFixed(0)}%</p>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="donations" className="w-full mb-6">
          <TabsList className="w-full grid grid-cols-2">
            <TabsTrigger value="donations">Пожертвования</TabsTrigger>
            <TabsTrigger value="stats">Статистика</TabsTrigger>
          </TabsList>

          <TabsContent value="donations" className="mt-6 space-y-3">
            {recentDonations.map((donation) => (
              <DonationCard key={donation.id} donation={donation} />
            ))}
          </TabsContent>

          <TabsContent value="stats" className="mt-6">
            <div className="bg-card rounded-xl p-6 border">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b">
                  <span className="text-muted-foreground">Средний донат</span>
                  <span className="font-bold">{(campaign.raised / campaign.donors).toFixed(0)} ₽</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b">
                  <span className="text-muted-foreground">Создана</span>
                  <span className="font-semibold">{campaign.createdAt}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Процент выполнения</span>
                  <span className="font-bold text-primary">{progress.toFixed(1)}%</span>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Danger zone */}
        <div className="bg-card rounded-xl p-6 border border-red-500/20">
          <h3 className="font-semibold text-red-500 mb-3">Опасная зона</h3>
          <p className="text-sm text-muted-foreground mb-4">Удаление кампании необратимо. Все данные будут потеряны.</p>
          <Button variant="destructive" className="w-full">
            <Trash2 className="w-4 h-4 mr-2" />
            Удалить кампанию
          </Button>
        </div>
      </div>
    </div>
  )
}
