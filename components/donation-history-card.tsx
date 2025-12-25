import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

interface DonationHistory {
  id: number
  organization: string
  amount: number
  date: string
  status: string
  category: string
}

interface DonationHistoryCardProps {
  donation: DonationHistory
}

export function DonationHistoryCard({ donation }: DonationHistoryCardProps) {
  return (
    <Link href={`/donation/${donation.id}`}>
      <div className="bg-card rounded-xl p-4 border hover:border-primary transition-colors">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <p className="font-semibold mb-1">{donation.organization}</p>
            <span className="inline-block bg-muted px-2 py-1 rounded text-xs">{donation.category}</span>
          </div>
          <div className="text-right">
            <p className="font-bold text-lg">{donation.amount.toLocaleString()} ₽</p>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>{donation.date}</span>
          </div>
          <ArrowRight className="w-4 h-4 text-muted-foreground" />
        </div>
      </div>
    </Link>
  )
}
