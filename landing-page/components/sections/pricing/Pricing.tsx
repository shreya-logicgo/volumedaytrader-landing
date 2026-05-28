import React from 'react'
import Badge from '@/components/ui/badge/Badge'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/subheading/SubHeading'

interface PricingPlan {
  tag: string
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
    tag: 'BEST INDICATORS',
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
    tag: 'RECURRING PAYMENT',
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
    tag: 'LIMITED TIME OFFER',
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
    tag: 'MOST POPULAR',
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
  return (
    <section className="relative z-10 mx-auto ">
      <div className="relative max-w-[717px] flex flex-col gap-2 mx-auto">
        <Badge text="Pricing" />
      </div>

      <div className="relative z-10 mx-auto space-y-4 pt-24 text-center sm:pt-32 md:pt-40">
        <Heading className="max-w-2xl mx-auto" text="Choose Your Trading Experience" />
        <SubHeading
          className="max-w-[780px] mx-auto"
          text="Flexible access options designed for traders at different stages."
        />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 md:grid-cols-2 xl:grid-cols-4">
        {plans.map((plan) => (
          <article
            key={plan.title}
            className={`min-w-0 overflow-hidden rounded-2xl border ${
              plan.popular
                ? 'border-[#ff2e2e] bg-[#0B082B] shadow-[0_0_0_1px_rgba(255,46,46,0.2)_inset]'
                : 'border-[#1D1938] bg-[#0D082B]'
            }`}
          >
            <div
              className={`px-4 py-2 text-center text-xs font-semibold ${
                plan.popular ? 'bg-[#ff2e2e] text-white' : 'bg-[#121041] text-[#cfd4ff]'
              }`}
            >
              {plan.tag}
            </div>

            <div className="p-5">
              <h3 className="break-words text-sm font-semibold uppercase tracking-wide text-white">{plan.title}</h3>

              <div className="mt-4 flex items-end gap-2">
                {plan.oldPrice ? (
                  <span className="text-xl text-[#7A7F99] line-through">{plan.oldPrice}</span>
                ) : null}
              </div>

              <div className="mt-1 flex flex-wrap items-end gap-2">
                <span className="text-4xl font-semibold leading-none text-white sm:text-5xl">{plan.price}</span>
                <span className="pb-1 text-base text-[#A7ADBE]">{plan.priceUnit}</span>
                {plan.discount ? (
                  <span className="pb-1 text-xs font-semibold text-[#A7ADBE]">{plan.discount}</span>
                ) : null}
              </div>

              <p className="mt-3 text-sm text-[#7E839E]">No contracts. Cancel anytime.</p>

              <button
                type="button"
                className={`mt-5 w-full rounded-full py-2.5 text-sm font-semibold ${
                  plan.popular
                    ? 'bg-[#ff2e2e] text-white'
                    : 'border border-[#2B2A56] bg-[#151341] text-white'
                }`}
              >
                {plan.cta}
              </button>

              <p className="mt-6 text-sm font-semibold text-white">What&apos;s included:</p>
              <ul className="mt-3 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm leading-relaxed text-[#A7ADBE]">
                    <span className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#FF2E2E]">
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
                    <span className="min-w-0 break-words">{feature}</span>
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
