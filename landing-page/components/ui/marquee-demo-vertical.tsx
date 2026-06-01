"use client"

import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"
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
        "relative w-full max-w-[340px] overflow-hidden rounded-2xl border border-card-border bg-card-bg p-4 text-left shadow-[0px_-4px_70px_10px_#1819332B_inset]",
        "sm:p-5 md:p-6"
      )}
    >
      <div className="mb-3 font-bold leading-none text-[#ff2e2e] sm:mb-4">
        <img
          src="/assets/icons/quote.svg"
          alt=""
          className="h-8 w-9 object-contain sm:h-10 sm:w-11"
          aria-hidden
        />
      </div>

      <blockquote className="text-sm leading-snug text-secondary-text sm:text-base lg:text-lg">
        &ldquo;{body}&rdquo;
      </blockquote>

      <div className="mt-4 flex items-center gap-2.5 sm:mt-5 sm:gap-3">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1f2a65] text-xs font-semibold text-white sm:h-8 sm:w-8">
          {initial}
        </div>
        <figcaption className="text-sm font-medium text-white sm:text-base">
          {name}
        </figcaption>
      </div>
    </figure>
  )
}

export function MarqueeDemoVertical() {
  const { t } = useTranslation('translation', { keyPrefix: 'testimonials' })
  const reviews = (t('items', { returnObjects: true }) as Review[]) ?? defaultReviews
  const { firstColumn, secondColumn, thirdColumn } = splitColumns(reviews)

  return (
    <div className="relative mx-auto mt-10 flex h-[min(520px,70vh)] w-full max-w-[1128px] items-center justify-center overflow-hidden px-4 sm:mt-16 sm:h-[600px] sm:px-6 md:mt-20 md:h-[760px]">
      <div className="absolute inset-0 z-[2] rounded-3xl bg-[#0E0F21]/25" />
      <div className="grid w-full grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3">
        <Marquee pauseOnHover vertical className="[--duration:36s] [--gap:1rem] sm:[--gap:1.25rem]">
          {firstColumn.map((review) => (
            <ReviewCard key={`${review.author}-col1`} name={review.author} body={review.quote} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover vertical className="[--duration:34s] [--gap:1rem] sm:[--gap:1.25rem]">
          {secondColumn.map((review) => (
            <ReviewCard key={`${review.author}-col2`} name={review.author} body={review.quote} />
          ))}
        </Marquee>

        <Marquee pauseOnHover vertical className="[--duration:38s] [--gap:1rem] sm:[--gap:1.25rem]">
          {thirdColumn.map((review) => (
            <ReviewCard key={`${review.author}-col3`} name={review.author} body={review.quote} />
          ))}
        </Marquee>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-page-bg to-transparent sm:h-24" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-page-bg to-transparent sm:h-24" />
    </div>
  )
}
