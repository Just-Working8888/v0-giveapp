import { ArrowLeft, Plus, FileText } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BottomNavOrg } from "@/components/bottom-nav-org"
import { OrgReportCard } from "@/components/org-report-card"

const reports = [
  {
    id: 1,
    title: "Отчет за декабрь 2024",
    date: "15 декабря 2024",
    status: "published",
    views: 342,
    donations: 25,
    amount: 125000,
  },
  {
    id: 2,
    title: "Отчет за ноябрь 2024",
    date: "15 ноября 2024",
    status: "published",
    views: 298,
    donations: 18,
    amount: 98000,
  },
  {
    id: 3,
    title: "Отчет за октябрь 2024",
    date: "10 октября 2024",
    status: "draft",
    views: 0,
    donations: 0,
    amount: 0,
  },
]

export default function OrgReportsPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
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
              <h1 className="text-xl font-bold">Отчеты</h1>
            </div>
            <Link href="/org/reports/new">
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Создать
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Summary */}
        <div className="bg-card rounded-xl p-6 border mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="font-semibold">Всего отчетов</h2>
              <p className="text-2xl font-bold">{reports.length}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Опубликовано</p>
              <p className="text-lg font-semibold">{reports.filter((r) => r.status === "published").length}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Черновиков</p>
              <p className="text-lg font-semibold">{reports.filter((r) => r.status === "draft").length}</p>
            </div>
          </div>
        </div>

        {/* Reports list */}
        <div className="space-y-3">
          {reports.map((report) => (
            <OrgReportCard key={report.id} report={report} />
          ))}
        </div>
      </div>

      <BottomNavOrg active="reports" />
    </div>
  )
}
