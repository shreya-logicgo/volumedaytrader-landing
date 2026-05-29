'use client'

import React, { useState } from 'react'
import type { CarouselApi } from '@/components/ui/carousel'
import { useTranslation } from 'react-i18next'

import Badge from '@/components/ui/badge/Badge'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/subheading/SubHeading'
import PTACards from '@/components/sections/pta/PTACards'

import { ChevronLeft, ChevronRight } from 'lucide-react'

import SideGradients from '@/components/common/backgrounds/SideGradients'

const PTA = () => {
  const [api, setApi] = useState<CarouselApi>()
  const { t } = useTranslation('translation', { keyPrefix: 'ptaReports' })

  return (
    <section className="relative section-pb">
      <SideGradients />
      <div className="mx-auto max-w-4xl text-center">
        <div className="relative max-w-[717px] flex flex-col gap-2 mx-auto">
          <Badge text={t('badge')} />
        </div>

        <div className="relative z-10 mx-auto section-header-stack">
          <Heading
            className="max-w-[700px] mx-auto"
            text={t('title')}
          />
          <SubHeading
            className="max-w-2xl mx-auto"
            text={t('description')}
          />
        </div>
      </div>

      <div className="relative mt-10">
        <div className="relative mt-10">
          {/* Previous */}
          <button
            onClick={() => api?.scrollPrev()}
            className="
              absolute left-[-24px]
              top-1/2 -translate-y-1/2
              z-30 h-16 w-16
              rounded-full border border-[#2A2450]
              bg-[#161032]
              flex items-center justify-center
              text-white
            "
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next */}
          <button
            onClick={() => api?.scrollNext()}
            className="
              absolute right-[-24px]
              top-1/2 -translate-y-1/2
              z-30 h-16 w-16
              rounded-full border border-[#2A2450]
              bg-[#161032]
              flex items-center justify-center
              text-white
            "
          >
            <ChevronRight size={24} />
          </button>

          <div className="max-w-[1165px] mx-auto mt-20 overflow-hidden">
            <PTACards setApi={setApi} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PTA