export interface RangeTextProps {
    titleRange: string
    textRange: string
    colorRange: string
}

export default function RangeText(props: RangeTextProps){
    return (
        <div className={`${props.colorRange} w-full h-40 flex flex-col justify-center items-center`} >
            <div className="w-[50%] flex flex-col justify-center items-start`">
                <h2 className="text-3xl">{props.titleRange}</h2>
                <p className="my-3">{props.textRange}</p>
            </div>
        </div>
    )
}