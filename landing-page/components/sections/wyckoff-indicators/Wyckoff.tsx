import Badge from '@/components/ui/badge/Badge'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/subheading/SubHeading'
import React from 'react'
import WyckoffCards from '@/components/sections/wyckoff-indicators/WyckoffCards'

const Wyckoff = () => {
    return (
        <section className="py-20 md:py-28">
            <div className="mx-auto max-w-4xl text-center">
                <div className="relative max-w-[717px] flex flex-col gap-2 mx-auto">
                    <Badge text='Wyckoff Indicators' />
                </div>

                <div className="relative z-10 mx-auto space-y-4 pt-50">
                    <Heading className='max-w-3xl mx-auto' text="How Do Wyckoff Indicators Work?" />
                    <SubHeading
                        className='max-w-2xl mx-auto'
                        text="Wyckoff-based indicators help traders understand demand, supply, momentum shifts, and market participation directly through chart and volume analysis."
                    />
                </div>
            </div>

            <WyckoffCards className='mt-10' />
        </section>
    )
}

export default Wyckoff
