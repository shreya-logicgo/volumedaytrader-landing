"use client"

import Image from 'next/image'
import React, { useMemo, useState } from 'react'

interface IndicatorSlide {
  title: string
  subtitle: string
  points: string[]
  linePath: string
  imageSrc?: string
  imageAlt?: string
}

interface IndicatorSystemCarousalProps {
  slides?: IndicatorSlide[]
  className?: string
}

const defaultSlides: IndicatorSlide[] = [
  {
    title: 'Wyckoff Wave Volume Indicator',
    subtitle:
      'The indicator helps traders identify buying and selling pressure by analyzing cumulative volume and market participation directly on the chart.',
    points: [
      'Detect demand and supply strength',
      'Understand buyer vs seller pressure',
      'Identify momentum shifts',
      'Analyze volume-based market behavior',
    ],
    linePath: 'M8 98 L28 70 L46 82 L66 58 L82 64 L100 54 L118 62 L138 52 L156 80 L176 88 L194 72 L212 92 L232 86 L252 108',
    imageSrc: '/assets/images/chart2.png',
    imageAlt: 'Chart analysis preview',
  },
  {
    title: 'Wyckoff Wave Volume Indicator',
    subtitle:
      'Read market turning points with structure-focused wave behavior and highlighted distribution or absorption zones.',
    points: [
      'Track reaction highs and lows',
      'Spot distribution range areas',
      'Flag breakdown risk zones',
      'Improve structured market timing',
    ],
    linePath: 'M8 88 L26 66 L46 74 L66 70 L86 82 L104 62 L124 52 L144 68 L164 64 L184 90 L204 100 L224 92 L244 86 L252 74',
    imageSrc: '/assets/images/chart2.png',
    imageAlt: 'Chart analysis preview',
  },
]

const ChartPanel = ({ path, imageSrc, imageAlt }: { path: string; imageSrc?: string; imageAlt?: string }) => {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <div className="relative overflow-hidden rounded-xl border  bg-[#111035] p-3">
      {imageSrc && !imageFailed ? (
        <Image
          src={imageSrc}
          alt={imageAlt ?? 'Indicator chart'}
          width={542}
          height={335}
          className=" rounded-md object-cover"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <svg viewBox="0 0 260 120" className="h-[130px] w-full">
          {[16, 36, 56, 76, 96, 116].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="260"
              y2={y}
              stroke="#25306A"
              strokeDasharray="4 4"
              opacity="0.55"
            />
          ))}
          {[20, 52, 84, 116, 148, 180, 212, 244].map((x) => (
            <line key={x} x1={x} y1="0" x2={x} y2="120" stroke="#1f2754" opacity="0.5" />
          ))}
          <path
            d={path}
            fill="none"
            stroke="#ff3b45"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}

      <span className="absolute right-4 top-8 rounded bg-[#ff424f] px-2 py-1 text-[10px] font-semibold text-white">
        Distribution range
      </span>
      <span className="absolute left-8 top-[58%] rounded bg-[#ff424f] px-2 py-1 text-[10px] font-semibold text-white">
        Highest volume on down wave
      </span>
      <span className="absolute left-12 bottom-5 rounded bg-[#ff424f] px-2 py-1 text-[10px] font-semibold text-white">
        Breakdown pressure
      </span>
    </div>
  )
}

const IndicatorSystemCarousal = ({
  slides = defaultSlides,
  className = '',
}: IndicatorSystemCarousalProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const totalSlides = slides.length
  const slideWidthPercent = 86
  const slideGapRem = 1

  const canGoPrev = activeIndex > 0
  const canGoNext = activeIndex < totalSlides - 1

  const trackStyle = useMemo(
    () => ({
      transform: `translateX(calc(-${activeIndex * slideWidthPercent}% - ${activeIndex * slideGapRem}rem))`,
    }),
    [activeIndex]
  )

  return (
    <div className={`relative  mt-10 max-w-5xl  ${className}`.trim()}>
      <div className="pointer-events-none absolute bottom-6 left-0 h-24 w-32 bg-[radial-gradient(circle,#ff2e2e66_0%,#ff2e2e00_70%)]" />
      <div className="pointer-events-none absolute bottom-6 right-0 h-24 w-32 bg-[radial-gradient(circle,#ff2e2e66_0%,#ff2e2e00_70%)]" />

      <div className="overflow-visible p-1">
        <div
          className="flex min-h-[180px] w-full gap-4 transition-transform duration-500 ease-out"
          style={trackStyle}
        >
          {slides.map((slide, idx) => (
            <article
              key={`${slide.title}-${idx}`}
              className="grid w-[86%] shrink-0 grid-cols-1 rounded-3xl border border-[#1d1938] bg-[#0b0830] p-3 md:grid-cols-[1.2fr_1fr]"
            >
              <div className="p-2">
                <ChartPanel
                  path={slide.linePath}
                  imageSrc={slide.imageSrc}
                  imageAlt={slide.imageAlt}
                />
              </div>
              <div className="my-auto max-w-[380px] px-2">
                <h3 className="card-heading text-left font-semibold line-clamp-none text-white">{slide.title}</h3>
                <p className="card-desc mt-3 leading-relaxed line-clamp-none text-[#A7ADBE]">{slide.subtitle}</p>
                <ul className="card-desc mt-4 space-y-1 line-clamp-none">
                  {slide.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <div className="rounded-[4px]  px-6 py-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => canGoPrev && setActiveIndex((prev) => prev - 1)}
              disabled={!canGoPrev}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#26336d] bg-[#121041] text-white disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Previous"
            >
              &#8249;
            </button>
            <button
              type="button"
              onClick={() => canGoNext && setActiveIndex((prev) => prev + 1)}
              disabled={!canGoNext}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#26336d] bg-[#121041] text-white disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Next"
            >
              &#8250;
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndicatorSystemCarousal
