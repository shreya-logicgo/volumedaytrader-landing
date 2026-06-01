import React, { useState } from 'react'
import Badge from '@/components/ui/badge/Badge'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/subheading/SubHeading'
import { useTranslation } from 'react-i18next'

const highlights = [
  'content.points.point1',
  'content.points.point2',
  'content.points.point3',
  'content.points.point4',
  'content.points.point5',
  'content.points.point6',
]

const OurIndicators = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'ourIndicators' })
  const [activeTab, setActiveTab] = useState('volumeEdge')

  return (
    <div className="section-pb">
      <section id="our-indicators" className="relative z-10 mx-auto">
        <div className="relative max-w-[717px] flex flex-col gap-2 mx-auto">
          <Badge text={t('badge')} />
        </div>

        <div className="relative z-10 mx-auto text-center section-header-stack">
          <Heading
            className="max-w-3xl mx-auto"
            text={t('title')}
          />
          <SubHeading
            className="max-w-[820px] mx-auto leading-snug"
            text={t('description')}
          />
        </div>

        <div className="content-pt flex justify-center">
          <div className="inline-flex items-center rounded-xl border border-card-border bg-card-bg p-1">

            <button
              type="button"
              onClick={() => setActiveTab('volumeEdge')}
              className={`rounded-lg px-5 py-2 text-lg font-medium transition-all cursor-pointer ${activeTab === 'volumeEdge'
                  ? 'bg-red-600 text-white'
                  : 'text-secondary-text'
                }`}
            >
              {t('tabs.volumeEdge')}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('smartProfits')}
              className={`rounded-lg px-5 py-2 text-lg font-medium transition-all cursor-pointer ${activeTab === 'smartProfits'
                  ? 'bg-red-600 text-white'
                  : 'text-secondary-text'
                }`}
            >
              {t('tabs.smartProfits')}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('hiddenStrategy')}
              className={`rounded-lg px-5 py-2 text-lg font-medium transition-all cursor-pointer ${activeTab === 'hiddenStrategy'
                  ? 'bg-red-600 text-white'
                  : 'text-secondary-text'
                }`}
            >
              {t('tabs.hiddenStrategy')}
            </button>

          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-card-border bg-card-bg p-6 md:p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_460px] lg:items-center">
            <div>
              <h3 className="text-left 2xl:text-[40px] text-3xl font-semibold leading-[1.1] text-white max-w-[560px]">
                {t('content.title')}
              </h3>
              <p className="mt-4 max-w-[560px] text-left 2xl:text-lg leading-relaxed text-secondary-text">
                {t('content.description')}
              </p>

              <ul className="mt-6 space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-left">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-service-accent">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3 w-3 fill-none stroke-white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="2xl:text-lg leading-snug text-secondary-text">
                      {t(item)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl border border-ourind-image-border bg-ourind-image-bg">
              <img
                src="assets/images/ourindicators.png"
                alt="Two traders analyzing charts together"
                className="h-[400px] w-[500px] object-cover "
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurIndicators
