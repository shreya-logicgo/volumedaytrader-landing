import Badge from '@/components/ui/badge/Badge'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/subheading/SubHeading'
import React from 'react'
import PTACards from '@/components/sections/pta/PTACards'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import PtaGrad from '@/assets/images/gradients/pta-gradient.png'
import Image from 'next/image'

const PTA = () => {
  return (
    <section className="py-20 md:py-28">
  <div className="mx-auto max-w-4xl text-center">
    <div className="relative max-w-[717px] flex flex-col gap-2 mx-auto">
      <Badge text="PTA Signal Reports" />
    </div>

    <div className="relative z-10 mx-auto space-y-4 pt-50">
      <Heading
        className="max-w-3xl mx-auto"
        text="How Do PTA (Potential Trading Area) Signals Work?"
      />
      <SubHeading
        className="max-w-2xl mx-auto"
        text="PTA signals analyze volume behavior and market structure to highlight potential buy zones, liquidity areas, and momentum shifts for tactical trading decisions."
      />
    </div>
  </div>

<div className="relative mt-10">
  {/* Left Gradient */}
  <Image
  src={PtaGrad}
  alt=""
  className="
    absolute
    max-w-[852px]
    opacity-59
    left-[-610px]
    top-1/2
    -translate-y-1/2
    rotate-180
  "
/>

  {/* Right Gradient */}
 <Image
  src={PtaGrad}
  alt=""
  className="
    absolute
    max-w-[852px]
    opacity-59
    right-[-610px]
    top-1/2
    -translate-y-1/2
  "
/>
 
  {/* Cards + Navigation */}
  <div className="relative mt-10">
    <button
      className="
        absolute
        left-[-24px]
        top-1/2
        -translate-y-1/2
        z-30
        h-16
        w-16
        rounded-full
        border border-[#2A2450]
        bg-[#161032]
        flex items-center justify-center
        text-white
      "
    >
      <ChevronLeft size={24} />
    </button>

    <button
      className="
        absolute
        right-[-24px]
        top-1/2
        -translate-y-1/2
        z-30
        h-16
        w-16
        rounded-full
        border border-[#2A2450]
        bg-[#161032]
        flex items-center justify-center
        text-white
      "
    >
      <ChevronRight size={24} />
    </button>
<div className="max-w-[1165px] mx-auto overflow-hidden">
    <PTACards />
</div>
 </div>
  </div>
</section>
  )
}

export default PTA

