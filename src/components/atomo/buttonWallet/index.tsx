import { MoveUpRight } from "lucide-react"
import { MoveDownLeft } from "lucide-react"
import { ArrowRightLeft } from "lucide-react"
import { ComponentProps, ReactNode } from "react"
import { twJoin } from "tailwind-merge"

type Props = ComponentProps<'button'> & {
    children?: ReactNode
    variant: "saque" | "deposito" | "transferencia" | "default"
    classVariant?: string
}

export default function ButtonWallet({ classVariant , variant, children, ...props }: Props) {
    return (
        <button {...props} title={variant} className={twJoin(
            "w-[55px] h-[55px] flex items-center justify-center rounded-full",
            variant == "deposito" && "bg-[#6FD660] text-slate-50 hover:bg-[#336D3D]",
            variant == "saque" && "bg-slate-900 text-slate-50 hover:bg-slate-800",
            variant == "transferencia" && "bg-slate-300 hover:bg-slate-400",
            classVariant
        )}>

            {variant == "deposito" &&
                <MoveDownLeft />
            }
            {variant == "saque" &&
                <MoveUpRight />
            }
            {variant == "transferencia" &&
                <ArrowRightLeft />
            }

            {children}

        </button>
    )
}
    