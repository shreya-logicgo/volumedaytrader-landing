"use client"

import Link from 'next/link'
import Image from 'next/image'
import ErrorLogo from "@/assets/icons/error.png"

import {
    FaYoutube,
    FaDiscord,
    FaTelegram,
    FaInstagram,
    FaXTwitter,
} from 'react-icons/fa6'

import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/subheading/SubHeading'

import Logo from '@/assets/logo/logo.svg'
import sections from '@/assets/images/gradients/footer-gradient.png'
import Vector from "@/assets/icons/Vector.svg";
import FooterBackground from '@/components/common/backgrounds/FooterBackground'
import Container from '@/components/layout/container/Container'
import { useTranslation } from 'react-i18next'
import { Particles } from "@/components/ui/particles";

const Footer = () => {
    const { t } = useTranslation('translation')

    return (
        <footer id="contact" className="relative overflow-hidden  pb-10 container-spacing">
            <FooterBackground />
            {/* Background */}
            {/* <Container> */}
            <div className="relative z-10 mx-auto">
                {/* CTA */}
                <div className="relative overflow-hidden py-16">
                    {/* Particles only here */}
                    <div className="absolute inset-0 pointer-events-none">
                        <Particles
                            quantity={120}
                            size={1}
                            color="#fff"
                            className="h-full w-full opacity-70"
                        />
                    </div>
                    <div className="space-y-5 px-2 sm:px-0 relative z-10">
                        <Heading text={t('footer.cta.title')} />

                        <SubHeading className="mx-auto max-w-[650px] leading-6" text={t('footer.cta.description')} />
                        <div className="flex justify-center">

                            <Link href="https://volumedaytrader.com/login/" className="btn-primary  shadow-control-inset mt-3">
                                {t('footer.cta.button')}
                                <Vector className="h-3 w-3 shrink-0" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Footer Grid */}
                <div className="grid grid-cols-1 gap-y-10 gap-x-8 pt-16 sm:pt-20 md:grid-cols-2 lg:grid-cols-[3fr_1fr_1fr_1fr] lg:gap-x-12 xl:pt-24">
                    {/* Left */}
                    <div className="space-y-8 md:col-span-2 lg:col-span-1">
                        <div className="space-y-5">
                            <Logo className="h-auto w-[240px] max-w-full sm:w-[280px] lg:w-[303px]" role="img" aria-label="VDLTRA logo" />

                            <div className="space-y-3">
                                <h3 className="text-lg font-semibold text-white sm:text-xl">
                                    {t('footer.company.consultationTitle')}
                                </h3>

                                <p className="max-w-[450px] text-sm leading-6 text-secondary-text sm:text-base sm:leading-6">
                                    {t('footer.company.consultationDescription')}
                                </p>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="space-y-4">
                            <p className="text-base font-medium text-white sm:text-lg">
                                {t('footer.company.socialTitle')}
                            </p>

                            <div className="flex flex-wrap items-center gap-3">
                                {[
                                    FaYoutube,
                                    FaDiscord,
                                    FaXTwitter,
                                    FaInstagram,
                                    FaTelegram,
                                ].map((Icon, idx) => (
                                    <div
                                        key={idx}
                                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-card-border bg-card-bg text-white transition-all duration-300 hover:bg-white hover:text-black"
                                    >
                                        <Icon size={22} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Home */}
                    <div className="flex flex-col gap-3 md:col-span-1">
                        <h3 className="text-lg font-medium text-white sm:text-xl">
                            {t('footer.navigation.home')}
                        </h3>

                        {[
                            t('footer.navigation.indicators'),
                            t('footer.navigation.ptaReports'),
                            t('footer.navigation.pricing'),
                            t('footer.navigation.tradingCommunity'),
                            t('footer.navigation.marketAnalysis'),
                        ].map((item, idx) => (
                            <Link
                                key={idx}
                                href="/"
                                className="text-sm text-secondary-text transition-colors duration-300 hover:text-white sm:text-base lg:text-lg"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* Resources */}
                    <div className="flex flex-col gap-3 md:col-span-1">
                        <h3 className="text-lg font-medium text-white sm:text-xl">
                            {t('footer.resources.title')}
                        </h3>

                        {[
                            t('footer.resources.blogs'),
                            t('footer.resources.tradingEducation'),
                            t('footer.resources.faq'),
                            t('footer.resources.affiliateProgram'),
                        ].map((item, idx) => (
                            <Link
                                key={idx}
                                href="/"
                                className="text-sm text-secondary-text transition-colors duration-300 hover:text-white sm:text-base lg:text-lg"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-3 md:col-span-1">
                        <h3 className="text-lg font-medium text-tertiary-text sm:text-xl">
                            {t('footer.contact.title')}
                        </h3>

                        {[
                            t('footer.contact.support'),
                            t('footer.contact.affiliateSupport'),
                        ].map((item, idx) => (
                            <Link
                                key={idx}
                                href="/"
                                className="text-sm text-secondary-text transition-colors duration-300 hover:text-white sm:text-base lg:text-lg"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="mt-12 rounded-2xl border border-card-border bg-card-bg px-4 py-4 sm:mt-16 sm:px-6 sm:py-5">
                    <div className="flex items-start gap-3 sm:gap-4">
                        <Image
                            src={ErrorLogo}
                            alt="warning icon"
                            className="mt-1 h-5 w-5 shrink-0"
                        />
                        <p className="text-sm leading-6 text-secondary-text sm:text-base sm:leading-6">
                            <span className="font-medium text-secondary-text">
                                {t('footer.riskDisclaimerLabel')}
                            </span>{' '}
                            {t('footer.riskDisclaimer')}
                        </p>
                    </div>
                </div>
            </div>
            {/* </Container> */}
        </footer>
    )
}

export default Footer