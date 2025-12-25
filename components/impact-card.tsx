interface Impact {
  icon: string
  title: string
  value: string
  description: string
}

interface ImpactCardProps {
  impact: Impact
}

export function ImpactCard({ impact }: ImpactCardProps) {
  return (
    <div className="bg-card rounded-xl p-4 border">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
          {impact.icon}
        </div>
        <div className="flex-1">
          <p className="font-semibold mb-1">{impact.title}</p>
          <p className="text-xs text-muted-foreground">{impact.description}</p>
        </div>
        <div className="text-2xl font-bold text-primary">{impact.value}</div>
      </div>
    </div>
  )
}
