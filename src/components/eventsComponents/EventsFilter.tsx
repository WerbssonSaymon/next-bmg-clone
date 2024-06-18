import { IconChevronDown, IconFilter } from "@tabler/icons-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import EventsStatus from "./EventsStatus";

export interface FilterChangeProps {
    filtroMudou?: (status: string | null) => void
}

export default function EventsFilter(props: FilterChangeProps){
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div>
                    <IconFilter/>
                    <span>Filtrar por</span>
                    <IconChevronDown/>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={() => props.filtroMudou?.(null)}>
                    <div>
                        <span>Nenhum</span>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <EventsStatus valor="Em breve" onClick={props.filtroMudou}/>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <EventsStatus valor="Lançada" onClick={props.filtroMudou}/>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <EventsStatus valor="Depreciada" onClick={props.filtroMudou}/>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}