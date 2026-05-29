import type { FC, SVGProps } from 'react'

import ChartIcon from '@/assets/icons/chart.svg'
import MarketIcon from '@/assets/icons/market.svg'
import GaugeIcon from '@/assets/icons/gauge.svg'
import GradIcon from '@/assets/icons/grad.svg'
import UsersGrpIcon from '@/assets/icons/users-grp.svg'
import ChalkBoardIcon from '@/assets/icons/chalk-board.svg'

type SvgIcon = FC<SVGProps<SVGElement>>

interface ServiceCard {
  title: string
  description: string
  icon: SvgIcon
}

const services: ServiceCard[] = [
  {
    title: 'PTA Signals',
    description:
      'Get structured Potential Trading Area reports with real-time market insights and trading opportunities.',
    icon: ChartIcon,
  },
  {
    title: 'Market Analysis',
    description:
      'Daily Forex, Crypto, Stocks, Futures, and Indices analysis powered by volume and structure.',
    icon: MarketIcon,
  },
  {
    title: 'Premium Indicators',
    description:
      'Professional Wyckoff-based volume indicators built for smarter chart analysis and market understanding.',
    icon: GaugeIcon,
  },
  {
    title: 'Trading Courses',
    description:
      'Learn Wyckoff, VSA, Price Action, and structured trading concepts through guided education.',
    icon: GradIcon,
  },
  {
    title: 'Trading Community',
    description:
      'Join a focused trading community for discussions, insights, updates, and market learning.',
    icon: UsersGrpIcon,
  },
  {
    title: 'Practical Sessions',
    description:
      'Analyze real market examples and improve decision-making through practical trading exercises.',
    icon: ChalkBoardIcon,
  },
]

const OurServicesCards = () => {
  return (
    <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => {
        const Icon = service.icon

        return (
          <article key={service.title} className="card-ui rounded-3xl">
            <div className="flex h-full flex-col gap-15">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl service-icon-accent">
                <Icon className="h-8 w-8" aria-hidden />
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="card-heading text-left">{service.title}</h3>
                <p className="card-desc text-left">{service.description}</p>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default OurServicesCards
