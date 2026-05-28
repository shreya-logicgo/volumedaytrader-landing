import Badge from '@/components/ui/badge/Badge'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/subheading/SubHeading'
import React from 'react'
import OurServicesCards from './OurServicesCards'

const OurServices = () => {
  return (
    <div>
      <div className="relative max-w-[717px] flex flex-col gap-2 mx-auto">

        <Badge text='Our Services' />
      </div>
      <div className="relative max-w-[630px] z-10 mx-auto text-center space-y-4 pt-50">
        <Heading text="What Will You Get When You Trade With Us?" />
        <SubHeading text="Professional trading tools, market insights, and structured learning designed for smarter trading decisions." />
      </div>

      <OurServicesCards />
    </div>


  )
}

export default OurServices
