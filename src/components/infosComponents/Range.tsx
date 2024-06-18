import { IconArrowRight, IconCoin, IconCurrencyDollar, IconDeviceMobile } from "@tabler/icons-react";

export function Range(){
    return (
        <div className="flex justify-center items-center w-full h-[200px] bg-gray-300">
            <div className="w-[50%]">
                <div className="flex flex-col justify-center gap-2 mb-4">
                    <p className='text-justify'>O Banco Bmg tem tudo pra você</p>
                    <h2 className="text-3xl text-bold">Do que você precisa?</h2>
                </div>
                <div className="flex justify-between">    
                    <button className="bg-white p-4 text-bold rounded shadow-md flex gap-2"><IconDeviceMobile/> Conta e cartão sem caixa <IconArrowRight/></button>
                    <button className="bg-white p-4 text-bold rounded shadow-md flex gap-2"><IconCoin/> Empréstimo rápido <IconArrowRight/></button>
                    <button className="bg-white p-4 text-bold rounded shadow-md flex gap-2"> <IconCurrencyDollar/>Investimentos seguros <IconArrowRight/></button>
                </div>
            </div>
        </div>
    )
}