import React, { useState } from 'react'
import Badge from '@/components/ui/badge/Badge'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/subheading/SubHeading'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'

const highlights = [
  'content.points.point1',
  'content.points.point2',
  'content.points.point3',
  'content.points.point4',
  'content.points.point5',
  'content.points.point6',
]

const tabs = [
  { id: 'volumeEdge' as const, labelKey: 'tabs.volumeEdge' },
  { id: 'smartProfits' as const, labelKey: 'tabs.smartProfits' },
  { id: 'hiddenStrategy' as const, labelKey: 'tabs.hiddenStrategy' },
]

const OurIndicators = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'ourIndicators' })
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]['id']>('volumeEdge')

  return (
    <div className="section-pb">
      <section id="our-indicators" className="relative z-10 mx-auto">
        <div className="relative mx-auto flex w-full max-w-[717px] flex-col gap-2 overflow-hidden">
          <Badge text={t('badge')} />
        </div>

        <div className="section-header-stack relative z-10 mx-auto text-center">
          <Heading className="mx-auto max-w-3xl px-1 sm:px-0" text={t('title')} />
          <SubHeading
            className="mx-auto max-w-[820px] px-2 leading-snug sm:px-0"
            text={t('description')}
          />
        </div>

        <div className="content-pt flex justify-center px-4 sm:px-6">
          <div
            className={cn(
              'flex w-full max-w-md flex-col gap-1 rounded-xl border border-card-border bg-card-bg p-1',
              'sm:inline-flex sm:w-auto sm:max-w-none sm:flex-row sm:items-center'
            )}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'w-full cursor-pointer rounded-lg px-3 py-2 text-center text-sm font-medium transition-all',
                  'sm:w-auto sm:px-4 sm:py-2 sm:text-sm md:px-5 md:text-base',
                  activeTab === tab.id
                    ? 'bg-tab-active text-white shadow-control-inset'
                    : 'text-secondary-text hover:text-white'
                )}
              >
                {t(tab.labelKey)}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-[1200px] rounded-3xl border border-card-border bg-card-bg p-4 sm:mt-8 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_500px] lg:items-center lg:gap-8">
            <div>
              <h3 className="card-heading max-w-[560px] text-left text-xl font-semibold leading-tight text-white sm:text-2xl lg:text-3xl 2xl:text-[40px] 2xl:leading-[1.1]">
                {t('content.title')}
              </h3>
              <p className="card-desc mt-3 max-w-[560px] text-left leading-relaxed sm:mt-4">
                {t('content.description')}
              </p>

              <ul className="mt-4 space-y-2.5 sm:mt-6 sm:space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-left sm:gap-3">
                    <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-service-accent sm:mt-1 sm:h-5 sm:w-5">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-2.5 w-2.5 fill-none stroke-white sm:h-3 sm:w-3"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm leading-snug text-secondary-text sm:text-base lg:text-lg">
                      {t(item)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-ourind-image-border bg-ourind-image-bg sm:rounded-3xl">
              <img
                src="/assets/images/ourindicators.png"
                alt="Two traders analyzing charts together"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurIndicators
