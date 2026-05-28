import Link from 'next/link'

import {
  FaYoutube,
  FaDiscord,
  FaTelegram,
  FaInstagram,
  FaXTwitter,
} from 'react-icons/fa6'

import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/subheading/SubHeading'

import logo from '@/assets/logo/logo.svg'

const Footer = () => {
  return (
    <footer className="relative overflow-hidden pt-24 pb-10 container-spacing">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050024]" />
      

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* CTA */}
        <div className="max-w-[760px] mx-auto text-center">
          <div className="space-y-5">
            <Heading text="Follow Smart Money. Trade With Structure." />

            <SubHeading text="Professional volume indicators and structured market insights designed for smarter trading decisions." />

            <button className="mt-3 px-7 py-3 rounded-full bg-[#FF2E2E] shadow-[0_4px_14px_rgba(255,46,46,0.35)] text-white text-sm font-medium">
              Get Access ↗
            </button>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-14 pt-24">
          {/* Left */}
          <div className="space-y-8">
            <div className="space-y-5">
              <img
                src={typeof logo === 'string' ? logo : logo.src}
                alt="logo"
                className="w-[220px] h-auto"
              />

              <div className="space-y-3">
                <h3 className="text-white text-xl font-semibold">
                  Book a Call For Free Consultation
                </h3>

                <p className="text-secondary-text text-sm leading-6 max-w-[330px]">
                  Professional volume indicators, PTA signal
                  reports, market analysis, and structured trading
                  education designed for smarter trading decisions.
                </p>
              </div>
            </div>

            {/* Socials */}
            <div className="space-y-4">
              <p className="text-white font-medium">
                Our Social Handles
              </p>

              <div className="flex items-center gap-3">
                {[
                  FaYoutube,
                  FaDiscord,
                  FaXTwitter,
                  FaInstagram,
                  FaTelegram,
                ].map((Icon, idx) => (
                  <div
                    key={idx}
                    className="w-10 h-10 rounded-xl border border-card-border bg-card-bg flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
                  >
                    <Icon size={16} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Home */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white text-lg font-semibold">
              Home
            </h3>

            {[
              'Indicators',
              'PTA Reports',
              'Pricing',
              'Trading Community',
              'Market Analysis',
            ].map((item, idx) => (
              <Link
                key={idx}
                href="/"
                className="text-secondary-text text-sm hover:text-white transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white text-lg font-semibold">
              Resources
            </h3>

            {[
              'Blogs',
              'Trading Education',
              'FAQ',
              'Affiliate Program',
            ].map((item, idx) => (
              <Link
                key={idx}
                href="/"
                className="text-secondary-text text-sm hover:text-white transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white text-lg font-semibold">
              Contact
            </h3>

            {[
              'Support',
              'Affiliate Support',
            ].map((item, idx) => (
              <Link
                key={idx}
                href="/"
                className="text-secondary-text text-sm hover:text-white transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 rounded-2xl border border-card-border bg-card-bg px-6 py-5">
          <p className="text-[13px] leading-6 text-secondary-text">
            <span className="text-white font-medium">
              Risk Disclaimer:
            </span>{' '}
            Trading financial instruments carries a high level of
            risk and may not be suitable for all investors. Past
            performance is not indicative of future results. The
            content on VDLTRA.fr is for educational purposes only
            and does not constitute financial advice. Trade at your
            own risk.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer