import Image from "next/image"
import Input from "@/components/atomo/input"
import LogoCapital from "../../../public/assets/logo.png"
import Form from "@/components/molecula/formDefault"


export default function LogIn() {
    return (
        <div className="w-full h-[100vh] bg-slate-100">

            <section className=" w-full flex  flex-col lg:flex-row items-center justify-between bg-[#A8E59F] ">

                <div className=" flex flex-col  items-center lg:items-start  px-5 py-10 space-y-5  space-y-5 w-full min-h-[300px]">

                    <div className="hidden lg:block">
                        <h1 className="text-slate-50 text-7xl font-bold">
                            seja bem-vindo!
                        </h1>

                        <h1 className="text-slate-50 text-7xl font-semibold" >
                            Que bom que você voltou
                        </h1>
                        <p className="max-w-[550px] w-full">Entre e venha conferir as novidades que te aguardam desde a ultima vez que você entrou.</p>
                    </div>

                    <Image src={LogoCapital} alt="" width={500} className="lg:hidden" />

                </div>





                <div className="bg-slate-100 lg:max-w-[570px]  lg:min-h-[100vh] w-full flex flex-col text-start p-[20px] sm:p-[80px]  ">


                    <Form variant="login">
                        <Input
                            label="Email"
                            placeholder="Seu email"
                        />

                        <Input
                            label="Senha"
                            placeholder="Sua senha"
                        />

                    </Form>

                </div>
            </section>
        </div>
    )
}