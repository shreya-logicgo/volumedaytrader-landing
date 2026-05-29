import React from 'react'
import ChartIcon from '@/assets/icons/chart.svg'
import MarketAnalysisIcon from '@/assets/icons/market.svg'
import GaugeIcon from '@/assets/icons/gauge.svg'
import GradIcon from '@/assets/icons/grad.svg'
import UsersGrpIcon from '@/assets/icons/users-grp.svg'
import ChalkBoardIcon from '@/assets/icons/chalk-board.svg'
import { useTranslation } from 'react-i18next'



interface ServiceCard {
  titleKey: string
  descriptionKey: string
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
    titleKey: 'cards.ptaSignals.title',
    descriptionKey: 'cards.ptaSignals.desc',
    icon: ChartIcon,
  },
  {
    titleKey: 'cards.marketAnalysis.title',
    descriptionKey: 'cards.marketAnalysis.desc',
    icon: MarketAnalysisIcon,
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
      {services.map((service) => (
        <article
          key={service.titleKey}
          className="card-ui rounded-3xl "
        >
          <div className="flex h-full flex-col gap-15">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl service-icon-accent">
              {renderIcon(service.icon)}
            </div>

            <div className="flex flex-col gap-4 ">
              <h3 className="text-left card-heading">
                {t(service.titleKey)}
              </h3>
              <p className="text-left card-desc">
                {t(service.descriptionKey)}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default OurServicesCards
