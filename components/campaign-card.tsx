import Link from "next/link"
import { Progress } from "@/components/ui/progress"
import { Clock, Users } from "lucide-react"

interface Campaign {
  id: number
  title: string
  goal: number
  raised: number
  donors: number
  daysLeft: number
  status: string
}

interface CampaignCardProps {
  campaign: Campaign
}

export function CampaignCard({ campaign }: CampaignCardProps) {
  const progress = (campaign.raised / campaign.goal) * 100

  return (
    <Link href={`/org/campaign/${campaign.id}`}>
      <div className="bg-card rounded-xl p-3.5 shadow-sm hover:shadow-md transition-all active:scale-[0.98]">
        <div className="flex items-start justify-between mb-2.5">
          <h3 className="font-semibold text-sm text-balance flex-1 pr-2">{campaign.title}</h3>
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${
              campaign.status === "active" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
            }`}
          >
            {campaign.status === "active" ? "Активна" : "Закрыта"}
          </span>
        </div>

        <div className="space-y-2 mb-3">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs text-muted-foreground mb-0.5">Собрано</p>
              <p className="text-base font-bold">{(campaign.raised / 1000).toFixed(0)}K ₽</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground mb-0.5">Цель</p>
              <p className="text-sm font-medium text-muted-foreground">{(campaign.goal / 1000).toFixed(0)}K ₽</p>
            </div>
          </div>
          <Progress value={progress} className="h-1.5" />
          <p className="text-xs font-medium text-primary">{progress.toFixed(0)}% выполнено</p>
        </div>

        <div className="flex items-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5" />
            <span className="text-xs font-medium">{campaign.donors}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span className="text-xs font-medium">{campaign.daysLeft} дней</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
