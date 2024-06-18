import { ElementType } from "react"

export interface TitleProps {
    principal: string
    icon: ElementType
}

export default function TitleEvents(props: TitleProps){
    return (
        <div className="flex items-center gap-2">
            <props.icon size={60}/>
            <h2 className="text-3xl">{props.principal}</h2>
        </div>
    )
}