import Link from "next/link"
import { Heart, Search } from "lucide-react"
import { OrganizationCard } from "@/components/organization-card"
import { BottomNav } from "@/components/bottom-nav"
import { CategoryFilter } from "@/components/category-filter"

// Mock data
const organizations = [
  {
    id: 1,
    name: "Помощь детям",
    description: "Благотворительный фонд помощи детям с тяжелыми заболеваниями",
    image: "/children-charity.jpg",
    category: "Дети",
    raised: 1250000,
    goal: 2000000,
    donors: 342,
    verified: true,
  },
  {
    id: 2,
    name: "Приют для животных",
    description: "Помогаем бездомным животным найти дом и получить медицинскую помощь",
    image: "/animal-shelter.png",
    category: "Животные",
    raised: 850000,
    goal: 1500000,
    donors: 198,
    verified: true,
  },
  {
    id: 3,
    name: "Экология и природа",
    description: "Восстановление лесов и защита окружающей среды",
    image: "/forest-ecology.jpg",
    category: "Экология",
    raised: 2100000,
    goal: 3000000,
    donors: 567,
    verified: true,
  },
  {
    id: 4,
    name: "Поддержка пожилых",
    description: "Социальная помощь пожилым людям и ветеранам",
    image: "/elderly-care-support.png",
    category: "Пожилые",
    raised: 450000,
    goal: 800000,
    donors: 123,
    verified: false,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Compact Header - no sticky positioning */}
      <header className="bg-background">
        <div className="px-4 pt-6 pb-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold text-balance">Благотворительность</h1>
            <Link href="/profile" className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
              <Heart className="w-4 h-4 text-primary" />
            </Link>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Найти организацию..."
              className="w-full pl-9 pr-4 py-2.5 bg-card rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
            />
          </div>
        </div>
      </header>

      {/* Motivational Banner */}
      <section className="px-4 pb-4">
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-white mb-1 text-balance">Сделайте доброе дело сегодня</h2>
          <p className="text-sm text-white/90 text-pretty">
            Даже небольшая помощь может изменить чью-то жизнь к лучшему
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 pb-4">
        <CategoryFilter />
      </section>

      {/* Organizations */}
      <section className="px-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-semibold">Организации</h2>
          <button className="text-sm text-primary font-medium">Все</button>
        </div>

        <div className="space-y-3">
          {organizations.map((org) => (
            <OrganizationCard key={org.id} organization={org} />
          ))}
        </div>
      </section>

      <BottomNav active="home" />
    </div>
  )
}
