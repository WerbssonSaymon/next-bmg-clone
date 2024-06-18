import TimesButton from "./TimesButton";

export default function SectionTimes() {
    return (
        <div className="flex flex-col justify-center items-center w-full bg-white">
            <div className="w-[50%]">
                <div className="flex flex-col gap-3 mt-10">
                    <h2 className="text-3xl text-bold">O Banco com cartão de crédito do seu time</h2>
                    <p className='text-justify'>Ajude seu time sempre que usar a sua conta digitalê</p>
                </div>
                <div className="flex flex-wrap justify-between rounded my-4">
                    <TimesButton texto={"Cartão do Futebol Feminino"} ativo={true}/>
                    <TimesButton texto={"Cartão do Corinthians"} ativo={true}/>
                    <TimesButton texto={"Cartão do Galo"} ativo={true}/>
                    <TimesButton texto={"Cartão do Vozâo"} ativo={true}/>
                    <TimesButton texto={"Cartão do Atletico"} ativo={true}/>
                    <TimesButton texto={"Cartão do Barcelona"} ativo={false}/>
                </div>
            </div>
        </div>
    )
}