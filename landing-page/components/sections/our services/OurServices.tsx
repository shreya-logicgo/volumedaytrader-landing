import Badge from '@/components/ui/badge/Badge'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/subheading/SubHeading'
import { useTranslation } from 'react-i18next'
import React from 'react'
import OurServicesCards from './OurServicesCards'

const OurServices = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'services' })

  return (
    <section className="section-pb section-pt overflow-x-clip overflow-y-visible">
      <div className="relative z-20 mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="badge-wrap flex flex-col gap-2">
          <Badge text={t('badge')} />
        </div>

        <div className="section-header-stack relative z-10 mx-auto max-w-2xl text-center">
          <Heading text={t('title')} />
          <SubHeading text={t('description')} />
        </div>

        <OurServicesCards />
      </div>
    </section>
  )
}

export default OurServices
