"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const hadiths = [
  {
    id: 1,
    text: "Лучшая милостыня - та, которую подаёшь, имея мало",
    source: "Сахих аль-Бухари",
  },
  {
    id: 2,
    text: "Защитите себя от Огня, даже если половинкой финика",
    source: "Сахих аль-Бухари",
  },
  {
    id: 3,
    text: "Милостыня не уменьшает имущество",
    source: "Сахих Муслим",
  },
  {
    id: 4,
    text: "Каждое доброе дело является милостыней",
    source: "Сахих аль-Бухари",
  },
  {
    id: 5,
    text: "Улыбка в лицо твоего брата - это милостыня",
    source: "Сунан ат-Тирмизи",
  },
]

export function HadithCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % hadiths.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % hadiths.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + hadiths.length) % hadiths.length)
  }

  return (
    <div className="px-4 pb-4">
      <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-5 shadow-sm overflow-hidden">
        <div className="relative z-10">
          <div className="min-h-[100px] flex flex-col justify-center">
            <p className="text-sm text-white/90 text-pretty leading-relaxed mb-3">
              "{hadiths[currentIndex].text}"
            </p>
            <p className="text-xs text-white/70 font-medium">
              — {hadiths[currentIndex].source}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={goToPrev}
              className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all active:scale-95 hover:bg-white/30"
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>

            {/* Dots */}
            <div className="flex gap-1.5">
              {hadiths.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-6 bg-white"
                      : "w-1.5 bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all active:scale-95 hover:bg-white/30"
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-2xl" />
        </div>
      </div>
    </div>
  )
}
