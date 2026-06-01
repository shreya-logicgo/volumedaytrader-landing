import Badge from '@/components/ui/badge/Badge'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/subheading/SubHeading'
import React from 'react'
import { useTranslation } from 'react-i18next'
import IndicatorSystemCarousal from './IndicatorSystemCarousal'

const IndicatorSystem = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'indicators' })

  return (
    <div id="how-indicators-work" className='relative max-w-[2400px] z-10 mx-auto px-0 section-pb'>
      <div className="relative max-w-[717px] flex flex-col gap-2 mx-auto">
        <Badge text={t('badge')} />
      </div>
      <div className="relative z-10 mx-auto text-center section-header-stack ">
        <Heading className=' mx-auto' text={t('title')} />
        <SubHeading className='max-w-[780px] mx-auto leading-snug' text={t('description')} />
      </div>
      <IndicatorSystemCarousal />

    </div>
  )
}
export default IndicatorSystem
