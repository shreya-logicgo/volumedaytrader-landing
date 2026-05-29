"use client"

import { MarqueeDemoVertical } from '@/components/ui/marquee-demo-vertical'
import React from 'react'
import Badge from '@/components/ui/badge/Badge';
import Heading from '@/components/ui/heading/Heading';
import SubHeading from '@/components/ui/subheading/SubHeading';
import { useTranslation } from 'react-i18next'

const Testimonials = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'testimonials' })

  return (
    <div className="section-pb">
    <div className='relative z-10 mx-auto text-center space-y-4  '>
      <div>
        <div className="relative max-w-[717px] flex flex-col gap-2 mx-auto">
          <Badge text={t('badge')} />
        </div>
        <div className="relative z-10 mx-auto text-center section-header-stack">
          <Heading className='max-w-xl mx-auto' text={t('title')} />
          <SubHeading className='max-w-[780px] mx-auto' text={t('description')} />
        </div>
        <MarqueeDemoVertical />
      </div>
    </div>
    </div>
  )
}

export default Testimonials
