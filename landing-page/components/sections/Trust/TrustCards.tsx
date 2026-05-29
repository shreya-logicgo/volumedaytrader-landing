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
      className={`grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 ${className}`.trim()}
    >
      {items.map((item) => (
        <article
          key={item.title}
          className="card-ui min-h-[285px]  rounded-2xl p-6 text-left"
        >
          <div className="flex h-full flex-col justify-between ">
            <p className="text-[42px] font-normal  text-white">
              {item.value}
            </p>

            <div className="space-y-4  ">
              <h3 className="card-heading text-left w-full  font-semibold leading-tight text-white">
                {t(item.title)}
              </h3>
              <p className="card-desc line-clamp-4 text-left text-base max-w-[265px]">
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
