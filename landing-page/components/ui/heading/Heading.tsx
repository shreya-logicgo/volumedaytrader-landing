import React from 'react'

export interface HeadingProps extends React.HTMLAttributes<HTMLElement> {
  text?: string
  children?: React.ReactNode
  as?: React.ElementType
}

const Heading = ({
  text,
  children,
  as: Tag = 'h2',
  className = '',
  ...rest
}: HeadingProps) => {
  return (
    <Tag className={`heading-text ${className}`.trim()} {...rest}>
      {children ?? text}
    </Tag>
  )
}

export default Heading
