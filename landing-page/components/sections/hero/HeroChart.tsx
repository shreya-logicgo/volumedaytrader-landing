"use client"

import Image from "next/image"
import { Play } from "lucide-react"
import TrustedLogos from "../TrustedLogos/TrustedLogos"

export default function HeroChart() {
  return (
    <section className="relative z-20 mx-auto mt-8 w-full px-3 sm:mt-10 sm:px-4 md:mt-12 md:px-6 lg:mt-10 lg:px-4">
      {/* Media card — desktop padding/sizing preserved at lg */}
      <div className="relative z-10 mx-auto max-w-[1200px] rounded-2xl border bg-[#FFFFFF0D] p-3 sm:rounded-3xl sm:p-4 lg:p-5">
        <div className="relative mx-auto aspect-video w-full overflow-hidden rounded-2xl sm:rounded-3xl">
          <Image
            src="/assets/images/video_thumbnail.jpg"
            alt="Trading platform preview"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
            priority
          />

          <div className="absolute inset-0 bg-[#050024]/20" aria-hidden />

          <div className="absolute inset-0 flex items-center justify-center px-4">
            <button
              type="button"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-white/95 pl-1.5 pr-4 shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-transform hover:scale-[1.02] sm:h-12 sm:gap-3 sm:pl-2 sm:pr-5 lg:h-14 lg:pr-6 cursor-pointer"
              aria-label="Watch demo"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#ED1F24] to-[#ff4d52] sm:h-9 sm:w-9 lg:h-10 lg:w-10">
                <Play className="ml-0.5 h-3.5 w-3.5 fill-white text-white sm:h-4 sm:w-4" />
              </span>
              <span className="text-sm font-semibold text-[#1a1a1a] lg:text-base">Watch Demo</span>
            </button>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute left-0 right-0 top-[calc(100%-3rem)] z-20 h-24 bg-gradient-to-t from-[#050024] via-[#050024]/80 to-transparent sm:top-[calc(100%-4rem)] sm:h-32"
        aria-hidden
      />
    </section>
  )
}
