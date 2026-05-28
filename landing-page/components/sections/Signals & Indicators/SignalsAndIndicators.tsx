import Badge from '@/components/ui/badge/Badge'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/subheading/SubHeading'
import React from 'react'
import SignalsAndIndicatorsCards from './SignalsAndIndicatorsCards'

const SignalsAndIndicators = () => {
    return (
        <div>
            <div className="relative max-w-[717px] flex flex-col gap-2 mx-auto">
                <Badge text='Signals & Indicators' />
            </div>
            <div className="relative z-10 mx-auto text-center space-y-4 pt-50 ">
                <Heading className='max-w-xl mx-auto' text="Daily PTA Reports & Wyckoff Volume Indicators" />
                <SubHeading className='max-w-[780px] mx-auto' text="See how Volume Day Trader helps traders identify potential trading areas, read market volume, and understand price movement with structured reports and professional indicators." />
            </div>
            <SignalsAndIndicatorsCards className='mt-10' />

        </div>
    )
}

export default SignalsAndIndicators
