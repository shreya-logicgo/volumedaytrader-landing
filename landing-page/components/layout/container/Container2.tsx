import React from 'react'
import Container from './Container'

const Container2 = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-0 bg-red-500">
      {children}
    </div>
  )
}

export default Container2
