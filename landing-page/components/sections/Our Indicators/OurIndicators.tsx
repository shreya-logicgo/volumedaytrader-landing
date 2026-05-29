import React, { useState } from 'react'
import Badge from '@/components/ui/badge/Badge'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/subheading/SubHeading'

const highlights = [
  'Understand demand and supply strength',
  'Detect buyer vs seller pressure',
  'Analyze momentum shifts more clearly',
  'Identify stronger market participation',
  'Improve structured decision-making',
  'Reduce emotional trading behavior',
]

const OurIndicators = () => {
  const [activeTab, setActiveTab] = useState('Volume Edge')

  return (
    <div className="section-pb">
    <section className="relative z-10 mx-auto">
      <div className="relative max-w-[717px] flex flex-col gap-2 mx-auto">
        <Badge text="Our Indicators" />
      </div>

      <div className="relative z-10 mx-auto text-center section-header-stack">
        <Heading
          className="max-w-3xl mx-auto"
          text="Wyckoff Wave Volume Indicators Built For Smarter Market Analysis"
        />
        <SubHeading
          className="max-w-[820px] mx-auto leading-snug"
          text="Professional volume-based indicators designed to help traders understand demand, supply, momentum, and market structure through structured chart analysis and real-time market behavior."
        />
      </div>

      <div className="mt-12 flex justify-center">
        <div className="inline-flex items-center rounded-xl border border-card-border bg-card-bg p-1">

          <button
            type="button"
            onClick={() => setActiveTab('Volume Edge')}
            className={`rounded-lg px-5 py-2 text-lg font-medium transition-all ${activeTab === 'Volume Edge'
                ? 'bg-tab-active text-white'
                : 'text-secondary-text'
              }`}
          >
            Volume Edge
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('Smart Profiles')}
            className={`rounded-lg px-5 py-2 text-lg font-medium transition-all ${activeTab === 'Smart Profiles'
                ? 'bg-tab-active text-white'
                : 'text-secondary-text'
              }`}
          >
            Smart Profiles
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('Hidden Strategy')}
            className={`rounded-lg px-5 py-2 text-lg font-medium transition-all ${activeTab === 'Hidden Strategy'
                ? 'bg-tab-active text-white'
                : 'text-secondary-text'
              }`}
          >
            Hidden Strategy
          </button>

        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-card-border bg-card-bg p-6 md:p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_460px] lg:items-center">
          <div>
            <h3 className="text-left text-[40px] font-semibold leading-[1.1] text-white max-w-[560px]">
              Wyckoff Wave Volume Indicators For Smart Market Analysis
            </h3>
            <p className="mt-4 max-w-[560px] text-left text-lg leading-relaxed text-secondary-text">
              The Wyckoff Wave Volume Indicator helps traders analyze real buying
              and selling pressure by visualizing cumulative volume directly on
              the chart.
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
                  <span className="text-lg leading-snug text-secondary-text">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-3xl border border-ourind-image-border bg-ourind-image-bg">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
              alt="Two traders analyzing charts together"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default OurIndicators
