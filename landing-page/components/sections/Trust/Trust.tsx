import Badge from '@/components/ui/badge/Badge'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/subheading/SubHeading'
import React from 'react'
import TrustCards from './TrustCards'

const Trust = () => {
    return (
        <div className="text-5xl font-bold text-center mt-20">
            <div className="relative w-[770px] flex flex-col gap-2 mx-auto">
                <Badge text='Trust' />
                <div className="relative z-10 mx-auto text-center space-y-4 pt-50">
                    <Heading text="Trusted By Traders Focused On Smarter Market Analysis" />
                    <SubHeading text="Professional indicators, PTA reports, market insights, and educational trading tools designed to help traders understand market behavior with more structure and confidence." />
                </div>
            </div>
            <TrustCards className='mt-10 mb-20' />
        </div>
    )
}

export default Trust
