import { MarqueeDemoVertical } from '@/components/ui/marquee-demo-vertical'
import React from 'react'
import Badge from '@/components/ui/badge/Badge';
import Heading from '@/components/ui/heading/Heading';
import SubHeading from '@/components/ui/subheading/SubHeading';

const Testimonials = () => {
  return (
    <div className='relative z-10 mx-auto text-center space-y-4  '>
      <div>
        <div className="relative max-w-[717px] flex flex-col gap-2 mx-auto">
          <Badge text='Testimonials' />
        </div>
        <div className="relative z-10 mx-auto text-center space-y-4 pt-50">
          <Heading className='max-w-xl mx-auto' text="Trusted By Traders Worldwide" />
          <SubHeading className='max-w-[780px] mx-auto' text="Experiences from traders using volume-based analysis and structured workflows." />
        </div>
        <MarqueeDemoVertical />
      </div>
    </div>
  )
}

export default Testimonials
