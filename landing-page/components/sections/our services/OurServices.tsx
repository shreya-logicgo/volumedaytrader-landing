import Badge from '@/components/ui/badge/Badge'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/subheading/SubHeading'
import { useTranslation } from 'react-i18next'
import React from 'react'
import OurServicesCards from './OurServicesCards'

const OurServices = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'services' })

  return (
    <div className="section-pb">
      <div className="relative max-w-[717px] flex flex-col gap-2 mx-auto">

        <Badge text={t('badge')} />
      </div>
      <div className="relative max-w-[630px] z-10 mx-auto text-center section-header-stack">
        <Heading text={t('title')} />
        <SubHeading text={t('description')} />
      </div>

      <OurServicesCards />
    </div>


  )
}

export default OurServices
