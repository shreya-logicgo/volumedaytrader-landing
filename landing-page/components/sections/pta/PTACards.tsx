import React from 'react'
import Image from 'next/image'
import Chart from '@/assets/images/chart/chart2.png'

interface PTACardItem {
  title: string
  description: string
}

interface PTACardsProps {
  items?: PTACardItem[]
  className?: string
}

const defaultItems: PTACardItem[] = [
  {
    title: 'PTA Buy Zone Detection',
    description:
      'Highlights probable buy zones by combining structured volume with recent price action to surface areas where buying pressure may resume.',
  },
  {
    title: 'Volume & Liquidity Analysis',
    description:
      'Analyzes volume clusters and liquidity to indicate potential breakout or distribution regions and assess trade conviction.',
  },
]

const PTACards = ({ items = defaultItems, className = '' }: PTACardsProps) => {
  return (
    <div className={`grid grid-cols-1 gap-6 lg:grid-cols-2 ${className}`.trim()}>
      {items.map((item) => (
        <article
          key={item.title}
          className="overflow-hidden rounded-2xl flex flex-col gap-8 pt-6 px-6 pb-6 border border-[#1D1938] bg-[#0D082B]"
        >
          <div>
            {/* Use next/image which accepts StaticImageData imports */}
            <Image
              src={Chart}
              alt={item.title}
              width={526}
              height={324}
              className="mx-auto w-full h-[324px] object-cover rounded-[20px]"
              priority={false}
            />
          </div>

          <div className="rounded-[20px] border-t bg-[#151032] p-6 flex flex-col gap-4">
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

export default PTACards
