export interface InfoBlockProps {
    titleBlock: string
    textBlock: string
}

export default function InfoBlock(props: InfoBlockProps){
    return (
        <div className="w-[400px] h-[250px] flex justify-center items-center bg-zinc-100 rounded-sm">
            <div className="w-[100px] flex items-center justify-center">
                icone
            </div>
            <div className="w-full h-full flex flex-col items-start justify-center px-2 py-2">
                <h3 className="text-2xl underline hover:decoration-4 text-zinc-500 cursor-pointer">{props.titleBlock}</h3>
                <p>{props.textBlock}</p>
            </div>
        </div>
    )
}