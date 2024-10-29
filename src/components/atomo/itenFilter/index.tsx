"use client"
import React, { useState } from 'react'

type Props = {
  value: string,
  onFunction?: () => void
}

export default function ItenFilter({ value, onFunction }: Props) {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked);
    if (onFunction) {
      onFunction();
    }
  };


  return (
    <li className={
      isClicked ?
        ('flex items-center max-w-[150px]  py-2 px-4 rounded-lg font-semibold cursor-pointer bg-slate-900 text-slate-50 hover:bg-slate-800 ')
        :
        ('max-w-[150px]  py-2 px-4 rounded-lg font-semibold cursor-pointer text-slate-950 hover:bg-stone-300')
    }
      title={value}
      onClick={() => handleClick()}
    >
      {value}
    </li>
  )
}
