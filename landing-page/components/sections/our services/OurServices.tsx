import Badge from '@/components/ui/badge/Badge'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/subheading/SubHeading'
import React from 'react'
import OurServicesCards from './OurServicesCards'

const OurServices = () => {
  return (
    <div>
      <div className="relative w-[717px] flex flex-col gap-2 mx-auto">
        <div className=" ">
          <Badge text='Our Services' />
          <div className="relative z-10 mx-auto text-center space-y-4 pt-50">
            <Heading text="What Will You Get When You Trade With Us?" />
            <SubHeading text="Professional trading tools, market insights, and structured learning designed for smarter trading decisions." />
          </div>
        </div>
      </div>
      <OurServicesCards />

    </div>
  )
}

export default OurServices
