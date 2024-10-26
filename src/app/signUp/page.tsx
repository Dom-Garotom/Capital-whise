import Input from "@/components/atomo/input"
import Form from "@/components/molecula/formDefault"
import HeaderForm from "@/components/molecula/headerForm"

export default function signUp() {
    return (
        <div className="w-full h-[100vh] bg-slate-100">
            <section className=" w-full flex  flex-col lg:flex-row items-center justify-between bg-[#A8E59F] ">
                <HeaderForm variant="sinUp" />
                <div className="bg-slate-100 lg:max-w-[570px]  lg:min-h-[100vh] w-full flex flex-col text-start p-[20px] sm:p-[80px]  ">
                    <Form variant="sinUp">
                        <Input
                            label="Nome"
                            placeholder="Seu nome"
                        />

                        <Input
                            label="Email"
                            placeholder="Seu email"
                        />

                        {/* <Input
                            label="Seu CPF"
                            placeholder="000.000-00"
                        /> */}

                        <Input
                            label="Endereço - CEP"
                            placeholder="000.000-00"
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