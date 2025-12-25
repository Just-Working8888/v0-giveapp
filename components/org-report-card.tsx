import Link from "next/link"
import { Eye, Heart, TrendingUp, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Report {
  id: number
  title: string
  date: string
  status: string
  views: number
  donations: number
  amount: number
}

interface OrgReportCardProps {
  report: Report
}

export function OrgReportCard({ report }: OrgReportCardProps) {
  return (
    <div className="bg-card rounded-xl p-4 border">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <Link href={`/org/reports/${report.id}`}>
            <h3 className="font-semibold mb-1 hover:text-primary transition-colors">{report.title}</h3>
          </Link>
          <p className="text-xs text-muted-foreground">{report.date}</p>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`text-xs px-2 py-1 rounded-full ${
              report.status === "published" ? "bg-green-500/10 text-green-500" : "bg-muted text-muted-foreground"
            }`}
          >
            {report.status === "published" ? "Опубликован" : "Черновик"}
          </span>
          <Button size="icon" variant="ghost" className="h-8 w-8">
            <MoreVertical className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {report.status === "published" && (
        <div className="grid grid-cols-3 gap-3 pt-3 border-t">
          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium">{report.views}</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium">{report.donations}</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium">{(report.amount / 1000).toFixed(0)}K ₽</span>
          </div>
        </div>
      )}
    </div>
  )
}
