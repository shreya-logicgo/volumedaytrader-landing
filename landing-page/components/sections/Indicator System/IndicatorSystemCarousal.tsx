import React from 'react'

interface IndicatorSlide {
  title: string
  subtitle: string
  points: string[]
  linePath: string
}

interface IndicatorSystemCarousaeProps {
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
  },
]

const ChartPanel = ({ path }: { path: string }) => {
  return (
    <div className="relative overflow-hidden rounded-xl border border-[#1d2d70] bg-[#111035] p-3">
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
}: IndicatorSystemCarousaeProps) => {
  return (
    <div className={`relative mt-10 ${className}`.trim()}>
      <div className="pointer-events-none absolute bottom-6 left-0 h-24 w-32 bg-[radial-gradient(circle,#ff2e2e66_0%,#ff2e2e00_70%)]" />
      <div className="pointer-events-none absolute bottom-6 right-0 h-24 w-32 bg-[radial-gradient(circle,#ff2e2e66_0%,#ff2e2e00_70%)]" />

      <div className="rounded-[4px] border border-[#1377D9] p-1">
        <div className="overflow-hidden rounded-sm border border-[#1d1938] bg-[#0b0830]">
          <div className="flex min-h-[180px] w-[200%]">
            {slides.map((slide, idx) => (
              <article key={`${slide.title}-${idx}`} className="grid w-full grid-cols-[1.2fr_1fr] border-r border-[#1d1938]">
                <div className="p-4">
                  <ChartPanel path={slide.linePath} />
                </div>
                <div className="border-l border-[#1d1938] bg-[#100c36] p-5">
                  <h3 className="text-lg font-semibold text-white">{slide.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#A7ADBE]">{slide.subtitle}</p>
                  <ul className="mt-4 space-y-1 text-sm leading-relaxed text-[#A7ADBE]">
                    {slide.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <div className="rounded-[4px] border border-[#1377D9] px-6 py-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#26336d] bg-[#121041] text-white"
              aria-label="Previous"
            >
              &#8249;
            </button>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#26336d] bg-[#121041] text-white"
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
