import Badge from '@/components/ui/badge/Badge'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/subheading/SubHeading'
import React from 'react'
import TrustCards from './TrustCards'
import TrustGrad from '@/assets/images/gradients/pta-gradient.png'
import Image from 'next/image'

const Trust = () => {
    return (
        <div className=" font-bold section-pb">
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
                {/* Left Gradient */}
                <Image
                    src={TrustGrad}
                    alt=""
                    className="
    absolute
    max-w-[802px]
    max-h-[900px]
    opacity-59
    left-[-520px]
    top-1/2
    -translate-y-1/2
    rotate-180
    z-[-4]
  "
                />

                {/* Right Gradient */}
                <Image
                    src={TrustGrad}
                    alt=""
                    className="
    absolute
    max-w-[802px]
    max-h-[900px]
    opacity-59
    right-[-520px]
    top-1/2
    -translate-y-1/2
    z-[-4]
  "
                />
                <TrustCards className='mt-10 ' />
            </div>
        </div>

    )
}

export default Trust
