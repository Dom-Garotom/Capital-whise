import ButtonSubmit from "@/components/atomo/buttonSubmit"
import CardReplace from "@/components/atomo/cardReplaceSignUp"
import { ReactNode } from "react"

type Props = {
    variant: 'sinUp' | 'login'
    children: ReactNode
    handleSubmit : () => void
}

export default function Form({ variant , children , handleSubmit}: Props) {
    return (
        <div>
            <h2 className="font-semibold text-3xl mb-10 text-slate-700">Capital Whise</h2>
            <span className="font-bold text-2xl text-slate-700">
                {variant == "login" ? ("Acesse sua conta") : ("Crie a sua conta") }
            </span>

            <p>
                Conecte-se à nossa plataforma e tenha acesso às melhores oportunidades do mercado de ações.
            </p>

            <form onSubmit={handleSubmit} className="w-full mt-10 space-y-6">
                
                {children}

                <div className=" flex space-x-2">
                    <input type="checkbox" />
                    <p className="font-semibold text-slate-600">
                        Lembre-me
                    </p>
                </div>
                    
                <ButtonSubmit
                    content={variant == "login" ? ("Entrar") : ("Criar")}
                    type="submit"
                />

                <div className="w-full h-[1px] bg-slate-800 my-10"></div>

                <CardReplace
                    title={variant == "login" ? ("Não tem uma conta") : ("Já tem uma conta?")}
                    subtitle={variant == "login" ? ("Se inscreva gratuitamente") : ("Entre agora mesmo")}
                    href={variant == "login" ? ("/signUp") : ("/login")}
                    color="#6cd55e"
                />

                {variant == "login" &&
                    <CardReplace
                        title="Esqueceu a sua senha?"
                        subtitle=""
                        href="/"
                    />
                }

            </form>
        </div>
    )
}
