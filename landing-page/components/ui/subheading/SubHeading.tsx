import React from 'react'

export interface SubHeadingProps extends React.HTMLAttributes<HTMLElement> {
  text?: string
  children?: React.ReactNode
  as?: React.ElementType
}

const SubHeading = ({
  text,
  children,
  as: Tag = 'p',
  className = '',
  ...rest
}: SubHeadingProps) => {
  return (
    <Tag className={`subheading-text ${className}`.trim()} {...rest}>
      {children ?? text}
    </Tag>
  )
}

export default SubHeading
