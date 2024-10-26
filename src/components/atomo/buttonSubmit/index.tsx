import { ComponentProps } from 'react'

interface Props extends ComponentProps<"button">  {
    content : string
}

export default function ButtonSubmit( { content , ...props} : Props) {
  return (
    <button {...props}  className="w-full h-[50px] px-5 rounded-sm text-slate-50 bg-gray-900 hover:bg-[#6cd55e] transition-all font-semibold  " >
        {content}
    </button>
  )
}
