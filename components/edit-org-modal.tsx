"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface EditOrgModalProps {
  open: boolean
  onClose: () => void
  organization: {
    name: string
    email: string
    phone: string
  }
}

export function EditOrgModal({ open, onClose, organization }: EditOrgModalProps) {
  if (!open) return null

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50 animate-in fade-in" onClick={onClose} />

      <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 bg-card rounded-2xl shadow-lg max-w-md mx-auto max-h-[80vh] overflow-y-auto animate-in zoom-in-95 slide-in-from-bottom-4">
        <div className="p-5">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg font-bold">Редактировать организацию</h3>
            <Button size="icon" variant="ghost" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="org-name" className="text-sm font-medium mb-2 block">
                Название организации
              </Label>
              <Input id="org-name" defaultValue={organization.name} className="rounded-xl" />
            </div>

            <div>
              <Label htmlFor="org-email" className="text-sm font-medium mb-2 block">
                Email
              </Label>
              <Input id="org-email" type="email" defaultValue={organization.email} className="rounded-xl" />
            </div>

            <div>
              <Label htmlFor="org-phone" className="text-sm font-medium mb-2 block">
                Телефон
              </Label>
              <Input id="org-phone" type="tel" defaultValue={organization.phone} className="rounded-xl" />
            </div>

            <div>
              <Label htmlFor="org-description" className="text-sm font-medium mb-2 block">
                Описание
              </Label>
              <Textarea
                id="org-description"
                placeholder="Расскажите о вашей организации..."
                className="rounded-xl min-h-[100px]"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <Button variant="outline" className="flex-1 bg-transparent" onClick={onClose}>
                Отмена
              </Button>
              <Button className="flex-1" onClick={onClose}>
                Сохранить
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
