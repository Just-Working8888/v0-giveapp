import Image from "next/image"
import { FileText } from "lucide-react"

interface Report {
  id: number
  title: string
  date: string
  image: string
  summary: string
}

interface ReportCardProps {
  report: Report
}

export function ReportCard({ report }: ReportCardProps) {
  return (
    <div className="bg-card rounded-xl overflow-hidden border">
      <div className="relative h-40">
        <Image src={report.image || "/placeholder.svg"} alt={report.title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <FileText className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold mb-1 text-balance">{report.title}</h4>
            <p className="text-xs text-muted-foreground mb-2">{report.date}</p>
            <p className="text-sm text-muted-foreground">{report.summary}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
