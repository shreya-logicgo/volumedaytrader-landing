import Badge from '@/components/ui/badge/Badge'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/subheading/SubHeading'
import React from 'react'
import { useTranslation } from 'react-i18next'
import IndicatorSystemCarousal from './IndicatorSystemCarousal'
import CurveGradient from './CurveGradient'

const IndicatorSystem = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'indicators' })

  return (
    <div
      id="how-indicators-work"
      className="scroll-anchor-offset relative z-10 mx-auto max-w-screen-2xl overflow-visible px-0 section-pb"
    >
      <div className="relative z-20">
        <div className="relative mx-auto flex w-full max-w-3xl flex-col gap-2 overflow-hidden">
          <Badge text={t('badge')} />
        </div>
        <div className="section-header-stack relative z-10 mx-auto text-center">
          <Heading className="mx-auto" text={t('title')} />
          <SubHeading className="mx-auto max-w-3xl leading-snug" text={t('description')} />
        </div>
      </div>


      <div className="relative">
        {/* Curve sits behind carousel, fades into page bg */}
        <CurveGradient className="xl:-top-10 md:top-15" />
        <div className="relative z-10">
          <IndicatorSystemCarousal />
        </div>
      </div>

    </div>
  )
}
export default IndicatorSystem
