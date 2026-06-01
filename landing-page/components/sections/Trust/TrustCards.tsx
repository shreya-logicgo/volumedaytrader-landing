import React from 'react'
import { useTranslation } from 'react-i18next'

interface TrustCardItem {
  value: string
  title: string
  description: string
}

interface TrustCardsProps {
  items?: TrustCardItem[]
  className?: string
}

const defaultItems: TrustCardItem[] = [
  {
    value: '14,200+',
    title: 'stats.activeTraders.title',
    description: 'stats.activeTraders.desc',
  },
  {
    value: '82%',
    title: 'stats.userSatisfaction.title',
    description: 'stats.userSatisfaction.desc',
  },
  {
    value: '4.7',
    title: 'stats.communityRating.title',
    description: 'stats.communityRating.desc',
  },
  {
    value: '14,200+',
    title: 'stats.globalCommunity.title',
    description: 'stats.globalCommunity.desc',
  },
]

const TrustCards = ({ items = defaultItems, className = '' }: TrustCardsProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'trust' })

  return (
    <div
      className={`grid grid-cols-1 gap-8  sm:grid-cols-2 xl:grid-cols-4  mx-auto ${className}`.trim()}
    >
      {items.map((item) => (
        <article
          key={item.title}
          className="card-ui  rounded-2xl p-8  text-left"
        >
          <div className="flex h-full gap-6 flex-col 2xl:justify-between justify-around ">
            <div className="space-y-2 flex flex-col items-start">
              <p className="text-3xl sm:text-4xl 2xl:text-5xl font-normal text-white">
                {item.value}
              </p>
            </div>
            <h3 className="card-heading  !mb-0 text-left w-full  font-semibold leading-tight text-white">
              {t(item.title)}
            </h3>
            <div className="space-y-4  ">
              <p className="card-desc text-[#A7ADBE] line-clamp-4 text-left 2xl:text-base max-w-[265px]">
                {t(item.description)}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default TrustCards
