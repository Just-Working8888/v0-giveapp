"use client"

import Image from "next/image"

const stories = [
  {
    id: 1,
    title: "Новый проект",
    image: "/story1.jpg",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    id: 2,
    title: "Помощь детям",
    image: "/story2.jpg",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 3,
    title: "Экология",
    image: "/story3.jpg",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "Животные",
    image: "/story4.jpg",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    id: 5,
    title: "Образование",
    image: "/story5.jpg",
    gradient: "from-indigo-500 to-blue-500",
  },
]

export function NewsStories() {
  return (
    <div className="px-4 py-4">
      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
        {stories.map((story) => (
          <button
            key={story.id}
            className="flex-shrink-0 flex flex-col items-center gap-2 group"
          >
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${story.gradient} p-0.5 shadow-md transition-transform group-active:scale-95`}>
              <div className="w-full h-full rounded-[14px] bg-muted flex items-center justify-center overflow-hidden">
                <div className={`w-full h-full bg-gradient-to-br ${story.gradient} opacity-20`} />
              </div>
            </div>
            <span className="text-xs text-foreground/80 font-medium max-w-[80px] truncate">
              {story.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
