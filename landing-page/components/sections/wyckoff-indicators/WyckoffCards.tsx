import React from 'react'

interface WyckoffCardItem {
  title: string
  description: string
}

interface WyckoffCardsProps {
  items?: WyckoffCardItem[]
  className?: string
}

const defaultItems: WyckoffCardItem[] = [
  {
    title: 'Demand & Supply Analysis',
    description:
      'The indicator highlights potential demand and supply behavior to help traders understand market pressure and possible trend continuation or weakness.',
  },
  {
    title: 'Buyer & Seller Pressure',
    description:
      'Visual volume analysis helps identify areas where buyers or sellers may be taking control of the market.',
  },
  {
    title: 'Momentum Shift Detection',
    description:
      'Recognize possible momentum transitions and market reactions through structured volume interpretation.',
  },
  {
    title: 'Structured Market Reading',
    description:
      'Designed to simplify chart analysis and help traders follow a more disciplined and organized trading workflow.',
  },
]

const WyckoffCards = ({
  items = defaultItems,
  className = '',
}: WyckoffCardsProps) => {
  return (
    <div className={`grid grid-cols-1 gap-5 lg:grid-cols-2 ${className}`.trim()}>
      {items.map((item) => (
        <article
          key={item.title}
          className="overflow-hidden rounded-2xl flex flex-col gap-10 pt-10 px-[14px] pb-[14px] border border-[#1D1938] bg-[#0D082B]"
        >
          <div>
            <img width={550} height={302} src="/assets/images/trade.png" alt={item.title} className="mx-auto rounded-[20px]" />
          </div>

          <div className="rounded-[20px] border-t bg-[#151032] p-5 flex flex-col gap-4">
            <h3 className="text-left font-semibold leading-tight text-white card-heading">
              {item.title}
            </h3>
            <p className="card-desc mt-2 text-left text-[#A7ADBE]">
              {item.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}

export default WyckoffCards
