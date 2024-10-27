"use client"

import Input from "@/components/atomo/input"
import Form from "@/components/molecula/formDefault"
import HeaderForm from "@/components/molecula/headerForm"
import { usersDb } from "@/db/user"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { v4 as uuidv4 } from 'uuid';
import { z } from "zod"

export default function SignUp() {
    const router = useRouter();

    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

    const schema = z.object({
        id: z.string().uuid().default(uuidv4()),
        nome: z.string().min(8, "Seu nome completo deve ter no minímo 8 letras"),
        email: z.string().email("email inválido").min(8),
        senha: z.string().min(8, "A senha deve ter no minimo 8 caracteres").regex(regex, "A senha deve ter no minimo uma letra maiúscula e uma minúscula como também um número"),
        cep: z.string().min(8).max(9),
        saldo:z.number().default(0.0)
    })

    

    type SchemaSignUp = z.infer<typeof schema>;

    const { register, handleSubmit, formState: { errors } } = useForm<SchemaSignUp>({
        resolver: zodResolver(schema)
    })

    const getSubmit = (data: SchemaSignUp) => {
        usersDb.push(data)

        if (data) {
            router.push("/");
        }
        
    }

    
    return (
        <div className="w-full h-[100vh] bg-slate-100">
            <section className=" w-full flex  flex-col lg:flex-row items-center justify-between bg-[#A8E59F] ">
                <HeaderForm variant="sinUp" />
                <div className="bg-slate-100 lg:max-w-[570px]  lg:min-h-[100vh] w-full flex flex-col text-start p-[20px] sm:p-[80px]  ">
                    <Form variant="sinUp"  handleSubmit={handleSubmit(getSubmit)}>
                        <Input
                            label="Nome"
                            placeholder="Seu nome"
                            {...register("nome")}
                            error={errors.nome}
                        />

                        <Input
                            label="Email"
                            placeholder="Seu email"
                            {...register("email")}
                            error={errors.email}
                        />

                        {/* <Input
                            label="Seu CPF"
                            placeholder="000.000-00"
                        /> */}

                        <Input
                            label="Endereço - CEP"
                            placeholder="000.000-00"
                            {...register("cep")}
                            error={errors.cep}
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