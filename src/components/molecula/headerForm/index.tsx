import Image from "next/image"
import LogoCapital from "../../../../public/assets/logo.png"

type Props = {
    variant: 'sinUp' | 'login'
}

export default function HeaderForm({ variant }: Props) {
    return (
        <div>
            <div className=" flex flex-col  items-center lg:items-start  px-5 py-10 space-y-5  space-y-5 w-full min-h-[300px] max-w-[700px]">
                <div className="hidden lg:block">
                    <h1 className="text-slate-50 text-7xl font-bold">
                        {variant == "login" ?
                            <>
                                seja bem-vindo!<br />
                                Que bom que você voltou
                            </>

                            :
                            <>
                                Como é bom <br />
                                ter você  aqui conosco
                            </>
                        }
                    </h1>

                    <p className="max-w-[600px] w-full font-medium text-3xl">
                        {variant == "login" ? 
                            ("Entre e venha conferir as novidades que te aguardam desde a ultima vez que você entrou.")
                                :
                            ("Crie uma conta nova para que você possa aproveitar todas as novidades  que te aguardam.")
                        }
                    </p>
                    
                </div>
                <Image src={LogoCapital} alt="" width={500} className="lg:hidden" />
            </div>
        </div>
    )
}
