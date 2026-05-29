'use client'

import { useEffect, useState } from 'react'
import type { CarouselApi } from '@/components/ui/carousel'
import { useTranslation } from 'react-i18next'

import Badge from '@/components/ui/badge/Badge'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/subheading/SubHeading'
import PTACards from '@/components/sections/pta/PTACards'

// import { ChevronLeft, ChevronRight } from 'lucide-react'

import PtaGrad from '@/assets/images/gradients/pta-gradient.png'
import Image from 'next/image'
import SideGradients from '@/components/common/backgrounds/SideGradients'

import { ChevronLeft, ChevronRight, Container } from 'lucide-react'
import { cn } from '@/lib/utils'

const navButtonClass =
  'z-30 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#2A2450] bg-[#161032] text-white transition-opacity hover:bg-[#1e1640] disabled:cursor-not-allowed disabled:opacity-35 sm:h-12 sm:w-12 2xl:h-14 2xl:w-14'

const PTA = () => {
  const [api, setApi] = useState<CarouselApi>()
   const { t } = useTranslation('translation', { keyPrefix: 'ptaReports' })
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }

    onSelect()
    api.on('select', onSelect)
    api.on('reInit', onSelect)

    return () => {
      api.off('select', onSelect)
      api.off('reInit', onSelect)
    }
  }, [api])

  return (
    <section className="section-pb relative overflow-x-visible">



<div className="relative max-w-200">




</div>
      {/* <SideGradients /> */}


      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="relative mx-auto flex max-w-[717px] flex-col gap-2">
          <Badge text={t('badge')} />
        </div>

        <div className="section-header-stack relative z-10 mx-auto">
          <Heading
            className="mx-auto max-w-[630px] text-balance"
           text={t('title')}
          />
          <SubHeading
            className="mx-auto max-w-2xl text-pretty px-1"
 text={t('description')}          />
        </div>
      </div>

      <div className="relative mx-auto mt-8 w-full max-w-[1165px] px-4 sm:mt-10 sm:px-6 lg:px-8">
        {/* Mobile / small tablet: full-width carousel, controls below */}
        {/* sm+: controls flanking carousel */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-4 2xl:gap-6">
          <button
            type="button"
            onClick={() => api?.scrollPrev()}
            disabled={!canScrollPrev}
            aria-label="Previous slide"
            className={cn(navButtonClass, 'order-2 mx-auto sm:order-1 sm:mx-0')}
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <div className="order-1 min-w-0 flex-1 overflow-hidden sm:order-2">
            <PTACards setApi={setApi} />
          </div>

          <button
            type="button"
            onClick={() => api?.scrollNext()}
            disabled={!canScrollNext}
            aria-label="Next slide"
            className={cn(navButtonClass, 'order-3 mx-auto sm:order-3 sm:mx-0')}
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default PTA
