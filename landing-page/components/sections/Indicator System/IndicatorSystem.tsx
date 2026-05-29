import Badge from '@/components/ui/badge/Badge'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/subheading/SubHeading'
import React from 'react'
import IndicatorSystemCarousal from './IndicatorSystemCarousal'

const IndicatorSystem = () => {
  return (
    <div className="section-pb">
            <div className="relative max-w-[717px] flex flex-col gap-2 mx-auto">
                <Badge text='Indicator System' />
            </div>
            <div className="relative z-10 mx-auto text-center section-header-stack ">
                <Heading className=' mx-auto' text="Wyckoff Wave Volume Indicators" />
                <SubHeading className='max-w-[780px] mx-auto leading-snug' text="Professional volume-based indicators designed to help traders understand momentum, liquidity, demand, supply, and market structure with more clarity and confidence." />
            </div>
            <IndicatorSystemCarousal />

        </div>
  )
}

export default IndicatorSystem
