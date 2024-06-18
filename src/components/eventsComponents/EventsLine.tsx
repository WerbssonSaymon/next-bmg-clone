import Evento from "@/data/model/Evento"
import Duracao from "@/scripts/duracao"
import EventsStatus from "./EventsStatus"

export interface EventsLineProps {
    evento: Evento
}

export default function EventsLine(props: EventsLineProps){

    return (
        <div className="flex items-center justify-between bg-slate-300 my-2 p-2">
            <div className="flex flex-col my-3 mx-2">
                <span className="text-xl">{props.evento.nome}</span>
                <span className="italic">{props.evento.setor}</span>
            </div>
            <div className="flex flex-col my-2 mx-2">  
                <span>{Duracao.formatar(props.evento.duracao)}</span>
                <div className="flex items-center"> 
                    <EventsStatus valor={props.evento.status}/> 
                </div>  
            </div>
        </div>
    )
}