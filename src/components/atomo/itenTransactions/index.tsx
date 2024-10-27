import ButtonWallet from '@/components/atomo/buttonWallet'
import { ArrowRightLeft, MoveDownLeft, MoveUpRight } from 'lucide-react'
import { twJoin } from 'tailwind-merge'

type Props = {
    tipoDeposito: "Deposito" | "Saque" | "Transferência"
    data: string,
    hour: string,
    value: number,
}

export default function ItenTransactions({ data, hour, tipoDeposito, value }: Props) {

    return (
        <div className='flex items-center space-x-3 pb-2 h-[60px] border-b border-gray-300'>
            <ButtonWallet variant='default' classVariant={twJoin(
                'w-[38px] h-[35px] text-xl border-2 ',
                tipoDeposito == 'Deposito' && "text-[#6FD660] border-[#6FD660]",
                tipoDeposito == 'Saque' && 'text-rose-400 border-rose-400',
                tipoDeposito == "Transferência"  && "text-gray-900 border-gray-900"
            )} >

                {tipoDeposito == "Deposito" &&
                    <MoveDownLeft />
                }
                {tipoDeposito == "Saque" &&
                    <MoveUpRight />
                }
                {tipoDeposito == "Transferência" &&
                    <ArrowRightLeft />
                }

            </ButtonWallet>


            <div className='flex-1'>
                <p className='font-semibold'>{tipoDeposito}</p>
                <span>{data},  {hour}</span>
            </div>


            <div className={twJoin(
                'py-1 px-2 rounded-md bg-slate-300 font-semibold',
                tipoDeposito == "Deposito" && "text-[#6FD660]",
                tipoDeposito == "Saque" && "text-rose-400",
                tipoDeposito == "Transferência" && "text-gray-900"
            )}>
                {tipoDeposito == 'Deposito' ? "+" : "-"}
                {value}
            </div>
        </div>
    )
}
