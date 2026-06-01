import React from 'react'
import { Particles } from '@/components/ui/particles'
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string
  showArrows?: boolean
  leftArrowSrc?: string
  rightArrowSrc?: string
  backgroundImageSrc?: string
}

const Badge = ({
  text = 'Badge',
  showArrows = true,
  leftArrowSrc = '/assets/images/badge/badge_arrow-left.svg',
  rightArrowSrc = '/assets/images/badge/badge_arrow-right.svg',
  backgroundImageSrc = '/assets/images/badge/badge_bg.png',
  className = '',
  ...rest
}: BadgeProps) => {
  const pillClasses =
    'relative z-10 inline-flex items-center justify-center rounded-full bg-[#0D082B] px-4 py-2 text-sm font-medium text-white shadow-[0px_1.41px_3.18px_0px_#FFFFFF80_inset] sm:px-5 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-xl'

  return (
    <div
      className={cn(
        'relative mx-auto flex w-full max-w-[717px] items-center justify-center gap-2 overflow-hidden px-1 sm:gap-3 sm:px-2',
        'min-h-[72px] sm:min-h-[100px] md:min-h-[130px] lg:min-h-[168px]',
        className
      )}
      {...rest}
      style={
        backgroundImageSrc
          ? {
              backgroundImage: `url(${backgroundImageSrc})`,
              backgroundSize: '100% auto',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }
          : undefined
      }
    >
      <div className="pointer-events-none absolute inset-0 z-[1] h-full w-full">
        <Particles quantity={40} size={0.5} color="#ffffff" className="opacity-60" />
      </div>

      {showArrows ? (
        <img
          src={leftArrowSrc}
          alt=""
          aria-hidden="true"
          className="relative z-10 hidden h-5 w-auto max-w-[28px] shrink-0 select-none object-contain sm:block md:h-6"
        />
      ) : null}

      <div className={pillClasses}>
        <span className="whitespace-nowrap">{text}</span>
      </div>

      {showArrows ? (
        <img
          src={rightArrowSrc}
          alt=""
          aria-hidden="true"
          className="relative z-10 hidden h-5 w-auto max-w-[28px] shrink-0 select-none object-contain sm:block md:h-6"
        />
      ) : null}
    </div>
  )
}

export default Badge
