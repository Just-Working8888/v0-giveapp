import { OrganizationCard } from "@/components/organization-card"
import { BottomNav } from "@/components/bottom-nav"
import { CategoryFilter } from "@/components/category-filter"
import { NewsStories } from "@/components/news-stories"
import { DonationStats } from "@/components/donation-stats"
import { HadithCarousel } from "@/components/hadith-carousel"

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
      {/* News Stories */}
      <NewsStories />

      {/* Donation Statistics */}
      <DonationStats />

      {/* Hadith Carousel */}
      <HadithCarousel />

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

        <div className="space-y-4">
          {organizations.map((org) => (
            <OrganizationCard key={org.id} organization={org} />
          ))}
        </div>
      </section>

      <BottomNav active="home" />
    </div>
  )
}
