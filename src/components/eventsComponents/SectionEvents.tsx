'use client'
import { IconTicket } from "@tabler/icons-react";
import TitleEvents from "./TitleEvents";
import EventsList from "./EventsList";
import EventsFilter from "./EventsFilter";
import Evento from "@/data/model/Evento";
import { useState } from "react";
import listaDeEventos from "@/data/constants/eventos"

export default function SectionEvents(){

    const [eventos, setEventos] = useState<Evento[]>(listaDeEventos)

    function filtrarEventos(status: string | null ) {
        const eventosFiltrados: Evento[] = listaDeEventos.filter((evento) => evento.status === status || !status)
        setEventos(eventosFiltrados)
    }

    return (
        <div className="flex flex-col justify-center items-center w-full bg-white">
            <div className="w-[50%]">
                <div className="flex">
                    <TitleEvents
                        icon={IconTicket}
                        principal="Confira nossos eventos online"
                    />
                    <EventsFilter filtroMudou={filtrarEventos}/>
                </div>
               <EventsList eventos={eventos}/>
            </div>
        </div>
    )
}