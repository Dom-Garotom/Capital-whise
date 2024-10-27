import ItenTransactions from "@/components/atomo/itenTransactions";
import { transactionsData } from "@/db/transacoes";

export default function Transactions() {


    return (
        <div className="flex flex-col justify-center max-w-[400px] max-h-[350px]  w-full space-y-4  px-8  py-5 rounded-[10px] bg-slate-100 shadow-2xl">
            <div className='font-semibold text-lg'>Transações recentes</div>

            <div className="overflow-auto overflow scrollbar-hidden py-5 space-y-3">
                {transactionsData.map( (data , index ) => ((
                    <ItenTransactions
                        key={index}
                        data={data.data}
                        hour={data.hour}
                        tipoDeposito={data.tipoDeposito}
                        value={data.value}
                    />
                )))}
            </div>
        </div>
    )
}
