"use client"

import { Settings, Heart, Award, LogOut, Edit, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BottomNav } from "@/components/bottom-nav"
import { useState } from "react"
import { EditProfileModal } from "@/components/edit-profile-modal"

const user = {
  name: "Анна Иванова",
  email: "anna.ivanova@example.com",
  joinDate: "Сентябрь 2023",
  totalDonated: 20500,
  rank: "Золотой донор",
  organizationsCount: 4,
}

export default function ProfilePage() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="px-4 py-6 space-y-4">
        <div className="bg-card rounded-2xl p-5 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-green-600 rounded-full flex items-center justify-center text-lg font-bold text-white">
                АИ
              </div>
              <div>
                <h2 className="text-lg font-bold">{user.name}</h2>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Mail className="w-3 h-3" />
                  {user.email}
                </p>
              </div>
            </div>
            <Button size="icon" variant="ghost" onClick={() => setIsEditModalOpen(true)}>
              <Edit className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-1 bg-muted/50 rounded-xl p-3 text-center">
              <p className="text-xs text-muted-foreground mb-1">Пожертвовано</p>
              <p className="text-lg font-bold text-primary">{user.totalDonated.toLocaleString()} ₽</p>
            </div>
            <div className="flex-1 bg-muted/50 rounded-xl p-3 text-center">
              <p className="text-xs text-muted-foreground mb-1">Организаций</p>
              <p className="text-lg font-bold">{user.organizationsCount}</p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Link href="/favorites">
            <div className="bg-card rounded-xl p-4 shadow-sm flex items-center gap-3 active:scale-[0.98] transition-transform">
              <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-red-500" />
              </div>
              <span className="flex-1 font-medium">Избранные организации</span>
            </div>
          </Link>

          <Link href="/achievements">
            <div className="bg-card rounded-xl p-4 shadow-sm flex items-center gap-3 active:scale-[0.98] transition-transform">
              <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center">
                <Award className="w-5 h-5 text-amber-500" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Достижения</p>
                <p className="text-xs text-muted-foreground">3 новых награды</p>
              </div>
            </div>
          </Link>

          <Link href="/settings">
            <div className="bg-card rounded-xl p-4 shadow-sm flex items-center gap-3 active:scale-[0.98] transition-transform">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Settings className="w-5 h-5 text-primary" />
              </div>
              <span className="flex-1 font-medium">Настройки</span>
            </div>
          </Link>
        </div>

        <Button variant="outline" className="w-full bg-transparent" size="lg">
          <LogOut className="w-4 h-4 mr-2" />
          Выйти
        </Button>
      </div>

      <BottomNav active="profile" />
      <EditProfileModal open={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} user={user} />
    </div>
  )
}
