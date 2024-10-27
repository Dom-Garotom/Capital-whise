"use client"

import Input from "@/components/atomo/input"
import Form from "@/components/molecula/formDefault"
import HeaderForm from "@/components/molecula/headerForm"
import { usersDb } from "@/db/user"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"

export default function LogIn() {
    const router = useRouter();

    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

    const schema = z.object({
        email: z.string().email("email inválido").min(8),
        senha: z.string().min(8, "A senha deve ter no minimo 8 caracteres").regex(regex, "A senha deve ter no minimo uma letra maiúscula e uma minúscula como também um número")
    })

    type SchemaLogin = z.infer<typeof schema>;

    const { register, handleSubmit, formState: { errors } } = useForm<SchemaLogin>({
        resolver: zodResolver(schema)
    })

    const getSubmit = (data: SchemaLogin) => {
        const pass = usersDb.find(a => data.email == a.email && data.senha == a.senha);

        if (pass) {
            router.push("/");
        }

    }


    return (
        <div className="w-full h-[100vh] bg-slate-100">
            <section className=" w-full flex  flex-col lg:flex-row items-center justify-between bg-[#A8E59F] ">
                <HeaderForm variant="login" />
                <div className="bg-slate-100 lg:max-w-[570px]  lg:min-h-[100vh] w-full flex flex-col text-start p-[20px] sm:p-[80px]  ">
                    <Form variant="login" handleSubmit={handleSubmit(getSubmit)}>
                        <Input
                            label="Email"
                            placeholder="Seu email"
                            {...register("email")}
                            error={errors.email}
                        />

                        <Input
                            label="Senha"
                            placeholder="Sua senha"
                            {...register("senha")}
                            error={errors.senha}
                        />

                    </Form>
                </div>
            </section>
        </div>
    )
}