import React from 'react';

interface IHomeProps {
  children: React.ReactNode
}

export default function Home({children}: IHomeProps) {
  return (
    <div>
      {children}
    </div>
  )
}
