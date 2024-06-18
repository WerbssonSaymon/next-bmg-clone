import Evento from "@/data/model/Evento"
import { IconCircleFilled } from "@tabler/icons-react"

export interface StatusLineProps {
    valor: Evento['status']
    onClick?: (status: string) => void
}

export default function EventsStatus(props: StatusLineProps){

    function cor(){
        switch (props.valor) {
            case 'Em breve':
                return 'text-yellow-500'
            case 'Lançada':
                return 'text-green-500'
            case 'Depreciada':
                return 'text-red-500' 
        }
    }

    return (
        <div onClick={() => props.onClick?.(props.valor)} className="flex items-center justify-between bg-slate-300 my-2">
            <IconCircleFilled className={cor()} size={15}/>
            <span className="mx-2">{props.valor}</span>
        </div>
    )
}