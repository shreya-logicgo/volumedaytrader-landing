'use client'

import React, { useState } from 'react'
import type { CarouselApi } from '@/components/ui/carousel'

import Badge from '@/components/ui/badge/Badge'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/subheading/SubHeading'
import PTACards from '@/components/sections/pta/PTACards'

import { ChevronLeft, ChevronRight } from 'lucide-react'

import PtaGrad from '@/assets/images/gradients/pta-gradient.png'
import Image from 'next/image'
import SideGradients from '@/components/common/backgrounds/SideGradients'

const PTA = () => {
  const [api, setApi] = useState<CarouselApi>()

  return (
    <section className="relative section-pb">
      <SideGradients />
      <div className="mx-auto max-w-4xl text-center">
        <div className="relative max-w-[717px] flex flex-col gap-2 mx-auto">
          <Badge text="PTA Signal Reports" />
        </div>

        <div className="relative z-10 mx-auto section-header-stack">
          <Heading
            className="max-w-[630px] mx-auto"
            text="How Do PTA (Potential Trading Area) Signals Work?"
          />
          <SubHeading
            className="max-w-2xl mx-auto"
            text="PTA signals analyze volume behavior and market structure to highlight potential buy zones, liquidity areas, and momentum shifts for tactical trading decisions."
          />
        </div>
      </div>

      <div className="relative mt-10">
        {/* <Image
          src={PtaGrad}
          alt=""
          className="absolute max-w-[852px] opacity-59 left-[-610px] top-1/2 -translate-y-1/2 rotate-180"
        />

        <Image
          src={PtaGrad}
          alt=""
          className="absolute max-w-[852px] opacity-59 right-[-610px] top-1/2 -translate-y-1/2"
        /> */}

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