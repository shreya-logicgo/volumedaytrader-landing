import React from 'react'

const Container = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="w-full max-w-[1920px] mx-auto xl:px-40 px-10 overflow-x-hidden">
      {children}
    </div>
  )
}

export default Container
