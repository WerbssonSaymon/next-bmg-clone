export interface TimesButtonProps {
    texto: string
    ativo: boolean
}

export default function TimesButton(props: TimesButtonProps){
    return (
        <button className={`${props.ativo == false? `bg-violet-400 cursor-not-allowed`: `bg-violet-900`} text-white p-7 w-[450px] text-left text-bold text-2xl my-6 rounded-md`}>
            {props.texto}
            {props.ativo == true?(
                <p className="text-sm">Cartão ativo</p>
            ): (
                <p className="text-sm">Cartão desativado</p>
            )}
        </button>
    )
}