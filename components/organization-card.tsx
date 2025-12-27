import Link from "next/link"
import Image from "next/image"
import { CheckCircle, Users } from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface Organization {
  id: number
  name: string
  description: string
  image: string
  category: string
  raised: number
  goal: number
  donors: number
  verified: boolean
}

interface OrganizationCardProps {
  organization: Organization
}

export function OrganizationCard({ organization }: OrganizationCardProps) {
  const progress = (organization.raised / organization.goal) * 100

  return (
    <Link href={`/organization/${organization.id}`}>
      <div className="bg-card mt-3 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all active:scale-[0.98]">
        <div className="relative h-36">
          <Image src={organization.image || "/placeholder.svg"} alt={organization.name} fill className="object-cover" />
          <div className="absolute top-2 left-2">
            <span className="bg-card/95 backdrop-blur px-2.5 py-1 rounded-lg text-xs font-medium shadow-sm">
              {organization.category}
            </span>
          </div>
        </div>

        <div className="p-3.5">
          <div className="flex items-start justify-between mb-1.5">
            <h3 className="font-semibold text-sm text-balance leading-tight">{organization.name}</h3>
            {organization.verified && <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 ml-2" />}
          </div>

          <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{organization.description}</p>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Собрано</span>
              <span className="font-semibold text-foreground">
                {(organization.raised / 1000).toFixed(0)}K ₽ из {(organization.goal / 1000).toFixed(0)}K ₽
              </span>
            </div>

            <Progress value={progress} className="h-1.5" />

            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Users className="w-3.5 h-3.5" />
              <span>{organization.donors} доноров</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
