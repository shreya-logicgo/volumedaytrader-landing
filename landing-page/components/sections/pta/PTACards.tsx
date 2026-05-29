'use client'

import React from 'react'
import Image from 'next/image'
import Chart from '@/assets/images/chart/chart2.png'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from '@/components/ui/carousel'

interface PTACardItem {
  title: string
  description: string
}

interface PTACardsProps {
  items?: PTACardItem[]
  className?: string
  setApi?: (api: CarouselApi) => void
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
  {
    title: 'Market Structure Mapping',
    description:
      'Tracks key support and resistance zones based on volume concentration and historical reactions.',
  },
  {
    title: 'Momentum Confirmation',
    description:
      'Identifies momentum shifts using volume expansion and directional strength.',
  },
]

const PTACards = ({
  items = defaultItems,
  className = '',
  setApi,
}: PTACardsProps) => {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      setApi={setApi}
      className={className}
    >
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem
            key={item.title}
            className="md:basis-1/2"
          >
            <article className="overflow-hidden rounded-2xl flex flex-col gap-5 pt-6 px-6 pb-6 border border-[#1D1938] bg-[#0D082B] h-full">
              <Image
                src={Chart}
                alt={item.title}
                width={526}
                height={324}
                className="w-full h-[324px] object-cover rounded-[20px]"
              />

              <div className="flex flex-col gap-4">
                <h3 className="card-heading text-left font-semibold text-white">
                  {item.title}
                </h3>

                <p className="card-desc text-left text-[#A7ADBE]">
                  {item.description}
                </p>
              </div>
            </article>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default PTACards