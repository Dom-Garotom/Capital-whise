import { ChevronRight } from "lucide-react"
import Link from "next/link"

type Props = {
    href: string,
    title: string,
    subtitle: string
    color?: string
}

export default function CardReplace( { href , subtitle , title , color} : Props) {
    return (
        <Link
            className=" flex items-center h-[80px] max-w-[550x] w-full cursor-pointer  rounded-md px-5 bg-slate-900 hover:bg-slate-800 transition-all"
            href={href}
        >
            <div className="flex-1">
                <span className="text-slate-200 font-semibold">{title}</span>
                <p className={`text-[${color}] font-semibold`}>{subtitle}</p>
            </div>
            <div>
                <ChevronRight className="text-slate-500" />
            </div>
        </Link>
    )
}
