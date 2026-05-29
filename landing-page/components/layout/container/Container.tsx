import React from 'react'

const Container = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-0 ">
      {children}
    </div>
  )
}

export default Container
