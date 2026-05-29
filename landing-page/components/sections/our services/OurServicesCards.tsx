import type { FC, SVGProps } from 'react'

import ChartIcon from '@/assets/icons/chart.svg'
import MarketIcon from '@/assets/icons/market.svg'
import GaugeIcon from '@/assets/icons/gauge.svg'
import GradIcon from '@/assets/icons/grad.svg'
import UsersGrpIcon from '@/assets/icons/users-grp.svg'
import ChalkBoardIcon from '@/assets/icons/chalk-board.svg'
import { useTranslation } from 'react-i18next'

type SvgIcon = FC<SVGProps<SVGElement>>

interface ServiceCard {
  title: string
  description: string
  icon: SvgIcon
}

const services: ServiceCard[] = [
  {
    titleKey: 'cards.ptaSignals.title',
    descriptionKey: 'cards.ptaSignals.desc',
    icon: ChartIcon,
  },
  {
    title: 'Market Analysis',
    description:
      'Daily Forex, Crypto, Stocks, Futures, and Indices analysis powered by volume and structure.',
    icon: MarketIcon,
  },
  {
    titleKey: 'cards.premiumIndicators.title',
    descriptionKey: 'cards.premiumIndicators.desc',
    icon: GaugeIcon,
  },
  {
    titleKey: 'cards.tradingCourses.title',
    descriptionKey: 'cards.tradingCourses.desc',
    icon: GradIcon,
  },
  {
    titleKey: 'cards.tradingCommunity.title',
    descriptionKey: 'cards.tradingCommunity.desc',
    icon: UsersGrpIcon,
  },
  {
    titleKey: 'cards.practicalSessions.title',
    descriptionKey: 'cards.practicalSessions.desc',
    icon: ChalkBoardIcon,
  },
]

const OurServicesCards = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'services' })

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
