import Badge from '@/components/ui/badge/Badge'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/subheading/SubHeading'
import React from 'react'
import { useTranslation } from 'react-i18next'
import SignalsAndIndicatorsCards from './SignalsAndIndicatorsCards'

const SignalsAndIndicators = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'signals' })

    return (
        <section id="signals" className="scroll-anchor-offset section-pb">
            <div className="relative max-w-[717px] flex flex-col gap-2 mx-auto">
                <Badge text={t('badge')} />
            </div>
            <div className="relative z-10 mx-auto text-center section-header-stack ">
                <Heading className='max-w-xl mx-auto' text={t('title')} />
                <SubHeading className='max-w-[780px] mx-auto' text={t('description')} />
            </div>
            <SignalsAndIndicatorsCards className='content-pt' />

        </section>
    )
}

export default SignalsAndIndicators
