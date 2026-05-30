"use client"

import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee";
import { useTranslation } from 'react-i18next'

type Review = {
  quote: string
  author: string
}

const defaultReviews: Review[] = []

const splitColumns = (items: Review[]) => {
  const firstColumn = items.filter((_, index) => index % 3 === 0)
  const secondColumn = items.filter((_, index) => index % 3 === 1)
  const thirdColumn = items.filter((_, index) => index % 3 === 2)

  return { firstColumn, secondColumn, thirdColumn }
}

const ReviewCard = ({
  name,
  body,
}: {
  name: string
  body: string
}) => {
  const initial = name.charAt(0).toUpperCase()

  return (
    <figure
      className={cn(
        "relative w-full max-w-[340px] text-[18px] overflow-hidden rounded-2xl border border-[#1D1938] bg-[#0D082B] p-6 text-left shadow-[0px_-4px_70px_10px_#1819332B_inset]"
      )}
    >
      <div className="mb-4  font-bold leading-none text-[#ff2e2e]">
        <img src="/assets/icons/quote.svg" alt="quote" className="h-10 w-11 object-contain" />
      </div>

      <blockquote className=" leading-[1.45] text-[#A7ADBE]">
        "{body}"
      </blockquote>

      <div className="mt-5 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1f2a65] text-xs font-semibold text-white">
          {initial}
        </div>
        <figcaption className=" font-medium text-white">{name}</figcaption>
      </div>
    </figure>
  )
}

export function MarqueeDemoVertical() {
  const { t } = useTranslation('translation', { keyPrefix: 'testimonials' })
  const reviews = (t('items', { returnObjects: true }) as Review[]) ?? defaultReviews
  const { firstColumn, secondColumn, thirdColumn } = splitColumns(reviews)

  return (
    <div className="relative mx-auto mt-20 flex h-[760px] w-full max-w-[1128px] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 rounded-3xl bg-[#0E0F21]/25 z-2" />
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
        <Marquee pauseOnHover vertical className="[--duration:36s] [--gap:1.25rem]">
          {firstColumn.map((review) => (
            <ReviewCard key={`${review.author}-col1`} name={review.author} body={review.quote} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover vertical className="[--duration:34s] [--gap:1.25rem]">
          {secondColumn.map((review) => (
            <ReviewCard key={`${review.author}-col2`} name={review.author} body={review.quote} />
          ))}
        </Marquee>

        <Marquee pauseOnHover vertical className="[--duration:38s] [--gap:1.25rem]">
          {thirdColumn.map((review) => (
            <ReviewCard key={`${review.author}-col3`} name={review.author} body={review.quote} />
          ))}
        </Marquee>
      </div>
      {/* 
      <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#050024] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#050024] to-transparent" /> */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#050024] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050024] to-transparent" />
    </div>
  )
}
