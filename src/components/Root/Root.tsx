import React from 'react'

interface RootProps {
  children: React.ReactNode
}

export default function Root({children}: RootProps) {
  return (
    <div className='root'>
      {children}
    </div>
  )
}
