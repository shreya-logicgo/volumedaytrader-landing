import React from 'react'
import { Particles } from '@/components/ui/particles'

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
  backgroundImageSrc = 'assets/images/badge/badge_bg.png',
  className = '',
  ...rest
}: BadgeProps) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-xl font-medium text-white'

  return (
    <div
      className={`inline-flex items-center justify-center gap-3 absolute relative overflow-hidden ${className}`.trim()}
      {...rest}
      style={
        backgroundImageSrc
          ? {
            backgroundImage: `url(${backgroundImageSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '168px',
            width: '717px',
          }
          : undefined
      }
    >
      {/* Particles background inside badge */}
      <div className="pointer-events-none absolute inset-0 z-[1] w-full h-full">
        <Particles quantity={40} size={0.5} color="#ffffff" className="opacity-60" />
      </div>
      {showArrows ? (
        <img
          src={leftArrowSrc}
          alt=""
          aria-hidden="true"
          className="h-6 select-none object-contain relative z-10"
        />
      ) : null}

      <div
        className={`${baseClasses} relative z-10`}
        style={
          {
            background:
              '#0D082B',
            boxShadow: '0px 1.41px 3.18px 0px #FFFFFF80 inset',
          }
        }
      >
        <span className="whitespace-nowrap ">{text}</span>
      </div>

      {showArrows ? (
        <img
          src={rightArrowSrc}
          alt=""
          aria-hidden="true"
          className="h-6 select-none object-contain relative z-10"
        />
      ) : null}
    </div>
  )
}

export default Badge
