import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function FilterSelect({ children }: Props) {
  return (
    <nav className='flex items-center px-1 py-4 border-b-2 border-stone-200 ' >
      <ul className='w-full flex space-x-3'>
        {children}
      </ul>
    </nav>
  )
}
