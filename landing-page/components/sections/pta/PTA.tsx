import Badge from '@/components/ui/badge/Badge'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/subheading/SubHeading'
import React from 'react'
import PTACards from '@/components/sections/pta/PTACards'

const PTA = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <div className="relative max-w-[717px] flex flex-col gap-2 mx-auto">
          <Badge text="PTA Signal Reports" />
        </div>

        <div className="relative z-10 mx-auto space-y-4 pt-50">
          <Heading className="max-w-3xl mx-auto" text="How Do PTA Signals Work?" />
          <SubHeading
            className="max-w-2xl mx-auto"
            text="PTA signals analyze volume behavior and market structure to highlight potential buy zones, liquidity areas, and momentum shifts for tactical trading decisions."
          />
        </div>
      </div>

      <PTACards className="mt-10" />
    </section>
  )
}

export default PTA
