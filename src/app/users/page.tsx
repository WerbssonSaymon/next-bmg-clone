import SectionHero from "@/components/headersComponents/SectionHero";
import RangeText from "@/components/infosComponents/RangeText";
import InfoGrid from "@/components/infosComponents/InfoGrid";

export default function ClientPage(){
    return (                
        <>
           <SectionHero 
                titleHero={"Empréstimo pessoal"}
                textHero={"Teve um imprevisto? No Bmg é dinheiro na mão sem burocracia. Solicite seu empréstimo pessoal agora!"} 
                colorHero={"bg-violet-700"}           
            />
            <RangeText 
                titleRange={"O que é o empréstimo pessoal no cartão de crédito Bmg?"} 
                textRange={"É um empréstimo oferecido pelo banco baseado nas políticas de crédito. O pagamento é realizado através do cartão de crédito e as parcelas lançadas diretamente na sua fatura. O valor do empréstimo pessoal contratado não utiliza seu limite disponível, apenas o valor da parcela. O crédito é liberado na conta Bmg ou em outra informada."} 
                colorRange={"bg-white"}
            />
            <InfoGrid/>
        </>
    );
}