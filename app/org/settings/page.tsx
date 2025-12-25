"use client"

import { Bell, Lock, CreditCard, Users, LogOut, Edit, Mail, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BottomNavOrg } from "@/components/bottom-nav-org"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"
import { EditOrgModal } from "@/components/edit-org-modal"

const organization = {
  name: "Помощь детям",
  email: "info@helpchildren.org",
  phone: "+7 (495) 123-45-67",
  verified: true,
}

export default function OrgSettingsPage() {
  const [acceptDonations, setAcceptDonations] = useState(true)
  const [publicProfile, setPublicProfile] = useState(true)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="px-4 py-6 space-y-4">
        <div className="bg-card rounded-2xl p-5 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-green-600 rounded-full flex items-center justify-center text-lg font-bold text-white">
                ПД
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-lg font-bold">{organization.name}</h2>
                  {organization.verified && <CheckCircle className="w-4 h-4 text-green-500" />}
                </div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Mail className="w-3 h-3" />
                  {organization.email}
                </p>
              </div>
            </div>
            <Button size="icon" variant="ghost" onClick={() => setIsEditModalOpen(true)}>
              <Edit className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between bg-muted/50 rounded-xl p-3">
              <div>
                <p className="text-sm font-medium">Принимать пожертвования</p>
                <p className="text-xs text-muted-foreground">Разрешить новые донаты</p>
              </div>
              <Switch checked={acceptDonations} onCheckedChange={setAcceptDonations} />
            </div>
            <div className="flex items-center justify-between bg-muted/50 rounded-xl p-3">
              <div>
                <p className="text-sm font-medium">Публичный профиль</p>
                <p className="text-xs text-muted-foreground">Виден всем</p>
              </div>
              <Switch checked={publicProfile} onCheckedChange={setPublicProfile} />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Link href="/org/settings/team">
            <div className="bg-card rounded-xl p-4 shadow-sm flex items-center gap-3 active:scale-[0.98] transition-transform">
              <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-500" />
              </div>
              <span className="flex-1 font-medium">Команда и доступы</span>
            </div>
          </Link>

          <Link href="/org/settings/payment">
            <div className="bg-card rounded-xl p-4 shadow-sm flex items-center gap-3 active:scale-[0.98] transition-transform">
              <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-green-500" />
              </div>
              <span className="flex-1 font-medium">Способы получения</span>
            </div>
          </Link>

          <Link href="/org/settings/security">
            <div className="bg-card rounded-xl p-4 shadow-sm flex items-center gap-3 active:scale-[0.98] transition-transform">
              <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center">
                <Lock className="w-5 h-5 text-red-500" />
              </div>
              <span className="flex-1 font-medium">Безопасность</span>
            </div>
          </Link>

          <Link href="/org/settings/notifications">
            <div className="bg-card rounded-xl p-4 shadow-sm flex items-center gap-3 active:scale-[0.98] transition-transform">
              <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center">
                <Bell className="w-5 h-5 text-purple-500" />
              </div>
              <span className="flex-1 font-medium">Уведомления</span>
            </div>
          </Link>
        </div>

        <Button variant="outline" className="w-full bg-transparent" size="lg">
          <LogOut className="w-4 h-4 mr-2" />
          Выйти
        </Button>
      </div>

      <BottomNavOrg active="settings" />
      <EditOrgModal open={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} organization={organization} />
    </div>
  )
}
