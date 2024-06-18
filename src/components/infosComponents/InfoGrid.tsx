import InfoBlock from "./InfoBlock";

export default function InfoGrid(){
    return (
        <div className="w-full flex items-center justify-center my-4">
            <div className="w-[50%] flex flex-wrap items-center justify-center gap-6">
                <InfoBlock 
                    titleBlock={"Simule seu empréstimo pessoal com o crédito pré-aprovado e taxas de juros personalizadas"} 
                    textBlock={"No app escolha o valor e o número de parcelas do seu empréstimo pessoal, que podem chegar em até 24X."}
                />
                <InfoBlock 
                    titleBlock={"Dinheiro na conta Bmg ou em outra conta de mesma titularidade, autorizada pelo cliente"} 
                    textBlock={"Tenha o dinheiro na conta em 24h úteis."}
                />
                <InfoBlock 
                    titleBlock={"As parcelas do empréstimo pessoal são lançadas diretamente na fatura do cartão"} 
                    textBlock={"A 1ª parcela será lançada em 30 a 60 dias após a contratação do empréstimo pessoal. Pagando a fatura do cartão você também paga suas parcelas do empréstimo."}
                />
                <InfoBlock 
                    titleBlock={"Cliente Bmg contrata o empréstimo pessoal online"} 
                    textBlock={"Tudo pelo app Bmg e crédito pessoal pré-aprovado, sem sair de casa."}
                />
            </div>
        </div>
    )
}