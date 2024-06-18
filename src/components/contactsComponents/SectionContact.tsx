import { IconBrandWhatsapp, IconMap, IconPhone, IconQuestionMark } from "@tabler/icons-react";
import Form from "./ContactForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import ContactForm from "./ContactForm";

export default function SectionContact() {
    return (
        <div className="flex flex-col justify-center items-center w-full bg-gray-300">
            <div className="w-[50%]">
                <div className="flex flex-col gap-3 mt-10">
                    <h2 className="text-3xl text-bold">Tire suas duvidas</h2>
                </div>
                <div className="flex flex-wrap justify-between rounded my-4">
                    <button className="flex flex-col items-center justify-start bg-white p-7 w-[200px] h-[200px] text-bold text-xl my-6 rounded-md">Atendimento via Whatsapp <IconBrandWhatsapp size={48} className="my-5"/></button>
                    <button className="flex flex-col items-center justify-start bg-white p-7 w-[200px] h-[200px] text-bold text-xl my-6 rounded-md">Telefones de atendimento <IconPhone size={48} className="my-5"/></button>
                    <button className="flex flex-col items-center justify-start bg-white p-7 w-[200px] h-[200px] text-bold text-xl my-6 rounded-md">Atendimento presencial<IconMap size={48} className="my-5"/></button>
                    <button className="flex flex-col items-center justify-start bg-white p-7 w-[200px] h-[200px] text-bold text-xl my-6 rounded-md">Perguntas frequentes<IconQuestionMark size={48} className="my-5"/></button>
                </div>
            </div>
            <div className="w-[50%]">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border-b-2 border-slate-400">
                        <AccordionTrigger className="text-2xl text-bold">Sobre o Banco Bmg</AccordionTrigger>
                        <AccordionContent className="text-xl my-4">
                            Quem somos | Assessoria de imprensa | Compromisso ASG | Trabalhe conosco
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="border-b-2 border-slate-400">
                        <AccordionTrigger className="text-2xl text-bold">Nossos serviços</AccordionTrigger>
                        <AccordionContent className="text-xl my-4">
                            Conta digital | Cartões | Empréstimo | Seguros | Bmg chip
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="border-b-2 border-slate-400">
                        <AccordionTrigger className="text-2xl text-bold">Transparência</AccordionTrigger>
                        <AccordionContent className="text-xl my-4">
                            Ofertas publicas | Transparência salarial | Politica de provacidade
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className="border-b-2 border-slate-400">
                        <AccordionTrigger className="text-2xl text-bold">Atendimento</AccordionTrigger>
                        <AccordionContent className="text-xl my-4">
                            Central de ajuda | Perguntas frequentes
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className="w-[50%]">
                <ContactForm/>
            </div>
        </div>
    )
}