import React from 'react'
import Wyckoff1 from '@/assets/images/wyckoff/wyckoff-1.png'
import Wyckoff2 from '@/assets/images/wyckoff/wyckoff-2.png'
import Wyckoff3 from '@/assets/images/wyckoff/wyckoff-3.png'
import Wyckoff4 from '@/assets/images/wyckoff/wyckoff-4.png'
import Image, { StaticImageData } from 'next/image'


interface WyckoffCardItem {
  title: string
  description: string
  image: StaticImageData
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
    image: Wyckoff1,
  },
  {
    title: 'Buyer & Seller Pressure',
    description:
      'Visual volume analysis helps identify areas where buyers or sellers may be taking control of the market.',
    image: Wyckoff2,
  },
  {
    title: 'Momentum Shift Detection',
    description:
      'Recognize possible momentum transitions and market reactions through structured volume interpretation.',
    image: Wyckoff3,
  },
  {
    title: 'Structured Market Reading',
    description:
      'Designed to simplify chart analysis and help traders follow a more disciplined and organized trading workflow.',
    image: Wyckoff4,
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
            <Image
              src={item.image}
              alt={item.title}
              width={550}
              height={302}
              className="mx-auto rounded-[20px] "
            />
          </div>

          <div className="rounded-[20px] border-t bg-[#151032] p-5 flex flex-col gap-4">
            <h3 className="text-left font-semibold leading-tight card-heading">
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
