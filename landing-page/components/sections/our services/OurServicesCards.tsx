import React from 'react'
import ChartIcon from '@/assets/icons/chart.svg'
import MarketAnalysisIcon from '@/assets/icons/market.svg'
import GaugeIcon from '@/assets/icons/gauge.svg'
import GradIcon from '@/assets/icons/grad.svg'
import UsersGrpIcon from '@/assets/icons/users-grp.svg'
import ChalkBoardIcon from '@/assets/icons/chalk-board.svg'



interface ServiceCard {
  title: string
  description: string
  icon: unknown
}

const renderIcon = (icon: unknown) => {
  if (React.isValidElement(icon)) {
    return icon
  }

  if (typeof icon === 'function') {
    const IconComponent = icon as React.ComponentType

    return <IconComponent />
  }

  if (typeof icon === 'string') {
    return <img src={icon} alt="" aria-hidden="true" className="h-8 w-8" />
  }

  if (icon && typeof icon === 'object' && 'src' in icon) {
    const { src } = icon as { src?: string }

    if (src) {
      return <img src={src} alt="" aria-hidden="true" className="h-8 w-8" />
    }
  }

  return null
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
    icon: MarketAnalysisIcon,
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
      {services.map((service) => (
        <article
          key={service.title}
          className="card-ui rounded-3xl "
        >
          <div className="flex h-full flex-col gap-15">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl service-icon-accent">
              {renderIcon(service.icon)}
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
