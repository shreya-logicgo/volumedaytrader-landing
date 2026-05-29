import Badge from '@/components/ui/badge/Badge'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/subheading/SubHeading'
import React from 'react'
import TrustCards from './TrustCards'

const Trust = () => {
    return (
        <div className=" font-bold  mt-20">
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
            <div className="relative max-w-3xl z-10 mx-auto text-center space-y-4 pt-50">
                <Heading className='max-w-[600px] mx-auto ' text="Trusted By Traders Focused On Smarter Market Analysis" />
                <SubHeading className='max-w-[770px] mx-auto' text="Professional indicators, PTA reports, market insights, and educational trading tools designed to help traders understand market behavior with more structure and confidence." />
            </div>
            <TrustCards className='mt-10 mb-20' />
        </div>

    )
}

export default Trust
