"use client"

import { MarqueeDemoVertical } from '@/components/ui/marquee-demo-vertical'
import Badge from '@/components/ui/badge/Badge'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/subheading/SubHeading'
import { useTranslation } from 'react-i18next'

const Testimonials = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'testimonials' })

  return (
    <section className="section-pb relative z-10 mx-auto">
      <div className="px-4 text-center sm:px-6">
        <div className="relative mx-auto flex w-full max-w-[717px] flex-col gap-2 overflow-hidden">
          <Badge text={t('badge')} />
        </div>

        <div className="section-header-stack relative z-10 mx-auto">
          <Heading className="mx-auto max-w-xl px-1 sm:px-0" text={t('title')} />
          <SubHeading
            className="mx-auto max-w-[780px] px-2 sm:px-0"
            text={t('description')}
          />
        </div>
      </div>

      <MarqueeDemoVertical />
    </section>
  )
}

export default Testimonials
