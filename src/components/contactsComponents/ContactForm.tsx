'use client'
import { useForm, SubmitHandler } from "react-hook-form"

    type Inputs = {
        nome: string;
        idade: number;
        email: string;
        cnpj: boolean;
    };

export default function ContactForm(){

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        reset();
    }

    return (
        <div className="w-[100%] flex items-center justify-center flex-col my-5">
            <h2 className="text-2xl m-3">Entre em contato conosco</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start w-full gap-4">
                <input defaultValue="" {...register("nome", { required: true })} placeholder="Digite seu nome" className="w-full p-3 rounded"/>
                {errors.nome && <span className="text-red-500">O nome é obrigatório</span>}
                <input type="number" {...register("idade", { required: true, min: 18, max: 99 })} placeholder="Digite sua idade" className="w-full p-3 rounded"/>
                {errors.idade && <span className="text-red-500">A idade é obrigatória e deve ser igual ou maior que 18</span>}
                <input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} placeholder="Digite seu email" className="w-full p-3 rounded"/>
                {errors.email && <span className="text-red-500">O email é obrigatório e deve ser válido</span>}
                <label>
                    CNPJ:
                    <input type="checkbox" {...register("cnpj")} />
                </label>
                <input type="submit" className="w-full p-3 rounded bg-orange-500 text-white cursor-pointer text-xl" />
            </form>
        </div>
    )
}
    