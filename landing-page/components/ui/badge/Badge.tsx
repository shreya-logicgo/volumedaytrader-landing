import React from 'react'

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
  const baseClasses = 'inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium text-[#f4f4fe]'

  return (
    <div
      className={`inline-flex items-center justify-center gap-3 absolute ${className}`.trim()}
      {...rest}    
      style={
        backgroundImageSrc
            ? {
                backgroundImage: `url(${backgroundImageSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '268px',
                width: '717px',
              }
            : undefined 
      }  
    >
      {showArrows ? (
        <img
          src={leftArrowSrc}
          alt=""
          aria-hidden="true"
          className="h-5 w-28 select-none object-contain"
        />
      ) : null}

      <div
        className={baseClasses}
        style={
          {
                background:
                  'radial-gradient(110% 130% at 50% 0%, #1b1252 0%, #0d0635 55%, #080329 100%)',
                border: '1px solid rgba(126, 87, 255, 0.45)',
                boxShadow:
                  '0 0 0 1px rgba(126,87,255,0.2) inset, 0 8px 20px rgba(2,0,30,0.45)',
              }
        }
      >
        <span className="whitespace-nowrap">{text}</span>
      </div>

      {showArrows ? (
        <img
          src={rightArrowSrc}
          alt=""
          aria-hidden="true"
          className="h-5 w-28 select-none object-contain"
        />
      ) : null}
    </div>
  )
}

export default Badge
