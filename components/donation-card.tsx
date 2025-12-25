interface Donation {
  id: number
  donor: string
  amount: number
  date: string
  message?: string
}

interface DonationCardProps {
  donation: Donation
}

export function DonationCard({ donation }: DonationCardProps) {
  return (
    <div className="bg-card rounded-xl p-4 border">
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <p className="font-semibold">{donation.donor}</p>
          <p className="text-xs text-muted-foreground">{donation.date}</p>
        </div>
        <span className="font-bold text-primary">{donation.amount.toLocaleString()} ₽</span>
      </div>
      {donation.message && <p className="text-sm text-muted-foreground italic mt-2">"{donation.message}"</p>}
    </div>
  )
}
