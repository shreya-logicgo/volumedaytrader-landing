import Image from 'next/image'
import React from 'react'

interface SignalCardItem {
  title: string
  description: string
  linePath: string
}

interface SignalsAndIndicatorsCardsProps {
  items?: SignalCardItem[]
  className?: string
}

const defaultItems: SignalCardItem[] = [
  {
    title: 'Daily PTA Signal Reports',
    description:
      'Get structured Potential Trading Area reports with volume analysis, momentum insights, and real-time market observations across Forex, Crypto, Stocks, and Indices.',
    linePath: 'M12 118 L68 116 L110 108 L150 74 L188 88 L228 76 L266 82 L310 64',
  },
  {
    title: 'Wyckoff Wave Indicators',
    description:
      'Professional volume-based indicators designed to help traders identify demand, supply, liquidity behavior, and market participation more clearly.',
    linePath: 'M12 102 L58 86 L110 92 L152 106 L206 66 L244 80 L272 108 L310 86',
  },
  {
    title: 'Market Analysis & Insights',
    description:
      'Daily market breakdowns covering trend structure, momentum shifts, and important trading zones backed by volume-based analysis.',
    linePath: 'M12 68 L46 108 L92 114 L138 98 L184 104 L232 92 L274 74 L310 78',
  },
  {
    title: 'Trading Courses & Education',
    description:
      'Learn Wyckoff methodology, VSA, market structure, and disciplined trading concepts through practical educational resources and real market examples.',
    linePath: 'M12 74 L58 98 L102 120 L148 96 L194 84 L240 114 L276 106 L310 80',
  },
]

const ChartPreview = ({ path }: { path: string }) => {
  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-signal-chart-border bg-signal-chart-bg p-2">
      <svg viewBox="0 0 324 140" className="h-[150px] w-full">
        <defs>
          <linearGradient id="signalLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-signal-accent-light)" />
            <stop offset="100%" stopColor="var(--color-service-accent)" />
          </linearGradient>
        </defs>

        {[24, 46, 68, 90, 112, 134].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="324"
            y2={y}
            stroke="var(--color-signal-grid-1)"
            strokeDasharray="4 4"
            strokeWidth="1"
            opacity="0.55"
          />
        ))}

        {[28, 72, 116, 160, 204, 248, 292].map((x) => (
          <line
            key={x}
            x1={x}
            y1="0"
            x2={x}
            y2="140"
            stroke="var(--color-signal-grid-2)"
            strokeWidth="1"
            opacity="0.4"
          />
        ))}

        <path
          d={path}
          fill="none"
          stroke="url(#signalLine)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span className="absolute bottom-5 right-4 rounded-md bg-service-accent px-2 py-1 text-[10px] font-semibold text-white">
        PTA Signals
      </span>
    </div>
  )
}

const SignalsAndIndicatorsCards = ({
  items = defaultItems,
  className = '',
}: SignalsAndIndicatorsCardsProps) => {
  return (
    <div className={`grid grid-cols-1 gap-5 lg:grid-cols-2 ${className}`.trim()}>
      {items.map((item) => (
        <article
          key={item.title}
          className="overflow-hidden rounded-2xl flex flex-col gap-10 pt-10 px-[14px] pb-[14px] border border-card-border bg-card-bg"
        >
          <div className="">
            <img width={550} height={302} src="/assets/images/trade.png" alt={item.title} className=" mx-auto rounded-[20px]" />
            {/* <ChartPreview path={item.linePath} /> */}
          </div>

          <div className="border-t  bg-signal-panel-bg p-5  rounded-[20px] flex flex-col gap-4">
            <h3 className="text-left  font-semibold leading-tight text-white card-heading">
              {item.title}
            </h3>
            <p className="card-desc mt-2 text-left  text-secondary-text">
              {item.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}

export default SignalsAndIndicatorsCards
