import ButtonWallet from "@/components/atomo/buttonWallet"
import { Bolt } from "lucide-react"

type Props ={
    saldo: string
}

export default function Wallet( { saldo } : Props) {
    return (
        <div className="flex flex-col justify-center max-w-[400px] w-full space-y-4   px-8  py-5 rounded-[10px] bg-slate-100 border-2 border-slate-300 shadow-2xl">
            <div className="flex w-full">
                <p className="text-xl font-semibold flex-1">Carteira</p>
                <Bolt  className="cursor-pointer"/>
            </div>
            <p className="font-bold text-5xl">${saldo}</p>

            <div className="flex space-x-5" title="transferir">
                <ButtonWallet variant="deposito" />
                <ButtonWallet variant="saque" />
                <ButtonWallet variant="transferencia" />
            </div>
        </div>
    )
}
