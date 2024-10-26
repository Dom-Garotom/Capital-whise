import Input from "@/components/atomo/input"
import Form from "@/components/molecula/formDefault"
import HeaderForm from "@/components/molecula/headerForm"

export default function LogIn() {
    return (
        <div className="w-full h-[100vh] bg-slate-100">
            <section className=" w-full flex  flex-col lg:flex-row items-center justify-between bg-[#A8E59F] ">
                <HeaderForm variant="login"/>
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