import { useState } from "react";
import { Button } from "../components/ui/button";

export default function ButtonLike(){

    const [contador, setContador] = useState(1);

    function incrementarLikes() {
        setContador(prevContador => prevContador + 1);
    }

    return (
        <div className="w-full h-[100px] flex items-center justify-center gap-5">
            <Button onClick={incrementarLikes} className="text-xl px-5 py-6 bg-orange-500">Aperte</Button>
            <div className="flex gap-2">
                <h3 className="text-2xl">Quantos like essa página merece?</h3>
                <p className="text-2xl">{contador}  Likes, Obrigado</p>
            </div>
        </div>
    )
}