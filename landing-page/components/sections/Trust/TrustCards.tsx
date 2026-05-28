import React from 'react'

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
    title: 'Active Traders',
    description:
      'A growing trading community focused on structured analysis, market education, and volume-based trading strategies.',
  },
  {
    value: '82%',
    title: 'User Satisfaction',
    description:
      'Built around structured market analysis and educational resources designed to improve trading clarity and confidence.',
  },
  {
    value: '4.7',
    title: 'Community Rating',
    description:
      'Trusted by traders for professional indicators, PTA reports, and volume-based market analysis workflows.',
  },
  {
    value: '14,200+',
    title: 'Global Trading Community',
    description:
      'Access educational trading content, indicators, and market insights anytime from anywhere in the world.',
  },
]

const TrustCards = ({ items = defaultItems, className = '' }: TrustCardsProps) => {
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
                {item.title}
              </h3>
              <p className="card-desc line-clamp-4 text-left text-base max-w-[265px]">
                {item.description}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default TrustCards
