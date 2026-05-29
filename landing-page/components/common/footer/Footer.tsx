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

const Footer = () => {
    return (
        <footer className="relative overflow-hidden pt-20 pb-10 container-spacing">
            <FooterBackground />
            {/* Background */}
            <Container>
                <div className="absolute inset-0 " />

                {/* <Image
                src={sections}
                alt="footer gradient"
                className="absolute bottom-0 left-0 w-full opacity-40 pointer-events-none select-none"
            /> */}


                <div className="relative z-10 mx-auto">
                    {/* CTA */}
                    <div className="max-w-[760px] mx-auto text-center">
                        <div className="space-y-5">
                            <Heading text="Follow Smart Money. Trade With Structure." />

                            <SubHeading className="leading-6 max-w-[650px] mx-auto" text="Professional volume indicators and structured market insights designed for smarter trading decisions." />

                            <button className="btn-primary mt-3">
                                Get Access
                                <Vector className="h-3 w-3 shrink-0" aria-hidden="true" />
                                {/* <svg
                                    viewBox="0 0 24 24"
                                    className="h-4 w-4 shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden
                                >
                                    <path d="M7 17L17 7M17 7H9M17 7V15" />
                                </svg> */}
                            </button>
                        </div>
                    </div>

                    {/* Footer Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-[4fr_1fr_1fr_1fr] gap-x-12 gap-y-10 pt-24">
                        {/* Left */}
                        <div className="space-y-8">
                            <div className="space-y-5">
                                <Logo
                                    className="h-auto w-[303px]"
                                    role="img"
                                    aria-label="VDLTRA logo"
                                />

                                <div className="space-y-3">
                                    <h3 className="text-white text-xl font-semibold">
                                        Book a Call For Free Consultation
                                    </h3>

                                    <p className="text-secondary-text text-base leading-4 max-w-[450px]">
                                        Professional volume indicators, PTA signal
                                        reports, market analysis, and structured trading
                                        education designed for smarter trading decisions.
                                    </p>
                                </div>
                            </div>

                            {/* Socials */}
                            <div className="space-y-4">
                                <p className="text-white font-medium text-lg">
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
                        <div className="flex flex-col gap-3">
                            <h3 className="text-white text-xl font-medium">
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
                                    className="text-secondary-text text-lg hover:text-white transition-colors duration-300"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>

                        {/* Resources */}
                        <div className="flex flex-col gap-3">
                            <h3 className="text-white text-xl font-medium">
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
                                    className="text-secondary-text text-lg hover:text-white transition-colors duration-300"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>

                        {/* Contact */}
                        <div className="flex flex-col gap-3">
                            <h3 className="text-tertiary-text text-xl font-medium">
                                Contact
                            </h3>

                            {[
                                'Support',
                                'Affiliate Support',
                            ].map((item, idx) => (
                                <Link
                                    key={idx}
                                    href="/"
                                    className="text-secondary-text text-lg hover:text-white transition-colors duration-300"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="mt-16 rounded-2xl border border-card-border bg-card-bg px-6 py-2 ">
                        <div className="flex items-start gap-4">
                            <Image
                                src={ErrorLogo}
                                alt="warning icon"
                                className="w-5 h-5 mt-1 shrink-0"
                            />
                            <p className="text-base leading-5 text-secondary-text">
                                <span className="text-secondary-text font-medium">
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
                </div>
            </Container>
        </footer>
    )
}

export default Footer