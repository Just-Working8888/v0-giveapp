import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Heart, Share2, MapPin, Users, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DonationCard } from "@/components/donation-card"
import { ReportCard } from "@/components/report-card"

// Mock data
const organization = {
  id: 1,
  name: "Помощь детям",
  description: "Благотворительный фонд помощи детям с тяжелыми заболеваниями",
  image: "/children-charity-hero.jpg",
  category: "Дети",
  raised: 1250000,
  goal: 2000000,
  donors: 342,
  verified: true,
  location: "Москва, Россия",
  founded: "2018",
  about:
    "Мы помогаем детям с тяжелыми заболеваниями получить необходимое лечение и поддержку. За годы работы мы помогли более 500 семьям.",
}

const recentDonations = [
  { id: 1, donor: "Анна К.", amount: 5000, date: "2 часа назад", message: "Здоровья детям!" },
  { id: 2, donor: "Дмитрий М.", amount: 10000, date: "5 часов назад", message: "" },
  { id: 3, donor: "Анонимный", amount: 2500, date: "1 день назад", message: "Держитесь!" },
]

const reports = [
  {
    id: 1,
    title: "Отчет за декабрь 2024",
    date: "15 декабря 2024",
    image: "/charity-report-document.jpg",
    summary: "Помощь оказана 12 семьям на общую сумму 450,000 ₽",
  },
  {
    id: 2,
    title: "Отчет за ноябрь 2024",
    date: "15 ноября 2024",
    image: "/medical-help-children.jpg",
    summary: "Проведено 8 операций, помощь оказана 15 семьям",
  },
]

export default function OrganizationPage() {
  const progress = (organization.raised / organization.goal) * 100

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header with image */}
      <div className="relative h-64">
        <Image src={organization.image || "/placeholder.svg"} alt={organization.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <Link href="/">
            <Button size="icon" variant="secondary" className="rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <Button size="icon" variant="secondary" className="rounded-full">
            <Share2 className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-12 relative z-10">
        {/* Organization header */}
        <div className="bg-card rounded-xl p-6 border mb-6">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-2xl font-bold text-balance">{organization.name}</h1>
                {organization.verified && <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />}
              </div>
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                {organization.category}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{organization.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>С {organization.founded}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{organization.donors} доноров</span>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="bg-card rounded-xl p-6 border mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Собрано</span>
            <span className="text-2xl font-bold">{(organization.raised / 1000).toFixed(0)}K ₽</span>
          </div>
          <Progress value={progress} className="h-3 mb-2" />
          <p className="text-sm text-muted-foreground text-right">Цель: {(organization.goal / 1000).toFixed(0)}K ₽</p>
        </div>

        {/* Donate button */}
        <Button className="w-full h-12 text-base mb-6" size="lg">
          <Heart className="w-5 h-5 mr-2" />
          Поддержать
        </Button>

        {/* Tabs */}
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="w-full grid grid-cols-3">
            <TabsTrigger value="about">О фонде</TabsTrigger>
            <TabsTrigger value="donations">Донаты</TabsTrigger>
            <TabsTrigger value="reports">Отчеты</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-6">
            <div className="bg-card rounded-xl p-6 border">
              <h3 className="font-semibold mb-3">Описание</h3>
              <p className="text-muted-foreground leading-relaxed">{organization.about}</p>
            </div>
          </TabsContent>

          <TabsContent value="donations" className="mt-6 space-y-3">
            {recentDonations.map((donation) => (
              <DonationCard key={donation.id} donation={donation} />
            ))}
          </TabsContent>

          <TabsContent value="reports" className="mt-6 space-y-4">
            {reports.map((report) => (
              <ReportCard key={report.id} report={report} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
