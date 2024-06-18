import Evento from "@/data/model/Evento"
import eventos from '@/data/constants/eventos'
import EventsLine from "./EventsLine"

export interface EventsListProps {
    eventos: Evento[]
}

export default function EventsList(props: EventsListProps){
    return (
        <div>
            <span className="text-2xl">Lista de Eventos</span>
            {eventos.map( function (evento: Evento){
                return <EventsLine key={evento.id} evento={evento}/>
            })}
        </div>
    )
} 