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
    <div className="content-pt mx-auto grid w-full min-w-0 max-w-screen-2xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
      {services.map((service) => {
        const Icon = service.icon

        return (
          <article
            key={service.titleKey}
            className="service-card card-ui min-w-0 w-full cursor-pointer"
          >
            <span className="service-card__fill" aria-hidden="true" />
            <div className="service-card__content flex h-full min-w-0 flex-col gap-4 sm:gap-5 lg:gap-6">
              <div className="service-icon-accent service-icon-box">
                <Icon className="service-card-icon" aria-hidden />
              </div>

              <div className="flex min-w-0 flex-col gap-2 sm:gap-3">
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
