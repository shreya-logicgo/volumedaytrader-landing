import Badge from '@/components/ui/badge/Badge'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/subheading/SubHeading'
import React from 'react'
import TrustCards from './TrustCards'
import TrustBackground from '@/components/common/backgrounds/TrustBackground'

const Trust = () => {
    return (
        <section id="community" className="relative font-bold section-pb">
            <TrustBackground />
            {/* <div className="relative">
                <img
                    src="/assets/images/side_shadow.png"
                    alt="side shadow"
                    className="absolute object-cover opacity-100 z-10"
                />
            </div> */}
            <div className="relative max-w-[717px] flex flex-col gap-2 mx-auto">
                <Badge text='Trust' />
            </div>
            <div className="relative max-w-3xl z-10 mx-auto text-center section-header-stack">
                <Heading className='max-w-[600px] mx-auto ' text="Trusted By Traders Focused On Smarter Market Analysis" />
                <SubHeading className='max-w-[770px] mx-auto' text="Professional indicators, PTA reports, market insights, and educational trading tools designed to help traders understand market behavior with more structure and confidence." />
            </div>
            <div className="relative mt-10">
                <TrustCards className='mt-10 ' />
            </div>
        </section>

    )
}

export default Trust
