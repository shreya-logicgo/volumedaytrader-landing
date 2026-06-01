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
  titleKey: string
  descriptionKey: string
  icon: SvgIcon
}

const services: ServiceCard[] = [
  {
    titleKey: 'cards.ptaSignals.title',
    descriptionKey: 'cards.ptaSignals.desc',
    icon: ChartIcon,
  },
  {
    titleKey: 'cards.marketAnalysis.title',
    descriptionKey: 'cards.marketAnalysis.desc',
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
    <div className="mx-auto grid w-full grid-cols-1 gap-4  sm:grid-cols-2 sm:gap-5  lg:grid-cols-3 lg:gap-5 xl:gap-6 2xl:max-w-screen-2xl content-pt">
      {services.map((service) => {
        const Icon = service.icon

        return (
          <article
            key={service.titleKey}
            className="card-ui rounded-2xl p-5 sm:rounded-3xl sm:p-6 lg:p-6 xl:p-7 2xl:p-8"
          >
            <div className="flex h-full flex-col gap-6 sm:gap-8 lg:gap-10 xl:gap-12 2xl:gap-15">
              <div className="service-icon-accent flex h-12 w-12 items-center justify-center rounded-lg sm:h-14 sm:w-14 sm:rounded-xl xl:h-16 xl:w-16">
                <Icon className="h-6 w-6 sm:h-7 sm:w-7 xl:h-8 xl:w-8" aria-hidden />
              </div>

              <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4">
                <h3 className="card-heading text-left">{t(service.titleKey)}</h3>
                <p className="card-desc text-left">{t(service.descriptionKey)}</p>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default OurServicesCards
