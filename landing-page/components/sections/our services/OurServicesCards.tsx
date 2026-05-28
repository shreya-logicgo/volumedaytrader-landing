import React from 'react'

interface ServiceCard {
  title: string
  description: string
  icon: React.ReactNode
}

const services: ServiceCard[] = [
  {
    title: 'PTA Signals',
    description:
      'Get structured Potential Trading Area reports with real-time market insights and trading opportunities.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 fill-none stroke-white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 18h3V9H4z" />
        <path d="M10.5 18h3V6h-3z" />
        <path d="M17 18h3V12h-3z" />
      </svg>
    ),
  },
  {
    title: 'Market Analysis',
    description:
      'Daily Forex, Crypto, Stocks, Futures, and Indices analysis powered by volume and structure.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 fill-none stroke-white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 18h16" />
        <path d="M6 14l3-3 3 2 4-5 2 2" />
      </svg>
    ),
  },
  {
    title: 'Premium Indicators',
    description:
      'Professional Wyckoff-based volume indicators built for smarter chart analysis and market understanding.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 fill-none stroke-white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M12 12l3-2" />
      </svg>
    ),
  },
  {
    title: 'Trading Courses',
    description:
      'Learn Wyckoff, VSA, Price Action, and structured trading concepts through guided education.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 fill-none stroke-white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 8l8-4 8 4-8 4-8-4z" />
        <path d="M7 11v4c0 1 2 2 5 2s5-1 5-2v-4" />
      </svg>
    ),
  },
  {
    title: 'Trading Community',
    description:
      'Join a focused trading community for discussions, insights, updates, and market learning.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 fill-none stroke-white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9" cy="10" r="2.5" />
        <circle cx="15" cy="10" r="2.5" />
        <path d="M4.5 18c.6-2 2.4-3 4.5-3" />
        <path d="M19.5 18c-.6-2-2.4-3-4.5-3" />
      </svg>
    ),
  },
  {
    title: 'Practical Sessions',
    description:
      'Analyze real market examples and improve decision-making through practical trading exercises.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 fill-none stroke-white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19h16" />
        <path d="M6 16V8h4v8" />
        <path d="M14 16v-4h4v4" />
      </svg>
    ),
  },
]

const OurServicesCards = () => {
  return (
    <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <article
          key={service.title}
          className="card-ui rounded-3xl "
        >
          <div className="flex h-full flex-col gap-15">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#FF2E2E] shadow-[0_4px_14px_rgba(255,46,46,0.35)]">
              {service.icon}
            </div>

            <div className="flex flex-col gap-4 ">
              <h3 className="text-left card-heading">
                {service.title}
              </h3>
              <p className="text-left card-desc">
                {service.description}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default OurServicesCards
