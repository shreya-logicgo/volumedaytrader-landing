import React from 'react'
import Badge from '@/components/ui/badge/Badge'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/subheading/SubHeading'
import { useTranslation } from 'react-i18next'

interface PricingPlan {
  key: 'wyckoffIndicators' | 'monthlyAccess' | 'annualAccess' | 'lifetimeAccess'
  tag: string
  svg?: string
  title: string
  oldPrice?: string
  price: string
  priceUnit: string
  discount?: string
  features: string[]
  cta: string
  popular?: boolean
}

const plans: PricingPlan[] = [
  {
    key: 'wyckoffIndicators',
    tag: 'BEST INDICATORS',
    svg: '/assets/icons/star1.svg',
    title: 'WYCKOFF INDICATORS',
    price: '$67',
    priceUnit: '/Monthly',
    features: [
      'Cumulative Volume Indicator: "Wyckoff Wave Volume"',
      'Cumulative Volume Indicator: "Wyckoff Wave Chart"',
      'Indicators run on the platform',
      'TradingView',
      'Instructions for installing and adjusting the indicator to different values',
    ],
    cta: 'Buy Now',
  },
  {
    key: 'monthlyAccess',
    tag: 'RECURRING PAYMENT',
    svg: '/assets/icons/star2.svg',
    title: 'MONTHLY ACCESS',
    price: '$87',
    priceUnit: '/Monthly',
    discount: '31.53% Off',
    features: [
      "Richard Wyckoff's Comprehensive Course",
      'Volume Distribution Analysis [VSA] Course',
      'Daily US PTA Signal Report',
      'Mastering the Richard Wyckoff Method - Practical Classes for Traders',
      'Premium Indicators',
      'Commentary and Market Analysis',
      'Discord Trading Group 24/7',
      'Wyckoff Indicators',
    ],
    cta: 'Buy Now',
  },
  {
    key: 'annualAccess',
    tag: 'LIMITED TIME OFFER',
    svg: '/assets/icons/star3.svg',
    title: 'ANNUAL ACCESS',
    oldPrice: '$1,700',
    price: '$850',
    priceUnit: '/Annual',
    discount: '50% off',
    features: [
      "Richard Wyckoff's Comprehensive Course",
      'Volume Distribution Analysis [VSA] Course',
      'Daily US PTA Signal Report',
      'Mastering the Richard Wyckoff Method - Practical Classes for Traders',
      'Premium Indicators',
      'Commentary and Market Analysis',
      'Discord Trading Group 24/7',
      'Wyckoff Indicators',
      'Advanced Forex + Price Action Course',
      'Binance for Beginners - Crypto Course',
      'Access to the Community',
    ],
    cta: 'Buy Now',
  },
  {
    key: 'lifetimeAccess',
    tag: 'MOST POPULAR',
    svg: '/assets/icons/star4.svg',
    title: 'LIFETIME ACCESS',
    oldPrice: '$6,250',
    price: '$1,250',
    priceUnit: '/Lifetime',
    discount: '80% Off',
    features: [
      "Richard Wyckoff's Comprehensive Course",
      'Volume Distribution Analysis [VSA] Course',
      'Daily US PTA Signal Report',
      'Mastering the Richard Wyckoff Method - Practical Classes for Traders',
      'Premium Indicators',
      'Commentary and Market Analysis',
      'Discord Trading Group 24/7',
      'Wyckoff Indicators',
      'Advanced Forex + Price Action Course',
      'Binance for Beginners - Crypto Course',
      'Access to the Community',
    ],
    cta: 'Buy Now',
    popular: true,
  },
]

const Pricing = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'pricing' })

  return (
    <section className="relative max-w-[1480px] z-10 mx-auto px-0 section-pb">
      <div className="relative max-w-[717px] flex flex-col gap-2 mx-auto">
        <Badge text={t('badge')} />
      </div>

      <div className="relative z-10 text-center section-header-stack">
        <Heading className="max-w-2xl mx-auto" text={t('title')} />
        <SubHeading className="max-w-[780px] mx-auto" text={t('description')} />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 md:grid-cols-2 xl:grid-cols-4">
        {plans.map((plan) => (
          <article
            key={plan.key}
            className={`group hover:cursor-pointer min-w-0 xl:max-h-fit overflow-hidden rounded-3xl p-0.5 transition-all duration-300 ${
                'bg-pricing-header hover:bg-tab-active hover:shadow-[0_0_0_1px_rgba(255,46,46,0.2)_inset]'
              }`}
          >
            <div
              className={`px-4 py-2 text-center text-lg font-semibold transition-all duration-300 ${
               'bg-pricing-header text-pricing-header group-hover:bg-service-accent group-hover:text-white'
              }`}
            >
              {t(`plans.${plan.key}.tag`)}
            </div>

            <div className="p-5 bg-card-bg rounded-3xl xl:h-fit h-[730px] ">
              <h3 className="break-words flex items-center text-sm font-semibold uppercase tracking-wide text-white">
                <span>{plan.svg && <img src={plan.svg} alt={t(`plans.${plan.key}.title`)} className="h-6 w-6 inline-block mr-2" />}</span>
                {t(`plans.${plan.key}.title`)}
              </h3>
              <div className="mt-4 flex items-end gap-2">
                {plan.oldPrice ? (
                  <span className="text-[32px] font-bold text-[var(--color-oldprice-rgba)] line-through">{plan.oldPrice}</span>
                ) : null}
              </div>

              <div className="mt-1 flex flex-wrap items-end gap-2">
                <span className="text-4xl font-semibold leading-none text-white sm:text-[40px]">{plan.price}</span>
                <span className="pb-1 text-base text-price-unit">{t(`plans.${plan.key}.duration`)}</span>
                {plan.discount ? (
                  <span className="my-auto text-base font-medium text-white">{t(`plans.${plan.key}.discount`)}</span>
                ) : null}
              </div>

              <p className="mt-3 text-base text-secondary-text">{t(`plans.${plan.key}.note`)}</p>

              <button
                type="button"
                className={`mt-5 hover:cursor-pointer w-full rounded-full py-2.5 text-lg font-medium shadow-[inset_0px_1px_3.18px_0px_#FFFFFF80] transition-all duration-300 ${
                 'border border-btn-border bg-signal-panel-bg text-white group-hover:bg-service-accent group-hover:border-transparent'
                }`}
              >
                {t(`plans.${plan.key}.button`)}
              </button>

              <p className="mt-6 text-lg font-semibold text-white">{t(`plans.${plan.key}.includedTitle`)}</p>
              <ul className="mt-3 space-y-2">
                {plan.features.map((_, index) => (
                  <li key={`${plan.key}-feature-${index}`} className="flex items-start gap-2 text-lg leading-snug text-feature-text">
                    <span className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-service-accent">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-2.5 w-2.5 fill-none stroke-white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="min-w-0 break-words">{t(`plans.${plan.key}.features.feature${index + 1}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Pricing